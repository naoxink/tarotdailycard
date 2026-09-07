// scripts/generar-pregunta.js
//
// Genera una pregunta genérica de práctica usando la API de Gemini y la añade
// a tiradas.json como una tirada "pendiente" (sin cartas ni interpretación,
// para que el propio usuario las complete practicando manualmente).
//
// Se ejecuta a diario desde la GitHub Action, pero solo añade una pregunta
// nueva si han pasado al menos DIAS_ENTRE_PREGUNTAS desde la última "pendiente".

const fs = require('fs');
const path = require('path');

const TIRADAS_PATH = path.join(__dirname, '..', 'tiradas.json');
const DIAS_ENTRE_PREGUNTAS = 3;

// Los nombres de modelo de Gemini cambian con frecuencia (Google los va
// descatalogando cada pocos meses). Para no depender de uno solo:
// 1) si defines la variable de entorno GEMINI_MODEL, se prueba primero;
// 2) si no, se prueba el alias oficial "gemini-flash-latest" (apunta siempre
//    al flash más reciente, aunque a veces es inestable justo tras un cambio);
// 3) si falla, se cae a un par de modelos estables conocidos como respaldo.
const MODELOS_CANDIDATOS = [
  process.env.GEMINI_MODEL,
  'gemini-flash-latest',
  'gemini-3.6-flash',
  'gemini-2.5-flash'
].filter(Boolean);

async function llamarGemini(modelo, apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`;
  const respuesta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 1, maxOutputTokens: 120 }
    })
  });

  if (!respuesta.ok) {
    const detalle = await respuesta.text();
    const error = new Error(`Error de la API de Gemini con "${modelo}" (${respuesta.status}): ${detalle}`);
    error.status = respuesta.status;
    throw error;
  }

  const datos = await respuesta.json();
  const texto = datos.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!texto) {
    throw new Error(`La API de Gemini ("${modelo}") no devolvió texto en la respuesta.`);
  }
  return texto.replace(/^["'“”]+|["'“”]+$/g, '');
}

async function generarPregunta() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Falta la variable de entorno GEMINI_API_KEY.');
  }

  const prompt = `Genera UNA sola pregunta genérica de práctica para una tirada de tarot de aprendizaje.
Requisitos:
- Debe ser una pregunta de reflexión personal en primera persona ("yo"), de tipo introspectivo.
- NO debe inventar nombres, personas concretas ni situaciones hiperespecíficas; debe servir para practicar la lectura, no para adivinar sobre la vida real de nadie.
- Temas válidos (elige uno al azar): trabajo, relaciones en general, crecimiento personal, toma de decisiones, hábitos, emociones, creatividad, descanso.
- Longitud: una sola frase, natural, como si fuera una pregunta real que alguien haría antes de tirar las cartas.
Devuelve SOLO el texto de la pregunta en español, sin comillas, sin explicaciones ni numeración.`;

  let ultimoError;
  for (const modelo of MODELOS_CANDIDATOS) {
    try {
      return await llamarGemini(modelo, apiKey, prompt);
    } catch (err) {
      console.warn(`Fallo con el modelo "${modelo}": ${err.message}`);
      ultimoError = err;
    }
  }
  throw new Error(`Ningún modelo candidato funcionó. Último error: ${ultimoError?.message}`);
}

function generarId(fechaISO, tiradas) {
  const clave = fechaISO.replaceAll('-', '');
  const usados = tiradas.filter(t => t.id && t.id.startsWith(`t-${clave}-`)).length;
  return `t-${clave}-${String(usados + 1).padStart(2, '0')}`;
}

function diasDesde(fechaISO) {
  const ms = Date.now() - new Date(fechaISO).getTime();
  return ms / (1000 * 60 * 60 * 24);
}

async function main() {
  const tiradas = JSON.parse(fs.readFileSync(TIRADAS_PATH, 'utf8'));

  const pendientes = tiradas.filter(t => t.pendiente);
  const ultimaPendiente = pendientes.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];

  if (ultimaPendiente && diasDesde(ultimaPendiente.fecha) < DIAS_ENTRE_PREGUNTAS) {
    console.log(`Última pregunta de práctica generada hace menos de ${DIAS_ENTRE_PREGUNTAS} días. No toca aún.`);
    return;
  }

  const pregunta = await generarPregunta();
  const hoyISO = new Date().toISOString().slice(0, 10);

  const nuevaTirada = {
    id: generarId(hoyISO, tiradas),
    fecha: hoyISO,
    pregunta,
    cartas: [],
    interpretacion: '',
    pendiente: true
  };

  tiradas.push(nuevaTirada);
  fs.writeFileSync(TIRADAS_PATH, JSON.stringify(tiradas, null, 2) + '\n');
  console.log('Pregunta de práctica añadida:', pregunta);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});