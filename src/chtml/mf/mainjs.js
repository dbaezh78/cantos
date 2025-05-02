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

/***********************
 * CONTROL DE DESPLAZAMIENTO
 ***********************/
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

/***********************
 * CARGA DE CANTOS (ACTUALIZADA)
 ***********************/
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
                target.classList.toggle('hidden');
            }
        });
    });
});


document.getElementById('toggleColumnas').addEventListener('click', function() {
    document.getElementById('contenedorColumnas').classList.toggle('modo-movil');
});




// OCULTAR CONTENIDO
