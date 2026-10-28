// glosario.js
// Fuente única del glosario: se usa tanto para los tooltips de "Mazos"
// como para la página independiente "Glosario".
// tooltip:false = no se resalta automáticamente dentro de las notas
// (números y signos astrológicos generan demasiado ruido en el texto).

window.GLOSARIO_DATA = [

  // ---------------- Arcanos Mayores (RWS) ----------------
  { palabra: "El Loco (0)", categoria: "Arcanos Mayores", definicion: "Libertad, nuevos comienzos, espontaneidad, aventura, inocencia y confianza en lo desconocido. Representa el alma libre que emprende el viaje espiritual, la apertura a infinitas posibilidades y el salto de fe hacia nuevas experiencias, sin las limitaciones del miedo o las convenciones." },
  { palabra: "El Mago (I)", categoria: "Arcanos Mayores", definicion: "Voluntad, iniciativa, creatividad, manifestación y dominio de los elementos. Representa el poder personal para transformar las ideas en realidad mediante la acción consciente." },
  { palabra: "La Sacerdotisa (II)", categoria: "Arcanos Mayores", definicion: "Intuición, sabiduría oculta, misterio, silencio y conocimiento interior. Simboliza la conexión con el subconsciente, los secretos y la percepción espiritual." },
  { palabra: "La Emperatriz (III)", categoria: "Arcanos Mayores", definicion: "Fertilidad, abundancia, creatividad, sensualidad y energía maternal. Representa la naturaleza, la prosperidad, el amor y la capacidad de dar vida a nuevos proyectos." },
  { palabra: "El Emperador (IV)", categoria: "Arcanos Mayores", definicion: "Autoridad, estabilidad, estructura, disciplina y protección. Simboliza el orden material, el liderazgo, la responsabilidad y el dominio consciente de las circunstancias." },
  { palabra: "El Papa (V)", categoria: "Arcanos Mayores", definicion: "Tradición, enseñanza espiritual, fe, iniciación y transmisión del conocimiento sagrado. Representa la sabiduría institucional, los valores y la orientación de un maestro." },
  { palabra: "Los Enamorados (VI)", categoria: "Arcanos Mayores", definicion: "Amor, unión, dualidad, elección y armonía entre opuestos. Simboliza las relaciones afectivas, las decisiones importantes y la integración del deseo con los valores personales." },
  { palabra: "El Carro (VII)", categoria: "Arcanos Mayores", definicion: "Victoria, determinación, avance, autocontrol y conquista de obstáculos. Representa la fuerza de voluntad dirigida hacia una meta y el dominio de impulsos contrapuestos." },
  { palabra: "La Fuerza (VIII)", categoria: "Arcanos Mayores", definicion: "Coraje, paciencia, compasión, dominio de los instintos y fortaleza interior. Representa la capacidad de transformar los impulsos mediante la serenidad y el poder del espíritu." },
  { palabra: "El Ermitaño (IX)", categoria: "Arcanos Mayores", definicion: "Introspección, prudencia, soledad consciente, sabiduría y búsqueda espiritual. Representa el retiro necesario para encontrar la propia luz interior y comprender las verdades profundas." },
  { palabra: "La Rueda de la Fortuna (X)", categoria: "Arcanos Mayores", definicion: "Destino, ciclos, cambios inevitables, oportunidades y movimiento de la existencia. Simboliza la naturaleza cambiante de la fortuna y la influencia de fuerzas superiores sobre los acontecimientos." },
  { palabra: "La Justicia (XI)", categoria: "Arcanos Mayores", definicion: "Equilibrio, verdad, responsabilidad, discernimiento y consecuencias de los actos. Simboliza la ley de causa y efecto, la imparcialidad y la búsqueda de armonía mediante decisiones conscientes." },
  { palabra: "El Colgado (XII)", categoria: "Arcanos Mayores", definicion: "Sacrificio voluntario, pausa, entrega, desapego y cambio de perspectiva. Simboliza la suspensión de la acción para alcanzar una comprensión superior y una transformación interior." },
  { palabra: "La Muerte (XIII)", categoria: "Arcanos Mayores", definicion: "Transformación profunda, final de ciclos, renovación, desapego y renacimiento simbólico. Representa la necesidad de abandonar lo antiguo para permitir una nueva etapa de existencia." },
  { palabra: "La Templanza (XIV)", categoria: "Arcanos Mayores", definicion: "Armonía, moderación, sanación, paciencia y alquimia espiritual. Simboliza la integración de energías opuestas, el equilibrio emocional y la transformación gradual de la conciencia." },
  { palabra: "El Diablo (XV)", categoria: "Arcanos Mayores", definicion: "Apego, tentación, deseo material, dependencia, sombras psicológicas y ataduras autoimpuestas. Representa los impulsos inconscientes y la necesidad de reconocer aquello que limita la libertad personal." },
  { palabra: "La Torre (XVI)", categoria: "Arcanos Mayores", definicion: "Ruptura, revelación, crisis, derrumbe de estructuras falsas y liberación repentina. Simboliza la destrucción de creencias limitantes y la transformación provocada por acontecimientos inesperados." },
  { palabra: "La Estrella (XVII)", categoria: "Arcanos Mayores", definicion: "Esperanza, inspiración, fe, renovación espiritual, serenidad y conexión cósmica. Representa la confianza en el futuro, la pureza de intención y la guía interior después de las dificultades." },
  { palabra: "La Luna (XVIII)", categoria: "Arcanos Mayores", definicion: "Sueños, intuición, imaginación, misterio, ilusiones y profundidades del inconsciente. Simboliza los temores ocultos, la percepción subjetiva y el tránsito por territorios emocionales desconocidos." },
  { palabra: "El Sol (XIX)", categoria: "Arcanos Mayores", definicion: "Vitalidad, alegría, claridad, éxito, verdad y realización personal. Representa la iluminación de la conciencia, la confianza, la energía creadora y la expresión auténtica del ser." },
  { palabra: "El Juicio (XX)", categoria: "Arcanos Mayores", definicion: "Despertar espiritual, renacimiento, revelación, perdón y evaluación de la propia existencia. Simboliza la llamada interior hacia una nueva conciencia y la liberación del pasado." },
  { palabra: "El Mundo (XXI)", categoria: "Arcanos Mayores", definicion: "Plenitud, culminación, integración, realización y unidad cósmica. Representa la conclusión exitosa de un ciclo, el equilibrio entre los planos de existencia y la totalidad del ser." },
  
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
  {
    "palabra": "Aries",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♈. Signo de fuego, impulsivo y pionero, asociado al inicio, el impulso y la acción. Se asocia tradicionalmente con El Emperador.",
    "tooltip": false
  },
  {
    "palabra": "Tauro",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♉. Signo de tierra, estable y sensorial, centrado en la materia, la estabilidad y la posesión. Se asocia con El Hierofante.",
    "tooltip": false
  },
  {
    "palabra": "Géminis",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♊. Signo de aire, dual y comunicativo, enfocado en la dualidad, la comunicación y el intercambio. Se asocia con Los Enamorados.",
    "tooltip": false
  },
  {
    "palabra": "Cáncer",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♋. Signo de agua, protector y emocional, orientado a la memoria, el hogar y la protección. Se asocia con El Carro.",
    "tooltip": false
  },
  {
    "palabra": "Leo",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♌. Signo de fuego, vital y expresivo, centrado en la expresión, la voluntad y la vitalidad. Se asocia con La Fuerza.",
    "tooltip": false
  },
  {
    "palabra": "Virgo",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♍. Signo de tierra, analítico y meticuloso, enfocado en el análisis, el detalle y el orden. Se asocia con El Ermitaño.",
    "tooltip": false
  },
  {
    "palabra": "Libra",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♎. Signo de aire, buscador del equilibrio, las relaciones y la justicia. Se asocia con La Justicia.",
    "tooltip": false
  },
  {
    "palabra": "Escorpio",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♏. Signo de agua, intenso y transformador, ligado a la transformación, la profundidad y las crisis. Se asocia con La Muerte.",
    "tooltip": false
  },
  {
    "palabra": "Sagitario",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♐. Signo de fuego, expansivo y filosófico, orientado a la dirección, la expansión y la búsqueda. Se asocia con La Templanza.",
    "tooltip": false
  },
  {
    "palabra": "Capricornio",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♑. Signo de tierra, disciplinado y ambicioso, enfocado en la estructura, la ambición y los límites. Se asocia con El Diablo.",
    "tooltip": false
  },
  {
    "palabra": "Acuario",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♒. Signo de aire, innovador e independiente, enfocado en la visión, la renovación y la colectividad. Se asocia con La Estrella.",
    "tooltip": false
  },
  {
    "palabra": "Piscis",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♓. Signo de agua, intuitivo y soñador, caracterizado por la sensibilidad, la disolución y la imaginación. Se asocia con La Luna.",
    "tooltip": false
  },
  {
    "palabra": "Sol",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ☉. Luminaria del centro, vinculada a la identidad, la vitalidad y la conciencia. Se asocia con El Sol.",
    "tooltip": false
  },
  {
    "palabra": "Luna",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ☽. Luminaria de las emociones, la memoria, la receptividad y los ciclos. Se asocia con La Sacerdotisa.",
    "tooltip": false
  },
  {
    "palabra": "Mercurio",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ☿. Planeta de la mente, la comunicación, el análisis y el intercambio. Se asocia con El Mago.",
    "tooltip": false
  },
  {
    "palabra": "Venus",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♀. Planeta de la belleza, el amor, el placer, la armonía, el deseo y los valores. Se asocia con La Emperatriz.",
    "tooltip": false
  },
  {
    "palabra": "Marte",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♂. Planeta de la acción, la fuerza, el conflicto y la iniciativa. Se asocia con La Torre.",
    "tooltip": false
  },
  {
    "palabra": "Júpiter",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♃. Planeta de la expansión, la confianza, el conocimiento y el crecimiento. Se asocia con La Rueda de la Fortuna.",
    "tooltip": false
  },
  {
    "palabra": "Saturno",
    "categoria": "Astrología",
    "definicion": "Simbolizado por ♄. Planeta de los límites, el tiempo, la responsabilidad y la estructura. Se asocia con El Mundo.",
    "tooltip": false
  },

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
  { palabra: "gato", categoria: "Animales", definicion: "Independencia, misterio, intuición felina." },

  // -------------- Cábala ---------------
  {
    "palabra": "Aleph",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por א. Primera letra del alfabeto hebreo, con valor numérico 1. Representa el aire, el principio y el aliento vital. Se asocia tradicionalmente con El Loco.",
    "tooltip": false
  },
  {
    "palabra": "Bet",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ב. Segunda letra del alfabeto hebreo, con valor numérico 2. Representa la casa, el interior y la capacidad de contener. Se asocia tradicionalmente con El Mago.",
    "tooltip": false
  },
  {
    "palabra": "Gimel",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ג. Tercera letra del alfabeto hebreo, con valor numérico 3. Representa el movimiento y la función de puente o tránsito. Se asocia tradicionalmente con La Sacerdotisa.",
    "tooltip": false
  },
  {
    "palabra": "Dalet",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ד. Cuarta letra del alfabeto hebreo, con valor numérico 4. Representa la puerta, la apertura y el acceso. Se asocia tradicionalmente con La Emperatriz.",
    "tooltip": false
  },
  {
    "palabra": "He",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ה. Quinta letra del alfabeto hebreo, con valor numérico 5. Representa el aliento y la revelación. Se asocia tradicionalmente con El Emperador.",
    "tooltip": false
  },
  {
    "palabra": "Vav",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ו. Sexta letra del alfabeto hebreo, con valor numérico 6. Representa el gancho, el enlace y la unión. Se asocia tradicionalmente con El Hierofante.",
    "tooltip": false
  },
  {
    "palabra": "Zayin",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ז. Séptima letra del alfabeto hebreo, con valor numérico 7. Representa el arma, el corte y el discernimiento. Se asocia tradicionalmente con Los Enamorados.",
    "tooltip": false
  },
  {
    "palabra": "Chet",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ח. Octava letra del alfabeto hebreo, con valor numérico 8. Representa el recinto, la valla y el límite protector. Se asocia tradicionalmente con El Carro.",
    "tooltip": false
  },
  {
    "palabra": "Tet",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ט. Novena letra del alfabeto hebreo, con valor numérico 9. Representa la interioridad, el refugio y la potencia latente. Se asocia tradicionalmente con La Fuerza.",
    "tooltip": false
  },
  {
    "palabra": "Yod",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por י. Décima letra del alfabeto hebreo, con valor numérico 10. Representa la mano, la chispa divina y la semilla. Se asocia tradicionalmente con El Ermitaño.",
    "tooltip": false
  },
  {
    "palabra": "Kaf",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por כ. Letra del alfabeto hebreo con valor numérico 20. Representa la palma de la mano y la capacidad de contener o moldear. Se asocia tradicionalmente con La Rueda de la Fortuna.",
    "tooltip": false
  },
  {
    "palabra": "Lamed",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ל. Letra del alfabeto hebreo con valor numérico 30. Representa el aprendizaje, la enseñanza y el impulso hacia arriba. Se asocia tradicionalmente con La Justicia.",
    "tooltip": false
  },
  {
    "palabra": "Mem",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por מ. Letra del alfabeto hebreo con valor numérico 40. Representa el elemento agua, el origen y la matriz. Se asocia tradicionalmente con El Colgado.",
    "tooltip": false
  },
  {
    "palabra": "Nun",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por נ. Letra del alfabeto hebreo con valor numérico 50. Representa la vida en movimiento, la regeneración y la transformación. Se asocia tradicionalmente con La Muerte.",
    "tooltip": false
  },
  {
    "palabra": "Samekh",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ס. Letra del alfabeto hebreo con valor numérico 60. Representa el soporte, la estructura circular y la protección. Se asocia tradicionalmente con La Templanza.",
    "tooltip": false
  },
  {
    "palabra": "Ayin",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ע. Letra del alfabeto hebreo con valor numérico 70. Representa el ojo, la visión directa y la percepción de las apariencias. Se asocia tradicionalmente con El Diablo.",
    "tooltip": false
  },
  {
    "palabra": "Pe",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por פ. Letra del alfabeto hebreo con valor numérico 80. Representa la boca, el poder de la palabra y la expresión. Se asocia tradicionalmente con La Torre.",
    "tooltip": false
  },
  {
    "palabra": "Tsadi",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por צ. Letra del alfabeto hebreo con valor numérico 90. Representa la justicia, la rectitud y la búsqueda de la verdad. Se asocia tradicionalmente con La Estrella.",
    "tooltip": false
  },
  {
    "palabra": "Qof",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ק. Letra del alfabeto hebreo con valor numérico 100. Representa la nuca o parte posterior de la cabeza, la ilusión y la profundidad. Se asocia tradicionalmente con La Luna.",
    "tooltip": false
  },
  {
    "palabra": "Resh",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ר. Letra del alfabeto hebreo con valor numérico 200. Representa la cabeza, el rostro y la claridad de la conciencia. Se asocia tradicionalmente con El Sol.",
    "tooltip": false
  },
  {
    "palabra": "Shin",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ש. Letra del alfabeto hebreo con valor numérico 300. Representa el elemento fuego, el diente y la transformación purificadora. Se asocia tradicionalmente con El Juicio.",
    "tooltip": false
  },
  {
    "palabra": "Tav",
    "categoria": "Cabalá",
    "definicion": "Simbolizado por ת. Última letra del alfabeto hebreo, con valor numérico 400. Representa la marca, el sello, el signo y la culminación. Se asocia tradicionalmente con El Mundo.",
    "tooltip": false
  },

  // -------------- Ars Goetia (tabla del libreto de Goetia Tarot, F. Listrani) ---------------
  { "palabra": "Bael", "categoria": "Ars Goetia", "definicion": "Demonio nº 1. Carta: Rey de Bastos. Significado: Experiencia Creativa. Naturaleza: Control Flexible. Planeta: Sol. Zodiaco: Aries. Atribución tradicional: Bastos 02.", "tooltip": false },
  { "palabra": "Agares", "categoria": "Ars Goetia", "definicion": "Demonio nº 2. Carta: Paje de Bastos. Significado: Aprendizaje Creativo. Naturaleza: Comunicación Inspirada. Planeta: Venus. Zodiaco: Aries. Atribución tradicional: Bastos 03.", "tooltip": false },
  { "palabra": "Vassago", "categoria": "Ars Goetia", "definicion": "Demonio nº 3. Carta: Bastos 04. Significado: Celebración. Naturaleza: Visión Introvertida. Planeta: Júpiter. Zodiaco: Aries. Atribución tradicional: Bastos 04.", "tooltip": false },
  { "palabra": "Gamigin", "categoria": "Ars Goetia", "definicion": "Demonio nº 4. Carta: Reina de Oros. Significado: Comprensión Práctica. Naturaleza: Sabiduría Dinámica. Planeta: Luna. Zodiaco: Aries. Atribución tradicional: Oros 05.", "tooltip": false },
  { "palabra": "Marbas", "categoria": "Ars Goetia", "definicion": "Demonio nº 5. Carta: V - El Papa. Significado: Guía Espiritual. Naturaleza: Percepción Analítica. Planeta: Mercurio. Zodiaco: Aries. Atribución tradicional: Oros 06.", "tooltip": false },
  { "palabra": "Valefor", "categoria": "Ars Goetia", "definicion": "Demonio nº 6. Carta: El Loco. Significado: Inocencia. Naturaleza: Entusiasmo Creativo. Planeta: Venus. Zodiaco: Aries. Atribución tradicional: Oros 07.", "tooltip": false },
  { "palabra": "Amon", "categoria": "Ars Goetia", "definicion": "Demonio nº 7. Carta: Espadas 08. Significado: Impedimento. Naturaleza: Iniciativa Diplomática. Planeta: Júpiter. Zodiaco: Tauro. Atribución tradicional: Espadas 08.", "tooltip": false },
  { "palabra": "Barbatos", "categoria": "Ars Goetia", "definicion": "Demonio nº 8. Carta: Espadas 09. Significado: Remordimiento y Arrepentimiento. Naturaleza: Comunicación Decidida. Planeta: Venus. Zodiaco: Tauro. Atribución tradicional: Espadas 09.", "tooltip": false },
  { "palabra": "Paimon", "categoria": "Ars Goetia", "definicion": "Demonio nº 9. Carta: Espadas 10. Significado: Final Triste. Naturaleza: Gloria Implacable. Planeta: Sol. Zodiaco: Tauro. Atribución tradicional: Espadas 10.", "tooltip": false },
  { "palabra": "Buer", "categoria": "Ars Goetia", "definicion": "Demonio nº 10. Carta: Rey de Copas. Significado: Experiencia Emotiva. Naturaleza: Conciencia Iluminada. Planeta: Mercurio. Zodiaco: Tauro. Atribución tradicional: Copas 02.", "tooltip": false },
  { "palabra": "Gusion", "categoria": "Ars Goetia", "definicion": "Demonio nº 11. Carta: XIV - La Templanza. Significado: Equilibrio y Curación. Naturaleza: Fluir. Planeta: Venus. Zodiaco: Tauro. Atribución tradicional: Copas 03.", "tooltip": false },
  { "palabra": "Sitri", "categoria": "Ars Goetia", "definicion": "Demonio nº 12. Carta: Reina de Copas. Significado: Comprensión Emotiva. Naturaleza: Ambiciones. Planeta: Júpiter. Zodiaco: Tauro. Atribución tradicional: Copas 04.", "tooltip": false },
  { "palabra": "Beleth", "categoria": "Ars Goetia", "definicion": "Demonio nº 13. Carta: Bastos 05. Significado: Formación y Compromiso. Naturaleza: Guía Autoritaria. Planeta: Sol. Zodiaco: Géminis. Atribución tradicional: Bastos 05.", "tooltip": false },
  { "palabra": "Leraje", "categoria": "Ars Goetia", "definicion": "Demonio nº 14. Carta: Bastos 06. Significado: Novedades y Negociaciones. Naturaleza: Fin Equilibrado. Planeta: Luna. Zodiaco: Géminis. Atribución tradicional: Bastos 06.", "tooltip": false },
  { "palabra": "Eligos", "categoria": "Ars Goetia", "definicion": "Demonio nº 15. Carta: Bastos 07. Significado: Determinación. Naturaleza: Intuición Empática. Planeta: Venus. Zodiaco: Géminis. Atribución tradicional: Bastos 07.", "tooltip": false },
  { "palabra": "Zepar", "categoria": "Ars Goetia", "definicion": "Demonio nº 16. Carta: Caballero de Oros. Significado: Acción Práctica. Naturaleza: Solidez. Planeta: Venus. Zodiaco: Géminis. Atribución tradicional: Oros 08.", "tooltip": false },
  { "palabra": "Botis", "categoria": "Ars Goetia", "definicion": "Demonio nº 17. Carta: Paje de Oros. Significado: Aprendizaje Práctico. Naturaleza: Alianza Energética. Planeta: Marte. Zodiaco: Géminis. Atribución tradicional: Oros 09.", "tooltip": false },
  { "palabra": "Bathin", "categoria": "Ars Goetia", "definicion": "Demonio nº 18. Carta: Oros 10. Significado: Herencia y Continuidad. Naturaleza: Motivación Dinámica. Planeta: Venus. Zodiaco: Géminis. Atribución tradicional: Oros 10.", "tooltip": false },
  { "palabra": "Saleos", "categoria": "Ars Goetia", "definicion": "Demonio nº 19. Carta: Espadas 02. Significado: Tribulación y Elección. Naturaleza: Naturaleza Ambivalente. Planeta: Venus. Zodiaco: Cáncer. Atribución tradicional: Espadas 02.", "tooltip": false },
  { "palabra": "Purson", "categoria": "Ars Goetia", "definicion": "Demonio nº 20. Carta: Espadas 03. Significado: Evento Doloroso. Naturaleza: Resentimiento no Resuelto. Planeta: Sol. Zodiaco: Cáncer. Atribución tradicional: Espadas 03.", "tooltip": false },
  { "palabra": "Marax", "categoria": "Ars Goetia", "definicion": "Demonio nº 21. Carta: Espadas 04. Significado: Reposo y Tranquilidad. Naturaleza: Aislamiento Desconfiado. Planeta: Sol/Mercurio. Zodiaco: Cáncer. Atribución tradicional: Espadas 04.", "tooltip": false },
  { "palabra": "Ipos", "categoria": "Ars Goetia", "definicion": "Demonio nº 22. Carta: XI - La Fuerza. Significado: Energía. Naturaleza: Vigor Ilimitado. Planeta: Marte/Júpiter. Zodiaco: Cáncer. Atribución tradicional: Copas 05.", "tooltip": false },
  { "palabra": "Aim", "categoria": "Ars Goetia", "definicion": "Demonio nº 23. Carta: Copas 06. Significado: Recuerdos. Naturaleza: Equilibrio Inestable. Planeta: Venus. Zodiaco: Cáncer. Atribución tradicional: Copas 06.", "tooltip": false },
  { "palabra": "Naberius", "categoria": "Ars Goetia", "definicion": "Demonio nº 24. Carta: XVIII - La Luna. Significado: Misterios Femeninos. Naturaleza: Facultades Inconscientes. Planeta: Luna. Zodiaco: Cáncer. Atribución tradicional: Copas 07.", "tooltip": false },
  { "palabra": "Glasya Labolas", "categoria": "Ars Goetia", "definicion": "Demonio nº 25. Carta: Bastos 08. Significado: Movimiento Dinámico. Naturaleza: Progreso y Cambio. Planeta: Mercurio. Zodiaco: Leo. Atribución tradicional: Bastos 08.", "tooltip": false },
  { "palabra": "Bune", "categoria": "Ars Goetia", "definicion": "Demonio nº 26. Carta: XX - El Juicio. Significado: Rendición de Cuentas. Naturaleza: Guía de Mediación. Planeta: Venus. Zodiaco: Leo. Atribución tradicional: Bastos 09.", "tooltip": false },
  { "palabra": "Ronove", "categoria": "Ars Goetia", "definicion": "Demonio nº 27. Carta: Bastos 10. Significado: Lastre. Naturaleza: Rabia Justa. Planeta: Luna/Marte. Zodiaco: Leo. Atribución tradicional: Bastos 10.", "tooltip": false },
  { "palabra": "Berith", "categoria": "Ars Goetia", "definicion": "Demonio nº 28. Carta: Oros 02. Significado: Equilibrio. Naturaleza: Relatividad. Planeta: Venus. Zodiaco: Leo. Atribución tradicional: Oros 02.", "tooltip": false },
  { "palabra": "Astaroth", "categoria": "Ars Goetia", "definicion": "Demonio nº 29. Carta: Rey de Oros. Significado: Experiencia Práctica. Naturaleza: Energía Dominante. Planeta: Venus. Zodiaco: Leo. Atribución tradicional: Oros 03.", "tooltip": false },
  { "palabra": "Forneus", "categoria": "Ars Goetia", "definicion": "Demonio nº 30. Carta: Oros 04. Significado: Avidez y Éxtasis. Naturaleza: Organización Lograda. Planeta: Luna. Zodiaco: Leo. Atribución tradicional: Oros 04.", "tooltip": false },
  { "palabra": "Foras", "categoria": "Ars Goetia", "definicion": "Demonio nº 31. Carta: Paje de Espadas. Significado: Aprendizaje Intelectual. Naturaleza: Conocimiento Teórico. Planeta: Mercurio. Zodiaco: Virgo. Atribución tradicional: Espadas 05.", "tooltip": false },
  { "palabra": "Asmoday", "categoria": "Ars Goetia", "definicion": "Demonio nº 32. Carta: Rey de Espadas. Significado: Experiencia Intelectual. Naturaleza: Lógica Tirana. Planeta: Sol. Zodiaco: Virgo. Atribución tradicional: Espadas 06.", "tooltip": false },
  { "palabra": "Gaap", "categoria": "Ars Goetia", "definicion": "Demonio nº 33. Carta: Espadas 07. Significado: Subterfugio. Naturaleza: Influencia Impositiva. Planeta: Luna/Júpiter. Zodiaco: Virgo. Atribución tradicional: Espadas 07.", "tooltip": false },
  { "palabra": "Furfur", "categoria": "Ars Goetia", "definicion": "Demonio nº 34. Carta: Paje de Copas. Significado: Aprendizaje Emotivo. Naturaleza: Picos Emocionales. Planeta: Marte. Zodiaco: Virgo. Atribución tradicional: Copas 08.", "tooltip": false },
  { "palabra": "Marchosias", "categoria": "Ars Goetia", "definicion": "Demonio nº 35. Carta: Copas 09. Significado: Satisfacción. Naturaleza: Gratificación. Planeta: Luna. Zodiaco: Virgo. Atribución tradicional: Copas 09.", "tooltip": false },
  { "palabra": "Stolas", "categoria": "Ars Goetia", "definicion": "Demonio nº 36. Carta: Copas 10. Significado: Armonía y Felicidad. Naturaleza: Indicación Resuelta. Planeta: Júpiter. Zodiaco: Virgo. Atribución tradicional: Copas 10.", "tooltip": false },
  { "palabra": "Phanix", "categoria": "Ars Goetia", "definicion": "Demonio nº 37. Carta: Bastos 02. Significado: Proyecto. Naturaleza: Fuerzas Complementarias. Planeta: Luna. Zodiaco: Libra. Atribución tradicional: Bastos 02.", "tooltip": false },
  { "palabra": "Halphas", "categoria": "Ars Goetia", "definicion": "Demonio nº 38. Carta: Bastos 03. Significado: Observar y Vigilar. Naturaleza: Mejora Personal. Planeta: Marte. Zodiaco: Libra. Atribución tradicional: Bastos 03.", "tooltip": false },
  { "palabra": "Malphas", "categoria": "Ars Goetia", "definicion": "Demonio nº 39. Carta: XVI - La Torre. Significado: Cimientos Sacudidos. Naturaleza: Cimientos. Planeta: Mercurio. Zodiaco: Libra. Atribución tradicional: Bastos 04.", "tooltip": false },
  { "palabra": "Raum", "categoria": "Ars Goetia", "definicion": "Demonio nº 40. Carta: Oros 05. Significado: Privación. Naturaleza: Hundimiento de la Certeza. Planeta: Marte. Zodiaco: Libra. Atribución tradicional: Oros 05.", "tooltip": false },
  { "palabra": "Focalor", "categoria": "Ars Goetia", "definicion": "Demonio nº 41. Carta: Oros 06. Significado: Caridad y Generosidad. Naturaleza: Situaciones Discordantes. Planeta: Venus. Zodiaco: Libra. Atribución tradicional: Oros 06.", "tooltip": false },
  { "palabra": "Vepar", "categoria": "Ars Goetia", "definicion": "Demonio nº 42. Carta: Oros 07. Significado: Esperar y Cuidarse. Naturaleza: Musa Seductora. Planeta: Venus. Zodiaco: Libra. Atribución tradicional: Oros 07.", "tooltip": false },
  { "palabra": "Sabnock", "categoria": "Ars Goetia", "definicion": "Demonio nº 43. Carta: Caballero de Espadas. Significado: Acción Intelectual. Naturaleza: La Calma antes de la Tempestad. Planeta: Luna. Zodiaco: Escorpio. Atribución tradicional: Espadas 08.", "tooltip": false },
  { "palabra": "Shax", "categoria": "Ars Goetia", "definicion": "Demonio nº 44. Carta: Reina de Espadas. Significado: Comprensión Intelectual. Naturaleza: Soledad Digna. Planeta: Luna. Zodiaco: Escorpio. Atribución tradicional: Espadas 09.", "tooltip": false },
  { "palabra": "Vine", "categoria": "Ars Goetia", "definicion": "Demonio nº 45. Carta: XIX - El Sol. Significado: Claridad Masculina. Naturaleza: Tenacidad Inexorable. Planeta: Sol/Marte. Zodiaco: Escorpio. Atribución tradicional: Espadas 10.", "tooltip": false },
  { "palabra": "Bifrons", "categoria": "Ars Goetia", "definicion": "Demonio nº 46. Carta: Copas 02. Significado: Unión. Naturaleza: Atracción de Opuestos. Planeta: Marte. Zodiaco: Escorpio. Atribución tradicional: Copas 02.", "tooltip": false },
  { "palabra": "Vual", "categoria": "Ars Goetia", "definicion": "Demonio nº 47. Carta: Copas 03. Significado: Alegría. Naturaleza: Decisión Meditada. Planeta: Venus. Zodiaco: Escorpio. Atribución tradicional: Copas 03.", "tooltip": false },
  { "palabra": "Haagenti", "categoria": "Ars Goetia", "definicion": "Demonio nº 48. Carta: Copas 04. Significado: Apatía. Naturaleza: Agresividad Estancada. Planeta: Mercurio. Zodiaco: Escorpio. Atribución tradicional: Copas 04.", "tooltip": false },
  { "palabra": "Procel", "categoria": "Ars Goetia", "definicion": "Demonio nº 49. Carta: Reina de Bastos. Significado: Comprensión Creativa. Naturaleza: Aventura Apasionante. Planeta: Venus. Zodiaco: Sagitario. Atribución tradicional: Bastos 05.", "tooltip": false },
  { "palabra": "Furcas", "categoria": "Ars Goetia", "definicion": "Demonio nº 50. Carta: IX - El Ermitaño. Significado: Soledad e Iluminación. Naturaleza: Perfil Bajo. Planeta: Saturno. Zodiaco: Sagitario. Atribución tradicional: Bastos 06.", "tooltip": false },
  { "palabra": "Balam", "categoria": "Ars Goetia", "definicion": "Demonio nº 51. Carta: X - La Rueda. Significado: Designio y Ciclos. Naturaleza: Cambios Cíclicos. Planeta: Sol. Zodiaco: Sagitario. Atribución tradicional: Bastos 07.", "tooltip": false },
  { "palabra": "Alloces", "categoria": "Ars Goetia", "definicion": "Demonio nº 52. Carta: Oros 08. Significado: Artesanía. Naturaleza: Equilibrio Estable. Planeta: Venus. Zodiaco: Sagitario. Atribución tradicional: Oros 08.", "tooltip": false },
  { "palabra": "Caim", "categoria": "Ars Goetia", "definicion": "Demonio nº 53. Carta: Oros 09. Significado: Legado. Naturaleza: Lenguaje Vivaz. Planeta: Mercurio. Zodiaco: Sagitario. Atribución tradicional: Oros 09.", "tooltip": false },
  { "palabra": "Murmur", "categoria": "Ars Goetia", "definicion": "Demonio nº 54. Carta: III - La Emperatriz. Significado: Cuidados Femeninos. Naturaleza: Desarrollo de Renovación. Planeta: Venus/Marte. Zodiaco: Sagitario. Atribución tradicional: Oros 10.", "tooltip": false },
  { "palabra": "Orobas", "categoria": "Ars Goetia", "definicion": "Demonio nº 55. Carta: XXI - El Mundo. Significado: Complemento y Unidad. Naturaleza: Máxima Expansión. Planeta: Júpiter. Zodiaco: Capricornio. Atribución tradicional: Espadas 02.", "tooltip": false },
  { "palabra": "Gemory", "categoria": "Ars Goetia", "definicion": "Demonio nº 56. Carta: XIII - La Muerte. Significado: Trasformación. Naturaleza: Desapego y Renacimiento. Planeta: Venus. Zodiaco: Capricornio. Atribución tradicional: Espadas 03.", "tooltip": false },
  { "palabra": "Ose", "categoria": "Ars Goetia", "definicion": "Demonio nº 57. Carta: XII - El Colgado. Significado: Perspectiva Cambiada. Naturaleza: Habilidades Intelectuales. Planeta: Mercurio. Zodiaco: Capricornio. Atribución tradicional: Espadas 04.", "tooltip": false },
  { "palabra": "Amy", "categoria": "Ars Goetia", "definicion": "Demonio nº 58. Carta: Copas 05. Significado: Pérdida. Naturaleza: Cautela. Planeta: Mercurio. Zodiaco: Capricornio. Atribución tradicional: Copas 05.", "tooltip": false },
  { "palabra": "Orias", "categoria": "Ars Goetia", "definicion": "Demonio nº 59. Carta: Caballero de Copas. Significado: Acción emotiva. Naturaleza: Continuidad. Planeta: Luna. Zodiaco: Capricornio. Atribución tradicional: Copas 06.", "tooltip": false },
  { "palabra": "Vapula", "categoria": "Ars Goetia", "definicion": "Demonio nº 60. Carta: Copas 07. Significado: Espejismo e Ilusiones. Naturaleza: Creatividad Efímera. Planeta: Venus. Zodiaco: Capricornio. Atribución tradicional: Copas 07.", "tooltip": false },
  { "palabra": "Zagan", "categoria": "Ars Goetia", "definicion": "Demonio nº 61. Carta: IV - El Emperador. Significado: Gobierno Masculino. Naturaleza: Fiabilidad Imperturbable. Planeta: Sol/Mercurio. Zodiaco: Acuario. Atribución tradicional: Bastos 08.", "tooltip": false },
  { "palabra": "Valac", "categoria": "Ars Goetia", "definicion": "Demonio nº 62. Carta: Bastos 09. Significado: Protección. Naturaleza: Resultado Arrogante. Planeta: Mercurio. Zodiaco: Acuario. Atribución tradicional: Bastos 09.", "tooltip": false },
  { "palabra": "Andras", "categoria": "Ars Goetia", "definicion": "Demonio nº 63. Carta: Caballero de Bastos. Significado: Acción Creativa. Naturaleza: Proyecto brillante. Planeta: Luna. Zodiaco: Acuario. Atribución tradicional: Bastos 10.", "tooltip": false },
  { "palabra": "Haures", "categoria": "Ars Goetia", "definicion": "Demonio nº 64. Carta: VIII - La Justicia. Significado: Reglas y Consecuencias. Naturaleza: Visión Imparcial. Planeta: Venus. Zodiaco: Acuario. Atribución tradicional: Oros 02.", "tooltip": false },
  { "palabra": "Andrealphus", "categoria": "Ars Goetia", "definicion": "Demonio nº 65. Carta: Oros 03. Significado: Planificación y Ejecución. Naturaleza: Altruismo Calculador. Planeta: Luna. Zodiaco: Acuario. Atribución tradicional: Oros 03.", "tooltip": false },
  { "palabra": "Cimeies", "categoria": "Ars Goetia", "definicion": "Demonio nº 66. Carta: VII - El Carro. Significado: Progreso Decisivo. Naturaleza: Motivación Focalizada. Planeta: Luna. Zodiaco: Acuario. Atribución tradicional: Oros 04.", "tooltip": false },
  { "palabra": "Amduscias", "categoria": "Ars Goetia", "definicion": "Demonio nº 67. Carta: Espadas 05. Significado: Victoria o Derrota. Naturaleza: Ligereza Intuitiva. Planeta: Venus. Zodiaco: Piscis. Atribución tradicional: Espadas 05.", "tooltip": false },
  { "palabra": "Belial", "categoria": "Ars Goetia", "definicion": "Demonio nº 68. Carta: Espadas 06. Significado: Transición. Naturaleza: Asertividad Incierta. Planeta: Sol. Zodiaco: Piscis. Atribución tradicional: Espadas 06.", "tooltip": false },
  { "palabra": "Decarabia", "categoria": "Ars Goetia", "definicion": "Demonio nº 69. Carta: XVII - La Estrella. Significado: Esperanza y Miras de Futuro. Naturaleza: Perspectiva Ampliada. Planeta: Luna. Zodiaco: Piscis. Atribución tradicional: Espadas 07.", "tooltip": false },
  { "palabra": "Seere", "categoria": "Ars Goetia", "definicion": "Demonio nº 70. Carta: Copas 08. Significado: Alejarse. Naturaleza: Dedicación Obstinada. Planeta: Júpiter. Zodiaco: Piscis. Atribución tradicional: Copas 08.", "tooltip": false },
  { "palabra": "Dantalion", "categoria": "Ars Goetia", "definicion": "Demonio nº 71. Carta: II - La Sacerdotisa. Significado: Misterio Espiritual. Naturaleza: Aprendizaje Capaz. Planeta: Venus. Zodiaco: Piscis. Atribución tradicional: Copas 09.", "tooltip": false },
  { "palabra": "Andromalius", "categoria": "Ars Goetia", "definicion": "Demonio nº 72. Carta: I - El Mago. Significado: Voluntad y Acción. Naturaleza: Control del Destino. Planeta: Marte. Zodiaco: Piscis. Atribución tradicional: Copas 10.", "tooltip": false },
  { "palabra": "La Espada", "categoria": "Ars Goetia", "definicion": "Nº 73 de la tabla del Goetia Tarot. Carta: Espadas 01. Significado: Fuente Intelectual. Naturaleza: Mente. Zodiaco: Géminis, Libra, Acuario.", "tooltip": false },
  { "palabra": "El Recipiente", "categoria": "Ars Goetia", "definicion": "Nº 74 de la tabla del Goetia Tarot. Carta: Copas 01. Significado: Fuente Emotiva. Naturaleza: Corazón. Zodiaco: Cáncer, Escorpio, Piscis.", "tooltip": false },
  { "palabra": "El Disco", "categoria": "Ars Goetia", "definicion": "Nº 75 de la tabla del Goetia Tarot. Carta: Oros 01. Significado: Fuente Práctica. Naturaleza: Cuerpo. Zodiaco: Tauro, Virgo, Capricornio.", "tooltip": false },
  { "palabra": "El Bastón", "categoria": "Ars Goetia", "definicion": "Nº 76 de la tabla del Goetia Tarot. Carta: Bastos 01. Significado: Fuente Creativa. Naturaleza: Instinto. Zodiaco: Aries, Leo, Sagitario.", "tooltip": false },
  { "palabra": "Lilith", "categoria": "Ars Goetia", "definicion": "Demonio nº 77. Carta: VI - Los Enamorados. Significado: Elección. Naturaleza: Independencia. Planeta: Luna Negra. Zodiaco: Géminis.", "tooltip": false },
  { "palabra": "Lucifer", "categoria": "Ars Goetia", "definicion": "Demonio nº 78. Carta: XV - El Diablo. Significado: Pasión Desenfrenada. Naturaleza: Rebelión. Planeta: Venus. Zodiaco: Capricornio.", "tooltip": false }
  
];
