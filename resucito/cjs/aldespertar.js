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
          const factor = 0.98; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "AL DESPERTAR";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 17 (16) ",
      dbnos: "10",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Escucha, Señor, mi oración,",
/* 2 */        "atiende, Señor, a mi clamor.",
/* 3 */        "Presta oídos a mi súplica,",
/* 4 */        "que mis labios no traicionan, Señor,",
/* 5 */        "salga de ti la sentencia.",
/* 6 */        "Porque tus ojos ven, tus ojos ven mi rectitud.",
/* 7 */        "Sondea, Señor, mi corazón,",
/* 8 */        "escrútalo de noche, Señor,",
/* 9 */        "pruébame al crisol, pruébame al crisol.",
/* 10 */        "Porque tú sabes que no hay malicia en mí,",
/* 11 */        "que mi boca no miente como hacen los hombres.",
/* 12 */        "Que he guardado tu palabra,",
/* 13 */        "que no he seguido los caminos del violento,",
/* 14 */        "que a tus huellas he ajustado mis pasos,",
/* 15 */        "que no vacilaré, que no vacilaré.",
/* 16 */        "A Ti te invoco, Señor,",
/* 17 */        "concédeme, Señor, una respuesta,",
/* 18 */        "muéstrame los prodigios de tu amor.",
/* 19 */        "Porque tú salvas al que se apoya en ti,",
/* 20 */        "porque tú ayudas",
/* 21 */        "al que se refugia a tu derecha.",
/* 22 */        "Como a la niña de tus ojos guárdame,",
/* 23 */        "a la sombra de tus alas escóndeme,",
/* 24 */        "mira que quieren matarme.",
/* 25 */        "Míralos, están cerrados en su orgullo,",
/* 26 */        "hablan, la arrogancia está en su boca.",
/* 27 */        "Avanzan contra mí, avanzan contra mí.",
/* 28 */        "Ayúdame tú, Señor,",
/* 29 */        "líbrame de los hombres de este mundo,",
/* 30 */        "de los hombres cuyo premio es esta vida.",
/* 31 */        "Cólmalos de tus bienes, Señor,",
/* 32 */        "llénales el vientre y que sus hijos se sacien.",
/* 33 */        "Que yo al despertar, que yo por tu amor",
/* 34 */        "me saciaré de tu rostro, Señor.",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m"), ac("Si","cp400","m")],
/* 2*/      [ac("Mi", "cp14","m"), ac("Si","cp418","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("Fa#","cp317","")],
/* 4*/      [ac("Sol", "cp196",""), ac("Fa#","cp560","")],
/* 5*/      [ac("Sol", "cp14",""), ac("Fa#","cp306","")],
/* 6*/      [ac("Mi", "cp197","m"), ac("Fa#","cp706","")],

/* 7*/      [ac("Mi", "cp14","m"), ac("Si","cp398","m")],
/* 8*/      [ac("Mi", "cp50","m"), ac("Si","cp390","m")],
/* 9*/      [ac("Sol", "cp14",""), ac("Fa#","cp394","")],
/* 10*/      [ac("Sol", "cp188",""), ac("Fa#","cp690","")],
/* 11*/      [ac("Sol", "cp144",""), ac("Fa#","cp702","")],
/* 12*/      [ac("Mi", "cp217","m")],
/* 13*/      [ac("Fa#", "cp659","")],
/* 14*/      [ac("Sol", "cp207",""), ac("Fa#","cp601","")],
/* 15*/      [ac("Mi", "cp79","m"), ac("Fa#","cp514","")],

/* 16*/      [ac("Mi", "cp14","m"), ac("Si","cp293","m")],
/* 17*/      [ac("Mi", "cp75","m"), ac("Si","cp493","m")],
/* 18*/      [ac("Sol", "cp14",""), ac("Fa#","cp341","")],
/* 19*/      [ac("Sol", "cp192",""), ac("Fa#","cp625","")],
/* 20*/      [ac("Sol", "cp203","")],
/* 21*/      [ac("Fa#", "cp421","")],
/* 22*/      [ac("Mi", "cp14","m"), ac("Fa#","cp503","")],
/* 23*/      [ac("Mi", "cp77","m"), ac("Fa#","cp459","")],
/* 24*/      [ac("Sol", "cp26",""), ac("Fa#","cp372","")],

/* 25*/      [ac("Mi", "cp14","m"), ac("Si","cp542","m")],
/* 26*/      [ac("Mi", "cp14","m"), ac("Si","cp558","m")],
/* 27*/      [ac("Sol", "cp14",""), ac("Fa#","cp368","")],
/* 28*/      [ac("Sol", "cp30",""), ac("Fa#","cp291","")],
/* 29*/      [ac("Sol", "cp14",""), ac("Fa#","cp576","")],
/* 30*/      [ac("Mi", "cp113","m"), ac("Fa#","cp633","")],
/* 31*/      [ac("Sol", "cp14",""), ac("Fa#","cp483","")],
/* 32*/      [ac("Sol", "cp14",""), ac("Fa#","cp629","")],
/* 33*/      [ac("Mi", "cp79","m")],
/* 34*/      [ac("Sol", "cp163",""), ac("Fa#","cp475","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "AL DESPERTAR",
/* 2 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 3 */        "AL DESPERTAR",
/* 4 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 5 */        "AL DESPERTAR",
/* 6 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 7 */        "AL DESPERTAR",
/* 8 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 9 */        "AL DESPERTAR",
/* 10 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 11 */        "AL DESPERTAR",
/* 12 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 13 */        "AL DESPERTAR",
/* 14 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 15 */        "AL DESPERTAR",
/* 16 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 17 */        "AL DESPERTAR",
/* 18 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
/* 19 */        "AL DESPERTAR",
/* 20 */        "ME SACIARÉ DE TU SEMBLANTE, SEÑOR.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Si", "cp0","m")],
/* 2*/      [ac("Sol", "cp190",""), ac("Si","cp444","m")],
/* 3*/      [ac("Mi", "cp207","m")],
/* 4*/      [ac("Si", "cp444","m")],

/* 5*/      [ac("Si", "cp0","m")],
/* 6*/      [ac("Sol", "cp190",""), ac("Si","cp444","m")],
/* 7*/      [ac("Mi", "cp207","m")],
/* 8*/      [ac("Si", "cp444","m")],

/* 9*/      [ac("Si", "cp0","m")],
/* 10*/     [ac("Sol", "cp190",""), ac("Si","cp444","m")],
/* 11*/     [ac("Mi", "cp207","m")],
/* 12*/     [ac("Si", "cp444","m")],

/* 13*/      [ac("Si", "cp0","m")],
/* 14*/      [ac("Sol", "cp190",""), ac("Si","cp444","m")],
/* 15*/      [ac("Mi", "cp207","m")],
/* 16*/      [ac("Si", "cp444","m")],

/* 17*/      [ac("Si", "cp0","m")],
/* 18*/      [ac("Sol", "cp190",""), ac("Si","cp444","m")],
/* 19*/      [ac("Mi", "cp207","m")],
/* 20*/      [ac("Si", "cp444","m")],
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
