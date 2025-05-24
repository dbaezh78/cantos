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

const NOMBREDELCANTO = "PREFACIO PARA EL TIEMPO PASCUAL";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Prefacio para el tiempo Pascual",
      dbnos: "205",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Levantemos el corazón.",
/* 3 */        "Demos gracias al Señor, nuestro Dios.",
/* 4 */        "Realmente es justo y necesario,",
/* 5 */        "es nuestro deber y salvación",
/* 6 */        "glorificarte siempre, Señor,",
/* 7 */        "pero más que nunca en este día",
/* 8 */        "en que Cristo, nuestra Pascua,",
/* 9 */        "ha sido inmolado.",
/* 10 */        "Él es el verdadero cordero",
/* 11 */        "que quitó el pecado del mundo.",
/* 12 */        "Por eso, con esta efusión de gozo pascual,",
/* 13 */        "el mundo entero se desborda de alegría,",
/* 14 */        "y con la asamblea",
/* 15 */        "de los ángeles y de los santos,",
/* 16 */        "cantamos, cantamos el himno de tu gloria:",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp352","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp344","")],
/* 3*/      [ac("La", "cp568","m")],
/* 4*/      [ac("La", "cp14","m"), ac("Re","cp209","m"), ac("La","cp452","m")],
/* 5*/      [ac("Mi", "cp",""), ac("La","cp427","m")],
/* 6*/      [ac("Re", "cp214","m"), ac("La","cp402","m")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Mi", "cp216","")],
/* 10*/     [ac("La", "cp14","m"), ac("Sol","cp382","")],
/* 11*/     [ac("La", "cp429","m")],
/* 12*/     [ac("La", "cp14","m"), ac("Sol","cp665","")],
/* 13*/     [ac("La", "cp621","m")],
/* 14 */    [ac("", "cp0","")],
/* 15*/     [ac("Sol", "cp401","")],
/* 16*/     [ac("La", "cp58","m"), ac("Fa","cp183",""), ac("La","cp628","m")],
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
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp223","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp673","")],
/* 3*/      [ac("Sol", "cp68",""), ac("La","cp304","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Sol", "cp419","")],
/* 6*/      [ac("Fa", "cp145","")],
/* 7*/      [ac("Mi", "cp371","")],
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
