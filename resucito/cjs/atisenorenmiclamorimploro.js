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
          const factor = 0.98; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "A TI, SEÑOR, EN MI CLAMOR IMPLORO";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 142 (141)",
      dbnos: "4",
      catg: "PRECATECUMENADO",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Siento que el espíritu en mí se apaga,",
/* 2 */        "más tú conoces mi sendero.",
/* 3 */        "Mira, Señor, que en el camino,",
/* 4 */        "mira, Señor, que me han tendido un lazo.",
/* 5 */        "Mira, Señor, que a la derecha no hay ninguno,",
/* 6 */        "ninguno que me conozca.",
/* 7 */        "Que huye de mí todo consuelo,",
/* 8 */        "que no hay nadie que se cuide de mi alma.",
/* 9 */        "Escúchame, Señor, que estoy llorando,",
/* 10 */        "estoy tan deprimido.",
/* 11 */        "¡Líbrame tú de estos enemigos",
/* 12 */        "que son más fuertes que yo!",
/* 13 */        "¡Saca mi alma de esta cárcel",
/* 14 */        "y yo daré gracias a tu Nombre!",
/* 15 */        "En torno a mí los santos harán corro,",
/* 16 */        "me felicitarán por tu favor hacia mí.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Mi", "cp395","7")],
/* 3*/      [ac("La", "cp14","m"), ac("Re","cp419","m")],
/* 4*/      [ac("La", "cp617","m")],
/* 5*/      [ac("Mi", "cp14",""), ac("Mi","cp675","7")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp336","")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Fa", "cp199",""), ac("Mi","cp624","7")],

/* 9*/      [ac("Re", "cp14","m"), ac("Mi","cp534","")],
/* 10*/      [ac("Fa", "cp36",""), ac("Mi","cp263","")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("Sol", "cp85",""), ac("Mi","cp425","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("Mi","cp376","")],
/* 15*/      [ac("Re", "cp56","m")],
/* 16*/      [ac("Fa", "cp179",""), ac("Mi","cp560","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "A TI, SEÑOR, EN MI CLAMOR IMPLORO,",
/* 2 */        "A TI, SEÑOR, EN MI CLAMOR SUPLICO,",
/* 3 */        "A TI DERRAMO MI LAMENTO,",
/* 4 */        "A TI MI ANGUSTIA EXPONGO.",
/* 5 */        "A TI, YO CLAMO SEÑOR,",
/* 6 */        "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,",
/* 7 */        "TÚ ERES MI PORCIÓN EN ESTA TIERRA,",
/* 8 */        "MI ÚNICA FELICIDAD.",
/* 9 */        "A TI, SEÑOR, EN MI CLAMOR IMPLORO,",
/* 10 */        "A TI, SEÑOR, EN MI CLAMOR SUPLICO,",
/* 11 */        "A TI DERRAMO MI LAMENTO,",
/* 12 */        "A TI MI ANGUSTIA EXPONGO.",
/* 13 */        "A TI, YO CLAMO SEÑOR,",
/* 14 */        "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,",
/* 15 */        "TÚ ERES MI PORCIÓN EN ESTA TIERRA,",
/* 16 */        "MI ÚNICA FELICIDAD.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp570","m")],
/* 2*/      [ac("La", "cp570","m")],
/* 3*/      [ac("Mi", "cp30","7")],
/* 4*/      [ac("Fa", "cp30",""), ac("Mi","cp368","")],
/* 5*/      [ac("La", "cp14","m"), ac("Sol","cp344","")],
/* 6*/      [ac("Mi", "cp607","7")],
/* 7*/      [ac("Fa", "cp48","")],
/* 8*/      [ac("Mi", "cp290","")],
/* 9*/      [ac("La", "cp14","m"), ac("Re","cp570","m")],
/* 10*/     [ac("La", "cp570","m")],
/* 11*/     [ac("Mi", "cp30","7")],
/* 12*/     [ac("Fa", "cp30",""), ac("Mi","cp368","")],
/* 13*/     [ac("La", "cp14","m"), ac("Sol","cp344","")],
/* 14*/     [ac("Mi", "cp607","7")],
/* 15*/     [ac("Fa", "cp48","")],
/* 16*/     [ac("Mi", "cp290","")],
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
