// EDITAR ESTO UNA VEZ AL AÑO / SEMANA
const especiales = {
    año: { carta: "VI de copas", nota: "No hay que tomarse todo demasiado en serio." },
    semana: { carta: "La muerte (XIII)", nota: "Ha llegado un fin de ciclo. Hay que cerrar lo que ya no es útil o necesario." }
};

const registros = [
    {
        fecha: "02.06.2026",
        carta: "III de pentáculos",
        nota: "Colaborar con los demás, compartir conocimientos y habilidades para lograr objetivos comunes."
    },
    {
        fecha: "01.06.2026",
        carta: "Sota de copas",
        nota: "Puede que llegue una buena noticia. También habría que conectar más con el niño interior, ser más creativo."
    },
    {
        fecha: "31.05.2026",
        carta: "Rey de copas",
        nota: "El sentimiento de comunidad es más grande, los sentimientos se van masterizando."
    },
    {
        fecha: "30.05.2026",
        carta: "VIII de espadas",
        nota: "Mis pensamientos podrían ser a veces los obstáculos que no me permiten obtener lo que quiero."
    },
    {
        fecha: "29.05.2026",
        carta: "II de bastos",
        nota: "Observemos las opciones y experiencias que se presenten. Puede que esté indeciso en algo o que tenga que tomar alguna decisión."
    },
    {
        fecha: "28.05.2026",
        carta: "X de bastos",
        nota: "No hay que cargarse con demasiadas responsabilidades, ni por muy pequeñas que sean. Hay que aprender a delegar y a pedir ayuda."
    },
    {
        fecha: "27.05.2026",
        carta: "La sacerdotisa (II)",
        nota: "Es hora de escuchar la voz interior, la intuición. No es momento de actuar, sino de observar y esperar a que las cosas se revelen por sí mismas."
    },
    {
        fecha: "26.05.2026",
        carta: "VIII de bastos",
        nota: "Usar la intuición, podrían venir cambios inesperados. Todo puede cambiar de un momento a otro."
    },
    {
        fecha: "25.05.2026",
        carta: "V de copas",
        nota: "Si me llega una decepción o frustración, lo mejor es superarla y seguir adelante."
    },
    {
        fecha: "24.05.2026",
        carta: "Rey de copas",
        nota: "Dominar los sentimientos, apelar a ellos aunque la situación no esté por la labor."
    },
    {
        fecha: "23.05.2026",
        carta: "El emperador (IV)",
        nota: "Toca hacer de padre. Establecer límites y normas, probablemente a los familiares."
    },
    {
        fecha: "22.05.2026",
        carta: "Reina de espadas",
        nota: "Tengo que estar más perceptivo. Mantener la mente clara y ser agudo, sobre todo para las cuestiones prácticas del día a día."
    },
    {
        fecha: "21.05.2026",
        carta: "V de copas",
        nota: "Aunque llegue una decepción o frustración, lo mejor es superarla y seguir adelante."
    },
    {
        fecha: "20.05.2026",
        carta: "El carro (VII)",
        nota: "Quizás tenga que tomar las riendas de alguna situación. Puede que surja alguna oportunidad de algo y deba aprovecharla o bien encuentre la necesidad de dirigirme hacia algo nuevo."
    },
    {
        fecha: "19.05.2026",
        carta: "El loco (0)",
        nota: "Vamos a la aventura. Alegría y entusiasmo para afrontar lo que venga."
    },
    {
        fecha: "18.05.2026",
        carta: "IV de copas",
        nota: "Parece que algo no va bien. Es hora de un poco de introspección para ver qué ocurre. Puede ser también cansancio, desánimo o insatisfacción"
    },
    {
        fecha: "17.05.2026",
        carta: "El Juicio (XX)",
        nota: "Toca reflexionar internamente. Se acaba un ciclo, así que hay que evaluar qué cambio para el siguiente."
    },
    {
        fecha: "16.05.2026",
        carta: "V de copas",
        nota: "Puede que llegue una decepción o algún momento triste; algún sentimiento de que falte alguien o algo."
    },
    {
        fecha: "15.05.2026",
        carta: "X de bastos",
        nota: "Cuidado con la sobrecarga de responsabilidades. No hay que cargar con más de lo que puedo manejar."
    },
    {
        fecha: "14.05.2026",
        carta: "IV de pentáculos",
        nota: "Cuidado con el apego a lo material, a las cosas, a las personas.. Hay que aprender a soltar y a no aferrarse a nada."
    },
    {
        fecha: "13.05.2026",
        carta: "Los enamorados (VI)",
        nota: "Decisiones importantes. Es importante seguir el corazón, pero también tener en cuenta la razón."
    },
    {
        fecha: "12.05.2026",
        carta: "IX de pentáculos",
        nota: "Algo está a punto de dar su fruto, ha valido la pena."
    },
    {
        fecha: "11.05.2026",
        carta: "La Luna (XVIII)",
        nota: "Habrá que seguir la intuición en el camino desconocido. Quizás me estén ocurriendo cosas de las que no soy consciente."
    },
    {
        fecha: "10.05.2026",
        carta: "VIII de bastos",
        nota: "Fluir con los acontecimientos inesperados. Usar la intuición en esos momentos de decisión rápida. Puede que haya una invitación inesperada. Todo puede cambiar de golpe."
    },
    {
        fecha: "09.05.2026",
        carta: "IX de pentáculos",
        nota: "En camino del éxito. Recompensa por un trabajo duro."
    },
    {
        fecha: "08.05.2026",
        carta: "El Mago (I)",
        nota: "Tengo las habilidades para superar los problemas. También podría ser algún engañillo a otra persona o a mí mismo."
    },
    {
        fecha: "07.05.2026",
        carta: "El Diablo (XV)",
        nota: "Cuidado con engancharse, todo con su medida, sin excesos."
    },
    {
        fecha: "06.05.2026",
        carta: "II de bastos",
        nota: "Sentirse dividido entre dos opciones o bien observar las experiencias que están por llegar."
    },
    {
        fecha: "05.05.2026",
        carta: "VI de pentáculos",
        nota: "Armonía y bienestar. Interacciones fluídas con el entorno. Se verán resultados pequeños de las cosas que he estado cuidando. Sensación de equilibrio."
    },
    {
        fecha: "04.05.2026",
        carta: "II de espadas",
        nota: "Espero que no sea conflicto con alguien, seguramente conmigo mismo. Podría ser encontrar el balance adecuado o una elección difícil. También se refiere a sentirse atascado."
    },
    {
        fecha: "03.05.2026",
        carta: "VI de espadas",
        nota: "Realizar la transición que tanto cuesta. Hay que soltar cosas, demasiada carga. Avancemos."
    },
    {
        fecha: "02.05.2026",
        carta: "II de espadas",
        nota: "Equilibrio o conflicto interno o con alguien. Quizás encontrar paz. ¿Indecisión?"
    },
    {
        fecha: "01.05.2026",
        carta: "El emperador (IV)",
        nota: "Liderazgo, control y logros. Buen momento para iniciar proyectos y puede surgir alguna oportunidad."
    },
    {
        fecha: "30.04.2026",
        carta: "El carro (VII)",
        nota: "Hay que tomar las riendas, tomar decisiones y tomar oportunidades que se presenten."
    },
    {
        fecha: "29.04.2026",
        carta: "El loco (0)",
        nota: "Nuevo comienzo con energía y alegría. No pensar demasiado las cosas y tirar palante."
    },
    {
        fecha: "28.04.2026",
        carta: "Reina de copas",
        nota: "Momento de tranquilidad, comprensión, protección, compasión, amor.."
    },
    {
        fecha: "27.04.2026",
        carta: "Reina de pentáculos",
        nota: "Mensaje de recompensa y estabilidad. Sentido común al tomar decisiones."
    },
    {
        fecha: "26.04.2026",
        carta: "VIII de espadas",
        nota: "Se vienen obstáculos, dificultades.. força. En algún momento se pasará."
    },
    {
        fecha: "25.04.2026",
        carta: "Caballero de pentáculos",
        nota: "No involucrarse tan emocionalmente en los asuntos. Perseverancia, esfuerzo y compromiso para conseguir los logros."
    },
    {
        fecha: "24.04.2026",
        carta: "Sota de espadas",
        nota: "Si me enfrento a una situación inesperada, mejor no actuar precipitadamente y pensar bien antes de actuar. También indica curiosidad, inquietud 🤔"
    },
    {
        fecha: "23.04.2026",
        carta: "III de copas",
        nota: "Buenos momentos y celebración. Puede que sea un buen momento para la resolución de algún problema."
    },
    {
        fecha: "22.04.2026",
        carta: "El Diablo (XV)",
        nota: "Excesos, vicios y ataduras terrenales. Hay que disfrutar de vez en cuando pero sin que te domine."
    },
    {
        fecha: "21.04.2026",
        carta: "As de espadas",
        nota: "Claridad mental. Cuidado de no herir a los demás con demasiada sinceridad ante la falta de emoción."
    },
    {
        fecha: "20.04.2026",
        carta: "El colgado (XII)",
        nota: "A veces es necesario ver algunas cosas desde otro punto de vista. esperemos que no sea un sacrificio."
    },
    {
        fecha: "19.04.2026",
        carta: "Sota de bastos",
        nota: "Necesidad del combustible necesario para seguir"
    },
    {
        fecha: "18.04.2026",
        carta: "Reina de bastos",
        nota: "Coraje y fuerza para continuar con lo que estamos"
    },
    {
        fecha: "17.04.2026",
        carta: "El juicio (XX)",
        nota: "Es hora de reflexionar sobre el estado de mi vida personal para crecer"
    },
    {
        fecha: "16.04.2026",
        carta: "XII de copas",
        nota: "No debo fiarme y confiarme en las ilusiones (espejismos), expectativas o ideas preconcebidas"
    },
    {
        fecha: "15.04.2026",
        carta: "El emperador (IV)",
        nota: "Florece mi lado paternal"
    },
    {
        fecha: "14.04.2026",
        carta: "X de espadas",
        nota: "Final, dolor, disgusto. Tranquilo, todo pasa. Hay que ver el nuevo camino que nos muestra el final de este."
    },
    {
        fecha: "13.04.2026",
        carta: "VI de espadas",
        nota: "Dejar atrás, seguir avanzando, transición. Quizás se acerca una transición inminentemente."
    },
    {
        fecha: "12.04.2026",
        carta: "VI de espadas",
        nota: "Dejar atrás y seguir avanzando. A veces, para poder avanzar mejor hay que dejar cosas en el pasado."
    },
    {
        fecha: "11.04.2026",
        carta: "VII de bastos",
        nota: "Defensa de mis convicciones. Mantengo mi posición con integridad frente a los desafíos externos."
    },
    {
        fecha: "10.04.2026",
        carta: "VII de espadas",
        nota: "Estrategia y discreción. Es momento de ser prudente y observar qué información comparto."
    },
    {
        fecha: "09.04.2026",
        carta: "VII de pentáculos",
        nota: "Paciencia y evaluación. Confío en que mis esfuerzos darán fruto a su debido tiempo."
    },
    {
        fecha: "08.04.2026",
        carta: "VII de copas",
        nota: "Clarificación de deseos. Diferencio entre las fantasías pasajeras y lo que realmente nutre mi alma."
    },
    {
        fecha: "07.04.2026",
        carta: "V de espadas",
        nota: "Gestión de conflictos. Elijo mis batallas con sabiduría; no todas las victorias valen el desgaste."
    },
    {
        fecha: "06.04.2026",
        carta: "Rey de pentáculos",
        nota: "Seguridad y estabilidad. Tengo la capacidad de gestionar mis recursos para crear un entorno sólido."
    },
    {
        fecha: "05.04.2026",
        carta: "Sota de pentáculos",
        nota: "Nuevos aprendizajes. Me abro a recibir mensajes sobre nuevas oportunidades prácticas o materiales."
    },
    {
        fecha: "04.04.2026",
        carta: "VIII de pentáculos",
        nota: "Dedicación y maestría. Me enfoco en los detalles y en el placer de perfeccionar mi trabajo diario."
    }
];
