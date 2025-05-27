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

const NOMBREDELCANTO = "SANTO";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Roma 77",
      dbnos: "217",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Los cielos y la tierra",
/* 2 */        "están llenos, están llenos de Ti.",
/* 3 */        "Bendito es el que viene,",
/* 4 */        "en el nombre, en el nombre del Señor.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp100",""), ac("La","cp257","m")],
/* 2*/      [ac("Sol", "cp123",""), ac("La","cp501","m")],
/* 3*/      [ac("La", "cp12","m"), ac("Sol","cp96",""), ac("La","cp311","m")],
/* 4*/      [ac("Sol", "cp111",""), ac("La","cp586","m")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "SANTO, SANTO, SANTO,",
/* 2 */        "SANTO, SANTO, SANTO.",
/* 3 */        "HOSANNA, HOSANNA,",
/* 4 */        "HOSANNA, HOSANNA,",
/* 5 */        "HOSANNA, HOSANNA,",
/* 6 */        "EN LO ALTO DEL CIELO.",
/* 7 */        "HOSANNA, HOSANNA,",
/* 8 */        "HOSANNA, HOSANNA,",
/* 9 */        "HOSANNA, HOSANNA,",
/* 10 */        "EN LO ALTO DEL CIELO.",
/* 11 */        "SANTO, SANTO, SANTO,",
/* 12 */        "SANTO, SANTO, SANTO.",
/* 13 */        "HOSANNA, HOSANNA,",
/* 14 */        "HOSANNA, HOSANNA,",
/* 15 */        "HOSANNA, HOSANNA,",
/* 16 */        "EN LO ALTO DEL CIELO.",
/* 17 */        "HOSANNA, HOSANNA,",
/* 18 */        "HOSANNA, HOSANNA,",
/* 19 */        "HOSANNA, HOSANNA,",
/* 20 */        "EN LO ALTO DEL CIELO.",
/* 21 */        "SANTO, SANTO, SANTO,",
/* 22 */        "SANTO, SANTO, SANTO.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp284","m")],
/* 3*/      [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 4*/      [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 5*/      [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 6*/      [ac("Fa", "cp105",""), ac("Mi","cp314","")],
/* 7*/      [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 8*/      [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 9*/      [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 10*/     [ac("La", "cp308","m")],
/* 11*/     [ac("La", "cp14","m")],
/* 12*/     [ac("Sol", "cp14",""), ac("La","cp284","m")],
/* 13*/     [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 14*/     [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 15*/     [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 16*/     [ac("Fa", "cp105",""), ac("Mi","cp314","")],
/* 17*/     [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 18*/     [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 19*/     [ac("Fa", "cp70",""), ac("Mi","cp259","")],
/* 20*/     [ac("La", "cp308","m")],
/* 21*/     [ac("La", "cp14","m")],
/* 22*/     [ac("Sol", "cp14",""), ac("La","cp284","m")],
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
