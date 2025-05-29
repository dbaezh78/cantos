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
const NOMBREDELCANTO = "BENDECIRÉ AL SEÑOR EN TODO TIEMPO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 34 (33)",
      dbnos: "25",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Cantad conmigo al Señor,",
/* 2 */        "cantemos juntos a su Nombre.",
/* 3 */        "Porque este pobre grita, el Señor le escucha,",
/* 4 */        "y le libra de todas sus angustias.",
/* 5 */        "Porque el ángel del Señor acampa",
/* 6 */        "en torno a aquellos que le temen y les salva.",
/* 7 */        "Gritan ellos, y el Señor les escucha",
/* 8 */        "y los libra de todas sus angustias.",
/* 9 */        "Gustad y ved",
/* 10 */        "qué bueno es el Señor,",
/* 11 */        "dichoso el hombre",
/* 12 */        "que se refugia en Él.",
/* 13 */        "Porque muchas son las pruebas",
/* 14 */        "que le esperan al Justo,",
/* 15 */        "mas de todas le libra el Señor.",
/* 16 */        "Gritan ellos, y el Señor les escucha",
/* 17 */        "y los libra de todas sus angustias.",























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 3*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 4*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 7*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 8*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 11*/      [ac("Si♭", "cp14","")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 16*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 17*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "BENDECIRÉ AL SEÑOR EN TODO TIEMPO,",
/* 2 */        "EN MI BOCA SIEMPRE SU ALABANZA;",
/* 3 */        "YO ME GLORÍO EN EL SEÑOR,",
/* 4 */        "LO ESCUCHEN LOS HUMILDES",
/* 5 */        "Y SE ALEGREN.",
/* 6 */        "BENDECIRÉ AL SEÑOR EN TODO TIEMPO,",
/* 7 */        "EN MI BOCA SIEMPRE SU ALABANZA;",
/* 8 */        "YO ME GLORÍO EN EL SEÑOR,",
/* 9 */        "LO ESCUCHEN LOS HUMILDES",
/* 10 */        "Y SE ALEGREN.",
/* 11 */        "GUSTAD Y VED",
/* 12 */        "QUÉ BUENO ES EL SEÑOR,",
/* 13 */        "DICHOSO EL HOMBRE",
/* 14 */        "QUE SE REFUGIA EN ÉL.",
/* 15 */        "BENDECIRÉ AL SEÑOR EN TODO TIEMPO,",
/* 16 */        "EN MI BOCA SIEMPRE SU ALABANZA;",
/* 17 */        "YO ME GLORÍO EN EL SEÑOR,",
/* 18 */        "LO ESCUCHEN LOS HUMILDES",
/* 19 */        "Y SE ALEGREN.",





















      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 3*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 4*/      [ac("Si♭", "cp14","")],
/* 5*/      [ac("La", "cp14","7")],
/* 6*/      [ac("Re", "cp14","m")],
/* 7*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 8*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 9*/      [ac("Si♭", "cp14","")],
/* 10*/      [ac("La", "cp14","7")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 13*/      [ac("Si♭", "cp14","")],
/* 14*/      [ac("La", "cp14","")],
/* 15*/      [ac("Re", "cp14","m")],
/* 16*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 17*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 18*/      [ac("Si♭", "cp14","")],
/* 19*/      [ac("La", "cp14","7")],





















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
