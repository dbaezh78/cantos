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
const NOMBREDELCANTO = "CANTAD AL SEÑOR";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 117 (116)",
      dbnos: "32",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "CANTAD AL SEÑOR,",
/* 2 */        "PUEBLOS TODOS DE LA TIERRA,",
/* 3 */        "NACIONES, DADLE GLORIA.",
/* 4 */        "Porque grande es su amor hacia nosotros",
/* 5 */        "*,",
/* 6 */        "es eterna su misericordia",
/* 7 */        "*,",
/* 8 */        "naciones, dadle gloria.",
/* 9 */        "CANTAD AL SEÑOR,",
/* 10 */        "PUEBLOS TODOS DE LA TIERRA,",
/* 11 */        "NACIONES, DADLE GLORIA.",
/* 12 */        "Porque firme es su amor hacia nosotros",
/* 13 */        "*,",
/* 14 */        "su fidelidad dura por siempre",
/* 15 */        "*,",
/* 16 */        "naciones, dadle gloria.",
/* 17 */        "CANTAD AL SEÑOR,",
/* 18 */        "PUEBLOS TODOS DE LA TIERRA,",
/* 19 */        "NACIONES, DADLE GLORIA.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 4*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 9*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 12*/      [ac("SoI", "cp14",""), ac("La","cp90","m")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 17*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 18 */   [ac("", "cp0","")],
/* 19*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
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
