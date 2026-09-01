const { createApp, ref, computed, watch, onMounted } = Vue;

createApp({
  setup() {

    // ============================================================
    // Navegación (secciones tipo dashboard, sincronizadas con el hash)
    // ============================================================
    const vista = ref('dashboard');
    const idTiradaSeleccionada = ref(null);

    const parseHash = () => {
      const hash = location.hash.replace('#', '');
      if (hash.startsWith('tirada/')) {
        vista.value = 'tirada-detalle';
        idTiradaSeleccionada.value = hash.slice('tirada/'.length);
      } else {
        vista.value = hash || 'dashboard';
        idTiradaSeleccionada.value = null;
      }
    };
    parseHash();
    window.addEventListener('hashchange', parseHash);

    const irA = (v) => {
      vista.value = v;
      location.hash = v;
    };

    const verDetalleTirada = (tirada) => {
      location.hash = `tirada/${tirada.id}`;
    };

    const compartirTirada = async (tirada) => {
      const url = `${location.origin}${location.pathname}#tirada/${tirada.id}`;
      const textoResumen = `🔮 ${tirada.pregunta}\n${url}`;
      if (navigator.share) {
        try {
          await navigator.share({ title: 'Tarot Log', text: textoResumen, url });
          return;
        } catch (e) {
          if (e.name === 'AbortError') return;
        }
      }
      try {
        await navigator.clipboard.writeText(url);
        alert('Enlace copiado al portapapeles.');
      } catch (e) {
        prompt('Copia este enlace:', url);
      }
    };

    // ============================================================
    // Utilidades compartidas
    // ============================================================
    const nombresMeses = {
      "01": "Enero", "02": "Febrero", "03": "Marzo", "04": "Abril",
      "05": "Mayo", "06": "Junio", "07": "Julio", "08": "Agosto",
      "09": "Septiembre", "10": "Octubre", "11": "Noviembre", "12": "Diciembre"
    };

    const palos = ['Espadas', 'Bastos', 'Copas', 'Pentáculos', 'Arcanos mayores'];

    const getSuitFromCarta = (carta) => {
      const l = carta.toLowerCase();
      if (l.includes('espadas')) return 'Espadas';
      if (l.includes('bastos')) return 'Bastos';
      if (l.includes('copas')) return 'Copas';
      if (l.includes('pentáculos') || l.includes('pentaculos')) return 'Pentáculos';
      return 'Arcanos mayores';
    };

    const obtenerClaseBadge = (tipoOPalo) => {
      if (!tipoOPalo) return '';
      const t = tipoOPalo.toLowerCase();
      if (t.includes('mayor')) return 'badge-arcanos';
      if (t.includes('basto')) return 'badge-bastos';
      if (t.includes('pentáculo') || t.includes('oro')) return 'badge-pentaculos';
      if (t.includes('espada')) return 'badge-espadas';
      if (t.includes('copa')) return 'badge-copas';
      return '';
    };

    const colorPalo = (palo) => ({
      'Espadas': '#5f7d95',
      'Bastos': '#a34e36',
      'Copas': '#3a9fb7',
      'Pentáculos': '#d4af37',
      'Arcanos mayores': '#a855f7'
    }[palo] || 'var(--text-muted)');

    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const mesActualStr = String(hoy.getMonth() + 1).padStart(2, '0');
    const hoyString = String(hoy.getDate()).padStart(2, '0') + '.' + mesActualStr + '.' + anioActual;

    // ---------- Fusionar pendientes guardados en localStorage ----------
    const CLAVE_PENDIENTES_REGISTROS = 'tarotlog_pendientes_registros';
    const CLAVE_PENDIENTES_TIRADAS = 'tarotlog_pendientes_tiradas';

    const leerPendientesRegistros = () => {
      try { return JSON.parse(localStorage.getItem(CLAVE_PENDIENTES_REGISTROS) || '[]'); }
      catch (e) { return []; }
    };
    const leerPendientesTiradas = () => {
      try { return JSON.parse(localStorage.getItem(CLAVE_PENDIENTES_TIRADAS) || '[]'); }
      catch (e) { return []; }
    };

    const pendientesRegistrosIniciales = leerPendientesRegistros();
    if (pendientesRegistrosIniciales.length) {
      registros.push(...pendientesRegistrosIniciales);
      registros.sort((a, b) => parseFecha(b.fecha) - parseFecha(a.fecha));
    }

    // `registros` y `especiales` vienen de cartas.js / cartas_2026.js (scope global, no cambian tras cargar)
    const entradasTotales = registros.length;

    const contadorCartas = registros.reduce((acc, item) => {
      acc[item.carta] = (acc[item.carta] || 0) + 1;
      return acc;
    }, {});
    const cartasDistintas = Object.keys(contadorCartas).length;
    const maxRepeticiones = registros.length ? Math.max(...Object.values(contadorCartas)) : 0;
    const cartasFrecuentes = registros.length
      ? Object.entries(contadorCartas).filter(([, c]) => c === maxRepeticiones).map(([c]) => c)
      : ['N/A'];

    const getMostRepeated = (counts) => {
      const entries = Object.entries(counts);
      if (!entries.length) return 'N/A';
      const max = Math.max(...entries.map(([, c]) => c));
      return entries.filter(([, c]) => c === max).map(([s]) => s).join(', ') + ` (${max})`;
    };

    const suitCount = registros.reduce((acc, item) => {
      const s = getSuitFromCarta(item.carta);
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {});
    const paloFrecuente = getMostRepeated(suitCount);

    const racha = (() => {
      const fmt = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const fechas = new Set(registros.map(r => {
        const [d, m, y] = r.fecha.split('.');
        return `${y}-${m}-${d}`;
      }));
      let cursor = new Date();
      if (!fechas.has(fmt(cursor))) cursor.setDate(cursor.getDate() - 1);
      let n = 0;
      while (fechas.has(fmt(cursor))) {
        n++;
        cursor.setDate(cursor.getDate() - 1);
      }
      return n;
    })();

    const registradoHoy = registros.some(r => r.fecha === hoyString);

    const ultimasEntradas = registros.slice(0, 5);

    // ---------- Gráfica de palos del mes (barra horizontal) ----------
    const graficaPalosMesHtml = (() => {
      const registrosMes = registros.filter(item => {
        const [, m, y] = item.fecha.split('.').map(Number);
        return y === anioActual && m === hoy.getMonth() + 1;
      });
      const counts = registrosMes.reduce((acc, item) => {
        const s = getSuitFromCarta(item.carta);
        acc[s] = (acc[s] || 0) + 1;
        return acc;
      }, {});
      const total = Object.values(counts).reduce((s, c) => s + c, 0);
      let html = '<div class="chart-title">Distribución de palos este mes</div>';
      if (!total) {
        html += '<p class="fallback-message">No hay datos para este mes.</p>';
        return html;
      }
      palos.forEach(suit => {
        const count = counts[suit] || 0;
        const percent = total > 0 ? Math.round((count / total) * 100) : 0;
        const barWidth = percent === 0 ? '1px' : `${percent}%`;
        const barColor = percent === 0 ? 'var(--accent-glow)' : 'var(--accent)';
        html += `
          <div class="chart-bar">
            <span class="chart-label">${suit}</span>
            <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${barWidth};background:${barColor}"></div></div>
            <span class="chart-percent">${percent}%</span>
          </div>`;
      });
      return html;
    })();

    // ---------- Gráfica de tendencia anual (SVG) ----------
    const graficaAnualHtml = (() => {
      const registrosAnio = registros.filter(item => {
        const [, , y] = item.fecha.split('.').map(Number);
        return y === anioActual;
      });
      if (registrosAnio.length === 0) {
        return '<div class="chart-title">Tendencia anual (% mensual)</div><p class="fallback-message">Aún no hay registros este año.</p>';
      }

      const mesActual = hoy.getMonth();
      const mesesDelAnio = Array.from({ length: 12 }, () => ({
        Espadas: 0, Bastos: 0, Copas: 0, "Pentáculos": 0, "Arcanos mayores": 0, total: 0
      }));

      registrosAnio.forEach(item => {
        const [, mes] = item.fecha.split('.').map(Number);
        const idx = mes - 1;
        const suit = getSuitFromCarta(item.carta);
        mesesDelAnio[idx][suit]++;
        mesesDelAnio[idx].total++;
      });

      const width = 700, height = 240;
      const paddingLeft = 42, paddingRight = 16, paddingTop = 16, paddingBottom = 32;
      const chartWidth = width - paddingLeft - paddingRight;
      const chartHeight = height - paddingTop - paddingBottom;

      const coloresPalos = {
        Bastos: "#a34e36", "Pentáculos": "#d4af37", Espadas: "#5f7d95",
        Copas: "#3a9fb7", "Arcanos mayores": "#a855f7"
      };

      const lineasPuntos = { Espadas: [], Bastos: [], Copas: [], "Pentáculos": [], "Arcanos mayores": [] };

      mesesDelAnio.forEach((mes, idx) => {
        if (idx > mesActual) {
          for (const p in lineasPuntos) lineasPuntos[p].push(null);
          return;
        }
        const x = paddingLeft + (idx / 11) * chartWidth;
        for (const palo in lineasPuntos) {
          if (mes.total === 0) { lineasPuntos[palo].push(null); continue; }
          const porcentaje = (mes[palo] / mes.total) * 100;
          const y = paddingTop + chartHeight - (porcentaje / 100) * chartHeight;
          lineasPuntos[palo].push({ x, y });
        }
      });

      function crearPathSuave(puntos) {
        let d = '', segmento = [];
        function dibujarSegmento(seg) {
          if (seg.length === 0) return;
          if (seg.length === 1) { d += `M ${seg[0].x} ${seg[0].y}`; return; }
          d += `M ${seg[0].x} ${seg[0].y}`;
          for (let i = 1; i < seg.length; i++) {
            const p0 = seg[i - 1], p1 = seg[i];
            const cx = (p0.x + p1.x) / 2;
            d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
          }
        }
        puntos.forEach(p => { if (p) segmento.push(p); else { dibujarSegmento(segmento); segmento = []; } });
        dibujarSegmento(segmento);
        return d;
      }

      let svg = `<svg viewBox="0 0 ${width} ${height}" style="width:100%;height:auto;display:block;">`;

      for (let i = 0; i <= 4; i++) {
        const porcentaje = i * 25;
        const y = paddingTop + chartHeight - (porcentaje / 100) * chartHeight;
        svg += `<line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="4,4"/>
          <text x="${paddingLeft - 8}" y="${y + 4}" font-size="10" text-anchor="end" fill="#9aa5c0">${porcentaje}%</text>`;
      }

      for (const palo in lineasPuntos) {
        const d = crearPathSuave(lineasPuntos[palo]);
        if (!d) continue;
        svg += `<path d="${d}" fill="none" stroke="${coloresPalos[palo]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
        lineasPuntos[palo].forEach(p => {
          if (!p) return;
          svg += `<circle cx="${p.x}" cy="${p.y}" r="3.5" fill="${coloresPalos[palo]}"/>`;
        });
      }

      const nombresCortos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      nombresCortos.forEach((nombre, idx) => {
        const x = paddingLeft + (idx / 11) * chartWidth;
        svg += `<text x="${x}" y="${height - paddingBottom + 18}" font-size="10" text-anchor="middle" fill="#9aa5c0">${nombre}</text>`;
      });
      svg += `</svg>`;

      let leyenda = '<div class="chart-legend">';
      for (const palo in coloresPalos) {
        leyenda += `<div class="legend-item"><span class="legend-color" style="background:${coloresPalos[palo]}"></span><span class="legend-text">${palo}</span></div>`;
      }
      leyenda += '</div>';

      return `<div class="chart-title">Tendencia anual (% mensual)</div>${svg}${leyenda}`;
    })();

    // ============================================================
    // DIARIO
    // ============================================================
    const filtroDiarioTexto = ref('');
    const filtroDiarioPalo = ref('');
    const filtroCartaActiva = ref(null);

    const registrosFiltrados = computed(() => {
      if (filtroCartaActiva.value) {
        const objetivo = filtroCartaActiva.value.toLowerCase();
        return registros.filter(r => r.carta.trim().toLowerCase() === objetivo);
      }
      return registros.filter(r => {
        const texto = (r.carta + ' ' + r.nota).toLowerCase();
        const coincideTexto = !filtroDiarioTexto.value || texto.includes(filtroDiarioTexto.value.toLowerCase());
        const coincidePalo = !filtroDiarioPalo.value || getSuitFromCarta(r.carta) === filtroDiarioPalo.value;
        return coincideTexto && coincidePalo;
      });
    });

    const registrosAgrupados = computed(() => {
      const grupos = [];
      const mapa = new Map();
      registrosFiltrados.value.forEach(item => {
        const [, mes, anio] = item.fecha.split('.');
        const clave = `${mes}.${anio}`;
        if (!mapa.has(clave)) {
          const grupo = { clave, nombre: `${nombresMeses[mes]} ${anio}`, items: [] };
          mapa.set(clave, grupo);
          grupos.push(grupo);
        }
        mapa.get(clave).items.push(item);
      });
      grupos.forEach((g, i) => { g.esPrimero = i === 0; });
      return grupos;
    });

    const toggleHistorial = (carta) => {
      const limpio = carta.trim();
      filtroCartaActiva.value = (filtroCartaActiva.value && filtroCartaActiva.value.toLowerCase() === limpio.toLowerCase())
        ? null : limpio;
    };

    const verEnDiario = (carta) => {
      irA('diario');
      filtroCartaActiva.value = carta.trim();
    };

    // Mini calendario: últimos 3 meses (el actual queda el último del array = más a la derecha)
    const generarMesCalendario = (anio, mesIdx) => {
      const diasEnMes = new Date(anio, mesIdx + 1, 0).getDate();
      const primerDiaSemana = (new Date(anio, mesIdx, 1).getDay() + 6) % 7; // lunes=0
      const mapaPorDia = {};

      registros.forEach(r => {
        const [d, m, y] = r.fecha.split('.').map(Number);
        if (y === anio && m === mesIdx + 1) mapaPorDia[d] = r;
      });

      const celdas = [];
      for (let i = 0; i < primerDiaSemana; i++) celdas.push(null);

      for (let d = 1; d <= diasEnMes; d++) {
        const reg = mapaPorDia[d];
        const esHoy = anio === hoy.getFullYear() && mesIdx === hoy.getMonth() && d === hoy.getDate();
        celdas.push(reg
          ? { dia: d, carta: reg.carta, nota: reg.nota, palo: getSuitFromCarta(reg.carta), esHoy }
          : { dia: d, vacio: true, esHoy });
      }

      // Obtenemos el nombre nativo del mes a partir de la fecha de referencia
      const fechaRef = new Date(anio, mesIdx, 1);
      const nombreMes = fechaRef.toLocaleDateString('es-ES', { month: 'long' });
      // Capitalizamos la primera letra (ej. "agosto" -> "Agosto")
      const nombreCapitalizado = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

      return { clave: `${anio}-${mesIdx}`, nombre: nombreCapitalizado, anio, dias: celdas };
    };

    const ultimosTresMeses = computed(() => {
      const meses = [];
      for (let i = 2; i >= 0; i--) {
        const ref = new Date(hoy.getFullYear(), hoy.getMonth() - i, 1);
        meses.push(generarMesCalendario(ref.getFullYear(), ref.getMonth()));
      }
      return meses;
    });

    // ============================================================
    // TIRADAS
    // ============================================================
    const tiradas = ref([]);
    const filtroTiradaTexto = ref('');
    const filtroTiradaConsultante = ref('');

    onMounted(async () => {
      try {
        const res = await fetch('tiradas.json');
        const originales = await res.json();
        tiradas.value = [...originales, ...leerPendientesTiradas()];
      } catch (e) {
        console.error('Error cargando tiradas.json', e);
      }
    });

    const tiradaSeleccionada = computed(() => {
      return tiradas.value.find(t => t.id === idTiradaSeleccionada.value) || null;
    });

    const tiradasFiltradas = computed(() => {
      return [...tiradas.value]
        .filter(t => {
          const texto = (t.pregunta + ' ' + t.interpretacion).toLowerCase();
          const coincideTexto = !filtroTiradaTexto.value || texto.includes(filtroTiradaTexto.value.toLowerCase());
          const coincideConsultante = !filtroTiradaConsultante.value ||
            (t.consultante || 'Anónimo').toLowerCase().includes(filtroTiradaConsultante.value.toLowerCase());
          return coincideTexto && coincideConsultante;
        })
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    });

    const ultimasTiradasList = computed(() => {
      return [...tiradas.value].sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 5);
    });

    const consultantesDisponibles = computed(() => {
      return [...new Set(tiradas.value.map(t => t.consultante || 'Anónimo'))];
    });

    const formatearFecha = (fechaString) => {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fechaString).toLocaleDateString('es-ES', opciones);
    };

    const verEnTiradas = (tirada) => {
      irA('tiradas');
      filtroTiradaTexto.value = '';
      filtroTiradaConsultante.value = '';
    };

    // ============================================================
    // MAZOS
    // ============================================================
    const indiceMazos = ref([]);
    const idMazoSeleccionado = ref('');
    const mazoActual = ref(null);
    const cartaExpandidaId = ref(null);
    const filtroMazoTexto = ref('');
    const filtroMazoTipo = ref('todos');
    const soloPendientes = ref(false);

    onMounted(async () => {
      try {
        const res = await fetch('mazos.json');
        indiceMazos.value = await res.json();
        if (indiceMazos.value.length > 0) idMazoSeleccionado.value = indiceMazos.value[0].id;
      } catch (e) {
        console.error('Error cargando el índice de mazos.', e);
      }
    });

    watch(idMazoSeleccionado, async (nuevoId) => {
      cartaExpandidaId.value = null;
      filtroMazoTexto.value = '';
      filtroMazoTipo.value = 'todos';
      soloPendientes.value = false;
      if (!nuevoId) return;
      const info = indiceMazos.value.find(m => m.id === nuevoId);
      if (info && info.archivo) {
        try {
          const res = await fetch(info.archivo);
          mazoActual.value = await res.json();
        } catch (e) {
          console.error(`Error cargando el mazo: ${info.archivo}`, e);
        }
      }
    });

    const tiposDisponibles = computed(() => {
      if (!mazoActual.value) return [];
      return [...new Set(mazoActual.value.cartas.map(c => c.tipo))];
    });

    const cartasMazoFiltradas = computed(() => {
      if (!mazoActual.value) return [];
      return mazoActual.value.cartas.filter(c => {
        const coincideTexto = !filtroMazoTexto.value || c.nombre.toLowerCase().includes(filtroMazoTexto.value.toLowerCase());
        const coincideTipo = filtroMazoTipo.value === 'todos' || c.tipo === filtroMazoTipo.value;
        const coincidePendiente = !soloPendientes.value || !c.nota_personal;
        return coincideTexto && coincideTipo && coincidePendiente;
      });
    });

    const progresoMazo = computed(() => {
      if (!mazoActual.value) return { total: 0, completadas: 0, porcentaje: 0 };
      const total = mazoActual.value.cartas.length;
      const completadas = mazoActual.value.cartas.filter(c => c.nota_personal && c.nota_personal.trim()).length;
      return { total, completadas, porcentaje: total ? Math.round((completadas / total) * 100) : 0 };
    });

    const toggleCartaExpandida = (id) => {
      cartaExpandidaId.value = cartaExpandidaId.value === id ? null : id;
    };

    // ---------- Glosario y tooltips de palabras clave ----------
    const glosario = [
      { palabra: "agua", definicion: "Emociones, intuición, el reino del subconsciente (Copas)" },
      { palabra: "fuego", definicion: "Voluntad, acción, pasiones, chispa vital (Bastos)" },
      { palabra: "tierra", definicion: "Mundo material, cuerpo físico, recursos, estabilidad (Oros)" },
      { palabra: "aire", definicion: "Intelecto, mente, comunicación, conflicto (Espadas)" },
      { palabra: "blanco", definicion: "Pureza, inocencia, limpieza espiritual, la luz antes de refractarse" },
      { palabra: "negro", definicion: "Misterio, el vacío fértil, el final de un ciclo, lo oculto" },
      { palabra: "amarillo", definicion: "Consciencia, luz solar, intelecto activo, divinidad" },
      { palabra: "rojo", definicion: "Pasión, acción, sangre, vitalidad, el mundo terrenal" },
      { palabra: "azul", definicion: "Subconsciente, fluidez, espiritualidad, reflexión" },
      { palabra: "gris", definicion: "Sabiduría, neutralidad, tristeza o apatía" },
      { palabra: "león", definicion: "Fuego, impulsos, fuerza vital salvaje, coraje" },
      { palabra: "perro", definicion: "Instinto domesticado, lealtad, la mente consciente protectora" },
      { palabra: "lobo", definicion: "Instinto salvaje, miedos primitivos, lo indómito" },
      { palabra: "caballo", definicion: "Vehículo de la voluntad, energía de avance, instinto dirigido" },
      { palabra: "pájaro", definicion: "Pensamientos, mensajes del espíritu, libertad mental" },
      { palabra: "infinito", definicion: "Lemniscata: equilibrio perfecto, dominio espiritual sobre la materia" },
      { palabra: "corona", definicion: "Autoridad, dominio mental, conexión con la mente superior (Kether)" },
      { palabra: "montaña", definicion: "Desafíos, conocimiento abstracto, la morada de la divinidad" },
      { palabra: "nube", definicion: "Intervención divina, pensamientos que ocultan la verdad, lo efímero" },
      { palabra: "torre", definicion: "Estructuras falsas del ego, revelación brusca, liberación forzada" },
      { palabra: "sol", definicion: "Claridad absoluta, éxito, energía masculina, consciencia" },
      { palabra: "luna", definicion: "Misterio, miedos, ciclos, energía femenina, ilusión" },
      { palabra: "estrella", definicion: "Esperanza, guía cósmica, inspiración, sanación tras la tormenta" },
      { palabra: "río", definicion: "El flujo de la vida, transición, el cauce del subconsciente" },
      { palabra: "castillo", definicion: "Civilización, metas alcanzadas, a veces aislamiento o defensas" },
      { palabra: "3", definicion: "Creación y manifestación" },
      { palabra: "mercurio", definicion: "Comunicación, intelecto, movilidad, cambio, agilidad mental" }
    ];

    const formatearMarkdownLigero = (texto) => {
      if (!texto) return '';
      let procesado = texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      procesado = procesado.replace(/\*(.*?)\*/g, '<em>$1</em>');
      procesado = procesado.replace(/\n/g, '<br>');
      return procesado;
    };

    const procesarAnotaciones = (texto) => {
      if (!texto) return '';
      let textoProcesado = texto;
      const flexibilizarAcentos = (palabra) => palabra
        .replace(/[aá]/gi, '[aá]')
        .replace(/[eé]/gi, '[eé]')
        .replace(/[ií]/gi, '[ií]')
        .replace(/[oó]/gi, '[oó]')
        .replace(/[uúü]/gi, '[uúü]');

      glosario.forEach(item => {
        const baseRegex = flexibilizarAcentos(item.palabra);
        const regexStr = `(?<=^|\\s|[.,;:!¡¿?\\n])(${baseRegex}(?:s|es)?)(?=\\s|[.,;:!¡¿?\\n]|$)`;
        const regex = new RegExp(regexStr, 'gi');
        textoProcesado = textoProcesado.replace(regex, `<span class="palabra-clave" data-tooltip="${item.definicion}">$1</span>`);
      });
      return textoProcesado;
    };

    const procesarNotaFinal = (texto) => {
      if (!texto) return 'No has escrito ninguna interpretación para esta carta todavía.';
      const paso1 = procesarAnotaciones(texto);
      return formatearMarkdownLigero(paso1);
    };

    // ============================================================
    // AÑADIR (formulario + localStorage + exportación)
    // ============================================================
    const pendientesRegistros = ref(pendientesRegistrosIniciales);
    const pendientesTiradas = ref(leerPendientesTiradas());
    const palosOpcionesTirada = ['Arcanos Mayores', 'Bastos', 'Espadas', 'Pentáculos', 'Copas'];

    const hoyISO = `${hoy.getFullYear()}-${mesActualStr}-${String(hoy.getDate()).padStart(2, '0')}`;
    const tabAñadir = ref('tirada');

    // --- Registro diario ---
    const formRegistro = ref({ fecha: hoyISO, carta: '', nota: '' });

    const guardarRegistro = () => {
      if (!formRegistro.value.carta.trim()) { alert('Indica la carta.'); return; }
      const [y, m, d] = formRegistro.value.fecha.split('-');
      const nuevo = { fecha: `${d}.${m}.${y}`, carta: formRegistro.value.carta.trim(), nota: formRegistro.value.nota.trim() };
      const actuales = leerPendientesRegistros();
      actuales.push(nuevo);
      localStorage.setItem(CLAVE_PENDIENTES_REGISTROS, JSON.stringify(actuales));
      location.reload();
    };

    // --- Tirada ---
    const nuevaCartaTirada = () => ({ posicion: '', nombre: '', palo: 'Arcanos Mayores' });
    const formTirada = ref({ pregunta: '', consultante: '', interpretacion: '', cartas: [nuevaCartaTirada()] });

    const añadirCartaFormTirada = () => formTirada.value.cartas.push(nuevaCartaTirada());
    const quitarCartaFormTirada = (idx) => {
      if (formTirada.value.cartas.length > 1) formTirada.value.cartas.splice(idx, 1);
    };

    const generarIdTirada = (fechaISO) => {
      const clave = fechaISO.replaceAll('-', '');
      const todas = [...tiradas.value, ...leerPendientesTiradas()];
      const usados = todas.filter(t => t.id && t.id.startsWith(`t-${clave}-`)).length;
      return `t-${clave}-${String(usados + 1).padStart(2, '0')}`;
    };

    const guardarTirada = () => {
      if (!formTirada.value.pregunta.trim() || !formTirada.value.interpretacion.trim()) {
        alert('Rellena al menos la pregunta y la interpretación.');
        return;
      }
      const nueva = {
        id: generarIdTirada(hoyISO),
        fecha: hoyISO,
        consultante: formTirada.value.consultante.trim() || undefined,
        pregunta: formTirada.value.pregunta.trim(),
        cartas: formTirada.value.cartas.filter(c => c.nombre.trim()),
        interpretacion: formTirada.value.interpretacion.trim()
      };
      const actuales = leerPendientesTiradas();
      actuales.push(nueva);
      localStorage.setItem(CLAVE_PENDIENTES_TIRADAS, JSON.stringify(actuales));
      location.reload();
    };

    // --- Borrar pendientes ---
    const borrarPendienteRegistro = (idx) => {
      const actuales = leerPendientesRegistros();
      actuales.splice(idx, 1);
      localStorage.setItem(CLAVE_PENDIENTES_REGISTROS, JSON.stringify(actuales));
      location.reload();
    };
    const borrarPendienteTirada = (idx) => {
      const actuales = leerPendientesTiradas();
      actuales.splice(idx, 1);
      localStorage.setItem(CLAVE_PENDIENTES_TIRADAS, JSON.stringify(actuales));
      location.reload();
    };

    // --- Exportar ---
    const descargarJSON = (nombreArchivo, datos) => {
      const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = nombreArchivo;
      a.click();
      URL.revokeObjectURL(url);
    };

    const exportarTiradas = () => {
      const combinado = [...tiradas.value].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      descargarJSON('tiradas.json', combinado);
    };

    const exportarRegistros = () => {
      if (!pendientesRegistros.value.length) { alert('No hay registros pendientes.'); return; }
      descargarJSON('registros-nuevos.json', pendientesRegistros.value);
      alert('Pega el contenido de este archivo dentro del array "registros" de cartas_2026.js.');
    };

    // ============================================================
    // BÚSQUEDA GLOBAL
    // ============================================================
    const busquedaGlobal = ref('');
    const mostrarBusqueda = ref(false);
    const onBlurBusqueda = () => setTimeout(() => { mostrarBusqueda.value = false; }, 150);

    const resultadosBusqueda = computed(() => {
      const q = busquedaGlobal.value.trim().toLowerCase();
      if (q.length < 2) return [];
      const resultados = [];

      registros.forEach(r => {
        if ((r.carta + ' ' + r.nota).toLowerCase().includes(q)) {
          resultados.push({ key: 'd-' + r.fecha, tipo: 'Diario', texto: `${r.fecha} · ${r.carta}`, vista: 'diario', carta: r.carta });
        }
      });

      tiradas.value.forEach((t, i) => {
        if ((t.pregunta + ' ' + t.interpretacion).toLowerCase().includes(q)) {
          resultados.push({ key: 't-' + i, tipo: 'Tirada', texto: t.pregunta, vista: 'tiradas' });
        }
      });

      if (mazoActual.value) {
        mazoActual.value.cartas.forEach(c => {
          if ((c.nombre + ' ' + (c.nota_personal || '')).toLowerCase().includes(q)) {
            resultados.push({ key: 'm-' + c.id, tipo: 'Mazo', texto: c.nombre, vista: 'mazos', cartaId: c.id });
          }
        });
      }

      return resultados.slice(0, 8);
    });

    const irAResultado = (r) => {
      irA(r.vista);
      if (r.vista === 'diario') {
        filtroDiarioTexto.value = '';
        filtroCartaActiva.value = r.carta ? r.carta.trim() : null;
      }
      if (r.vista === 'tiradas') {
        filtroTiradaTexto.value = busquedaGlobal.value;
        filtroTiradaConsultante.value = '';
      }
      if (r.vista === 'mazos' && r.cartaId) {
        cartaExpandidaId.value = r.cartaId;
      }
      busquedaGlobal.value = '';
      mostrarBusqueda.value = false;
    };

    return {
      vista, irA,
      anioActual, mesActualStr, nombresMeses, hoyString, palos, colorPalo, obtenerClaseBadge,

      especiales, entradasTotales, cartasDistintas, cartasFrecuentes, maxRepeticiones,
      paloFrecuente, racha, registradoHoy, ultimasEntradas,
      graficaPalosMesHtml, graficaAnualHtml,

      filtroDiarioTexto, filtroDiarioPalo, filtroCartaActiva,
      registrosAgrupados, toggleHistorial, verEnDiario, ultimosTresMeses,

      tiradas, filtroTiradaTexto, filtroTiradaConsultante, tiradasFiltradas,
      ultimasTiradasList, consultantesDisponibles, formatearFecha, verEnTiradas,
      idTiradaSeleccionada, tiradaSeleccionada, verDetalleTirada, compartirTirada,

      indiceMazos, idMazoSeleccionado, mazoActual, cartaExpandidaId,
      filtroMazoTexto, filtroMazoTipo, soloPendientes, tiposDisponibles,
      cartasMazoFiltradas, progresoMazo, toggleCartaExpandida, procesarNotaFinal,

      busquedaGlobal, mostrarBusqueda, onBlurBusqueda, resultadosBusqueda, irAResultado,

      tabAñadir, formRegistro, guardarRegistro,
      formTirada, añadirCartaFormTirada, quitarCartaFormTirada, guardarTirada,
      pendientesRegistros, pendientesTiradas, borrarPendienteRegistro, borrarPendienteTirada,
      exportarTiradas, exportarRegistros, palosOpcionesTirada,
    };
  }
}).mount('#app');