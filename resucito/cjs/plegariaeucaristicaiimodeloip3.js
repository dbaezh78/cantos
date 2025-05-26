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
      salmo: "Modelo I (Página 3)",
      dbnos: "196",
      catg: "LITÚRGICOS",
      
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Acuérdate, Señor, de tu Iglesia",
/* 2 */        "extendida por toda la tierra;",
/* 3 */        "y con el Papa...",
/* 4 */        "N/.",
/* 5 */        ", con nuestro obispo...",
/* 6 */        "N/.",
/* 7 */        "y de todos los que en ella cuidan de tu pueblo,",
/* 8 */        "llévala a su perfección por la caridad.",
/* 9 */        "Acuérdate también de nuestros hermanos",
/* 10 */        "que durmieron en la esperanza",
/* 11 */        "de la resurrección,",
/* 12 */        "y de todos los que han muerto",
/* 13 */        "en tu misericordia;",
/* 14 */        "admítelos a contemplar la luz de tu rostro.",
/* 15 */        "Ten misericordia de todos nosotros,",
/* 16 */        "y así, con María, la Virgen Madre de Dios,",
/* 17 */        "su esposo San José, los apóstoles",
/* 18 */        "y cuantos vivieron en tu amistad",
/* 19 */        "a través de los tiempos",
/* 20 */        "merezcamos, por tu Hijo Jesucristo,",
/* 21 */        "compartir la vida eterna",
/* 22 */        "y cantar tus alabanzas. ",
/* 23 */        "Por Cristo, con Cristo y en Cristo,",
/* 24 */        "a ti, Dios Padre omnipotente,",
/* 25 */        "en la unidad del Espíritu Santo,",
/* 26 */        "todo honor y toda gloria",
/* 27 */        "por los siglos de los siglos.",
/* 28 */        "Por Cristo, con Cristo y en Cristo,",
/* 29 */        "a ti, Dios Padre omnipotente,",
/* 30 */        "en la unidad del Espíritu Santo,",
/* 31 */        "todo honor y toda gloria",
/* 32 */        "por los siglos de los siglos.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14","")],
/* 2*/      [ac("Mi", "cp379","m")],
/* 3*/      [ac("La", "cp14","m")],
/* 4 */     [ac("", "cp0","")],
/* 5*/      [ac("Mi", "cp290","m")],
/* 6 */     [ac("", "cp0","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("Si","cp318","m"), ac("Mi","cp567","m")],
/* 9*/      [ac("Sol", "cp10","")],
/* 10*/     [ac("Si", "cp10","m")],
/* 11 */    [ac("", "cp0","")],
/* 12*/     [ac("La", "cp14","m")],
/* 13*/     [ac("Mi", "cp210","m")],
/* 14*/     [ac("Sol", "cp14",""), ac("Si","cp348","m"), ac("Mi","cp608","m")],

/* 15*/     [ac("Sol", "cp14",""), ac("Mi","cp485","m")],
/* 16*/     [ac("La", "cp14","m")],
/* 17*/     [ac("Mi", "cp286","m"), ac("La","cp439","m")],
/* 18*/     [ac("Mi", "cp14","m")],
/* 19 */    [ac("", "cp0","")],
/* 20*/     [ac("Sol", "cp14","")],
/* 21*/     [ac("Si", "cp123","m")],
/* 22*/     [ac("La", "cp107",""), ac("Mi","cp267","m")],

/* 23*/     [ac("Sol", "cp14","")],
/* 24*/     [ac("Si", "cp6","m")],
/* 25*/     [ac("La", "cp14","m")],
/* 26*/     [ac("Mi", "cp14","m")],
/* 27*/     [ac("Sol", "cp14","")],

/* 28*/     [ac("Sol", "cp14",""), ac("Re","cp463","7")],
/* 29*/     [ac("Sol", "cp403","")],
/* 30*/     [ac("Mi", "cp14","m"), ac("Si","cp419","7")],
/* 31*/     [ac("Mi", "cp316","m")],
/* 32*/     [ac("Do", "cp4",""), ac("Si","cp333","7")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "AMÉN, AMÉN, AMÉN",
/* 2 */        "AMÉN, AMÉN, AMÉN.",
/* 3 */        "AMÉN, AMÉN, AMÉN.",
/* 4 */        "AMÉN, AMÉN, AMÉN.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Si","cp157","m"), ac("La","cp219",""), ac("Mi","cp296","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Mi", "cp30","m")],
/* 4*/      [ac("Re", "cp46",""), ac("Sol","cp298","")],

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
