const container = document.getElementById('lista');

// Renderizar Especiales
const destacados = document.getElementById('destacados');
destacados.innerHTML = `
    <div class="special-card"><span class="label">Año 2026</span><span class="special-name">${especiales.año.carta}</span><span class="note">${especiales.año.nota}</span></div>
    <div class="special-card"><span class="label">Semana Actual</span><span class="special-name">${especiales.semana.carta}</span><span class="note">${especiales.semana.nota}</span></div>
`;

const estadisticas = document.getElementById('estadisticas');
const fechas = registros
    .map(r => r.fecha.split('.').reverse().join('-'))
    .sort();

const contadorCartas = registros.reduce((acc, item) => {
    acc[item.carta] = (acc[item.carta] || 0) + 1;
    return acc;
}, {});

const cartasDistintas = Object.keys(contadorCartas).length;
const maxRepeticiones = registros.length ? Math.max(...Object.values(contadorCartas)) : 0;
const cartasFrecuentes = registros.length
    ? Object.entries(contadorCartas)
        .filter(([, count]) => count === maxRepeticiones)
        .map(([carta]) => carta)
    : ['N/A'];

const getSuit = carta => {
    const lower = carta.toLowerCase();
    if (lower.includes('espadas')) return 'Espadas';
    if (lower.includes('bastos')) return 'Bastos';
    if (lower.includes('copas')) return 'Copas';
    if (lower.includes('pentáculos') || lower.includes('pentaculos')) return 'Pentáculos';
    return 'Arcanos mayores';
};

const renderSuitChart = (suitCounts) => {
    const total = Object.values(suitCounts).reduce((sum, count) => sum + count, 0);
    if (total === 0) return '<div class="chart-container">No hay datos para este mes.</div>';

    const suits = ['Espadas', 'Bastos', 'Copas', 'Pentáculos', 'Arcanos mayores'];
    let chartHTML = '<div class="chart-container"><div class="chart-title">Distribución de palos este mes</div>';
    suits.forEach(suit => {
        const count = suitCounts[suit] || 0;
        const percent = total > 0 ? Math.round((count / total) * 100) : 0;
        const barWidth = percent === 0 ? '1px' : `${percent}%`;
        const barColor = percent === 0 ? 'var(--border-chart)' : 'var(--purple)';
        chartHTML += `
            <div class="chart-bar">
                <span class="chart-label">${suit}</span>
                <div class="chart-bar-fill" style="width: ${barWidth}; background: ${barColor}"></div>
                <span class="chart-percent">${percent}%</span>
            </div>
        `;
    });
    chartHTML += '</div>';
    return chartHTML;
};

const suitCount = registros.reduce((acc, item) => {
    const suit = getSuit(item.carta);
    acc[suit] = (acc[suit] || 0) + 1;
    return acc;
}, {});

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const registrosMesActual = registros.filter(item => {
    const [day, month, year] = item.fecha.split('.').map(Number);
    return year === currentYear && month === currentMonth;
});

const suitCountMonth = registrosMesActual.reduce((acc, item) => {
    const suit = getSuit(item.carta);
    acc[suit] = (acc[suit] || 0) + 1;
    return acc;
}, {});

const getMostRepeated = counts => {
    const entries = Object.entries(counts);
    if (!entries.length) return 'N/A';
    const maxCount = Math.max(...entries.map(([, count]) => count));
    return entries
        .filter(([, count]) => count === maxCount)
        .map(([suit]) => suit)
        .join(', ') + ` (${maxCount})`;
};

const frequentSuit = getMostRepeated(suitCount);

estadisticas.innerHTML = `
    <div class="stats-card"><span class="label">Entradas</span><span class="stats-value">${registros.length}</span></div>
    <div class="stats-card"><span class="label">Cartas distintas</span><span class="stats-value">${cartasDistintas}</span></div>
    <div class="stats-card"><span class="label">Carta más repetida</span><span class="stats-value">${cartasFrecuentes.join(', ')} (${maxRepeticiones})</span></div>
    <div class="stats-card"><span class="label">Palo más repetido</span><span class="stats-value">${frequentSuit}</span></div>
    ${renderSuitChart(suitCountMonth)}
`;

const today = new Date();
const todayString = String(today.getDate()).padStart(2, '0') + '.' + String(today.getMonth() + 1).padStart(2, '0') + '.' + today.getFullYear();

// 1. Averiguamos la carta de hoy
const registroHoy = registros.find(r => r.fecha === todayString);
const cartaDeHoy = registroHoy ? registroHoy.carta.trim() : null;

let seccionMes = null;
let cuerpoMes = null;
let esPrimerMes = true;

const nombresMeses = {
    "01": "Enero", "02": "Febrero", "03": "Marzo", "04": "Abril",
    "05": "Mayo", "06": "Junio", "07": "Julio", "08": "Agosto",
    "09": "Septiembre", "10": "Octubre", "11": "Noviembre", "12": "Diciembre"
};

registros.forEach((item, index) => {
    const partes = item.fecha.split('.');
    const mesAnioActual = `${partes[1]}.${partes[2]}`;

    if (!seccionMes || !cuerpoMes || !container.innerHTML.includes(`${nombresMeses[partes[1]]} ${partes[2]}`)) {
        const nombreMes = nombresMeses[partes[1]] || "Mes";
        seccionMes = document.createElement('details');
        
        // Asignamos la clase única para no confundirlo con las estadísticas
        seccionMes.className = 'mes-log';
        
        if (esPrimerMes) {
            seccionMes.open = true;
            esPrimerMes = false;
        }

        seccionMes.style.marginTop = "10px";
        seccionMes.style.outline = "none";

        const cabeceraMes = document.createElement('summary');
        cabeceraMes.className = 'month-divider';
        cabeceraMes.style.cursor = 'pointer';
        cabeceraMes.innerText = `${nombreMes} ${partes[2]}`;
        
        cuerpoMes = document.createElement('div');
        seccionMes.appendChild(cabeceraMes);
        seccionMes.appendChild(cuerpoMes);
        container.appendChild(seccionMes);
    }

    const div = document.createElement('div');
    div.className = 'entry';
    div.setAttribute('data-carta', item.carta.trim());

    let botonHistorial = "";
    if (item.fecha === todayString) {
        div.classList.add('today');
        // El SPAN nace limpio, sin onclick conflictivos
        botonHistorial = ` <span id="btn-historial" style="cursor:pointer; font-size:0.9rem; margin-left:6px;" title="Ver coincidencias pasadas">👁️</span>`;
    }

    div.innerHTML = `
        <span class="date">${item.fecha}</span>
        <span class="card">${item.carta}${botonHistorial}</span>
        <p class="note">${item.nota}</p>
    `;
    
    cuerpoMes.appendChild(div);
});

// 2. LÓGICA DEL FILTRO (Escuchador de eventos nativo y seguro)
if (cartaDeHoy) {
    const btnHistorial = document.getElementById('btn-historial');
    let filtradoActivo = false;

    if (btnHistorial) {
        btnHistorial.addEventListener('click', (event) => {
            // Frenamos completamente al acordeón nativo <details>
            event.stopPropagation();
            event.preventDefault();

            filtradoActivo = !filtradoActivo;
            
            // Cambiamos el icono del botón
            btnHistorial.innerText = filtradoActivo ? "❌" : "👁️";
            btnHistorial.title = filtradoActivo ? "Quitar filtro" : "Ver coincidencias pasadas";

            // Buscamos SÓLO los bloques de meses reales
            const bloquesMesesReales = document.querySelectorAll('details.mes-log');

            bloquesMesesReales.forEach((details, idx) => {
                let mesTieneCoincidencia = false;
                const entries = details.querySelectorAll('.entry');
                
                entries.forEach(entry => {
                    const nombreCartaOculta = entry.getAttribute('data-carta');
                    
                    if (!filtradoActivo) {
                        entry.style.display = 'grid';
                    } else {
                        if (nombreCartaOculta.toLocaleLowerCase() === cartaDeHoy.toLocaleLowerCase()) {
                            entry.style.display = 'grid';
                            mesTieneCoincidencia = true;
                        } else {
                            entry.style.display = 'none';
                        }
                    }
                });

                // Control estricto de aperturas/cierres tras el click
                if (!filtradoActivo) {
                    details.style.display = 'block';
                    if (idx === 0) {
                        // Forzamos apertura del mes actual de forma segura
                        setTimeout(() => { details.open = true; }, 20);
                    } else {
                        details.open = false;
                    }
                } else {
                    if (mesTieneCoincidencia) {
                        details.style.display = 'block';
                        details.open = true;
                    } else {
                        details.style.display = 'none';
                        details.open = false;
                    }
                }
            });
        });
    }
}




// ====== GRÁFICA SEMANAL EN SVG ENCAPSULADA (SOLO MES ACTUAL) ======
function renderGraficaSemanas() {
    const contenedorGrafica = document.getElementById('grafica-semanal');
    if (!contenedorGrafica || registros.length === 0) return;

    // 1. Obtener el año y mes actual en el que estamos viviendo
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1; // JS cuenta los meses de 0 a 11

    // 2. Filtrar los registros para quedarnos SOLO con los de este mes
    const registrosMesActual = registros.filter(item => {
        const [, month, year] = item.fecha.split('.').map(Number);
        return year === anioActual && month === mesActual;
    });

    if (registrosMesActual.length === 0) {
        contenedorGrafica.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:10px;">Aún no hay registros en el mes actual para generar la tendencia.</p>';
        return;
    }

    // 3. Inicializar las 4 semanas fijas del mes
    // Estructura limpia para acumular los palos por cada una de las 4 semanas
    const semanasDelMes = [
        { Espadas: 0, Bastos: 0, Copas: 0, Pentáculos: 0, "Arcanos mayores": 0, total: 0 }, // Sem 1 (Días 1-7)
        { Espadas: 0, Bastos: 0, Copas: 0, Pentáculos: 0, "Arcanos mayores": 0, total: 0 }, // Sem 2 (Días 8-14)
        { Espadas: 0, Bastos: 0, Copas: 0, Pentáculos: 0, "Arcanos mayores": 0, total: 0 }, // Sem 3 (Días 15-21)
        { Espadas: 0, Bastos: 0, Copas: 0, Pentáculos: 0, "Arcanos mayores": 0, total: 0 }  // Sem 4 (Días 22+)
    ];

    // 4. Repartir las cartas del mes en su semana correspondiente
    registrosMesActual.forEach(item => {
        const dia = parseInt(item.fecha.split('.')[0], 10);
        let indiceSemana = 0;

        if (dia <= 7) indiceSemana = 0;
        else if (dia <= 14) indiceSemana = 1;
        else if (dia <= 21) indiceSemana = 2;
        else indiceSemana = 3; // El resto del mes se acumula en la última semana

        const suit = getSuit(item.carta); // Tu función global de lectura de palos
        semanasDelMes[indiceSemana][suit]++;
        semanasDelMes[indiceSemana].total++;
    });

    // 5. Configuración geométrica del SVG (Mantenemos tu proporción responsive)
    const width = 500;
    const height = 250;
    const paddingLeft = 40;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 40;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const coloresPalos = {
        "Bastos": "#a34e36",           // Marrón-rojo (Tono arcilla/fuego sutil)
        "Pentáculos": "#d4af37",       // Oro (Tono dorado clásico, visible en fondo blanco y negro)
        "Espadas": "#5f7d95",          // Azul metálico (Gris azulado acero)
        "Copas": "#3a9fb7",            // Azul agua (Tono turquesa/océano limpio)
        "Arcanos mayores": "var(--purple, #53006a)" // Tu morado dinámico
    };

    const lineasPuntos = { "Espadas": [], "Bastos": [], "Copas": [], "Pentáculos": [], "Arcanos mayores": [] };

    // 6. Calcular los puntos (X, Y) basándonos estrictamente en las 4 semanas
    semanasDelMes.forEach((sem, idx) => {
        // Eje X: 4 puntos fijos distribuidos perfectamente
        const x = paddingLeft + (idx / 3) * chartWidth;

        for (const palo in lineasPuntos) {
            const cantidad = sem[palo] || 0;
            // Si una semana no tiene cartas, el porcentaje cae a 0% para evitar divisiones por cero
            const porcentaje = sem.total > 0 ? (cantidad / sem.total) * 100 : 0;
            const y = paddingTop + chartHeight - (porcentaje / 100) * chartHeight;
            
            lineasPuntos[palo].push(`${x},${y}`);
        }
    });

    // 7. Construir el SVG
    let svgHTML = `<svg viewBox="0 0 ${width} ${height}" style="width:100%; height:auto; display:block;">`;

    // Líneas horizontales de escala (0%, 25%, 50%, 75%, 100%)
    for (let i = 0; i <= 4; i++) {
        const porc = i * 25;
        const y = paddingTop + chartHeight - (porc / 100) * chartHeight;
        svgHTML += `
            <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--border-light, #eee)" stroke-width="1" stroke-dasharray="4,4" />
            <text x="${paddingLeft - 8}" y="${y + 4}" font-size="10" text-anchor="end" fill="var(--text-muted, #888)">${porc}%</text>
        `;
    }

    // Dibujar los caminos polilineales de los palos
    for (const palo in lineasPuntos) {
        svgHTML += `
            <polyline 
                points="${lineasPuntos[palo].join(' ')}" 
                fill="none" 
                stroke="${coloresPalos[palo]}" 
                stroke-width="3" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        `;
    }

    // Etiquetas fijas del Eje X: 4 semanas del mes en curso
    const nombresSemanas = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];
    nombresSemanas.forEach((nombre, idx) => {
        const x = paddingLeft + (idx / 3) * chartWidth;
        svgHTML += `<text x="${x}" y="${height - paddingBottom + 18}" font-size="10" text-anchor="middle" fill="var(--text-muted, #888)">${nombre}</text>`;
    });

    svgHTML += `</svg>`;

    // Leyenda de colores inferior
    let leyendaHTML = `<div class="chart-legend">`;
    for (const palo in coloresPalos) {
        leyendaHTML += `
            <div class="legend-item">
                <span class="legend-color" style="background: ${coloresPalos[palo]}"></span>
                <span class="legend-text">${palo}</span>
            </div>
        `;
    }
    leyendaHTML += `</div>`;

    // Renderizado final
    contenedorGrafica.innerHTML = `<div class="chart-title">Tendencia del mes (% semanal)</div>` + svgHTML + leyendaHTML;
}

renderGraficaSemanas();