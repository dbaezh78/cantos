// Lista de acordes con todas las notas cromáticas
const acordes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];

// Función para generar las opciones del menú desplegable
function generarOpciones(defaultValue) {
    return acordes.map(acorde => 
        `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`
    ).join('');
}

// Configurar cada selector de acordes
document.querySelectorAll('.chord').forEach(select => {
    const defaultValue = select.dataset.default || "";
    select.innerHTML = generarOpciones(defaultValue);
});

// Función para obtener el índice de un acorde
function obtenerIndiceAcorde(acorde) {
    return acordes.indexOf(acorde);
}

// Función para calcular un acorde desplazado correctamente en la escala cromática
function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    if (indiceActual === -1) return acorde;
    const nuevoIndice = (indiceActual + desplazamiento + acordes.length) % acordes.length;
    return acordes[nuevoIndice];
}

// Registrar cambios en los selectores para sincronizar todos
document.querySelectorAll('.chord').forEach(select => {
    select.addEventListener('change', event => {
        const acordeSeleccionado = event.target.value;
        const acordeInicial = obtenerIndiceAcorde(event.target.dataset.default || "");
        
        // Calcular el desplazamiento relativo
        const desplazamiento = obtenerIndiceAcorde(acordeSeleccionado) - acordeInicial;

        // Actualizar todos los selectores basándose en sus valores iniciales
        document.querySelectorAll('.chord').forEach(otroSelect => {
            const valorInicial = otroSelect.dataset.default || "";
            otroSelect.value = calcularAcordeDesplazado(valorInicial, desplazamiento);
        });
    });
});

// Detener el desplazamiento con doble clic en cualquier parte de la pantalla
document.addEventListener('dblclick', function () {
    if (scrolling) {
        clearInterval(scrollInterval); // Detener el intervalo del desplazamiento
        scrolling = false;
    }
});


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

// Trabajando con la velocidad
// scroll que hace que baje lentamente

let scrolling = false; // Variable para controlar si el desplazamiento está activo
let scrollInterval;    // Variable para almacenar el intervalo del desplazamiento

document.getElementById('startScroll').addEventListener('click', function (e) {
    e.preventDefault();

    if (scrolling) return; // Si ya está desplazándose, no hace nada

    scrolling = true;

    // Lee los valores de velocidad e incremento desde los atributos del HTML
    const velocidad = parseInt(this.getAttribute('data-velocidad'), 10) || 50; // Valor predeterminado: 50 ms
    const incremento = parseFloat(this.getAttribute('data-incremento')) || 0.7; // Valor predeterminado: 0.7 px

    // Función para desplazar hacia abajo lentamente
    function bajarSuavemente() {
        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
            window.scrollBy(0, incremento);
        } else {
            clearInterval(scrollInterval); // Detener desplazamiento al llegar al final
            scrolling = false;
        }
    }

    // Comenzar el desplazamiento
    scrollInterval = setInterval(bajarSuavemente, velocidad);
});

 // Función para mostrar el mensaje y ocultarlo después de 5 segundos
        function mostrarMensaje() {
            const mensaje = document.getElementById('mensaje');
            mensaje.style.display = 'block'; // Muestra el mensaje

            // Oculta el mensaje después de 5 segundos (5000 milisegundos)
            setTimeout(() => {
                mensaje.style.display = 'none';
            }, 3000); // 3000 ms = 3 segundos
        }

    document.getElementById('toggle').addEventListener('change', function() {
        var elements = document.querySelectorAll('.hct');
        elements.forEach(function(element) {
            if (this.checked) {
                element.classList.remove('dhide');
            } else {
                element.classList.add('dhide');
            }
        }, this);
    });


    function mostrarImagen(src) {
		document.getElementById('imagen-nota').src = src;
		document.getElementById('imagen-container').style.display = 'block';
		
		// Desplazarse a la imagen
		document.getElementById('imagen-container').scrollIntoView({
			behavior: 'smooth'
		});
	}



    
/* Contenido de respaldo y para borrar */

/*
// Seleccionar la línea principal y el contenido
const lineaPrincipal = document.querySelector('.linea-principal');
const contenido = document.querySelector('.contenido');

// Añadir un evento click a la línea principal
lineaPrincipal.addEventListener('click', () => {
    // Alternar la clase 'oculto'
    contenido.classList.toggle('oculto');
});

*/


/*
    // Seleccionar la primera línea y el grupo de líneas (coro)
    const firstLine = document.getElementById('first-line');
    const chorus = document.getElementById('chorus');

    // Agregar un evento al hacer clic en la primera línea
    firstLine.addEventListener('click', () => {
      chorus.classList.toggle('hidden'); // Alternar la clase 'hidden' para mostrar/ocultar
    });
*/

/* 
  function divsOff() {
    // Obtener todos los elementos con la clase "doff"
    const divs = document.querySelectorAll('.doff');
  
    // Agregar la clase "divoff" a cada div
    divs.forEach(div => {
      div.classList.add('divoff');
    });
  }
*/
