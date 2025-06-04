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
const NOMBREDELCANTO = "CELEBRACIÓN PENITENCIAL";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Acción de gracias",
      dbnos: "185",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Y CON TU ESPÍRITU.",
/* 3 */        "Levantemos el corazón.",
/* 4 */        "LO TENEMOS LEVANTADO HACIA EL SEÑOR.",
/* 5 */        "Demos gracias al Señor, nuestro Dios.",
/* 6 */        "ES JUSTO Y NECESARIO.",
/* 7 */        "Realmente es justo y necesario,",
/* 8 */        "es nuestro deber y salvación",
/* 9 */        "darte gracias, siempre y en todo lugar,",
/* 10 */        "a ti, Dios Padre omnipotente y misericordioso,",
/* 11 */        "que admirablemente has creado al hombre,",
/* 12 */        "y más admirablemente has hecho en él",
/* 13 */        "una nueva creación.",
/* 14 */        "Tú,no abandonas al pecador,",
/* 15 */        "sino que lo llamas por la fuerza de tu amor.",
/* 16 */        "Tú, has enviado a tu Hijo al mundo,",
/* 17 */        "para destruir el pecado y la muerte,",
/* 18 */        "y en su resurrección",
/* 19 */        "nos has devuelto la vida y la alegría.",
/* 20 */        "Tú, has derramado el Espíritu Santo",
/* 21 */        "en nuestros corazones,",
/* 22 */        "para hacernos herederos e hijos tuyos.",
/* 23 */        "Tú, nos renuevas por la fuerza del Evangelio",
/* 24 */        "y de los Sacramentos.",
/* 25 */        "TÚ, NOS LIBRAS",
/* 26 */        "DE LA ESCLAVITUD DEL PECADO",
/* 27 */        "Y NOS TRANSFORMAS DÍA A DÍA",
/* 28 */        "EN LA IMAGEN DE TU HIJO.",
/* 29 */        "Alabamos y bendecimos tu nombre",
/* 30 */        "y te damos gracias",
/* 31 */        "por las maravillas de tu misericordia.",
/* 32 */        "Y con los ángeles y los santos,",
/* 33 */        "cantamos, cantamos el himno de tu gloria.",
/* 34 */        "SANTO, SANTO, SANTO ...",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
/* 8*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 10*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("Fa", "cp14","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("Fa", "cp14","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 35 */   [ac("", "cp0","")],
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
