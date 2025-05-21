/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
//  --cp1: 0.1%;
      //  --cp18: 1.8%;
      //  --cp486: 48.6%;
      //  --cp1547: 154.7%;
    };
// Mapeo específico para tablets (800px)
const pTablet = {
//  --cp1: 0.1%;
      //  --cp18: 1.8%;
      //  --cp486: 48.6%;
      //  --cp1547: 154.7%;
    };

function ac(nota, posicion, extension = "") {
      const anchoPantalla = window.innerWidth;
      let posicionAjustada = posicion;

// Solo ajustamos para tablets (601px a 900px)
      if (anchoPantalla > 600 && anchoPantalla <= 900) {
        posicionAjustada = pTablet[posicion] || posicion;

        // Si no está en el mapeo, aplicamos un factor general más preciso
        if (!pTablet[posicion]) {
          const numero = parseInt(posicion.replace('cp', ''));
          const factor = 0.93; // Factor más preciso para 800px
          posicionAjustada = `cp${Math.round(numero * factor)}`;
        }
      }

      // Solo ajustamos para tablets (284px a 384px)
      if (anchoPantalla > 284 && anchoPantalla <= 411) {
            posicionAjustada = pcelular[posicion] || posicion;
            
            // Si no está en el mapeo, aplicamos un factor general más preciso
            if (!pcelular[posicion]) {
              const numero = parseInt(posicion.replace('cp', ''));
              const factor = 1.3; // Factor más preciso para 384px
              posicionAjustada = `cp${Math.round(numero * factor)}`;
            }
          }
      
      return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
    }
  
    /***********************
     * DATOS DEL CANTO
     ***********************/

const NOMBREDELCANTO = "ACLAMACIONES A LA ORACIÓN DE LOS FIELES";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Respuestas a las oraciones de los fieles, Modelo I, II, III, IV",
      dbnos: "179",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Te lo pedimos Señor.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("Re","cp286",""), ac("Sol","cp342","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "TE LO PEDIMOS SEÑOR.",
/* 2 */        "ESCÚCHANOS, OH SEÑOR",
/* 3 */        "ACUÉRDATE DE NOSOTROS,",
/* 4 */        "AHORA QUE ESTÁS EN TU REINO.",
/* 5 */        "OYE, PADRE, EL GRITO DE TU PUEBLO",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp321","m"), ac("Si","cp402","7"), ac("Mi","cp478","m")],
/* 2*/      [ac("Mi", "cp14","m"), ac("Re","cp256",""), ac("Mi","cp383","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("Re","cp357",""), ac("Sol","cp419","")],
/* 4*/      [ac("La", "cp14","m"), ac("Mi","cp451","m"), ac("Si","cp521","7"), ac("Mi","cp598","m")],
/* 5*/      [ac("Mi", "cp14","m"), ac("La","cp104","m"), ac("Si","cp229","7"), ac("Mi","cp530","m")],
      ]
  };

/************************************************
 * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
************************************************/

    let cargando = false;
    
    function cargarCantoSeguro(partitura) {
      if (!cargando) {
        cargando = true;
        cargarCanto(partitura);
        setTimeout(() => { cargando = false; }, 300);
      }
    }
    
    let timeoutRedimension;
    function manejarRedimensionamiento() {
      clearTimeout(timeoutRedimension);
      timeoutRedimension = setTimeout(() => {
        cargarCantoSeguro(partitura);
      }, 200);
    }
    
    // Iniciar carga del canto y configurar eventos
    document.addEventListener('DOMContentLoaded', () => {
      // Limpiar contenido existente primero para evitar duplicados
      const contenedor = document.getElementById('contenedor-partitura'); // Asegúrate de tener este ID
      if (contenedor) contenedor.innerHTML = '';
      
      cargarCantoSeguro(partitura);
      window.addEventListener('resize', manejarRedimensionamiento);
    });
