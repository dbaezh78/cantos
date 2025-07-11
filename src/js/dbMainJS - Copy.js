/***********************
 * CONFIGURACIÓN GENERAL
 ***********************/
const acordes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
const dbTrastes = ["♫ Traste", "1ᵉʳ traste", "2ᵒ traste", "3ᵉʳ traste", "4ᵒ traste", "5ᵒ traste", "6ᵒ traste", "7ᵒ traste", "8ᵒ traste", "9ᵒ traste", "10ᵒ traste"];

// Estado global
const estado = {
    scrolling: false,
    scrollInterval: null,
    deferredPrompt: null,
    acordesModificados: false
};

/***********************
 * FUNCIONES DE SERVICIO
 ***********************/
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

/***********************
 * FUNCIONES DE ACORDES
 ***********************/
function generarOpciones(defaultValue = "") {
    if (defaultValue === "") {
        return `<option value="" selected></option>` +
               acordes.map(acorde => `<option value="${acorde}">${acorde}</option>`).join('');
    }
    return acordes.map(acorde =>
        `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`
    ).join('');
}

function obtenerIndiceAcorde(acorde) {
    return acorde === "" ? -1 : acordes.indexOf(acorde);
}

function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    return indiceActual === -1 ? acorde : acordes[(indiceActual + desplazamiento + acordes.length) % acordes.length];
}

function configurarSelectores() {
    document.querySelectorAll('.chord').forEach(select => {
        const defaultValue = select.dataset.default || "";
        select.innerHTML = generarOpciones(defaultValue);
    });
}

/***********************
 * FUNCIONES DE ACORDES (SOLUCIÓN DEFINITIVA)
 ***********************/
function configurarEventosAcordes() {
    // Objeto para guardar los valores ORIGINALES (no se modifican)
    const valoresOriginales = new Map();
    
    document.querySelectorAll('.chord').forEach(select => {
        // Guardamos el valor original solo la primera vez
        if (!valoresOriginales.has(select)) {
            valoresOriginales.set(select, select.dataset.default || "");
        }
        
        select.addEventListener('change', function() {
            const valorOriginal = valoresOriginales.get(this);
            const currentAcorde = this.value;
            
            // Solo calcular si ambos valores son válidos
            if (valorOriginal && currentAcorde) {
                const desplazamiento = obtenerIndiceAcorde(currentAcorde) - obtenerIndiceAcorde(valorOriginal);
                
                document.querySelectorAll('.chord').forEach(otroSelect => {
                    const otroOriginal = valoresOriginales.get(otroSelect);
                    if (otroOriginal) {
                        otroSelect.value = calcularAcordeDesplazado(otroOriginal, desplazamiento);
                    }
                });
            }
        });
    });
}
function renderizarAcordes(contenedor, acordesData) {
    const divAcordes = document.createElement('div');
    divAcordes.className = 'chords';

    acordesData.forEach(acorde => {
        const acordeValido = acorde.acorde && acorde.acorde.trim() !== "";
        const grupo = document.createElement('div');
        grupo.className = 'chord-container';
        grupo.classList.add(acorde.posicion);

        const select = document.createElement('select');
        select.className = 'chord no-arrow';
        select.name = 'nMusic';
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
 * CONTROL DE DESPLAZAMIENTO
 ***********************/
function iniciarDesplazamiento() {
    if (estado.scrolling) return;
    estado.scrolling = true;
    
    const btn = document.getElementById('startScroll');
    if (!btn) return;

    const velocidad = parseInt(btn.getAttribute('data-velocidad')) || 50;
    const incremento = parseFloat(btn.getAttribute('data-incremento')) || 0.7;

    const icon = btn.querySelector('span');
    if (icon) icon.textContent = 'pause';

    estado.scrollInterval = setInterval(() => {
        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
            window.scrollBy(0, incremento);
        } else {
            detenerDesplazamiento();
        }
    }, velocidad);
}

function detenerDesplazamiento() {
    if (!estado.scrolling) return;
    clearInterval(estado.scrollInterval);
    estado.scrolling = false;

    const btn = document.getElementById('startScroll');
    if (btn) {
        const icon = btn.querySelector('span');
        if (icon) icon.textContent = 'south';
    }
}

function toggleDesplazamiento() {
    estado.scrolling ? detenerDesplazamiento() : iniciarDesplazamiento();
}

function configurarEventosDesplazamiento() {
    const scrollBtn = document.getElementById('startScroll');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDesplazamiento();
        });
    }

    document.addEventListener('click', function(e) {
        if (!estado.scrolling) return;
        let target = e.target;
        let isScrollButton = false;

        while (target && target !== document) {
            if (target.id === 'startScroll') {
                isScrollButton = true;
                break;
            }
            target = target.parentNode;
        }

        if (!isScrollButton) detenerDesplazamiento();
    });

    document.addEventListener('dblclick', detenerDesplazamiento);
}

/***********************
 * FUNCIONES DEL REPRODUCTOR
 ***********************/
function configurarReproductor() {
    const audioBtn = document.getElementById('audio-control-btn');
    const audioPlayer = document.querySelector('.saudio');

    if (!audioBtn || !audioPlayer) return;

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
                audioPlayer.style.display = 'block';
                await audioPlayer.play();
                icon.textContent = 'pause_circle';
                audioPlayer.setAttribute('controls', '');
            } else {
                audioPlayer.style.display = 'none';
                audioPlayer.pause();
                icon.textContent = 'play_circle';
                audioPlayer.removeAttribute('controls');
            }
        } catch (error) {
            console.error('Error en reproducción:', error);
            audioPlayer.style.display = 'block';
            audioPlayer.setAttribute('controls', '');
            const originalIcon = icon.textContent;
            icon.textContent = 'error';

            setTimeout(() => {
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
                modal.innerHTML = `<p>La paz de Cristo Herman@, al parecer este canto aun no está disponible...</p>
                                  <button onclick="this.parentNode.remove()" style="margin-top: 10px; padding: 8px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>`;
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
        audioPlayer.style.display = 'none';
        audioPlayer.removeAttribute('controls');
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
    const elementos = {
        tc: partitura.tituloc,
        t1: partitura.titulo,
        s1: partitura.salmo,
        dbno: partitura.dbnos,
        catg: partitura.catg
    };

    Object.entries(elementos).forEach(([id, valor]) => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.textContent = valor;
    });

    // Asamblea
    partitura.asamblea.forEach((texto, i) => {
        const elemento = document.getElementById(`a${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.asambleaAcordes?.[i]) {
                renderizarAcordes(elemento.parentElement, partitura.asambleaAcordes[i]);
            }
        }
    });

    // Cantor
    partitura.cantor.forEach((texto, i) => {
        const elemento = document.getElementById(`c${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.cantorAcordes?.[i]) {
                renderizarAcordes(elemento.parentElement, partitura.cantorAcordes[i]);
            }
        }
    });

    configurarEventosAcordes();
}

/***********************
 * BUSCADOR
 ***********************/
async function buscarCantos(query) {
    try {
        const response = await fetch(`/cantos/resucito/find/index.json?v=${Date.now()}`);
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error en búsqueda:", error);
        throw error;
    }
}

function mostrarResultados(resultados) {
    const contenedor = document.getElementById('resultadosBusqueda');
    if (!contenedor) return;

    contenedor.innerHTML = resultados.length === 0 
        ? '<div class="resultado-item">No hay coincidencias</div>'
        : resultados.map(canto => `
            <div class="resultado-item" onclick="window.location.href='${canto.archivo}'">
                <strong>${canto.titulo}</strong><br>
                <small>${canto.salmo}</small>
            </div>
        `).join('');

    contenedor.style.display = 'block';
}

function configurarBuscador() {
    const inputBusqueda = document.getElementById('inputBusqueda');
    if (!inputBusqueda) return;

    inputBusqueda.addEventListener('input', async function(e) {
        const query = normalizeText(e.target.value.trim());
        const resultadosDiv = document.getElementById('resultadosBusqueda');
        
        if (!resultadosDiv) return;
        if (query.length < 1) {
            resultadosDiv.style.display = 'none';
            resultadosDiv.innerHTML = '';
            return;
        }

        try {
            const cantos = await buscarCantos();
            const resultados = cantos.filter(canto => 
                normalizeText(canto.titulo).includes(query) ||
                normalizeText(canto.letra).includes(query)
            );
            mostrarResultados(resultados);
        } catch (error) {
            resultadosDiv.innerHTML = `
                <div class="resultado-item">
                    Error al cargar: ${error.message}<br>
                    <small>Ruta intentada: /cantos/resucito/find/index.json</small>
                </div>`;
            resultadosDiv.style.display = 'block';
        }
    });

    document.addEventListener('click', function(e) {
        const buscador = document.querySelector('.buscador-cantos');
        const resultados = document.getElementById('resultadosBusqueda');
        if (resultados && buscador && !buscador.contains(e.target)) {
            resultados.style.display = 'none';
        }
    });
}

/***********************
 * TOGGLE VISIBILITY
 ***********************/
function configurarToggleVisibility() {
    const iconTop = document.querySelector('.home .mso');
    const iconBottom = document.querySelector('.encabezado-columnas .mso.hline.bcoro');
    const headerRow = document.querySelector('tr.encabezado-columnas.odb');

    if (!iconTop || !iconBottom || !headerRow) return;

    iconTop.style.display = 'none';
    iconBottom.style.display = 'inline-block';
    headerRow.style.display = '';

    function toggleVisibility() {
        headerRow.style.display = headerRow.style.display === 'none' ? '' : 'none';
        iconTop.style.display = iconTop.style.display === 'none' ? 'inline-block' : 'none';
        iconBottom.style.display = iconBottom.style.display === 'none' ? 'inline-block' : 'none';
        localStorage.setItem('headerVisible', headerRow.style.display !== 'none');
    }

    iconBottom.addEventListener('click', toggleVisibility);
    iconTop.addEventListener('click', toggleVisibility);

    if (localStorage.getItem('headerVisible') === 'false') {
        headerRow.style.display = 'none';
        iconTop.style.display = 'inline-block';
        iconBottom.style.display = 'none';
    }
}

/***********************
 * PWA INSTALL
 ***********************/
function configurarPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/cantos/sworker.js')
                .then(registration => {
                    console.log('Service Worker registrado:', registration.scope);
                })
                .catch(error => {
                    console.error('Error registrando Service Worker:', error);
                });
        });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        estado.deferredPrompt = e;
        console.log('Evento beforeinstallprompt capturado.');
        const installButton = document.getElementById('installButton');
        if (installButton) installButton.style.display = 'block';
    });

    window.addEventListener('appinstalled', () => {
        console.log('PWA instalada con éxito.');
        const installButton = document.getElementById('installButton');
        if (installButton) installButton.style.display = 'none';
        estado.deferredPrompt = null;
    });
}

/***********************
 * INICIALIZACIÓN
 ***********************/
function inicializarCantoPage() {
    const catgElement = document.getElementById('catg');
    if (catgElement) {
        catgElement.addEventListener('click', () => {
            window.location.reload();
        });
    }

    configurarSelectores();
    configurarEventosAcordes();
    configurarEventosDesplazamiento();
    configurarTrastes();
    configurarReproductor();

    document.getElementById('toggleVista')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contenedorColumnas').classList.toggle('columnas-apiladas');
    });

    document.getElementById('toggle')?.addEventListener('change', function() {
        toggleElementos('.hct', this.checked ? 'show' : 'hide');
    });

    document.querySelectorAll('.bcoro').forEach(linea => {
        linea.addEventListener('click', () => {
            const target = linea.nextElementSibling;
            if (target) target.classList.toggle('dbhide');
        });
    });

    const divsOffBtn = document.querySelector('.divsOff-btn');
    if (divsOffBtn) divsOffBtn.addEventListener('click', divsOff);

    const selector = document.getElementById('acorde-selector');
    const imagenAcorde = document.getElementById('acorde-imagen');
    if (selector && imagenAcorde) {
        const acordesMap = {
            "Do": "/cantos/src/ima/do.jpg", "Dom": "/cantos/src/ima/dom.jpg", "Do7": "/cantos/src/ima/do7.jpg",
            // ... (todos los demás acordes)
        };

        for (const acorde in acordesMap) {
            const option = document.createElement('option');
            option.value = acorde;
            option.textContent = acorde;
            selector.appendChild(option);
        }

        selector.addEventListener('change', function() {
            const acordeSeleccionado = this.value;
            if (acordeSeleccionado && acordesMap[acordeSeleccionado]) {
                imagenAcorde.src = acordesMap[acordeSeleccionado];
                imagenAcorde.alt = `Acorde ${acordeSeleccionado}`;
                imagenAcorde.style.display = 'block';
            } else {
                imagenAcorde.style.display = 'none';
            }
        });

        imagenAcorde.addEventListener('dblclick', function() {
            imagenAcorde.style.display = 'none';
        });
    }
}

function inicializarAplicacion() {
    if (!document.querySelector('link[rel="manifest"]')) {
        const linkManifest = document.createElement('link');
        linkManifest.rel = 'manifest';
        linkManifest.href = '/cantos/src/js/manifest.json';
        document.head.appendChild(linkManifest);
    }

    configurarPWA();
    configurarBuscador();
    configurarToggleVisibility();

    if (document.getElementById('tc')) {
        inicializarCantoPage();
    }
}

document.addEventListener('DOMContentLoaded', inicializarAplicacion);