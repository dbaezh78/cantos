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
          const factor = 0.9853; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "ALELUYA INTERLECCIONAL";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo I, II, III",
      dbnos: "180",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Aleluya, aleluya, aleluya, aleluya.",
/* 2 */        "Yo soy la vid, vosotros los sarmientos.",
/* 3 */        "El que permanece en mí y yo en él,",
/* 4 */        "ése da fruto abundante.",
/* 5 */        "Yo soy la vid, vosotros los sarmientos.",
/* 6 */        "El que permanece en mí y yo en él,",
/* 7 */        "ése da fruto abundante.",
/* 8 */        "Aleluya, aleluya, aleluya.",
/* 9 */        "Yo soy la vid, vosotros los sarmientos.",
/* 10 */        "El que permanece en mí y yo en él,",
/* 11 */        "ése da fruto abundante.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("Do","cp337",""), ac("Re","cp384",""), ac("Sol","cp520","")],
/* 2*/      [ac("Mi", "cp14","m"), ac("Re","cp157",""), ac("Mi","cp513","m")],
/* 3*/      [ac("Re", "cp396",""), ac("Mi","cp536","m")],
/* 4*/      [ac("Re", "cp4",""), ac("Mi","cp308","m")],
/* 5*/      [ac("Do", "cp0",""), ac("Mi","cp155",""), ac("La","cp515","m")],
/* 6*/      [ac("Do", "cp0",""), ac("Mi","cp540","")],
/* 7*/      [ac("La", "cp308","m")],
/* 8*/      [ac("Mi", "cp6","m"), ac("Re","cp197",""), ac("Mi","cp366","m")],
/* 9*/      [ac("Mi", "cp14","m"), ac("La","cp163","m"), ac("Mi","cp511","m")],
/* 10*/      [ac("La", "cp526","m")],
/* 11*/      [ac("Mi", "cp300","m")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "ALELUYA, ALELUYA, ALELUYA, ALELUYA.",
/* 2 */        "ALELUYA, ALELUYA, ALELUYA, ALELUYA.",
/* 3 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 4 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 5 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 6 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 7 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 8 */        "ALELUYA, ALELUYA, ALELUYA.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Do","cp404",""), ac("Re","cp450",""), ac("Sol","cp611","")],
/* 2*/      [ac("Sol", "cp14",""), ac("Do","cp404",""), ac("Re","cp450",""), ac("Sol","cp611","")],
/* 3*/      [ac("Do", "cp14",""), ac("Mi","cp239",""), ac("La","cp440","m")],
/* 4*/      [ac("Do", "cp14",""), ac("Mi","cp239",""), ac("La","cp440","m")],
/* 5*/      [ac("Do", "cp14",""), ac("Mi","cp239",""), ac("La","cp440","m")],
/* 6*/      [ac("Do", "cp14",""), ac("Mi","cp239",""), ac("La","cp440","m")],
/* 7*/      [ac("Re", "cp242",""), ac("Mi","cp431","m")],
/* 8*/      [ac("Re", "cp242",""), ac("Mi","cp431","m")],
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