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
const NOMBREDELCANTO = "BENDICIÓN DEL AGUA";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "De la liturgia bautismal de la Vigilia pascual",
      dbnos: "183",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Ahora, ahora Padre,",
/* 2 */        "mira con amor a tu Iglesia",
/* 3 */        "y haz brotar para ella",
/* 4 */        "la fuente del Bautismo.",
/* 5 */        "Infunde en esta agua,",
/* 6 */        "por obra del Espíritu Santo,",
/* 7 */        "la gracia de tu Único Hijo,",
/* 8 */        "para que por el Sacramento del Bautismo",
/* 9 */        "el hombre, hecho a tu imagen,",
/* 10 */        "sea lavado de todos sus pecados",
/* 11 */        "y del agua y del Espíritu Santo",
/* 12 */        "renazca como nueva criatura.",
/* 13 */        "Descienda, Padre",
/* 14 */        "en esta agua, por obra de tu Hijo,",
/* 15 */        "la potencia del Espíritu Santo.",
/* 16 */        "Para que todos aquellos que hoy reciban",
/* 17 */        "el Bautismo, sean sepultados con Cristo.",
/* 18 */        "Por Cristo, Nuestro Señor.",






















],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Re", "cp14","")],
/* 3*/      [ac("Do", "cp14","")],
/* 4*/      [ac("Si", "cp14","7")],
/* 5*/      [ac("Mi", "cp","m"), ac("Re","cp90","")],
/* 6*/      [ac("Do", "cp14","")],
/* 7*/      [ac("Si", "cp14","7")],
/* 8*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("Re", "cp14","")],
/* 11*/      [ac("Do", "cp14","")],
/* 12*/      [ac("Si", "cp14","7")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 18*/      [ac("Mi", "cp14","m")],






















      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "¡Y MUERTOS CON ÉL,",
/* 2 */        "RESURJAN,",
/* 3 */        "RESUCITEN",
/* 4 */        "A LA VIDA INMORTAL!",
/* 5 */        "AMÉN, AMÉN, AMÉN.",



































      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Re", "cp14","")],
/* 3*/      [ac("Do", "cp14","")],
/* 4*/      [ac("Si", "cp14","7")],
/* 5*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],



































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
