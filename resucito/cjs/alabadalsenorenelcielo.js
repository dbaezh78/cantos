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

const NOMBREDELCANTO = "ALABAD AL SEÑOR EN EL CIELO";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Alabad al Señor en el cielo",
      dbnos: "11",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Alabad al Señor en el Cielo,",
/* 2 */        "alabad al Señor en lo alto,",
/* 3 */        "Alabadlo, todos sus ángeles;",
/* 4 */        "alabadlo, todos sus ejércitos.",
/* 5 */        "Alabadlo, sol y luna;",
/* 6 */        "alabadlo, estrellas lucientes. ",
/* 7 */        "Alabadlo, espacios celestes",
/* 8 */        "y aguas que cuelgan en el cielo",
/* 9 */        "Alaben el nombre del Señor, ",
/* 10 */        "porque Él lo mandó, y existieron. ",
/* 11 */        "Les dio consistencia perpetua ",
/* 12 */        "y una ley que no pasará.",
/* 13 */        "Alabad al Señor en la tierra,",
/* 14 */        "cetáceos y abismos del mar, ",
/* 15 */        "rayos, granizo, nieve y bruma, ",
/* 16 */        "viento huracanado",
/* 17 */        "que cumple sus órdenes,",
/* 18 */        "montes y todas las sierras, ",
/* 19 */        "árboles frutales y cedros, ",
/* 20 */        "fieras y animales domésticos, ",
/* 21 */        "reptiles y pájaros que vuelan. ",
/* 22 */        "Reyes y pueblos del orbe, ",
/* 23 */        "príncipes y jefes del mundo, ",
/* 24 */        "los jóvenes",
/* 25 */        "y también las doncellas, ",
/* 26 */        "los viejos a una con los niños, ",
/* 27 */        "alaben el nombre del Señor, ",
/* 28 */        "el único nombre sublime. ",
/* 29 */        "Su majestad,",
/* 30 */        "sobre el cielo y la tierra; ",
/* 31 */        "Él da fuerza y vigor a su pueblo. ",
/* 32 */        "Alabanza de todos sus fieles, ",
/* 33 */        "de Israel, su pueblo elegido.",







],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La ", "cp14","")],
/* 2*/      [ac("Fa#", "cp14","m")],
/* 3*/      [ac("La", "cp14","")],
/* 4*/      [ac("Fa#", "cp14","")],
/* 5*/      [ac(" ", "cp","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],







      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "¡ALABADLO!",
/* 2 */        "¡ALABADLO!",
/* 3 */        "¡ALABADLO!",
/* 4 */        "¡ALABADLO!",
/* 5 */        "¡ALABADLO!",
/* 6 */        "¡ALABADLO!",
/* 7 */        "¡ALABADLO!",
/* 8 */        "¡ALABADLO!",
/* 9 */        "¡ALABADLO!",
/* 10 */        "¡ALABADLO!",
/* 11 */        "¡ALABADLO!",
/* 12 */        "¡ALABADLO!",
/* 13 */        "¡ALABADLO!",
/* 14 */        "¡ALABADLO!",
/* 15 */        "¡ALABADLO!",
/* 16 */        "¡ALABADLO!",
/* 17 */        "¡ALABADLO!",
/* 18 */        "¡ALABADLO!",
/* 19 */        "¡ALABADLO!",
/* 20 */        "¡ALABADLO!",
/* 21 */        "¡ALABADLO!",
/* 22 */        "¡ALABADLO!",
/* 23 */        "¡ALABADLO!",
/* 24 */        "¡ALABADLO!",
/* 25 */        "¡ALABADLO!",
/* 26 */        "¡ALABADLO!",
/* 27 */        "¡ALABADLO!",
/* 28 */        "¡ALABADLO!",
/* 29 */        "¡ALABADLO!",
/* 30 */        "¡ALABADLO!",










      ],
      asambleaAcordes: [
/* 1 */   [ac("", "cp0","")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4 */   [ac("", "cp0","")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],











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
