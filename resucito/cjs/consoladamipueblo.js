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
const NOMBREDELCANTO = "CONSOLAD A MI PUEBLO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 40,1-11 - Melodía hebraica ",
      dbnos: "41",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "CONSOLAD A MI PUEBLO",
/* 2 */        "Y HABLAD AL CORAZÓN DE JERUSALÉN,",
/* 3 */        "Y DECIDLE QUE SE ACABA SU ESCLAVITUD.",
/* 4 */        "¡Ohey!, una voz en el desierto grita:",
/* 5 */        "«Preparad el camino, la senda al Señor».",
/* 6 */        "A. PORQUE EL SEÑOR VIENE CON POTENCIA,",
/* 7 */        "TRAE CONSIGO EL PREMIO.",
/* 8 */        "COMO EL PASTOR REÚNE A SU REBAÑO,",
/* 9 */        "LLEVA AL CORDERILLO EN SUS BRAZOS.",
/* 10 */        "Como el pastor conduce con cuidado",
/* 11 */        "las ovejas que van a ser madres,",
/* 12 */        "como el pastor que lleva sobre sus hombros",
/* 13 */        "[melisma]",
/* 14 */        "la oveja perdida.",
/* 15 */        "CONSOLAD A MI PUEBLO...",
/* 16 */        "Y HABLAD AL CORAZÓN DE JERUSALÉN,",
/* 17 */        "Y DECIDLE QUE SE ACABA SU ESCLAVITUD.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Si","cp150","7")],
/* 5*/      [ac("La", "cp","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 7*/      [ac("Si", "cp14","7")],
/* 8*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 9*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 10*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 11*/      [ac("Si", "cp14","7")],
/* 12*/      [ac("La", "cp14","m")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Si", "cp14","7")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 17*/      [ac("Mi", "cp14","m")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
      ],
      asambleaAcordes: [
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
