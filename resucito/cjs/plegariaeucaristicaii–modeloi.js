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

const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA II";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "PModelo I (Página 1)",
      dbnos: "194",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Levantemos el corazón.",
/* 3 */        "Demos gracias al Señor, nuestro Dios.",
/* 4 */        "En verdad es justo y necesario,",
/* 5 */        "es nuestro deber y salvación",
/* 6 */        "darte gracias,",
/* 7 */        "siempre y en todo lugar,",
/* 8 */        "a ti, Padre Santo,",
/* 9 */        "por Jesucristo, tu Hijo amado.",
/* 10 */        "Por Él, que es tu Palabra,",
/* 11 */        "hiciste todas las cosas.",
/* 12 */        "Tú nos lo enviaste hecho hombre",
/* 13 */        "por obra del Espíritu Santo,",
/* 14 */        "para que, nacido de María la Virgen,",
/* 15 */        "fuera nuestro Salvador y Redentor. ",
/* 16 */        "Él, en cumplimiento de tu voluntad,",
/* 17 */        "para destruir la muerte",
/* 18 */        "y manifestar la resurrección,",
/* 19 */        "extendió sus brazos en la cruz,",
/* 20 */        "y así adquirió para ti",
/* 21 */        "un pueblo santo.",
/* 22 */        "Por eso, con los ángeles y los santos,",
/* 23 */        "cantamos tu gloria diciendo:",
/* 24 */        "• Melodía adaptable para los prefacios de solemnidades o de varios tiempos litúrgicos.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 5*/      [ac(" ", "cp","m")],
/* 6*/      [ac("Do", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("Fa", "cp14","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 20*/      [ac("Fa", "cp14","")],
/* 21*/      [ac("Mi", "cp14","7")],
/* 22*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("", "cp0","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "Y CON TU ESPÍRITU.",
/* 2 */        "LO TENEMOS LEVANTADO HACIA EL SEÑOR.",
/* 3 */        "ES JUSTO Y NECESARIO.",
/* 4 */        "MURIENDO",
/* 5 */        "DESTRUYÓ NUESTRA MUERTE,",
/* 6 */        "RESUCITANDO",
/* 7 */        "RESTAURÓ NUESTRA VIDA.",
/* 8 */        "SANTO, SANTO, SANTO ... ",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Sol", "cp14","")],
/* 6*/      [ac("Fa", "cp14","")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8 */   [ac("", "cp0","")],
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
