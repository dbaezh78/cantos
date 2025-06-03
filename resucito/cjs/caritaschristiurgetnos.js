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
const NOMBREDELCANTO = "CARITAS CHRISTI URGET NOS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "2ª Corintios 5,14.15.17.21",
      dbnos: "35",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "¡CARITAS CHRISTI URGET NOS!",
/* 2 */        "¡CARITAS CHRISTI URGET NOS!",
/* 3 */        "El amor de Cristo",
/* 4 */        "nos apremia al pensar,",
/* 5 */        "EL AMOR DE CRISTO",
/* 6 */        "NOS APREMIA AL PENSAR,",
/* 7 */        "que si uno murió por todos,",
/* 8 */        "todos por tanto murieron.",
/* 9 */        "QUE SI CRISTO MURIÓ POR TODOS,",
/* 10 */        "TODOS MURIERON.",
/* 11 */        "Y murió por todos para que los que viven",
/* 12 */        "no vivan más para sí,",
/* 13 */        "sino para aquel que murió",
/* 14 */        "y resucitó por ellos.",
/* 15 */        "¡CARITAS CHRISTI URGET NOS!",
/* 16 */        "¡CARITAS CHRISTI URGET NOS!",
/* 17 */        "El que está en Cristo es una nueva creación;",
/* 18 */        "pasó lo viejo, todo es nuevo.",
/* 19 */        "A quien no conoció pecado,",
/* 20 */        "Dios le hizo pecado,",
/* 21 */        "para que fuésemos justicia de Dios en Él.",
/* 22 */        "¡Ay de mí si no anunciase",
/* 23 */        "el Evangelio!",
/* 24 */        "¡Ay de mí! ¡Ay de mí!",
/* 25 */        "¡AY DE MÍ SI NO ANUNCIASE",
/* 26 */        "EL EVANGELIO!",
/* 27 */        "¡AY DE MÍ! ¡AY DE MÍ!",
/* 28 */        "¡CARITAS CHRISTI URGET NOS!",
/* 29 */        "¡CARITAS CHRISTI URGET NOS!",











],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Do","cp90",""), ac("Mi","cp150","")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 12*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("Fa", "cp14",""), ac("Re","cp90","m9")],
/* 14*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 15*/      [ac("La", "cp14","m"), ac("Do","cp90",""), ac("Mi","cp150","")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 18*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 19*/      [ac("Fa", "cp14",""), ac("Re","cp90","m9")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("La", "cp14","m"), ac("La","cp90","7")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 25*/      [ac("La", "cp14","7")],
/* 26*/      [ac("Re", "cp14","m")],
/* 27*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("La", "cp14","m"), ac("Do","cp90",""), ac("Mi","cp150","")],
/* 29*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],











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
