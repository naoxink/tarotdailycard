const parseFecha = fecha => {
    const [dia, mes, anio] = fecha.split('.').map(Number);
    return new Date(anio, mes - 1, dia);
};

const yearDataByYear = window.TAROT_YEAR_DATA || {};
const yearEntries = Object.entries(yearDataByYear).sort(([a], [b]) => Number(a) - Number(b));

const registros = yearEntries
    .flatMap(([, data]) => Array.isArray(data.registros) ? data.registros : [])
    .sort((a, b) => parseFecha(a.fecha) - parseFecha(b.fecha));

const latestYearData = yearEntries.length
    ? yearEntries[yearEntries.length - 1][1]
    : { especiales: { año: { carta: '', nota: '' }, semana: { carta: '', nota: '' } } };

const especiales = latestYearData.especiales || {
    año: { carta: '', nota: '' },
    semana: { carta: '', nota: '' }
};
