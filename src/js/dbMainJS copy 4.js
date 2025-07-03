/***********************
 * CONFIGURACIÓN GENERAL
 ***********************/

// Variable para almacenar el evento beforeinstallprompt
let deferredPrompt;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Registra el Service Worker. La ruta debe ser relativa a la raíz del dominio.
        // Si has movido sworker.js a /cantos/sworker.js, esta ruta es correcta
        // para que el scope sea /cantos/.
        navigator.serviceWorker.register('/cantos/sworker.js') // <--- RUTA CORRECTA SI EL ARCHIVO ESTÁ EN /cantos/sworker.js
            .then((registration) => {
                console.log('Service Worker registrado con éxito. Alcance:', registration.scope);
            })
            .catch((error) => {
                console.error('Fallo el registro del Service Worker:', error);
            });
    });
} else {
    console.log('Tu navegador no soporta Service Workers.');
}

// Evento para capturar el 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
    // Previene que el mini-infobar aparezca automáticamente
    e.preventDefault();
    // Guarda el evento para poder dispararlo más tarde.
    deferredPrompt = e;
    console.log('Evento beforeinstallprompt capturado.');
    // Muestra tu botón de instalación personalizado (si está oculto)
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'block'; // O 'flex', dependiendo de tu diseño CSS
    }
});

// Evento que se dispara después de que el usuario acepta o cancela la instalación
window.addEventListener('appinstalled', () => {
    console.log('PWA instalada con éxito.');
    // Oculta el botón de instalación si ya no es necesario
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'none';
    }
    // Limpia el evento guardado
    deferredPrompt = null;
});


const acordes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
const dbTrastes = ["♫ Traste", "1ᵉʳ traste", "2ᵒ traste", "3ᵉʳ traste", "4ᵒ traste", "5ᵒ traste", "6ᵒ traste", "7ᵒ traste", "8ᵒ traste", "9ᵒ traste", "10ᵒ traste"];

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
        // Verificamos si el acorde está vacío
        const acordeValido = acorde.acorde && acorde.acorde.trim() !== "";

        const grupo = document.createElement('div');
        grupo.className = 'chord-container';
        grupo.classList.add(acorde.posicion);

        const select = document.createElement('select');
        select.className = 'chord no-arrow';
        select.name = 'nMusic';
        // Usamos empty string si el acorde base está vacío
        select.dataset.default = acordeValido ? acorde.base : "";
        select.innerHTML = generarOpciones(select.dataset.default);

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
                // Usar un modal en lugar de alert()
                const errorMessage = 'La paz de Cristo Herman@, al parecer este canto aun no está disponible, estamos trabajando para ponerlo disponible lo más pronto posible....';
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    z-index: 1000;
                    text-align: center;
                    max-width: 80%;
                    font-family: sans-serif;
                `;
                modal.innerHTML = `<p>${errorMessage}</p><button onclick="this.parentNode.remove()" style="margin-top: 10px; padding: 8px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>`;
                document.body.appendChild(modal);
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

// En tu archivo JS principal (dbMainJS.js o similar)
document.getElementById('catg').addEventListener('click', () => {
  window.location.reload();
});


/***********************
 * CONFIGURACIÓN INICIAL
 ***********************/
function inicializarAplicacion() {
    // Añadir dinámicamente la etiqueta link para el manifest.json
    // Solo si no existe ya para evitar duplicados
    if (!document.querySelector('link[rel="manifest"]')) {
        const linkManifest = document.createElement('link');
        linkManifest.rel = 'manifest';
        linkManifest.href = '/cantos/src/js/manifest.json';
        document.head.appendChild(linkManifest);
        console.log('Manifiesto añadido dinámicamente al head.');
    }

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

    // Configurar el botón de instalación
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                // Muestra el prompt de instalación
                deferredPrompt.prompt();
                // Espera a que el usuario responda al prompt
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`El usuario ${outcome} el prompt de instalación.`);
                // Limpia el evento guardado
                deferredPrompt = null;
                // Oculta el botón después de la interacción
                installButton.style.display = 'none';
            } else {
                console.log('No hay un evento beforeinstallprompt disponible.');
                // Puedes mostrar un mensaje al usuario para indicar que ya está instalada
                // o que no se puede instalar en este momento.
                // Por ejemplo, un modal:
                const infoModal = document.createElement('div');
                infoModal.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    z-index: 1000;
                    text-align: center;
                    max-width: 80%;
                    font-family: sans-serif;
                `;
                infoModal.innerHTML = `<p>La aplicación ya está instalada o tu navegador no soporta la instalación directa.</p><button onclick="this.parentNode.remove()" style="margin-top: 10px; padding: 8px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>`;
                document.body.appendChild(infoModal);
            }
        });
        // Inicialmente ocultar el botón si no hay un prompt disponible al cargar
        if (!deferredPrompt) {
            installButton.style.display = 'none';
        }
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


/**************************************************************************
LLAMADA DE ACORDE Y SU IMAGEN
**************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    // Objeto con los acordes y sus rutas
    const acordes = {
		"Do": "/cantos/src/ima/do.jpg",
		"Dom": "/cantos/src/ima/dom.jpg",
		"Do7": "/cantos/src/ima/do7.jpg",
		"Do#": "/cantos/src/ima/dos.jpg",
		"Do#m": "/cantos/src/ima/dosm.jpg",
		"Do#7": "/cantos/src/ima/dos7.jpg",
		"Re♭": "/cantos/src/ima/dos.jpg",
		"Re": "/cantos/src/ima/re.jpg",
		"Rem": "/cantos/src/ima/rem.jpg",
		"Re7": "/cantos/src/ima/re7.jpg",
		"Rem9": "/cantos/src/ima/rem9.jpg",
		"Re#": "/cantos/src/ima/res.jpg",
		"Re#m": "/cantos/src/ima/resm.jpg",
		"Mi": "/cantos/src/ima/mi.jpg",
		"Mim": "/cantos/src/ima/mim.jpg",
		"Mi7": "/cantos/src/ima/mi7.jpg",
		"Mimaj7": "/cantos/src/ima/mimaj7.jpg",
		"Mi6": "/cantos/src/ima/mi6.jpg",
		"Mim6": "/cantos/src/ima/mim6.jpg",
		"Fa": "/cantos/src/ima/fa.jpg",
		"Fam": "/cantos/src/ima/fam.jpg",
		"Fa7": "/cantos/src/ima/fa7.jpg",
		"Famaj7": "/cantos/src/ima/famaj7.jpg",
		"Famaj713": "/cantos/src/ima/famaj713.jpg",
		"Fa#": "/cantos/src/ima/fas.jpg",
		"Fa#m": "/cantos/src/ima/fasm.jpg",
        "Fa# 5/9 dim": "/cantos/src/ima/fas5-9dim.jpg",
		"Sol": "/cantos/src/ima/sol.jpg",
		"Solm": "/cantos/src/ima/solm.jpg",
		"Sol7": "/cantos/src/ima/sol7.jpg",
		"Sol#": "/cantos/src/ima/sols.jpg",
		"Sol#m": "/cantos/src/ima/solsm.jpg",
		"Sol#7": "/cantos/src/ima/sols7.jpg",
		"La": "/cantos/src/ima/la.jpg",
		"Lam": "/cantos/src/ima/lam.jpg",
		"La7": "/cantos/src/ima/la7.jpg",
		"Lam7": "/cantos/src/ima/lam7.jpg",
		"La6": "/cantos/src/ima/la6.jpg",
		"Lam6": "/cantos/src/ima/lam6.jpg",
        "La♭": "/cantos/src/ima/lab.jpg",
		"Si": "/cantos/src/ima/si.jpg",
		"Sim": "/cantos/src/ima/Sim.jpg",
		"Si7": "/cantos/src/ima/si7.jpg",
		"Si♭": "/cantos/src/ima/sib.jpg",
		"Si♭m": "/cantos/src/ima/sibm.jpg",
		"Si♭7": "/cantos/src/ima/sib7.jpg",
    };

    const selector = document.getElementById('acorde-selector');
    const imagenAcorde = document.getElementById('acorde-imagen');

    // 🔽 Agregado: cerrar imagen con doble clic
    imagenAcorde.addEventListener('dblclick', function() {
        imagenAcorde.style.display = 'none';
    });

    // Llenar el select con las opciones de acordes
    for (const acorde in acordes) {
        const option = document.createElement('option');
        option.value = acorde;
        option.textContent = acorde;
        selector.appendChild(option);
    }

    // Manejar el cambio de selección
    selector.addEventListener('change', function() {
        const acordeSeleccionado = this.value;

        if (acordeSeleccionado && acordes[acordeSeleccionado]) {
            imagenAcorde.src = acordes[acordeSeleccionado];
            imagenAcorde.alt = `Acorde ${acordeSeleccionado}`;
            imagenAcorde.style.display = 'block';
        } else {
            imagenAcorde.src = '';
            imagenAcorde.alt = '';
            imagenAcorde.style.display = 'none';
        }
    });
});

/**************************************************************************
LLAMADA DE ACORDE Y SU IMAGEN
**************************************************************************/
