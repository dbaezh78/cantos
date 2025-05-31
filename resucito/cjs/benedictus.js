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
const NOMBREDELCANTO = "BENEDICTUS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 1,67-80",
      dbnos: "30",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Bendito sea el Señor,",
/* 2 */        "DIOS DE ISRAEL,",
/* 3 */        "porque ha visitado y redimido a su pueblo,",
/* 4 */        "SUSCITÁNDONOS",
/* 5 */        "UNA FUERZA DE SALVACIÓN",
/* 6 */        "EN LA CASA DE DAVID, SU SIERVO.",
/* 7 */        "Según lo había predicho desde antiguo",
/* 8 */        "por boca de sus santos profetas.",
/* 9 */        "Es la salvación que nos libra de nuestros enemigos",
/* 10 */        "y de la mano de todos los que nos odian.",
/* 11 */        "Realizando así la misericordia",
/* 12 */        "que tuvo con nuestros padres,",
/* 13 */        "recordando su santa alianza",
/* 14 */        "y el juramento que juró",
/* 15 */        "a nuestro padre Abraham,",
/* 16 */        "para concedernos que, libres de todo temor,",
/* 17 */        "arrancados de la mano de nuestros enemigos,",
/* 18 */        "le sirvamos con santidad y justicia,",
/* 19 */        "en su presencia, todos nuestros días.",
/* 20 */        "BENDITO SEA EL SEÑOR...",
/* 21 */        "DIOS DE ISRAEL,",
/* 22 */        "porque ha visitado y redimido a su pueblo,",
/* 23 */        "SUSCITÁNDONOS",
/* 24 */        "UNA FUERZA DE SALVACIÓN",
/* 25 */        "EN LA CASA DE DAVID, SU SIERVO.",
/* 26 */        "Y a ti, niño,",
/* 27 */        "te llamarán profeta del Altísimo,",
/* 28 */        "porque irás delante del Señor",
/* 29 */        "a preparar sus caminos,",
/* 30 */        "anunciando a su pueblo la salvación,",
/* 31 */        "el perdón de todos sus pecados.",
/* 32 */        "Por la entrañable misericordia",
/* 33 */        "de nuestro Dios,",
/* 34 */        "nos visitará el sol que nace de lo alto,",
/* 35 */        "para iluminar a los que viven en tinieblas",
/* 36 */        "y en sombra de muerte,",
/* 37 */        "para guiar nuestros pasos",
/* 38 */        "por el camino de la paz.",
/* 39 */        "BENDITO SEA EL SEÑOR...",
/* 40 */        "DIOS DE ISRAEL,",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Sol", "cp14","m")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 7*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 8*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 9*/      [ac("La", "cp14","7")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","m")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 14*/      [ac("La", "cp14","7")],
/* 15*/      [ac("Re", "cp14","m")],
/* 16*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 17*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 18*/      [ac("La", "cp14","7")],
/* 19*/      [ac("Re", "cp14","m"), ac("La","cp90","7"), ac("Re","cp150","m")],
/* 20*/      [ac("Re", "cp14","m")],
/* 21*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Sol", "cp14","m")],
/* 24*/      [ac("Re", "cp14","m")],
/* 25*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 26*/      [ac("Sol", "cp14","m")],
/* 27*/      [ac("Re", "cp14","m")],
/* 28*/      [ac("Sol", "cp14","m")],
/* 29*/      [ac("Re", "cp14","m")],
/* 30*/      [ac("La", "cp14","7")],
/* 31*/      [ac("Re", "cp14","m")],
/* 32*/      [ac("Sol", "cp14","m")],
/* 33*/      [ac("Re", "cp14","m")],
/* 34*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 35*/      [ac("La", "cp14","7")],
/* 36*/      [ac("Re", "cp14","m")],
/* 37*/      [ac("La", "cp14","7")],
/* 38*/      [ac("Re", "cp14","m")],
/* 39*/      [ac("Re", "cp14","m")],
/* 40*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "porque ha visitado y redimido a su pueblo,",
/* 2 */        "SUSCITÁNDONOS",
/* 3 */        "UNA FUERZA DE SALVACIÓN",
/* 4 */        "EN LA CASA DE DAVID, SU SIERVO.",
      ],
      asambleaAcordes: [
/* 1 */   [ac("", "cp0","")],
/* 2*/      [ac("Sol", "cp14","m")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
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
