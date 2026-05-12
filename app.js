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
        const barColor = percent === 0 ? '#ccc' : '#53006a';
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

registros.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'entry';
    if (item.fecha === todayString) {
        div.classList.add('today');
    }
    div.innerHTML = `
        <span class="date">${item.fecha}</span>
        <span class="card">${item.carta}</span>
        <p class="note">${item.nota}</p>
    `;
    container.appendChild(div);
});
