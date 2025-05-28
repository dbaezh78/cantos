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
const NOMBREDELCANTO = "AQUEDAH";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Gn 22,1-19 - Del Targum Neofiti sobre el sacrificio de Isaac",
      dbnos: "19",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Era todavía de noche cuando Abraham",
/* 2 */        "se disponía a sacrificar a su hijo;",
/* 3 */        "los dos se miraban fijamente",
/* 4 */        "cuando le dijo su hijo Isaac:",
/* 5 */        "«Átame, átame fuerte, padre mío,",
/* 6 */        "no sea que por el miedo me resista",
/* 7 */        "y no sea válido tu sacrificio",
/* 8 */        "y los dos seamos rechazados.",
/* 9 */        "Venid y ved la fe sobre la tierra,",
/* 10 */        "venid y ved la fe sobre la tierra,",
/* 11 */        "el padre que sacrifica a su hijo,",
/* 12 */        "y el hijo querido que le ofrece su cuello.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Re", "cp14","m9")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp","m"), ac("Re","cp90","m9")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m9")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Re", "cp14","m9")],
/* 12*/      [ac("Mi", "cp14","7")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "«AQUEDAH, AQUEDAH,",
/* 2 */        "«AQUEDAH, AQUEDAH».",
/* 3 */        "«AQUEDAH, AQUEDAH...",
/* 4 */        "«AQUEDAH, AQUEDAH».",
/* 5 */        "«ÁTAME, ÁTAME FUERTE,",
/* 6 */        "PADRE MÍO, QUE YO NO ME RESISTA.",
/* 7 */        "«AQUEDAH, AQUEDAH...",
/* 8 */        "«AQUEDAH, AQUEDAH».",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("La", "cp14","m"), ac("Re","cp305","m9")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
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