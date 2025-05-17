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
          const factor = 0.971; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "A TI, SEÑOR, SE DEBE LA ALABANZA EN SIÓN";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 65 (64)",
      dbnos: "6",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "A ti, Señor, se debe la alabanza, en Sión.",
/* 2 */        "A ti se te cumple el voto, en Jerusalén.",
/* 3 */        "A ti que escuchas la oración,",
/* 4 */        "viene todo mortal, viene todo mortal.",
/* 5 */        "Pesan sobre nosotros nuestros pecados,",
/* 6 */        "mas tú perdonas nuestras culpas.",
/* 7 */        "Dichoso el que tú eliges, el que tú llamas,",
/* 8 */        "vivirá en tus atrios.",
/* 9 */        "A ti que escuchas la oración,",
/* 10 */        "viene todo mortal, viene todo mortal. ",
/* 11 */        "Nos saciaremos de los bienes de tu casa,",
/* 12 */        "de la santidad de tu templo.",
/* 13 */        "Con los prodigios de tu amor tú nos hablas,",
/* 14 */        "con los portentos de tu justicia nos respondes.",
/* 15 */        "A ti que escuchas la oración,",
/* 16 */        "viene todo mortal, viene todo mortal. ",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m"), ac("La","cp624","7")],
/* 2*/      [ac("Re", "cp256","m")],
/* 3*/      [ac("Sol", "cp23","m"), ac("Re","cp404","m")],
/* 4*/      [ac("La", "cp10","7"), ac("Re","cp543","m")],
/* 5*/      [ac("Re", "cp20","m"), ac("La","cp582","7")],
/* 6*/      [ac("Re", "cp466","m")],
/* 7*/      [ac("La", "cp591","7")],
/* 8*/      [ac("Re", "cp228","m")],
/* 9*/      [ac("Sol", "cp48","m"), ac("Re","cp424","m")],
/* 10*/      [ac("La", "cp254","7"), ac("Re","cp570","m")],
/* 11*/      [ac("Re", "cp20","m"), ac("La","cp616","7")],
/* 12*/      [ac("Re", "cp358","m")],
/* 13*/      [ac("La", "cp611","7")],
/* 14*/      [ac("Re", "cp669","m")],
/* 15*/      [ac("Sol", "cp46","m"), ac("Re","cp420","m")],
/* 16*/      [ac("La", "cp262","7"), ac("Re","cp566","m")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "A TI QUE ESCUCHAS LA ORACIÓN",
/* 2 */        "VIENE TODO MORTAL,",
/* 3 */        "VIENE TODO MORTAL.",
/* 4 */        "A TI QUE ESCUCHAS LA ORACIÓN",
/* 5 */        "VIENE TODO MORTAL,",
/* 6 */        "VIENE TODO MORTAL.",
/* 7 */        "A TI QUE ESCUCHAS LA ORACIÓN",
/* 8 */        "VIENE TODO MORTAL,",
/* 9 */        "VIENE TODO MORTAL.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Si♭", "cp14",""), ac("La","cp510","7")],
/* 2*/      [ac("Si♭", "cp44","")],
/* 3*/      [ac("La", "cp316","7")],
/* 4*/      [ac("Si♭", "cp14",""), ac("La","cp510","7")],
/* 5*/      [ac("Si♭", "cp44","")],
/* 6*/      [ac("La", "cp316","7")],
/* 7*/      [ac("Si♭", "cp14",""), ac("La","cp510","7")],
/* 8*/      [ac("Si♭", "cp44","")],
/* 9*/      [ac("La", "cp316","7")],
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
