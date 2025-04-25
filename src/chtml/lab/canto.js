// Lista de acordes cromáticos
const acordesCromaticos = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
const tiposAcordes = ['', 'm', '7', 'm7', 'Maj7', 'dim', 'aug', '–'];

// Variables globales para el estado
let acordesOriginales = [];
let desplazamientoActual = 0;

document.addEventListener('DOMContentLoaded', function() {
    fetch('canto.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            // Guardar los acordes originales
            acordesOriginales = extraerAcordesOriginales(data.versos);

            const contenedor = document.getElementById('contenedor-letra');
            if (!contenedor) {
                throw new Error('No se encontró el contenedor de letras');
            }

            const tonica = data.tonica || 'Do';

            // Crear selector de tónica (opcional, pero lo mantendremos)
            const selectorTonica = crearSelectorTonica(tonica);
            contenedor.prepend(selectorTonica);

            // Renderizar versos
            data.versos.forEach((verso, index) => {
                const versoHTML = crearVersoHTML(verso, index);
                contenedor.insertAdjacentHTML('beforeend', versoHTML);
            });

            // Configurar event listeners
            configurarSelectores();
        })
        .catch(error => {
            console.error('Error:', error);
            const contenedor = document.getElementById('contenedor-letra');
            if (contenedor) {
                contenedor.innerHTML = `<div class="error">Error al cargar la canción: ${error.message}</div>`;
            }
        });
});

// Extrae todos los acordes originales del JSON
function extraerAcordesOriginales(versos) {
    const acordes = [];
    versos.forEach(verso => {
        if (verso.acordes && Array.isArray(verso.acordes)) {
            verso.acordes.forEach(acorde => {
                if (acorde && acorde.acorde && acorde.base) {
                    acordes.push({
                        base: acorde.base,
                        acorde: acorde.acorde,
                        tipo: extraerTipoAcorde(acorde.acorde),
                        posicion: acorde.posicion || 0
                    });
                }
            });
        }
    });
    return acordes;
}

// Función para crear el selector de tónica principal (opcional)
function crearSelectorTonica(tonicaActual) {
    return ``;
}

// Función para crear el HTML de un verso
function crearVersoHTML(verso, index) {
    return `
        <div class="line" data-verso-id="${index}">
            <div class="chords">
                ${(verso.acordes || []).map((a, i) => `
                    <select class="chord no-arrow"
                            data-verso="${index}"
                            data-acorde="${i}"
                            data-base="${a.base}"
                            data-original="${a.acorde}"
                            style="left:${a.posicion}px">
                        ${generarOpcionesAcordes(a.acorde)}
                    </select>
                `).join('')}
            </div>
            <div class="lyrics">${verso.cantor || ''}</div>
            <div class="alyrics">${verso.coro1 || ''}</div>
            <div class="alyrics">${verso.coro2 || ''}</div>
            <div class="alyrics">${verso.coro3 || ''}</div>
        </div>
    `;
}

// Función para generar opciones de acordes
function generarOpcionesAcordes(acordeSeleccionado) {
    if (!acordeSeleccionado) return '';

    let opciones = [];
    const tipo = extraerTipoAcorde(acordeSeleccionado);
    const baseOriginal = acordeSeleccionado.replace(/[^A-Za-z#♭]/g, '');

    acordesCromaticos.forEach(nota => {
        const acordeCompleto = nota + tipo;
        const estaSeleccionado = acordeCompleto === acordeSeleccionado;
        opciones.push(`
            <option value="${acordeCompleto}" ${estaSeleccionado ? 'selected' : ''}>
                ${acordeCompleto}
            </option>
        `);
    });

    return opciones.join('');
}

// Extrae el tipo de acorde (m, 7, etc.)
function extraerTipoAcorde(acorde) {
    if (!acorde) return '';
    return acorde.replace(/^[A-Za-z#♭]+/, '');
}

// Función para obtener el índice de un acorde (sin considerar el tipo)
function obtenerIndiceBase(base) {
    return acordesCromaticos.indexOf(base);
}

// Función para calcular un acorde desplazado correctamente
function calcularAcordeDesplazado(acordeCompleto, desplazamiento) {
    if (!acordeCompleto) return '';

    const baseOriginal = acordeCompleto.split(/[^A-Za-z#♭]/)[0];
    const tipo = extraerTipoAcorde(acordeCompleto);
    const indiceOriginal = obtenerIndiceBase(baseOriginal);

    if (indiceOriginal === -1) return acordeCompleto;

    const indiceNuevo = (indiceOriginal + desplazamiento + acordesCromaticos.length) % acordesCromaticos.length;
    const baseNueva = acordesCromaticos[indiceNuevo];

    return baseNueva + tipo;
}

// Configurar los event listeners
function configurarSelectores() {
    // Selector de tónica principal (opcional)
    const selectorTonica = document.getElementById('tonica-principal');
    if (selectorTonica) {
        selectorTonica.addEventListener('change', function() {
            const nuevaTonica = this.value;
            const tonicaOriginal = acordesOriginales[0]?.base || 'Do';
            const desplazamiento = obtenerDesplazamiento(tonicaOriginal, nuevaTonica);
            transportarTodosAcordes(desplazamiento);
        });
    }

    // Botón de reset (opcional)
    const botonReset = document.getElementById('reset-transpose');
    if (botonReset) {
        botonReset.addEventListener('click', function() {
            transportarTodosAcordes(0);
            if (selectorTonica) {
                selectorTonica.value = acordesOriginales[0]?.base || 'Do';
            }
        });
    }

    // Selectores de acordes individuales
    document.querySelectorAll('.chord').forEach(select => {
        select.addEventListener('change', function(event) {
            const acordeSeleccionado = event.target.value;
            const acordeOriginalCompleto = event.target.dataset.original;

            if (acordeOriginalCompleto) {
                const baseOriginal = acordeOriginalCompleto.split(/[^A-Za-z#♭]/)[0];
                const baseSeleccionada = acordeSeleccionado.split(/[^A-Za-z#♭]/)[0];

                const desplazamiento = obtenerDesplazamiento(baseOriginal, baseSeleccionada);

                document.querySelectorAll('.chord').forEach(otroSelect => {
                    const valorOriginalOtro = otroSelect.dataset.original;
                    if (valorOriginalOtro) {
                        otroSelect.value = calcularAcordeDesplazado(valorOriginalOtro, desplazamiento);
                    }
                });

                // Actualizar el dataset.original de todos los selectores
                document.querySelectorAll('.chord').forEach(otroSelect => {
                    otroSelect.dataset.original = otroSelect.value;
                });

                // Actualizar el selector de tónica principal (opcional)
                if (selectorTonica) {
                    selectorTonica.value = baseSeleccionada;
                }
            }
        });
    });
}

// Transporta todos los acordes según el desplazamiento (se usa para el selector de tónica principal y el botón de reset)
function transportarTodosAcordes(desplazamiento) {
    document.querySelectorAll('.chord').forEach((select, index) => {
        const acordeOriginalCompleto = acordesOriginales[index]?.acorde;
        if (acordeOriginalCompleto) {
            select.value = calcularAcordeDesplazado(acordeOriginalCompleto, desplazamiento);
            select.dataset.original = select.value;
        }
    });
    desplazamientoActual = desplazamiento;
}

// Funciones de ayuda para cálculos cromáticos
function obtenerDesplazamiento(acordeInicial, acordeFinal) {
    const indiceInicial = obtenerIndiceBase(acordeInicial);
    const indiceFinal = obtenerIndiceBase(acordeFinal);

    if (indiceInicial === -1 || indiceFinal === -1) return 0;

    return (indiceFinal - indiceInicial + acordesCromaticos.length) % acordesCromaticos.length;
}

// 10.42 - 4.24.2025

function crearVersoHTML(verso, index) {
    // Determinar el texto y clase según el tipo
    const texto = verso.cantor || verso.coro || '';
    const esCoro = !!verso.coro;
    const tipoVoz = esCoro ? 'A' : 'C';
    
    return `
        <div class="linea ${verso.bis ? 'con-bis' : ''}">
            <div class="texto-contenedor" style="width: 100%;">
                <div class="chords">
                    ${(verso.acordes || []).map((a, i) => `
                        <select class="chord no-arrow"
                                data-verso="${index}"
                                data-acorde="${i}"
                                data-base="${a.base}"
                                data-original="${a.acorde}"
                                style="left:${a.posicion}px">
                            ${generarOpcionesAcordes(a.acorde)}
                        </select>
                    `).join('')}
                </div>
                <div class="${esCoro ? 'alyrics' : 'lyrics'}">${texto}</div>
            </div>
            <div class="indicadores">
                <span class="tipo-voz">${tipoVoz}</span>
                ${verso.bis ? `<div class="lvertical">${verso.bis}</div>` : ''}
            </div>
        </div>
    `;
}
