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
const NOMBREDELCANTO = "CÓMO ES MARAVILLOSO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 133 (132)",
      dbnos: "38",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "¡Cómo es maravilloso",
/* 2 */        "estar con los hermanos!",
/* 3 */        "¡CÓMO ES MARAVILLOSO",
/* 4 */        "ESTAR CON LOS HERMANOS!",
/* 5 */        "Maravilloso estar con los hermanos.",
/* 6 */        "MARAVILLOSO ESTAR CON LOS HERMANOS.",
/* 7 */        "Es como aceite que baja",
/* 8 */        "por la barba de Aarón.",
/* 9 */        "ES COMO ACEITE QUE BAJA",
/* 10 */        "POR LA BARBA DE AARÓN.",
/* 11 */        "Como aceite por la barba de Aarón.",
/* 12 */        "COMO ACEITE POR LA BARBA DE AARÓN.",
/* 13 */        "Como rocío del Hermón que baja sobre Sión.",
/* 14 */        "COMO ROCÍO DEL HERMÓN",
/* 15 */        "QUE BAJA SOBRE SIÓN.",
/* 16 */        "Como rocío que baja sobre Sión.",
/* 17 */        "COMO ROCÍO QUE BAJA SOBRE SIÓN.",
/* 18 */        "Allí Yahveh nos ha dado",
/* 19 */        "toda su bendición.",
/* 20 */        "ALLÍYAHVEH NOS HA DADO",
/* 21 */        "TODA SU BENDICIÓN.",
/* 22 */        "Nos ha dado toda su bendición.",
/* 23 */        "NOS HA DADO TODA SU BENDICIÓN.",
/* 24 */        "Allí Yahveh nos ha dado",
/* 25 */        "la Vida para siempre.",
/* 26 */        "ALLÍ YAHVEH NOS HA DADO",
/* 27 */        "LA VIDA PARA SIEMPRE.",
/* 28 */        "Nos ha dado la Vida para siempre.",
/* 29 */        "NOS HA DADO LA VIDA PARA SIEMPRE.",
/* 30 */        "¡CÓMO ES MARAVILLOSO",
/* 31 */        "ESTAR CON LOS HERMANOS!",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 2*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 4*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 5*/      [ac("Do", "cp",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 6*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 7*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 8*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 9*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 10*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 11*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 12*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 14*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 15*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 16*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 17*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 18*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 19*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 20*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 21*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 22*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 23*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 24*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 25*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 26*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 27*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 28*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 29*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("Sol","cp250","")],
/* 30*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 31*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
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
