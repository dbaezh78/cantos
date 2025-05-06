/***********************
 * CONFIGURACIÓN GENERAL
 ***********************/
const acordes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
let scrolling = false;
let scrollInterval;

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
        grupo.classList.add(acorde.posicion); // Añade clase con la variable de posición
        
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



/*********************************************************************
 *                      CONTROL DE DESPLAZAMIENTO
 *********************************************************************/

function iniciarDesplazamiento() {
    if (scrolling) return;
    
    scrolling = true;
    const btn = document.getElementById('startScroll');
    const velocidad = parseInt(btn.getAttribute('data-velocidad')) || 50;
    const incremento = parseFloat(btn.getAttribute('data-incremento')) || 0.7;

    scrollInterval = setInterval(() => {
        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
            window.scrollBy(0, incremento);
        } else {
            detenerDesplazamiento();
        }
    }, velocidad);
}

function detenerDesplazamiento() {
    clearInterval(scrollInterval);
    scrolling = false;
}




/*********************************************************************
*                   CARGA DE CANTOS (ACTUALIZADA)
*********************************************************************/
function cargarCanto(partitura) {
    // Metadatos
    document.getElementById('tc').textContent = partitura.tituloc;
    document.getElementById('t1').textContent = partitura.titulo;
    document.getElementById('s1').textContent = partitura.salmo;
    document.getElementById('dbno').textContent = partitura.dbnos;

    // Asamblea (arrays paralelos)
    partitura.asamblea.forEach((texto, i) => {
        const elemento = document.getElementById(`a${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.asambleaAcordes && partitura.asambleaAcordes[i]) {
                renderizarAcordes(elemento.parentElement, partitura.asambleaAcordes[i]);
            }
        }
    });

    // Cantor (arrays paralelos - nueva estructura)
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
 * EVENTOS
 ***********************/
document.addEventListener('DOMContentLoaded', () => {
    // Configuración inicial
    configurarSelectores();
    
    // Eventos generales
    document.addEventListener('dblclick', detenerDesplazamiento);
    document.getElementById('startScroll')?.addEventListener('click', (e) => {
        e.preventDefault();
        iniciarDesplazamiento();
    });
    document.getElementById('toggle')?.addEventListener('change', function() {
        toggleElementos('.hct', this.checked ? 'show' : 'hide');
    });

    // Eventos para coros
    document.querySelectorAll('.bcoro').forEach(linea => {
        linea.addEventListener('click', () => {
            const target = linea.nextElementSibling;
            if (target) {
                target.classList.toggle('dbhide');
            }
        });
    });
});




// BAJAR AL PRESIONAR TITULO


// OCULTAR CONTENIDO

// Seleccionar todas las primeras líneas    // bcoro = chorus
const firstLines = document.querySelectorAll('.bcoro');

// Iterar sobre cada línea para agregar eventos
firstLines.forEach(firstLine => {
  firstLine.addEventListener('click', () => {
    const hcoro = firstLine.nextElementSibling; // Obtener el siguiente hermano (chorus)
    if (hcoro) {
      hcoro.classList.toggle('hidden'); // Alternar la visibilidad
    }
  });
});

  // Hemos cambiado desactivarDivs por divsOff
function divsOff() {
    // Obtener todos los elementos con la clase "doff"
    const divs = document.querySelectorAll('.doff');
    // Alternar la clase "divoff" en cada div
    divs.forEach(div => {
        div.classList.toggle('divoff');
    });
}

// REPRODUCTOR MEJORADO

// CONTROL DEL REPRODUCTOR DE AUDIO MEJORADO
document.addEventListener('DOMContentLoaded', function() {
    const audioBtn = document.getElementById('audio-control-btn');
    const audioPlayer = document.querySelector('.saudio');
    
    if (!audioBtn || !audioPlayer) {
        console.error('Elementos del reproductor no encontrados');
        return;
    }
    
    // Icono del botón
    const icon = audioBtn.querySelector('.audio-icon');
    
    audioBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        try {
            // 1. Desplazamiento al reproductor
            document.getElementById('reproductor-audio').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // 2. Control de reproducción
            if (audioPlayer.paused) {
                // Intenta reproducir
                await audioPlayer.play().catch(err => {
                    // Si falla por políticas del navegador
                    audioPlayer.controls = true;
                    throw err;
                });
                icon.textContent = 'pause_circle';
                
                // Ocultar controles después de reproducir
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
            
            // Mostrar controles y feedback al usuario
            audioPlayer.setAttribute('controls', '');
            const originalIcon = icon.textContent;
            icon.textContent = 'error';
            
            // Mensaje para el usuario
            setTimeout(() => {
                alert('Por favor haz clic en el botón de play del reproductor para iniciar la música.');
            }, 100);
            
            // Restaurar ícono
            setTimeout(() => {
                icon.textContent = originalIcon;
            }, 2000);
        }
    });
    
    // Actualizar ícono cuando el audio termine
    audioPlayer.addEventListener('ended', function() {
        icon.textContent = 'play_circle';
    });
});


// FUNCION PARA DIVIDIR CANTO

document.getElementById('toggleVista')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contenedorColumnas').classList.toggle('columnas-apiladas');
});



// FUNCION DEL TRASTE SELECIONADO

// Lista de trastes
const dbTrastes = ["♫", "1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°"];

// Función para generar las opciones del menú desplegable
function dbGenerarOpciones(defaultValue) {
    return dbTrastes
        .map(traste => `<option value="${traste}"${traste === defaultValue ? ' selected' : ''}>${traste}</option>`)
        .join('');
}

// Configurar cada selector de trastes
document.querySelectorAll('.dbMiTraste').forEach(select => {
    const dbDefaultValue = select.dataset.default || "1°"; // Si no se especifica, por defecto será "1°"
    select.innerHTML = dbGenerarOpciones(dbDefaultValue);
});