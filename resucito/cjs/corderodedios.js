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
const NOMBREDELCANTO = "CORDERO DE DIOS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Después de la consagración",
      dbnos: "186",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Agnus Dei,",
/* 2 */        "qui tollis peccata mundi:",
/* 3 */        "miserere nobis.",
/* 4 */        "AGNUS DEI,",
/* 5 */        "QUI TOLLIS PECCATA MUNDI:",
/* 6 */        "MISERERE NOBIS.",
/* 7 */        "AGNUS DEI,",
/* 8 */        "QUI TOLLIS PECCATA MUNDI:",
/* 9 */        "DONA NOBIS PACEM,",
/* 10 */        "DONA NOBIS PACEM.",
/* 11 */        "Cordero de Dios,",
/* 12 */        "que quitas el pecado del mundo,",
/* 13 */        "ten piedad de nosotros.",
/* 14 */        "CORDERO DE DIOS,",
/* 15 */        "QUE QUITAS EL PECADO DEL MUNDO,",
/* 16 */        "TEN PIEDAD DE NOSOTROS.",
/* 17 */        "CORDERO DE DIOS,",
/* 18 */        "QUE QUITAS EL PECADO DEL MUNDO,",
/* 19 */        "DANOS LA PAZ,",
/* 20 */        "DANOS LA PA",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Sol", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
