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
const NOMBREDELCANTO = "BABILONIA CRIMINAL";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 137 (136)",
      dbnos: "23",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "¿Cómo cantar un cántico del Señor",
/* 2 */        "en tierra extraña?",
/* 3 */        "Si de Ti yo me olvidare,",
/* 4 */        "que se me seque la mano derecha.",
/* 5 */        "Que se me pegue la lengua al paladar,",
/* 6 */        "si de ti yo me olvidare, Jerusalén,",
/* 7 */        "en la cumbre de mi alegría.",
/* 8 */        "Capital de Babilona criminal,",
/* 9 */        "¡quién pudiera pagarte",
/* 10 */        "los males que nos has hecho!",
/* 11 */        "¡Quién pudiera estrellar",
/* 12 */        "tus hijos contra la piedra!",




























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Si", "cp14","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Mi", "cp","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 6*/      [ac("Si", "cp14","7")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("Re", "cp14","Mi"), ac("m","cp90","")],
/* 9*/      [ac("Re", "cp14","")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Si", "cp14","7")],
/* 12*/      [ac("Mi", "cp14","m")],




























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "JUNTO A LOS CANALES DE BABILONIA,",
/* 2 */        "ACORDÁNDONOS DE TI,",
/* 3 */        "NOS SENTAMOS A LLORAR.",
/* 4 */        "DE LOS SAUCES COLGABAN",
/* 5 */        "LAS GUITARRAS,",
/* 6 */        "ACORDÁNDONOS DE TI,",
/* 7 */        "NOS SENTAMOS A LLORAR.",
/* 8 */        "«CANTADNOS•, NOS DECÍAN",
/* 9 */        "NUESTROS ENEMIGOS.",
/* 10 */        "«CANTADNOS•, NOS DECÍAN",
/* 11 */        "NUESTROS OPRESORES.",
/* 12 */        "ELLOS QUERÍAN QUE NOSOTROS",
/* 13 */        "LES DIVIRTIÉRAMOS.",
/* 14 */        "A SEÑOR, TOMA CUENTAS",
/* 15 */        "A NUESTROS ENEMIGOS.",
/* 16 */        "SEÑOR, TOMA CUENTAS",
/* 17 */        "A NUESTROS OPRESORES.",
/* 18 */        "CUANDO ELLOS SE DECÍAN:",
/* 19 */        "¡ARRASADLA HASTA EL CIMIENTO!",
/* 20 */        "JUNTO A LOS CANALES DE BABILONIA,",
/* 21 */        "ACORDÁNDONOS DE TI,",
/* 22 */        "NOS SENTAMOS A LLORAR.",
/* 23 */        "DE LOS SAUCES COLGABAN",
/* 24 */        "LAS GUITARRAS,",
/* 25 */        "ACORDÁNDONOS DE TI,",
/* 26 */        "NOS SENTAMOS A LLORAR.",
/* 27 */        "«CANTADNOS•, NOS DECÍAN",
/* 28 */        "NUESTROS ENEMIGOS.",
/* 29 */        "«CANTADNOS•, NOS DECÍAN",
/* 30 */        "NUESTROS OPRESORES.",
/* 31 */        "ELLOS QUERÍAN QUE NOSOTROS",
/* 32 */        "LES DIVIRTIÉRAMOS.",








      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 2*/      [ac("Si", "cp14","7")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Mi", "cp14","m")],
/* 6*/      [ac("Si", "cp14","7")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12*/      [ac("Si", "cp14","7")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Si", "cp14","7")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 21*/      [ac("Si", "cp14","7")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Si", "cp14","7")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("Si", "cp14","7")],
/* 32*/      [ac("Mi", "cp14","m")],








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
