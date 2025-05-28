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
 
const NOMBREDELCANTO = "ASÍ HABLA EL AMÉN";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Ap 3,14-20",
      dbnos: "20",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Conozco tu conducta:",
/* 2 */        "no eres ni frío ni caliente.",
/* 3 */        "¡Ojalá fueras frío o caliente",
/* 4 */        "y no tibio!",
/* 5 */        "Porque voy a vomitarte de mi boca.",
/* 6 */        "Tú dices: «Yo soy rico, nada me falta»,",
/* 7 */        "y no te das cuenta",
/* 8 */        "que eres un desgraciado,",
/* 9 */        "digno de compasión,",
/* 10 */        "pobre, ciego y desnudo.",
/* 11 */        "Te aconsejo que me compres",
/* 12 */        "oro acrisolado al fuego,",
/* 13 */        "para que te enriquezcas,",
/* 14 */        "y vestidos blancos",
/* 15 */        "para cubrir tu desnudez.",
/* 16 */        "Mira que estoy a la puerta y llamo;",
/* 17 */        "si alguno oye mi voz y me abre,",
/* 18 */        "entraré en su casa,",
/* 19 */        "y cenaré con él y él conmigo.",





















],
// Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Re", "cp14","7")],
/* 4*/      [ac("Si", "cp14","7")],
/* 5*/      [ac(" ", "cp","m")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Re", "cp14","7")],
/* 9*/      [ac("Si", "cp14","7")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13*/      [ac("Re", "cp14","7")],
/* 14*/      [ac("Si", "cp14","7")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Re", "cp14","7"), ac("Si","cp90","7")],
/* 19*/      [ac("Mi", "cp14","m")],





















      ],
// ════════════════════════════════════════════════════════════════════════════════════
// Estructura para Asamblea (texto)
       asamblea: [
/* 1 */        "ASÍ HABLA EL AMÉN,",
/* 2 */        "EL TESTIGO FIEL Y VERAZ,",
/* 3 */        "EL PRINCIPIO",
/* 4 */        "DE LAS CRIATURAS DE DIOS.",
/* 5 */        "ASÍ HABLA EL AMÉN,",
/* 6 */        "EL TESTIGO FIEL Y VERAZ,",
/* 7 */        "EL PRINCIPIO",
/* 8 */        "DE LAS CRIATURAS DE DIOS.",
/* 9 */        "ASÍ HABLA EL AMÉN,",
/* 10 */        "EL TESTIGO FIEL Y VERAZ,",
/* 11 */        "EL PRINCIPIO",
/* 12 */        "DE LAS CRIATURAS DE DIOS.",




























      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Mi", "cp14","m")],
/* 6*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Mi", "cp14","m")],




























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
