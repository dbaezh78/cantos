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
const NOMBREDELCANTO = "BENDICE, ALMA MÍA, A YAHVEH";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 103 (102)",
      dbnos: "26",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Él, que tus culpas perdona,",
/* 2 */        "que todas tus dolencias cura,",
/* 3 */        "saca tu vida de la muerte,",
/* 4 */        "te colma de gracia y amor.",
/* 5 */        "Él, que te hace justicia,",
/* 6 */        "que defiende a los más pobres,",
/* 7 */        "a Moisés enseñó sus caminos,",
/* 8 */        "a Israel sus hazañas mostró.",
































],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("La", "cp14","m")],
































      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "BENDICE, ALMA MÍA, A YAHVEH,",
/* 2 */        "DEL FONDO DE MI SER, SU NOMBRE.",
/* 3 */        "BENDICE, ALMA MÍA, A YAHVEH,",
/* 4 */        "NO OLVIDES SUS AMORES.",
/* 5 */        "BENDICE, ALMA MÍA, A YAHVEH,",
/* 6 */        "DEL FONDO DE MI SER, SU NOMBRE.",
/* 7 */        "BENDICE, ALMA MÍA, A YAHVEH,",
/* 8 */        "NO OLVIDES SUS AMORES.",
































      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("La", "cp14","m")],
































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
