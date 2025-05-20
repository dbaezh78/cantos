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

const NOMBREDELCANTO = "ACLAMAD AL SEÑOR ";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 100 (99)",
      dbnos: "8",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Acercaos a Él",
/* 2 */        "con gritos de júbilo.",
/* 3 */        "Porque el Señor es nuestro Dios",
/* 4 */        "y nosotros su pueblo.",
/* 5 */        "Entrad por sus puertas",
/* 6 */        "con himnos de alegría.",
/* 7 */        "Bendecid su nombre",
/* 8 */        "dándole gracias.",
/* 9 */        "Porque es bueno el Señor,",
/* 10 */        "es eterno su amor",
/* 11 */        "con nosotros.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 2*/      [ac("Re", "cp14","m")],
/* 3*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 6*/      [ac("Re", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Re", "cp14","m")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "ACLAMAD AL SEÑOR",
/* 2 */        "TODA LA TIERRA,",
/* 3 */        "SERVID AL SEÑOR CON ALEGRÍA.",
/* 4 */        "ACLAMAD AL SEÑOR",
/* 5 */        "TODA LA TIERRA,",
/* 6 */        "SERVID AL SEÑOR CON ALEGRÍA.",
/* 7 */        "ACLAMAD AL SEÑOR",
/* 8 */        "TODA LA TIERRA,",
/* 9 */        "SERVID AL SEÑOR CON ALEGRÍA.",
/* 10 */        "ACLAMAD AL SEÑOR",
/* 11 */        "TODA LA TIERRA,",
/* 12 */        "SERVID AL SEÑOR CON ALEGRÍA.",
/* 13 */        "ACLAMAD AL SEÑOR",
/* 14 */        "TODA LA TIERRA,",
/* 15 */        "SERVID AL SEÑOR CON ALEGRÍA.",
/* 16 */        "ACLAMAD AL SEÑOR",
/* 17 */        "TODA LA TIERRA,",
/* 18 */        "SERVID AL SEÑOR CON ALEGRÍA.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp23","m"), ac("Re","cp160","m"), ac("La","cp232","")],
/* 3*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("La","cp150","")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","")],
/* 6*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("La","cp150","")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","")],
/* 9*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("La","cp150","")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("La","cp150","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","")],
/* 15*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("La","cp150","")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("La","cp150","")],
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