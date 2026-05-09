// EDITAR ESTO UNA VEZ AL AÑO / SEMANA
const especiales = {
    año: { carta: "VI de copas", nota: "No hay que tomarse todo demasiado en serio." },
    semana: { carta: "La muerte (XIII)", nota: "Nuevos comienzos, transformación." }
};

const registros = [
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
