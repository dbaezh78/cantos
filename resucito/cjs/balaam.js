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
const NOMBREDELCANTO = "BALAAM";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Nm 23,7-24",
      dbnos: "24",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "De Aram me ha hecho venir",
/* 2 */        "Balaq, el rey de Moab,",
/* 3 */        "desde los montes de Oriente:",
/* 4 */        "«Ven y maldice a Jacob;",
/* 5 */        "ven y profetiza contra Israel».",
/* 6 */        "¿Cómo maldeciré, si Dios no quiere?",
/* 7 */        "¿Cómo profetizaré, si Dios no me deja?",
/* 8 */        "De lo alto de esta cima yo diviso,",
/* 9 */        "desde lo alto de esta roca yo contemplo:",
/* 10 */        "este es un pueblo distinto",
/* 11 */        "a todas las naciones.",
/* 12 */        "¿Quién contará, contará tu multitud?",
/* 13 */        "Sea, sea mi muerte",
/* 14 */        "como la muerte de su Justo.",
/* 15 */        "Vaya mi vida donde Él,",
/* 16 */        "«¿Pero qué es lo que estás haciendo?",
/* 17 */        "¡Tú lo estás bendiciendo!",
/* 18 */        "Ven, quizá desde otra parte",
/* 19 */        "Dios lo quiera maldecir».",
/* 20 */        "Escucha, hijo de Sippor, pon el oído rey Balaq;",
/* 21 */        "que Dios no es un hombre",
/* 22 */        "que dice y se arrepiente.",
/* 23 */        "Una estrella surge de Jacob,",
/* 24 */        "se oyen aclamaciones por su Rey.",
/* 25 */        "Dios es su Padre.",
/* 26 */        "Se acuesta como león,",
/* 27 */        "se echa como leona, nadie lo hará levantar».",













],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 2*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("Re Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp","Mi"), ac("m","cp90","")],
/* 6*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("Sol","cp150",""), ac("Si","cp250","mMim")],
/* 7*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("Sol","cp150",""), ac("Si","cp250","mMim")],
/* 8*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 9*/      [ac("Re", "cp14","Mi"), ac("m","cp90","")],
/* 10*/      [ac("Re", "cp14","")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("Sol","cp150",""), ac("Si","cp250","mMim")],
/* 13*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 14*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 15*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 16*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Re", "cp14","")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("Sol","cp150",""), ac("Si","cp250","mMim")],
/* 21*/      [ac("Re", "cp14","")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 24*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 25*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 26*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 27*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mim","cp250","")],













      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "¡QUÉ BELLAS SON TUS TIENDAS,",
/* 2 */        "QUÉ BELLAS SON, ISRAEL!",
/* 3 */        "¡QUÉ BELLAS SON TUS TIENDAS,",
/* 4 */        "QUÉ BELLAS SON, ISRAEL!",
/* 5 */        "JACOB, JACOB, JACOB, JACOB.",
/* 6 */        "VAYA MI VIDA DONDE ÉL.",
/* 7 */        "¡QUÉ BELLAS SON TUS TIENDAS,",
/* 8 */        "QUÉ BELLAS SON, ISRAEL!",
/* 9 */        "¡QUÉ BELLAS SON TUS TIENDAS,",
/* 10 */        "QUÉ BELLAS SON, ISRAEL!",
/* 11 */        "¡QUÉ BELLAS SON TUS TIENDAS,",
/* 12 */        "QUÉ BELLAS SON, ISRAEL!",
/* 13 */        "¡QUÉ BELLAS SON TUS TIENDAS,",
/* 14 */        "QUÉ BELLAS SON, ISRAEL!",


























      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Re", "cp14","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","Mi"), ac("m","cp250","")],
/* 6*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 7*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Re", "cp14","")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("Re", "cp14","")],
/* 14*/      [ac("Mi", "cp14","m")],


























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
