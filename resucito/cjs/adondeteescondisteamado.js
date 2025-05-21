/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
//  --cp1: 0.1%;
      //  --cp18: 1.8%;
      //  --cp486: 48.6%;
      //  --cp1547: 154.7%;
    };
// Mapeo específico para tablets (800px)
const pTablet = {
//  --cp1: 0.1%;
      //  --cp18: 1.8%;
      //  --cp486: 48.6%;
      //  --cp1547: 154.7%;
    };

function ac(nota, posicion, extension = "") {
      const anchoPantalla = window.innerWidth;
      let posicionAjustada = posicion;

// Solo ajustamos para tablets (601px a 900px)
      if (anchoPantalla > 600 && anchoPantalla <= 900) {
        posicionAjustada = pTablet[posicion] || posicion;

        // Si no está en el mapeo, aplicamos un factor general más preciso
        if (!pTablet[posicion]) {
          const numero = parseInt(posicion.replace('cp', ''));
          const factor = 0.93; // Factor más preciso para 800px
          posicionAjustada = `cp${Math.round(numero * factor)}`;
        }
      }

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
  
    /***********************
     * DATOS DEL CANTO
     ***********************/

const NOMBREDELCANTO = "ADÓNDE TE ESCONDISTE, AMADO";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cántico espiritual (San Juan de la Cruz) ",
      dbnos: "238",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "¿Adónde te escondiste, amado,",
/* 2 */        "y me dejaste con gemido?",
/* 3 */        "Como el ciervo huiste,",
/* 4 */        "habiéndome herido;",
/* 5 */        "salí tras ti, clamando, y eras ido.",
/* 6 */        "Pastores, los que fuerdes",
/* 7 */        "allá, por las majadas, al otero,",
/* 8 */        "si por ventura vierdes",
/* 9 */        "aquel que yo más quiero,",
/* 10 */        "decidle que adolezco, peno y muero.",
/* 11 */        "Buscando mis amores,",
/* 12 */        "iré por esos montes y riberas;",
/* 13 */        "ni cogeré las flores,",
/* 14 */        "ni temeré las fieras,",
/* 15 */        "y pasaré los fuertes y fronteras.",
/* 16 */        "¡Oh bosques y espesuras,",
/* 17 */        "plantadas por la mano del amado!",
/* 18 */        "¡Oh prado de verduras,",
/* 19 */        "de flores esmaltado,",
/* 20 */        "decid si por vosotros ha pasado!",
/* 21 */        "¡Ay, quién podrá sanarme!",
/* 22 */        "Acaba de entregarte ya de vero;",
/* 23 */        "no quieras enviarme",
/* 24 */        "de hoy más mensajero,",
/* 25 */        "que no saben decirme lo que quiero.",
/* 26 */        "¡Ay! ¡Ay!",


],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp0","")],
/* 2 */     [ac("", "cp0","")],
/* 3 */     [ac("", "cp0","")],
/* 4 */     [ac("", "cp0","")],
/* 5*/      [ac("La", "cp0","m"), ac("Fa","cp258",""), ac("Mi","cp474",""), ac("Fa","cp582","maj713"), ac("Mi","cp694","")],
/* 6*/      [ac("Mi", "cp0","")],
/* 7 */     [ac("", "cp0","")],
/* 8 */     [ac("", "cp0","")],
/* 9 */     [ac("", "cp0","")],
/* 10*/     [ac("La", "cp0","m"), ac("Fa","cp266",""), ac("Mi","cp533",""), ac("Fa","cp651","maj713"), ac("Mi","cp761","")],
/* 11*/     [ac("Mi", "cp0","")],
/* 12 */    [ac("", "cp0","")],
/* 13 */    [ac("", "cp0","")],
/* 14 */    [ac("", "cp0","")],
/* 15*/     [ac("La", "cp0","m"), ac("Fa","cp234",""), ac("Mi","cp435",""), ac("Fa","cp574","maj713"), ac("Mi","cp688","")],
/* 16*/     [ac("Mi", "cp0","")],
/* 17 */    [ac("", "cp0","")],
/* 18 */    [ac("", "cp0","")],
/* 19 */    [ac("", "cp0","")],
/* 20*/     [ac("La", "cp0","m"), ac("Fa","cp240",""), ac("Mi","cp446",""), ac("Fa","cp587","maj713"), ac("Mi","cp696","")],
/* 21*/     [ac("Mi", "cp0","")],
/* 22*/     [ac("La", "cp458","m")],
/* 23 */    [ac("", "cp0","")],
/* 24*/     [ac("Sol", "cp328","")],
/* 25*/     [ac("Fa", "cp87",""), ac("Mi", "cp538","")],
/* 26*/     [ac("Fa", "cp49","maj713"), ac("Mi","cp161","")],

      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "MIL GRACIAS DERRAMANDO,",
/* 2 */        "PASÓ POR ESTOS SOTOS CON PRESURA,",
/* 3 */        "Y YÉNDOLOS MIRANDO,",
/* 4 */        "CON SOLA SU FIGURA",
/* 5 */        "VESTIDOS LOS DEJÓ DE SU HERMOSURA.",
/* 6 */        "MIL GRACIAS DERRAMANDO,",
/* 7 */        "PASÓ POR ESTOS SOTOS CON PRESURA,",
/* 8 */        "Y YÉNDOLOS MIRANDO,",
/* 9 */        "CON SOLA SU FIGURA",
/* 10 */        "VESTIDOS LOS DEJÓ DE SU HERMOSURA.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp0","m")],
/* 2*/      [ac("Sol", "cp606","")],
/* 3*/      [ac("Fa", "cp296","")],
/* 4 */     [ac("", "cp0","")],
/* 5*/      [ac("Mi", "cp612","")],
/* 6*/      [ac("La", "cp0","m")],
/* 7*/      [ac("Sol", "cp606","")],
/* 8*/      [ac("Fa", "cp296","")],
/* 9 */     [ac("", "cp0","")],
/* 10*/     [ac("Mi", "cp612","")],
      ]
  };

/************************************************
 * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
************************************************/

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
