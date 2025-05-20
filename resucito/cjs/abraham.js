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
          const factor = 0.97; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "ABRAHAM";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Génesis 18,1–5 – Teofanía de Mambré",
      dbnos: "8",

// Estructura para Cantor (texto)
cantor: [
/* 1 */        "Hacía calor aquel día",
/* 2 */        "cuando Abraham",
/* 3 */        "estaba sentado delante de su tienda.",
/* 4 */        "Hacía calor aquel día",
/* 5 */        "cuando Abraham",
/* 6 */        "estaba sentado",
/* 7 */        "cerca del encinar de Mambré.",
/* 8 */        "Alzando los ojos, miró",
/* 9 */        "y tres hombres de pie",
/* 10 */        "estaban delante.",
/* 11 */        "En cuanto los vio,",
/* 12 */        "se inclinó hasta el suelo y dijo:",
/* 13 */        "«Oh Señor mío,",
/* 14 */        "no pases, te ruego, sin detenerte.",
/* 15 */        "«Os traeré un poco de agua,",
/* 16 */        "os lavaré los pies",
/* 17 */        "y reposaréis a la sombra.",
/* 18 */        "Os traeré un bocado,",
/* 19 */        "os reconfortaréis",
/* 20 */        "y lúego seguiréis adelante.",
/* 21 */        "No por casualidad",
/* 22 */        "habéis pasado hoy delante de mí.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/       [ac("La", "cp14","m")],
/* 2*/       [ac("Re", "cp31","m"), ac("Mi","cp224","")],
/* 3*/       [ac("La", "cp526","m")],

/* 4 */      [ac("", "cp0","")],
/* 5*/       [ac("Re", "cp34","m"), ac("Mi","cp226","")],
/* 6 */      [ac("", "cp0","")],
/* 7*/       [ac("La", "cp450","m")],

/* 8*/       [ac("Sol", "cp201",""), ac("Fa","cp339","")],
/* 9*/       [ac("Mi", "cp332","")],
/* 10*/      [ac("La", "cp196","m")],
/* 11*/      [ac("Mi", "cp249","")],
/* 12*/      [ac("La", "cp452","m")],
/* 13*/      [ac("Sol", "cp204","")],
/* 14*/      [ac("Fa", "cp235",""), ac("Mi","cp471","")],
/* 15*/      [ac("La", "cp14","m"), ac("Mi","cp368","")],
/* 16 */     [ac("", "cp0","")],
/* 17*/      [ac("La", "cp296","m")],
/* 18*/      [ac("Mi", "cp265","")],
/* 19 */     [ac("", "cp0","")],
/* 20*/      [ac("La", "cp360","m")],
/* 21*/      [ac("Sol", "cp253","")],
/* 22*/      [ac("Fa", "cp263",""), ac("Mi","cp528","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "«SIN DETENERTE,",
/* 2 */        "NO PASES, TE RUEGO,",
/* 3 */        "SIN DETENERTE, SIN DETENERTE».",
/* 4 */        "«OH SEÑOR MÍO,",
/* 5 */        "NO PASES, TE RUEGO,",
/* 6 */        "SIN DETENERTE, SIN DETENERTE.",
/* 7 */        "SIN DETENERTE,",
/* 8 */        "NO PASES, TE RUEGO,",
/* 9 */        "SIN DETENERTE, SIN DETENERTE».",
      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp186","m")],
/* 2*/      [ac("Sol", "cp290","")],
/* 3*/      [ac("Fa", "cp180",""), ac("Mi","cp468","")],
/* 4*/      [ac("La", "cp290","m")],
/* 5*/      [ac("Sol", "cp465","")],
/* 6*/      [ac("Fa", "cp178",""), ac("Mi","cp461","")],
/* 7*/      [ac("La", "cp178","m")],
/* 8*/      [ac("Sol", "cp292","")],
/* 9*/      [ac("Fa", "cp176",""), ac("Mi","cp469","")],
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
