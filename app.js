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