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
const NOMBREDELCANTO = "CANTAD A DIOS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 67 (68) 2.4-7",
      dbnos: "31",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "CANTAD A DIOS,",
/* 2 */        "SALMODIAD PARA SU NOMBRE.",
/* 3 */        "CANTAD A DIOS,",
/* 4 */        "ALLANAD EL CAMINO",
/* 5 */        "AL QUE CABALGA EN LAS NUBES.",
/* 6 */        "Señor es su Nombre, alegraos ante Él.",
/* 7 */        "Padre de los huérfanos,",
/* 8 */        "defensor de las viudas, es Dios.",
/* 9 */        "A los más pobres hace habitar en su casa,",
/* 10 */        "a los cautivos Él los libra con amor.",
/* 11 */        "SE LEVANTA DIOS,",
/* 12 */        "SUS ENEMIGOS SE DISPERSAN;",
/* 13 */        "LOS JUSTOS SE ALEGRAN",
/* 14 */        "Y CANTAN DE ALEGRÍA.",
/* 15 */        "CANTAD A DIOS,",
/* 16 */        "SALMODIAD PARA SU NOMBRE.",
/* 17 */        "CANTAD A DIOS,",
/* 18 */        "ALLANAD EL CAMINO",
/* 19 */        "AL QUE CABALGA EN LAS NUBES.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp14","m9")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("Mi", "cp14",""), ac("Re","cp90","m9")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("Re", "cp14","m9"), ac("Mi","cp90","")],
/* 10*/      [ac("Re", "cp14","m9"), ac("Mi","cp90","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Re", "cp14","m9"), ac("Mi","cp90","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Re", "cp14","m9")],
/* 19*/      [ac("Mi", "cp14","")],
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