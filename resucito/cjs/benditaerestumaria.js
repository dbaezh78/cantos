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
const NOMBREDELCANTO = "BENDITA ERES TÚ, MARÍA";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 1,42-45",
      dbnos: "27",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Bendita eres tú, María,",
/* 2 */        "entre todas las mujeres, María.",
/* 3 */        "Y bendito es el fruto, María,",
/* 4 */        "el fruto de tu seno, Jesús.",
/* 5 */        "María, tú has creído.",
/* 6 */        "Porque apenas he sentido tu voz,",
/* 7 */        "algo se ha movido dentro de mí,",
/* 8 */        "mi niño ha exultado de gozo.",
/* 9 */        "Porque apenas he sentido tu voz ...",
/* 10 */        "algo se ha movido dentro de mí,",
/* 11 */        "mi niño ha exultado de gozo.",





























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("Fa", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 7*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 8*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 10*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 11*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],





























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "Y CÓMO ES QUE LA MADRE DEL SEÑOR",
/* 2 */        "VIENE A MÍ, VIENE A MÍ.",
/* 3 */        "MARÍA, BENDITA MARÍA,",
/* 4 */        "TÚ HAS CREÍDO LA PALABRA DEL SEÑOR.",
/* 5 */        "Y CÓMO ES QUE LA MADRE DEL SEÑOR",
/* 6 */        "VIENE A MÍ, VIENE A MÍ.",
/* 7 */        "MARÍA, BENDITA MARÍA,",
/* 8 */        "TÚ HAS CREÍDO LA PALABRA DEL SEÑOR.",
































      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp14","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 8*/      [ac("Mi", "cp14","")],
































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
