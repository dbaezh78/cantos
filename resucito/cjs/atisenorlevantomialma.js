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
          const factor = 0.971; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "A TI, SEÑOR, LEVANTO MI ALMA ";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 25 (24)",
      dbnos: "1",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "En ti confío, Señor,",
/* 2 */        "no triunfen sobre mí mis enemigos.",
/* 3 */        "Muéstrame, Señor, tu camino,",
/* 4 */        "enséñame, Señor, tu sendero.",
/* 5 */        "Acuérdate, Señor, de tu ternura,",
/* 6 */        "de tu inmensa compasión, que son de siempre.",
/* 7 */        "De mis pecados, Señor, no te acuerdes,",
/* 8 */        "acuérdate, Señor, que eres misericordia.",
/* 9 */        "Rocíame, Señor, de tu misericordia.",
/* 10 */        "Sumérgeme, Señor, en tu misericordia.",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp278","")],
/* 2*/      [ac("Re", "cp388","m"), ac("Fa","cp449",""), ac("Mi","cp521","")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp449","")],
/* 4*/      [ac("Re", "cp322","m"), ac("Fa","cp396",""), ac("Mi","cp449","")],
/* 5*/      [ac("La", "cp14","m"), ac("Mi","cp493","")],
/* 6*/      [ac("Re", "cp496","m"), ac("Fa","cp569",""), ac("Mi","cp707","")],
/* 7*/      [ac("La", "cp14","m"), ac("Mi","cp582","")],
/* 8*/      [ac("Re", "cp352","m"), ac("Fa","cp434",""), ac("Mi","cp612","")],
/* 9*/      [ac("Fa", "cp60",""),  ac("Mi","cp525","")],
/* 10*/      [ac("Fa", "cp77",""), ac("Mi","cp584","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "A TI, SEÑOR, LEVANTO MI ALMA,",
/* 2 */        "A TI, OH DIOS MÍO.",
/* 3 */        "A TI, SEÑOR, LEVANTO MI ALMA,",
/* 4 */        "A TI, OH DIOS MÍO.",
/* 5 */        "A TI, SEÑOR, LEVANTO MI ALMA,",
/* 6 */        "A TI, OH DIOS MÍO.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp460","")],
/* 2*/      [ac("Re", "cp96","m"), ac("Fa","cp153",""), ac("Mi","cp270","")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp460","")],
/* 4*/      [ac("Re", "cp96","m"), ac("Fa","cp153",""), ac("Mi","cp270","")],
/* 5*/      [ac("La", "cp14","m"), ac("Mi","cp460","")],
/* 6*/      [ac("Re", "cp96","m"), ac("Fa","cp153",""), ac("Mi","cp270","")],
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
