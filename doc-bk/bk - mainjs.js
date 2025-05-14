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
    return acordes.map(acorde => 
        `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`
    ).join('');
}

function configurarSelectores() {
    document.querySelectorAll('.chord').forEach(select => {
        select.innerHTML = generarOpciones(select.dataset.default);
    });
}

function obtenerIndiceAcorde(acorde) {
    return acordes.indexOf(acorde);
}

function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    return indiceActual === -1 ? acorde : acordes[(indiceActual + desplazamiento + acordes.length) % acordes.length];
}

function configurarEventosAcordes() {
    document.querySelectorAll('.chord').forEach(select => {
        select.addEventListener('change', function() {
            const desplazamiento = obtenerIndiceAcorde(this.value) - obtenerIndiceAcorde(this.dataset.default || "");
            
            document.querySelectorAll('.chord').forEach(otroSelect => {
                otroSelect.value = calcularAcordeDesplazado(otroSelect.dataset.default || "", desplazamiento);
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

/***********************
 * FUNCIONES DEL REPRODUCTOR
 ***********************/
function configurarReproductor() {
    const audioBtn = document.getElementById('audio-control-btn');
    const audioPlayer = document.querySelector('.saudio');
    
    if (!audioBtn || !audioPlayer) {
        console.error('Elementos del reproductor no encontrados');
        return;
    }
    
    const icon = audioBtn.querySelector('.audio-icon');
    
    audioBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        try {
            document.getElementById('reproductor-audio').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            if (audioPlayer.paused) {
                await audioPlayer.play().catch(err => {
                    audioPlayer.controls = true;
                    throw err;
                });
                icon.textContent = 'pause_circle';
                
                setTimeout(() => {
                    audioPlayer.removeAttribute('controls');
                }, 9999999999999);
            } else {
                audioPlayer.pause();
                icon.textContent = 'play_circle';
                audioPlayer.setAttribute('controls', '');
            }
        } catch (error) {
            console.error('Error en reproducción:', error);
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
    });
}

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
FUNCION DE BUSCADOR
******************************************/
// Función de búsqueda corregida
document.getElementById('inputBusqueda').addEventListener('input', async function(e) {
    const query = e.target.value.toLowerCase().trim();
    const resultadosDiv = document.getElementById('resultadosBusqueda');
    
    if (query.length < 1) {
        resultadosDiv.style.display = 'none';
        return;
    }

    try {
        // Ruta absoluta desde el origen /cantos/
        const response = await fetch(`/cantos/resucito/find/index.json?v=${Date.now()}`);
        
        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status}`);
        }
        
        const cantos = await response.json();
        console.log("Datos cargados:", cantos); // Para depuración
        
        const resultados = cantos.filter(canto => 
            canto.titulo.toLowerCase().includes(query) || 
            canto.letra.includes(query)
        ).slice(0, 8);

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

// Función para mostrar resultados (mejorada)
function mostrarResultados(resultados) {
    const contenedor = document.getElementById('resultadosBusqueda');
    contenedor.innerHTML = '';

    if (resultados.length === 0) {
        contenedor.innerHTML = '<div class="resultado-item">No hay coincidencias</div>';
    } else {
        resultados.forEach(canto => {
            const div = document.createElement('div');
            div.className = 'resultado-item';
            div.innerHTML = `
                <strong>${canto.titulo}</strong>
                <br>
                <small>${canto.salmo}</small>
            `;
            /* Esto se ha suprimido de la presentacion de la busqueda
                            <br>
                <small class="ruta-archivo">${canto.archivo}</small>


            */
            div.onclick = () => window.location.href = canto.archivo;
            contenedor.appendChild(div);
        });
    }
    contenedor.style.display = 'block';
}


/* ****************************************
FUNCION DE BUSCADOR
******************************************/


/***********************
 * INICIO DE LA APLICACIÓN
 ***********************/
document.addEventListener('DOMContentLoaded', inicializarAplicacion);



