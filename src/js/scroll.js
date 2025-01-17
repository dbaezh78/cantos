let scrolling = false; // Variable para controlar si el desplazamiento está activo
let scrollInterval;    // Variable para almacenar el intervalo del desplazamiento

document.getElementById('startScroll').addEventListener('click', function (e) {
    e.preventDefault();

    if (scrolling) return; // Si ya está desplazándose, no hace nada

    scrolling = true;

    // Velocidad del desplazamiento (en milisegundos)
    const velocidad = 50; // Menor es más rápido
    const incremento = 0.7; // Cantidad de píxeles que se mueve cada vez

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

// Detener el desplazamiento con doble clic en cualquier parte de la pantalla
document.addEventListener('dblclick', function () {
    if (scrolling) {
        clearInterval(scrollInterval); // Detener el intervalo del desplazamiento
        scrolling = false;
    }
});




/*
document.getElementById('startScroll').addEventListener('click', function (e) {
    e.preventDefault();

    // Velocidad del desplazamiento (en milisegundos)
    const velocidad = 50; // Menor es más rápido
    const incremento = 0.7; // Cantidad de píxeles que se mueve cada vez

    // Función para desplazar hacia abajo lentamente
    function bajarSuavemente() {
      if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
        window.scrollBy(0, incremento);
        setTimeout(bajarSuavemente, velocidad);
      }
    }

    bajarSuavemente();
  });
  
  */