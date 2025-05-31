 /*********************** FUENTE DEL CANTO ***********************/
// ════════════════════════════
// Mapeo para celulares 483px
const pcelular = {
    };
// Mapeo específico para tablets (800px)
const pTablet = {
    };
// Función de Posición
function ac(nota, posicion, extension = "") {
      const anchoPantalla = window.innerWidth;
      let posicionAjustada = posicion;
// Ajustes de la table y el celular
// Solo ajustamos para tablets (601px a 900px)
      if (anchoPantalla > 600 && anchoPantalla <= 900) {
        posicionAjustada = pTablet[posicion] || posicion;
// ════════════════════════════════════════════════════════════════════════════════════
        // Si no está en el mapeo, aplicamos un factor general más preciso
        if (!pTablet[posicion]) {
          const numero = parseInt(posicion.replace('cp', ''));
          const factor = 0.93; // Factor más preciso para 800px
          posicionAjustada = `cp${Math.round(numero * factor)}`;
        }
      }
// ════════════════════════════════════════════════════════════════════════════════════
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
  
// ════════════════════════════════════════════════════════════════════════════════════
//     * DATOS DEL CANTO
// ════════════════════════════════════════════════════════════════════════════════════
// 
const NOMBREDELCANTO = "BENDITO ERES, SEÑOR";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Daniel 3,52-57",
      dbnos: "28",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Bendito eres, Señor,",
/* 2 */        "Dios de nuestros padres:",
/* 3 */        "Bendito sea tu nombre,",
/* 4 */        "tu nombre santo y glorioso:",
/* 5 */        "Bendito eres en el templo,",
/* 6 */        "en el templo de tu santa gloria:",
/* 7 */        "Bendito eres sobre el trono,",
/* 8 */        "sobre el trono de tu reino:",
/* 9 */        "Bendito entre querubines,",
/* 10 */        "tú, que sondeas los abismos:",
/* 11 */        "Bendito eres, Señor,",
/* 12 */        "en la bóveda del cielo.",
/* 13 */        "Criaturas todas del Señor,",
/* 14 */        "Ensalzadlo con himnos por los siglos,",


























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 3*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 4*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 5*/      [ac("Sol", "cp",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 7*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 9*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 10*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 12*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 13*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","m"), ac("Mi","cp150","")],
/* 14*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],


























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "A TI GLORIA Y ALABANZA,",
/* 2 */        "A TI GLORIA POR LOS SIGLOS.",
/* 3 */        "A ÉL GLORIA Y ALABANZA,",
/* 4 */        "A ÉL GLORIA POR LOS SIGLOS.",
/* 5 */        "A TI GLORIA Y ALABANZA,",
/* 6 */        "A TI GLORIA POR LOS SIGLOS.",
/* 7 */        "A TI GLORIA Y ALABANZA,",
/* 8 */        "A TI GLORIA POR LOS SIGLOS.",
/* 9 */        "A TI GLORIA Y ALABANZA,",
/* 10 */        "A TI GLORIA POR LOS SIGLOS.",
/* 11 */        "A TI HONOR Y ALABANZA,",
/* 12 */        "A TI GLORIA POR LOS SIGLOS.",
/* 13 */        "BENDECID AL SEÑOR.",
/* 14 */        "ENSALZADLO",
/* 15 */        "CON HIMNOS POR LOS SIGLOS.",

























      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 2*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 3*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 4*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 5*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 6*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 7*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 8*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 10*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 11*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 12*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 13*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","")],
/* 14*/      [ac("Re", "cp14","")],
/* 15*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Mi","cp150","m")],

























// ════════════════════════════════════════════════════════════════════════════════════
      ]
  };
// 
// ════════════════════════════════════════════════════════════════════════════════════
// * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
// ════════════════════════════════════════════════════════════════════════════════════
// 
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
