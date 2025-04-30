// Lista de acordes cromáticos
const acordesCromaticos = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
const tiposAcordes = ['', 'm', '7', 'm7', 'Maj7', 'dim', 'aug', '–'];

// Variables globales para el estado
let acordesOriginales = [];
let desplazamientoActual = 0;

// Función principal para cargar el canto
function cargarCanto(partitura) {
    // Cargar metadatos
    document.getElementById('t1').textContent = partitura.titulo;
    document.getElementById('s1').textContent = partitura.salmo;
    document.getElementById('dbno').textContent = partitura.dbnos;

    // Cargar textos de asamblea
    for (let i = 0; i < partitura.asamblea.length; i++) {
        const elemento = document.getElementById(`a${i+1}`);
        if (elemento) {
            elemento.textContent = partitura.asamblea[i];
            // Si hay acordes para esta línea, los cargamos
            if (partitura.asambleaAcordes[i]) {
                cargarAcordes(elemento, partitura.asambleaAcordes[i], i, 'A');
            }
        }
    }

    // Cargar textos de cantor
    for (let i = 0; i < partitura.cantor.length; i++) {
        const elemento = document.getElementById(`c${i+1}`);
        if (elemento) {
            elemento.textContent = partitura.cantor[i];
            // Si hay acordes para esta línea, los cargamos
            if (partitura.cantorAcordes[i]) {
                cargarAcordes(elemento, partitura.cantorAcordes[i], i, 'C');
            }
        }
    }

    // Extraer acordes originales para transposición
    acordesOriginales = extraerAcordesOriginales(partitura);
}

// Función para cargar los acordes en una línea
function cargarAcordes(elementoPadre, acordes, index, tipoVoz) {
    const contenedorAcordes = document.createElement('div');
    contenedorAcordes.className = 'chords';
    
    acordes.forEach((acorde, i) => {
        const select = document.createElement('select');
        select.className = 'chord no-arrow';
        select.style.left = `${acorde.posicion}px`;
        select.dataset.base = acorde.base;
        select.dataset.original = acorde.acorde;
        select.dataset.verso = index;
        select.dataset.acorde = i;
        select.dataset.tipo = tipoVoz;
        
        // Generar opciones de acordes
        generarOpcionesAcordes(select, acorde.acorde);
        
        contenedorAcordes.appendChild(select);
    });
    
    // Insertar antes del texto
    elementoPadre.parentNode.insertBefore(contenedorAcordes, elementoPadre);
}

// Función para extraer todos los acordes originales
function extraerAcordesOriginales(partitura) {
    const acordes = [];
    
    // Asamblea
    partitura.asambleaAcordes.forEach(grupo => {
        grupo.forEach(acorde => {
            if (acorde && acorde.acorde && acorde.base) {
                acordes.push({
                    base: acorde.base,
                    acorde: acorde.acorde,
                    tipo: extraerTipoAcorde(acorde.acorde),
                    posicion: acorde.posicion || 0
                });
            }
        });
    });
    
    // Cantor
    partitura.cantorAcordes.forEach(grupo => {
        grupo.forEach(acorde => {
            if (acorde && acorde.acorde && acorde.base) {
                acordes.push({
                    base: acorde.base,
                    acorde: acorde.acorde,
                    tipo: extraerTipoAcorde(acorde.acorde),
                    posicion: acorde.posicion || 0
                });
            }
        });
    });
    
    return acordes;
}

// Función para generar opciones de acordes
function generarOpcionesAcordes(selectElement, acordeSeleccionado) {
    if (!acordeSeleccionado) return;
    
    const tipo = extraerTipoAcorde(acordeSeleccionado);
    const baseOriginal = acordeSeleccionado.replace(/[^A-Za-z#♭]/g, '');
    
    acordesCromaticos.forEach(nota => {
        const option = document.createElement('option');
        option.value = nota + tipo;
        option.textContent = nota + tipo;
        if (option.value === acordeSeleccionado) {
            option.selected = true;
        }
        selectElement.appendChild(option);
    });
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

// Configurar los event listeners para los acordes
function configurarSelectores() {
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
            }
        });
    });
}

// Funciones de ayuda para cálculos cromáticos
function obtenerDesplazamiento(acordeInicial, acordeFinal) {
    const indiceInicial = obtenerIndiceBase(acordeInicial);
    const indiceFinal = obtenerIndiceBase(acordeFinal);
    
    if (indiceInicial === -1 || indiceFinal === -1) return 0;
    
    return (indiceFinal - indiceInicial + acordesCromaticos.length) % acordesCromaticos.length;
}

// Iniciar carga del canto cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Asegúrate de que partitura está definida en el ámbito global
    if (typeof partitura !== 'undefined') {
        cargarCanto(partitura);
        configurarSelectores();
    } else {
        console.error('Error: partitura no está definida');
    }
});