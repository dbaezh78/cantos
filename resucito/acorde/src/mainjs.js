/***********************
 * CONFIGURACIÓN GENERAL
 ***********************/
const acordes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
const dbTrastes = ["♫", "1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°"];

// Variables de estado global
let scrolling = false;
let scrollInterval = null;

/***********************
 * FUNCIONES DE ACORDES
 ***********************/
function generarOpciones(defaultValue = "") {
    // Si el valor por defecto está vacío, agregamos una opción vacía seleccionada
    if (defaultValue === "") {
        return `<option value="" selected></option>` + 
               acordes.map(acorde => `<option value="${acorde}">${acorde}</option>`).join('');
    }
    
    // Caso normal con valor por defecto
    return acordes.map(acorde => 
        `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`
    ).join('');
}

function configurarSelectores() {
    document.querySelectorAll('.chord').forEach(select => {
        // Usamos empty string si dataset.default no está definido
        const defaultValue = select.dataset.default || "";
        select.innerHTML = generarOpciones(defaultValue);
    });
}

function obtenerIndiceAcorde(acorde) {
    // Devuelve -1 para acordes vacíos
    return acorde === "" ? -1 : acordes.indexOf(acorde);
}

function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    // Mantiene el valor vacío si el acorde original estaba vacío
    return indiceActual === -1 ? acorde : acordes[(indiceActual + desplazamiento + acordes.length) % acordes.length];
}

function configurarEventosAcordes() {
    document.querySelectorAll('.chord').forEach(select => {
        select.addEventListener('change', function() {
            const defaultAcorde = this.dataset.default || "";
            const currentAcorde = this.value;
            
            // Solo calcular desplazamiento si ambos acordes no están vacíos
            const desplazamiento = (defaultAcorde && currentAcorde) 
                ? obtenerIndiceAcorde(currentAcorde) - obtenerIndiceAcorde(defaultAcorde)
                : 0;
            
            document.querySelectorAll('.chord').forEach(otroSelect => {
                const otroDefault = otroSelect.dataset.default || "";
                otroSelect.value = calcularAcordeDesplazado(otroDefault, desplazamiento);
            });
        });
    });
}

function renderizarAcordes(contenedor, acordesData) {
    const divAcordes = document.createElement('div');
    divAcordes.className = 'chords';
    
    acordesData.forEach(acorde => {
        const grupo = document.createElement('div');
        grupo.className = 'chord-container';
        grupo.classList.add(acorde.posicion);
        
        const select = document.createElement('select');
        select.className = 'chord no-arrow';
        select.name = 'nMusic';
        select.dataset.default = acorde.base;
        select.innerHTML = generarOpciones(acorde.base);
        
        grupo.appendChild(select);
        
        if (acorde.extension) {
            const ext = document.createElement('i');
            ext.innerHTML = `<b class="csv">${acorde.extension}</b>`;
            grupo.appendChild(ext);
        }
        
        divAcordes.appendChild(grupo);
    });
    
    contenedor.insertBefore(divAcordes, contenedor.querySelector('.lyrics'));
}

/***********************
 * FUNCIONES DE INTERFAZ
 ***********************/
function toggleElementos(clase, accion) {
    document.querySelectorAll(clase).forEach(el => {
        el.classList[accion === 'show' ? 'remove' : 'add']('hidden');
    });
}

function divsOff() {
    document.querySelectorAll('.doff').forEach(div => {
        div.classList.toggle('divoff');
    });
}

/***********************
 * MOSTRAR IMAGENES
 ***********************/
function mostrarImagen(src) {
    const imgContainer = document.getElementById('imagen-container');
    document.getElementById('imagen-nota').src = src;
    imgContainer.style.display = 'block';
    imgContainer.scrollIntoView({ behavior: 'smooth' });
}


function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'block';
    setTimeout(() => mensaje.style.display = 'none', 3000);
}

/***********************
 * CONTROL DE DESPLAZAMIENTO MEJORADO
 ***********************/
function toggleDesplazamiento() {
    if (scrolling) {
        detenerDesplazamiento();
    } else {
        iniciarDesplazamiento();
    }
}

function iniciarDesplazamiento() {
    if (scrolling) return;
    
    scrolling = true;
    const btn = document.getElementById('startScroll');
    if (!btn) return;
    
    const velocidad = parseInt(btn.getAttribute('data-velocidad')) || 50;
    const incremento = parseFloat(btn.getAttribute('data-incremento')) || 0.7;

    // Cambiar ícono del botón
    const icon = btn.querySelector('span');
    if (icon) icon.textContent = 'pause';
    
    scrollInterval = setInterval(() => {
        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
            window.scrollBy(0, incremento);
        } else {
            detenerDesplazamiento();
        }
    }, velocidad);
}

function detenerDesplazamiento() {
    if (!scrolling) return;
    
    clearInterval(scrollInterval);
    scrollInterval = null;
    scrolling = false;
    
    // Restaurar ícono del botón
    const btn = document.getElementById('startScroll');
    if (btn) {
        const icon = btn.querySelector('span');
        if (icon) icon.textContent = 'south';
    }
}

function configurarEventosDesplazamiento() {
    const scrollBtn = document.getElementById('startScroll');
    
    // Evento para el botón (toggle)
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDesplazamiento();
        });
    }
    
    // Evento para detener al hacer clic en cualquier parte
    document.addEventListener('click', function(e) {
        if (!scrolling) return;
        
        let target = e.target;
        let isScrollButton = false;
        
        // Verificar si el clic fue en el botón o sus hijos
        while (target && target !== document) {
            if (target.id === 'startScroll') {
                isScrollButton = true;
                break;
            }
            target = target.parentNode;
        }
        
        // Detener solo si no fue en el botón
        if (!isScrollButton) {
            detenerDesplazamiento();
        }
    });
    
    // También detener al hacer doble clic
    document.addEventListener('dblclick', detenerDesplazamiento);
}

/******************************
 * FUNCIONES DEL REPRODUCTOR
 ******************************/

function configurarReproductor() {
    const audioBtn = document.getElementById('audio-control-btn');
    const audioPlayer = document.querySelector('.saudio');
    
    if (!audioBtn || !audioPlayer) {
        console.error('Elementos del reproductor no encontrados');
        return;
    }
    
    // Ocultar el reproductor inicialmente
    audioPlayer.style.display = 'none';
    
    const icon = audioBtn.querySelector('.audio-icon');
    
    audioBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        try {
            document.getElementById('reproductor-audio').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            if (audioPlayer.paused) {
                // Mostrar el reproductor cuando se da play
                audioPlayer.style.display = 'block';
                await audioPlayer.play().catch(err => {
                    audioPlayer.controls = true;
                    throw err;
                });
                icon.textContent = 'pause_circle';
                audioPlayer.setAttribute('controls', '');
            } else {
                // Ocultar el reproductor cuando se pausa
                audioPlayer.style.display = 'none';
                audioPlayer.pause();
                icon.textContent = 'play_circle';
                audioPlayer.removeAttribute('controls');
            }
        } catch (error) {
            console.error('Error en reproducción:', error);
            audioPlayer.style.display = 'block'; // Mostrar en caso de error
            audioPlayer.setAttribute('controls', '');
            const originalIcon = icon.textContent;
            icon.textContent = 'error';
            
            setTimeout(() => {
                alert('Por favor haz clic en el botón de play del reproductor para iniciar la música.');
            }, 100);
            
            setTimeout(() => {
                icon.textContent = originalIcon;
            }, 2000);
        }
    });
    
    audioPlayer.addEventListener('ended', function() {
        const icon = document.querySelector('#audio-control-btn .audio-icon');
        if (icon) icon.textContent = 'play_circle';
        audioPlayer.style.display = 'none'; // Ocultar cuando termina la reproducción
        audioPlayer.removeAttribute('controls');
    });
}

/******************************
 * FUNCIONES DEL REPRODUCTOR ULTIMA LINEA
 ******************************/


/***********************
 * FUNCIONES DE TRASTES
 ***********************/
function dbGenerarOpciones(defaultValue) {
    return dbTrastes
        .map(traste => `<option value="${traste}"${traste === defaultValue ? ' selected' : ''}>${traste}</option>`)
        .join('');
}

function configurarTrastes() {
    document.querySelectorAll('.dbMiTraste').forEach(select => {
        const dbDefaultValue = select.dataset.default || "1°";
        select.innerHTML = dbGenerarOpciones(dbDefaultValue);
    });
}

/***********************
 * CARGA DE CANTOS
 ***********************/
function cargarCanto(partitura) {
    // Metadatos
    document.getElementById('tc').textContent = partitura.tituloc;
    document.getElementById('t1').textContent = partitura.titulo;
    document.getElementById('s1').textContent = partitura.salmo;
    document.getElementById('dbno').textContent = partitura.dbnos;
    document.getElementById('catg').textContent = partitura.catg;

    // Asamblea
    partitura.asamblea.forEach((texto, i) => {
        const elemento = document.getElementById(`a${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.asambleaAcordes && partitura.asambleaAcordes[i]) {
                renderizarAcordes(elemento.parentElement, partitura.asambleaAcordes[i]);
            }
        }
    });

    // Cantor
    partitura.cantor.forEach((texto, i) => {
        const elemento = document.getElementById(`c${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.cantorAcordes && partitura.cantorAcordes[i]) {
                renderizarAcordes(elemento.parentElement, partitura.cantorAcordes[i]);
            }
        }
    });

    configurarEventosAcordes();
}

/***********************
 * CONFIGURACIÓN INICIAL
 ***********************/
function inicializarAplicacion() {
    configurarSelectores();
    configurarEventosAcordes();
    configurarEventosDesplazamiento();
    configurarTrastes();
    configurarReproductor();
    
    // Evento para alternar vista
    document.getElementById('toggleVista')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contenedorColumnas').classList.toggle('columnas-apiladas');
    });

    // Evento para toggle de elementos
    document.getElementById('toggle')?.addEventListener('change', function() {
        toggleElementos('.hct', this.checked ? 'show' : 'hide');
    });

    // Eventos para coros
    document.querySelectorAll('.bcoro').forEach(linea => {
        linea.addEventListener('click', () => {
            const target = linea.nextElementSibling;
            if (target) target.classList.toggle('dbhide');
        });
    });

    // Evento para divsOff
    const divsOffBtn = document.querySelector('.divsOff-btn');
    if (divsOffBtn) {
        divsOffBtn.addEventListener('click', divsOff);
    }
}

/* ****************************************
FUNCION DE BUSCADOR MEJORADA
******************************************/
document.getElementById('inputBusqueda').addEventListener('input', async function(e) {
    const query = normalizeText(e.target.value.trim());
    const resultadosDiv = document.getElementById('resultadosBusqueda');
    
    if (query.length < 1) {
        resultadosDiv.style.display = 'none';
        resultadosDiv.innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`/cantos/resucito/find/index.json?v=${Date.now()}`);
        
        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status}`);
        }
        
        const cantos = await response.json();
        
        // Normalizar y buscar
        const resultados = cantos.filter(canto => {
            const tituloNormalizado = normalizeText(canto.titulo);
            const letraNormalizada = normalizeText(canto.letra);
            
            return tituloNormalizado.includes(query) || 
                   letraNormalizada.includes(query);
        });

        mostrarResultados(resultados);
    } catch (error) {
        console.error("Error en búsqueda:", error);
        resultadosDiv.innerHTML = `
            <div class="resultado-item">
                Error al cargar: ${error.message}<br>
                <small>Ruta intentada: /cantos/resucito/find/index.json</small>
            </div>`;
        resultadosDiv.style.display = 'block';
    }
});

// Función para normalizar texto (quitar acentos, comas, etc.)
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita acentos
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // quita signos de puntuación
}

// Función para mostrar resultados con scroll lateral
function mostrarResultados(resultados) {
    const contenedor = document.getElementById('resultadosBusqueda');
    contenedor.innerHTML = '';

    if (resultados.length === 0) {
        contenedor.innerHTML = '<div class="resultado-item">No hay coincidencias</div>';
        contenedor.style.display = 'block';
        return;
    }

    // Crear contenedor principal
    const mainResults = document.createElement('div');
    mainResults.className = 'main-results';
    
    // Mostrar todos los resultados en el contenedor principal con scroll
    resultados.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'resultado-item';
        div.innerHTML = `
            <strong>${canto.titulo}</strong>
            <br>
            <small>${canto.salmo}</small>
        `;
        div.onclick = () => window.location.href = canto.archivo;
        mainResults.appendChild(div);
    });

    contenedor.appendChild(mainResults);
    contenedor.style.display = 'block';
}

// Cerrar resultados al hacer clic fuera
document.addEventListener('click', function(e) {
    const buscador = document.querySelector('.buscador-cantos');
    const resultados = document.getElementById('resultadosBusqueda');
    
    if (!buscador.contains(e.target)) {
        resultados.style.display = 'none';
    }
});

/* ****************************************
FIN FUNCION DE BUSCADOR
******************************************/

/******************************************
    TOGGLE VISIBILITY - SOLUCIÓN CORRECTA
******************************************/

document.addEventListener('DOMContentLoaded', function() {
    // 1. Selección correcta de elementos
    const iconTop = document.querySelector('.home .mso'); // Ícono superior (sin clase odb en tu HTML)
    const iconBottom = document.querySelector('.encabezado-columnas .mso.hline.bcoro'); // Ícono inferior
    const headerRow = document.querySelector('tr.encabezado-columnas.odb'); // Fila del encabezado

    // 2. Estado inicial
    iconTop.style.display = 'none'; // Ocultar ícono superior al inicio
    iconBottom.style.display = 'inline-block'; // Mostrar ícono inferior
    headerRow.style.display = ''; // Mostrar encabezado (cambia a 'none' si quieres oculto al inicio)

    // 3. Función mejorada de toggle
    function toggleVisibility() {
        // Alternar encabezado
        headerRow.style.display = headerRow.style.display === 'none' ? '' : 'none';
        
        // Alternar íconos de forma cruzada
        iconTop.style.display = iconTop.style.display === 'none' ? 'inline-block' : 'none';
        iconBottom.style.display = iconBottom.style.display === 'none' ? 'inline-block' : 'none';
        
        // Guardar estado (opcional)
        localStorage.setItem('headerVisible', headerRow.style.display !== 'none');
    }

    // 4. Eventos correctamente asignados
    iconBottom.addEventListener('click', toggleVisibility);
    iconTop.addEventListener('click', toggleVisibility);

    // 5. Cargar estado guardado (opcional)
    const savedState = localStorage.getItem('headerVisible');
    if (savedState === 'false') {
        headerRow.style.display = 'none';
        iconTop.style.display = 'inline-block';
        iconBottom.style.display = 'none';
    }
});

/******************************************
    TOGGLE VISIBILITY - SOLUCIÓN CORRECTA
******************************************/




//****************************************************************
//************************* MOVER ACORDES ************************
//****************************************************************
// Modifica estas funciones en tu JS:

// Variables globales
let acordeSeleccionado = null;
let posicionInicialX = 0;
let posicionInicialLeft = 0;
let indicadorPosicion = null;

// Crear indicador de posición
function crearIndicador() {
    indicadorPosicion = document.createElement('div');
    indicadorPosicion.id = 'indicador-posicion';
    indicadorPosicion.style.position = 'fixed';
    indicadorPosicion.style.top = '10px';
    indicadorPosicion.style.left = '10px';
    indicadorPosicion.style.background = 'rgba(0,0,0,0.7)';
    indicadorPosicion.style.color = 'white';
    indicadorPosicion.style.padding = '5px 10px';
    indicadorPosicion.style.borderRadius = '3px';
    indicadorPosicion.style.zIndex = '10000';
    document.body.appendChild(indicadorPosicion);
}

// Habilitar arrastre para todos los dispositivos
function habilitarArrastreAcordes() {
    const acordes = document.querySelectorAll('.chord-container');
    
    acordes.forEach(acorde => {
        acorde.addEventListener('mousedown', iniciarArrastre);
        acorde.addEventListener('touchstart', iniciarArrastreTouch, { passive: false });
    });
}

// Iniciar arrastre (mouse)
function iniciarArrastre(e) {
    e.preventDefault();
    configurarArrastre(e.clientX, this);
}

// Iniciar arrastre (touch)
function iniciarArrastreTouch(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
        configurarArrastre(e.touches[0].clientX, e.target.closest('.chord-container'));
    }
}

// Configuración común para ambos tipos de eventos
function configurarArrastre(clientX, acorde) {
    acordeSeleccionado = acorde;
    posicionInicialX = clientX;
    
    // Obtener posición real considerando el transform
    const rect = acorde.getBoundingClientRect();
    const parentRect = acorde.parentElement.getBoundingClientRect();
    posicionInicialLeft = ((rect.left + rect.width/2 - parentRect.left) / parentRect.width) * 100;
    
    document.addEventListener('mousemove', arrastrarAcorde);
    document.addEventListener('mouseup', soltarAcorde);
    document.addEventListener('touchmove', arrastrarAcordeTouch, { passive: false });
    document.addEventListener('touchend', soltarAcorde);
    
    actualizarIndicador(posicionInicialLeft);
}

// Arrastrar (mouse)
function arrastrarAcorde(e) {
    if (!acordeSeleccionado) return;
    e.preventDefault();
    calcularNuevaPosicion(e.clientX);
}

// Arrastrar (touch)
function arrastrarAcordeTouch(e) {
    if (!acordeSeleccionado || e.touches.length !== 1) return;
    e.preventDefault();
    calcularNuevaPosicion(e.touches[0].clientX);
}

// Cálculo común de posición
function calcularNuevaPosicion(clientX) {
    const desplazamientoX = clientX - posicionInicialX;
    const parentRect = acordeSeleccionado.parentElement.getBoundingClientRect();
    const desplazamientoPorcentaje = (desplazamientoX / parentRect.width) * 100;
    const nuevoLeft = posicionInicialLeft + desplazamientoPorcentaje;
    const posicionFinal = Math.max(0, Math.min(100, nuevoLeft));
    
    acordeSeleccionado.style.left = `${posicionFinal}%`;
    actualizarIndicador(posicionFinal);
}

// Finalizar arrastre
function soltarAcorde() {
    if (!acordeSeleccionado) return;
    
    document.removeEventListener('mousemove', arrastrarAcorde);
    document.removeEventListener('mouseup', soltarAcorde);
    document.removeEventListener('touchmove', arrastrarAcordeTouch);
    document.removeEventListener('touchend', soltarAcorde);
    
    acordeSeleccionado = null;
}

// Obtener posición de las clases CSS
function obtenerValorDeClasePosicion(elemento) {
    const clasePosicion = Array.from(elemento.classList).find(cls => cls.startsWith('cp'));
    return clasePosicion ? parseInt(clasePosicion.replace('cp', '')) : 50; // 50% por defecto por el transform
}

// Actualizar indicador visual
function actualizarIndicador(posicion) {
    if (!indicadorPosicion) crearIndicador();
    indicadorPosicion.textContent = `Posición: ${posicion.toFixed(1)}%`;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        habilitarArrastreAcordes();
        crearIndicador();
    }, 500);
});

//****************************************************************
//************************* MOVER ACORDES ************************
//****************************************************************


//****************************************************************
//*************** AJUSTE DE ACORDES A 800px TABLE ****************
//****************************************************************

function ajustarPosicion(posicionOriginal, anchoPantalla) {
    // Si es móvil (384px), mantener posiciones originales
    if (anchoPantalla <= 480) {
      return posicionOriginal;
    }
    // Si es tablet (800px)
    else if (anchoPantalla <= 800) {
      // Aquí puedes definir cómo mapear las posiciones para tablet
      // Por ejemplo, podrías multiplicar por un factor
      const factorTablet = 1.5; // Ajusta este valor según necesites
      const numero = parseInt(posicionOriginal.replace('db', ''));
      return `db${Math.round(numero * factorTablet)}`;
    }
    // Para pantallas más grandes (1080px+)
    else {
      return posicionOriginal; // o ajustar con otro factor si es necesario
    }
  }

//****************************************************************
//*************** AJUSTE DE ACORDES A 800px TABLE ****************
//****************************************************************



/***********************
 * INICIO DE LA APLICACIÓN
 ***********************/
document.addEventListener('DOMContentLoaded', inicializarAplicacion);











/* Guardar Codigo cambiado*/
/*


// Variables globales
let acordeSeleccionado = null;
let posicionInicialX = 0;
let posicionInicialLeft = 0;
let indicadorPosicion = null;

// Crear indicador de posición (sin estilos intrusivos)
function crearIndicador() {
    indicadorPosicion = document.createElement('div');
    indicadorPosicion.id = 'indicador-posicion';
    indicadorPosicion.style.position = 'fixed';
    indicadorPosicion.style.bottom = '10px';
    indicadorPosicion.style.left = '10px';
    indicadorPosicion.style.background = 'rgba(0,0,0,0.7)';
    indicadorPosicion.style.color = 'white';
    indicadorPosicion.style.padding = '5px 10px';
    indicadorPosicion.style.borderRadius = '3px';
    indicadorPosicion.style.zIndex = '10000';
    document.body.appendChild(indicadorPosicion);
}

// Habilitar arrastre para todos los dispositivos
function habilitarArrastreAcordes() {
    const acordes = document.querySelectorAll('.chord-container');
    
    acordes.forEach(acorde => {
        // Para mouse
        acorde.addEventListener('mousedown', iniciarArrastre);
        // Para pantallas táctiles
        acorde.addEventListener('touchstart', iniciarArrastreTouch, { passive: false });
    });
}

// Iniciar arrastre (mouse)
function iniciarArrastre(e) {
    e.preventDefault();
    configurarArrastre(e.clientX, this);
}

// Iniciar arrastre (touch)
function iniciarArrastreTouch(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
        configurarArrastre(e.touches[0].clientX, e.target.closest('.chord-container'));
    }
}

// Configuración común para ambos tipos de eventos
function configurarArrastre(clientX, acorde) {
    acordeSeleccionado = acorde;
    posicionInicialX = clientX;
    posicionInicialLeft = parseInt(acorde.style.left) || obtenerValorDeClasePosicion(acorde);
    
    // Eventos para mouse
    document.addEventListener('mousemove', arrastrarAcorde);
    document.addEventListener('mouseup', soltarAcorde);
    
    // Eventos para touch
    document.addEventListener('touchmove', arrastrarAcordeTouch, { passive: false });
    document.addEventListener('touchend', soltarAcorde);
    
    actualizarIndicador(posicionInicialLeft);
}

// Arrastrar (mouse)
function arrastrarAcorde(e) {
    if (!acordeSeleccionado) return;
    e.preventDefault();
    calcularNuevaPosicion(e.clientX);
}

// Arrastrar (touch)
function arrastrarAcordeTouch(e) {
    if (!acordeSeleccionado || e.touches.length !== 1) return;
    e.preventDefault();
    calcularNuevaPosicion(e.touches[0].clientX);
}

// Cálculo común de posición
function calcularNuevaPosicion(clientX) {
    const desplazamientoX = clientX - posicionInicialX;
    const anchoContenedor = acordeSeleccionado.parentElement.offsetWidth;
    const nuevoLeft = posicionInicialLeft + (desplazamientoX / anchoContenedor * 100);
    const posicionFinal = Math.max(0, Math.min(100, nuevoLeft));
    
    acordeSeleccionado.style.left = `${posicionFinal}%`;
    actualizarIndicador(posicionFinal);
}

// Finalizar arrastre
function soltarAcorde() {
    if (!acordeSeleccionado) return;
    
    // Limpiar eventos mouse
    document.removeEventListener('mousemove', arrastrarAcorde);
    document.removeEventListener('mouseup', soltarAcorde);
    
    // Limpiar eventos touch
    document.removeEventListener('touchmove', arrastrarAcordeTouch);
    document.removeEventListener('touchend', soltarAcorde);
    
    acordeSeleccionado = null;
}

// Obtener posición de las clases CSS
function obtenerValorDeClasePosicion(elemento) {
    const clasePosicion = Array.from(elemento.classList).find(cls => cls.startsWith('cp'));
    return clasePosicion ? parseInt(clasePosicion.replace('cp', '')) : 0;
}

// Actualizar indicador visual
function actualizarIndicador(posicion) {
    if (!indicadorPosicion) crearIndicador();
    indicadorPosicion.textContent = `Posición: ${posicion.toFixed(1)}%`;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        habilitarArrastreAcordes();
        crearIndicador();
    }, 500);
});

*/