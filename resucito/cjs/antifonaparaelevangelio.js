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
const NOMBREDELCANTO = "ANTÍFONA PARA EL EVANGELIO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Tiempo de Cuaresma",
      dbnos: "182",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Gloria a ti, oh Cristo,",
/* 2 */        "Rey de eterna gloria,",
/* 3 */        "Rey de eterna gloria.",
/* 4 */        "Yo soy la vid, vosotros los sarmientos.",
/* 5 */        "El que permanece en mí y yo en él,",
/* 6 */        "ese da fruto abundante.",
/* 7 */        "Gloria al Señor, gloria al Señor,",
/* 8 */        "gloria al Señor, gloria al Señor,",
/* 9 */        "gloria al Señor.",
/* 10 */        "En el esplendor de la nube,",
/* 11 */        "se oyó la voz del Padre:",
/* 12 */        "Este es mi Hijo amado, escuchadle,",
/* 13 */        "este es mi Hijo amado, escuchadle».",



























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 2*/      [ac("Re", "cp14","")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 5*/      [ac("Re", "cp",""), ac("Mi","cp90","m")],
/* 6*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Do", "cp14",""), ac("Re","cp90","")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 13*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],



























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "GLORIA A TI, OH CRISTO,",
/* 2 */        "REY DE ETERNA GLORIA,",
/* 3 */        "REY DE ETERNA GLORIA.",
/* 4 */        "GLORIA A TI, OH CRISTO,",
/* 5 */        "REY DE ETERNA GLORIA,",
/* 6 */        "REY DE ETERNA GLORIA.",
/* 7 */        "GLORIA AL SEÑOR, GLORIA AL SEÑOR,",
/* 8 */        "GLORIA AL SEÑOR, GLORIA AL SEÑOR,",
/* 9 */        "GLORIA AL SEÑOR.",
/* 10 */        "GLORIA AL SEÑOR, GLORIA AL SEÑOR,",
/* 11 */        "GLORIA AL SEÑOR, GLORIA AL SEÑOR,",
/* 12 */        "GLORIA AL SEÑOR.",




























      ],
      asambleaAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 2*/      [ac("Re", "cp14","")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 5*/      [ac("Re", "cp14","")],
/* 6*/      [ac("Sol", "cp14","")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Do", "cp14",""), ac("Re","cp90","")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("Do", "cp14",""), ac("Re","cp90","")],
/* 12*/      [ac("Sol", "cp14","")],




























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
