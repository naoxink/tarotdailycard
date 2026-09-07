// glosario.js
// Fuente única del glosario: se usa tanto para los tooltips de "Mazos"
// como para la página independiente "Glosario".
// tooltip:false = no se resalta automáticamente dentro de las notas
// (números y signos astrológicos generan demasiado ruido en el texto).

window.GLOSARIO_DATA = [

  // ---------------- Elementos ----------------
  { palabra: "agua", categoria: "Elementos", definicion: "Emociones, intuición, vínculos afectivos, el reino del subconsciente. Asociado al palo de Copas." },
  { palabra: "fuego", categoria: "Elementos", definicion: "Voluntad, acción, pasión, chispa vital. Asociado al palo de Bastos." },
  { palabra: "tierra", categoria: "Elementos", definicion: "Mundo material, cuerpo físico, recursos, estabilidad. Asociado al palo de Oros/Pentáculos." },
  { palabra: "aire", categoria: "Elementos", definicion: "Intelecto, mente, comunicación, conflicto. Asociado al palo de Espadas." },

  // ---------------- Numerología ----------------
  { palabra: "0", categoria: "Numerología", definicion: "El vacío fértil, el potencial puro antes de manifestarse. Número de El Loco.", tooltip: false },
  { palabra: "1", categoria: "Numerología", definicion: "Inicio, voluntad, unidad; la semilla de todo lo que vendrá. Número de El Mago y de los Ases.", tooltip: false },
  { palabra: "2", categoria: "Numerología", definicion: "Dualidad, elección, equilibrio entre dos fuerzas opuestas.", tooltip: false },
  { palabra: "3", categoria: "Numerología", definicion: "Creación y manifestación: la síntesis que nace de la unión de dos fuerzas." },
  { palabra: "4", categoria: "Numerología", definicion: "Estructura, orden, estabilidad; los cimientos sobre los que se construye.", tooltip: false },
  { palabra: "5", categoria: "Numerología", definicion: "Cambio, tensión, aprendizaje a través del conflicto o la crisis.", tooltip: false },
  { palabra: "6", categoria: "Numerología", definicion: "Armonía, decisión, el punto de encuentro entre opuestos.", tooltip: false },
  { palabra: "7", categoria: "Numerología", definicion: "Introspección, misterio, evaluación interna antes de seguir avanzando.", tooltip: false },
  { palabra: "8", categoria: "Numerología", definicion: "Poder y movimiento; la fuerza en acción o el equilibrio que exige justicia.", tooltip: false },
  { palabra: "9", categoria: "Numerología", definicion: "Culminación de un aprendizaje, sabiduría, a veces soledad antes del cierre.", tooltip: false },
  { palabra: "10", categoria: "Numerología", definicion: "El final de un ciclo completo, que da paso a un nuevo comienzo.", tooltip: false },

  // ---------------- Astrología ----------------
  { palabra: "Aries", categoria: "Astrología", definicion: "Signo de fuego, impulsivo y pionero. Se asocia tradicionalmente con El Emperador.", tooltip: false },
  { palabra: "Tauro", categoria: "Astrología", definicion: "Signo de tierra, estable y sensorial. Se asocia con El Hierofante.", tooltip: false },
  { palabra: "Géminis", categoria: "Astrología", definicion: "Signo de aire, dual y comunicativo. Se asocia con Los Enamorados.", tooltip: false },
  { palabra: "Cáncer", categoria: "Astrología", definicion: "Signo de agua, protector y emocional. Se asocia con El Carro.", tooltip: false },
  { palabra: "Leo", categoria: "Astrología", definicion: "Signo de fuego, vital y expresivo. Se asocia con La Fuerza.", tooltip: false },
  { palabra: "Virgo", categoria: "Astrología", definicion: "Signo de tierra, analítico y meticuloso. Se asocia con El Ermitaño.", tooltip: false },
  { palabra: "Libra", categoria: "Astrología", definicion: "Signo de aire, buscador del equilibrio. Se asocia con La Justicia.", tooltip: false },
  { palabra: "Escorpio", categoria: "Astrología", definicion: "Signo de agua, intenso y transformador. Se asocia con La Muerte.", tooltip: false },
  { palabra: "Sagitario", categoria: "Astrología", definicion: "Signo de fuego, expansivo y filosófico. Se asocia con La Templanza.", tooltip: false },
  { palabra: "Capricornio", categoria: "Astrología", definicion: "Signo de tierra, disciplinado y ambicioso. Se asocia con El Diablo.", tooltip: false },
  { palabra: "Acuario", categoria: "Astrología", definicion: "Signo de aire, innovador e independiente. Se asocia con La Estrella.", tooltip: false },
  { palabra: "Piscis", categoria: "Astrología", definicion: "Signo de agua, intuitivo y soñador. Se asocia con La Luna.", tooltip: false },
  { palabra: "Venus", categoria: "Astrología", definicion: "Planeta de la belleza, el amor y el placer. Se asocia con La Emperatriz.", tooltip: false },
  { palabra: "Marte", categoria: "Astrología", definicion: "Planeta de la acción, la fuerza y el conflicto. Se asocia con La Torre.", tooltip: false },
  { palabra: "Júpiter", categoria: "Astrología", definicion: "Planeta de la expansión y la fortuna. Se asocia con La Rueda de la Fortuna.", tooltip: false },
  { palabra: "Saturno", categoria: "Astrología", definicion: "Planeta de los límites, la disciplina y la estructura. Se asocia con El Mundo.", tooltip: false },

  // ---------------- Símbolos ----------------
  { palabra: "infinito", categoria: "Símbolos", definicion: "Lemniscata: equilibrio perfecto, dominio espiritual sobre la materia." },
  { palabra: "corona", categoria: "Símbolos", definicion: "Autoridad, dominio mental, conexión con la mente superior (Kether)." },
  { palabra: "montaña", categoria: "Símbolos", definicion: "Desafíos, conocimiento abstracto, la morada de la divinidad." },
  { palabra: "nube", categoria: "Símbolos", definicion: "Intervención divina, pensamientos que ocultan la verdad, lo efímero." },
  { palabra: "torre", categoria: "Símbolos", definicion: "Estructuras falsas del ego, revelación brusca, liberación forzada." },
  { palabra: "sol", categoria: "Símbolos", definicion: "Claridad absoluta, éxito, energía masculina, consciencia." },
  { palabra: "luna", categoria: "Símbolos", definicion: "Misterio, miedos, ciclos, energía femenina, ilusión." },
  { palabra: "estrella", categoria: "Símbolos", definicion: "Esperanza, guía cósmica, inspiración, sanación tras la tormenta." },
  { palabra: "río", categoria: "Símbolos", definicion: "El flujo de la vida, transición, el cauce del subconsciente." },
  { palabra: "castillo", categoria: "Símbolos", definicion: "Civilización, metas alcanzadas, a veces aislamiento o defensas." },
  { palabra: "mercurio", categoria: "Símbolos", definicion: "Comunicación, intelecto, movilidad, cambio, agilidad mental." },
  { palabra: "columnas", categoria: "Símbolos", definicion: "Límites entre lo conocido y lo oculto, guardianas del umbral hacia el misterio." },
  { palabra: "balanza", categoria: "Símbolos", definicion: "Equilibrio, justicia, la necesidad de sopesar antes de actuar." },
  { palabra: "puente", categoria: "Símbolos", definicion: "Transición entre dos estados o etapas, un paso consciente hacia lo nuevo." },
  { palabra: "escalera", categoria: "Símbolos", definicion: "Ascenso, progreso gradual, conexión entre lo material y lo espiritual." },
  { palabra: "llave", categoria: "Símbolos", definicion: "Acceso a un conocimiento oculto o a una solución que esperaba ser descubierta." },
  { palabra: "espejo", categoria: "Símbolos", definicion: "Autoconocimiento, reflejo de la propia verdad, a veces ilusión." },
  { palabra: "llama", categoria: "Símbolos", definicion: "Transformación, pasión, la chispa vital que impulsa el cambio." },
  { palabra: "ojo", categoria: "Símbolos", definicion: "Consciencia, vigilancia, la mirada que todo lo ve." },
  { palabra: "alas", categoria: "Símbolos", definicion: "Libertad, elevación espiritual, mensajes que trascienden lo terrenal." },
  { palabra: "cadenas", categoria: "Símbolos", definicion: "Ataduras, limitaciones autoimpuestas o ajenas; aquello que nos mantiene presos." },
  { palabra: "velo", categoria: "Símbolos", definicion: "Lo oculto, el misterio que separa lo consciente de lo desconocido." },
  { palabra: "laurel", categoria: "Símbolos", definicion: "Victoria, reconocimiento, éxito alcanzado tras el esfuerzo." },
  { palabra: "espiral", categoria: "Símbolos", definicion: "Ciclos que se repiten evolucionando; crecimiento no lineal." },
  { palabra: "cetro", categoria: "Símbolos", definicion: "Autoridad, poder legítimo, la capacidad de imponer orden." },
  { palabra: "granada", categoria: "Símbolos", definicion: "Conocimiento, fertilidad, lo prohibido que se desea alcanzar." },
  { palabra: "rueda", categoria: "Símbolos", definicion: "El cambio constante, los ciclos de la fortuna, lo que sube y lo que baja." },
  { palabra: "barranco", categoria: "Símbolos", definicion: "El riesgo asumido con inocencia, el peligro que no detiene el avance." },

  // ---------------- Colores ----------------
  { palabra: "blanco", categoria: "Colores", definicion: "Pureza, inocencia, limpieza espiritual, la luz antes de refractarse." },
  { palabra: "negro", categoria: "Colores", definicion: "Misterio, el vacío fértil, el final de un ciclo, lo oculto." },
  { palabra: "amarillo", categoria: "Colores", definicion: "Consciencia, luz solar, intelecto activo, divinidad." },
  { palabra: "rojo", categoria: "Colores", definicion: "Pasión, acción, sangre, vitalidad, el mundo terrenal." },
  { palabra: "azul", categoria: "Colores", definicion: "Subconsciente, fluidez, espiritualidad, reflexión." },
  { palabra: "gris", categoria: "Colores", definicion: "Sabiduría, neutralidad, tristeza o apatía." },
  { palabra: "verde", categoria: "Colores", definicion: "Crecimiento, naturaleza, abundancia; a veces envidia o inmadurez." },
  { palabra: "morado", categoria: "Colores", definicion: "Espiritualidad, misterio, transformación, realeza." },
  { palabra: "naranja", categoria: "Colores", definicion: "Entusiasmo, energía social, creatividad cálida." },
  { palabra: "dorado", categoria: "Colores", definicion: "Divinidad, éxito, iluminación, lo valioso y trascendente." },

  // ---------------- Animales ----------------
  { palabra: "león", categoria: "Animales", definicion: "Fuego, impulsos, fuerza vital salvaje, coraje." },
  { palabra: "perro", categoria: "Animales", definicion: "Instinto domesticado, lealtad, la mente consciente protectora." },
  { palabra: "lobo", categoria: "Animales", definicion: "Instinto salvaje, miedos primitivos, lo indómito." },
  { palabra: "caballo", categoria: "Animales", definicion: "Vehículo de la voluntad, energía de avance, instinto dirigido." },
  { palabra: "pájaro", categoria: "Animales", definicion: "Pensamientos, mensajes del espíritu, libertad mental." },
  { palabra: "serpiente", categoria: "Animales", definicion: "Transformación, tentación, sabiduría oculta; la energía que se renueva mudando de piel." },
  { palabra: "águila", categoria: "Animales", definicion: "Visión elevada, perspectiva amplia, poder que observa desde las alturas." },
  { palabra: "toro", categoria: "Animales", definicion: "Fuerza física, tozudez, estabilidad terrenal." },
  { palabra: "buey", categoria: "Animales", definicion: "Trabajo paciente, sacrificio, esfuerzo sostenido." },
  { palabra: "ángel", categoria: "Animales", definicion: "Guía espiritual, protección superior, mensaje divino." },
  { palabra: "mariposa", categoria: "Animales", definicion: "Transformación delicada, renacimiento tras un proceso interno." },
  { palabra: "abeja", categoria: "Animales", definicion: "Trabajo comunitario, dulzura ganada con esfuerzo colectivo." },
  { palabra: "gato", categoria: "Animales", definicion: "Independencia, misterio, intuición felina." }
];