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

const NOMBREDELCANTO = "ABBÁ, PADRE";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Romanos 8,15–17",
      dbnos: "7",
      catg: "PRECATECUMENADO",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "No hemos recibido",
/* 2 */        "el espíritu de siervos",
/* 3 */        "para recaer en el temor,",
/* 4 */        "para recaer en el temor",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Re", "cp94","m"), ac("La","cp257","m")],
/* 3*/      [ac("Fa", "cp6",""), ac("Mi","cp369","")],
/* 4*/      [ac("Fa", "cp6",""), ac("Mi","cp369","")],

      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "¡ABBÁ, PADRE, PADRE!",
/* 2 */        "ESTE MISMO ESPÍRITU",
/* 3 */        "DA TESTIMONIO A NUESTRO ESPÍRITU",
/* 4 */        "DE QUE SOMOS HIJOS DE DIOS.",
/* 5 */        "Y, SI HIJOS, TAMBIÉN HEREDEROS,",
/* 6 */        "COHEREDEROS DE CRISTO,",
/* 7 */        "HEREDEROS DE DIOS.",
/* 8 */        "Y, SI HIJOS, TAMBIÉN HEREDEROS,",
/* 9 */        "COHEREDEROS DE CRISTO,",
/* 10 */        "HEREDEROS DE DIOS.",
/* 11 */        "¡ABBÁ, PADRE, PADRE!",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Sol","cp162",""), ac("Fa","cp304",""), ac("Do","cp379","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Re", "cp14","m"), ac("La","cp189","m"), ac("Fa","cp296",""), ac("Mi","cp573","")],
/* 4*/      [ac("Mi", "cp14","7"), ac("La","cp498","m")],
/* 5*/      [ac("Sol", "cp105","7"), ac("Do","cp515","")],
/* 6*/      [ac("Mi", "cp386","7")],
/* 7*/      [ac("La", "cp329","m")],
/* 8*/      [ac("Sol", "cp107","7"), ac("Do","cp519","")],
/* 9*/      [ac("Mi", "cp384","7")],
/* 10*/      [ac("La", "cp312","m")],
/* 11*/      [ac("Do", "cp14",""), ac("Sol","cp166",""), ac("Fa","cp304",""), ac("Do","cp381","")],















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
