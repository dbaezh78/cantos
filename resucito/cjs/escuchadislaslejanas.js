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

const NOMBREDELCANTO = "ESCUCHAD, ISLAS LEJANAS ";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaias 49,1-16 - Segundo canto de Siervo de Yahveh",
      dbnos: "70",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Escuchad, islas lejanas,",
/* 2 */        "prestad atención, naciones,",
/* 3 */        "así habla el Señor, el Santo de Israel:",
/* 4 */        "Aquel que tiene la vida despreciada",
/* 5 */        "y es el abominio de las gentes,",
/* 6 */        "al esclavo de los dominadores:",
/* 7 */        "En el día favorable te ayudaré,",
/* 8 */        "en el día de la muerte te asistiré,",
/* 9 */        "pues te he elegido",
/* 10 */        "como alianza a las naciones.",
/* 11 */        "Dirás a los prisioneros: «Salid»;",
/* 12 */        "dirás a los ciegos: «Mirad»;",
/* 13 */        "conducirás a los pueblos",
/* 14 */        "por el camino de la vida.",
/* 15 */        "Mas Sión dice: «Yahveh me ha abandonado,",
/* 16 */        "Yahveh me ha olvidado».",
/* 17 */        "¿Acaso una madre olvida a su hijo de pecho,",
/* 18 */        "es que se olvida del hijo de su seno?",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp10","7")],
/* 2 */     [ac("", "cp0","")],
/* 3 */     [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp10","")],
/* 5*/      [ac("Fa#", "cp20",""), ac("Sol","cp432","")],
/* 6*/      [ac("Fa#", "cp466","")],
/* 7*/      [ac("Re", "cp10","")],
/* 8*/      [ac("Fa#", "cp132","m"), ac("Sol","cp553","")],
/* 9 */     [ac("", "cp0","")],
/* 10*/     [ac("Fa#", "cp424","")],
/* 11*/     [ac("Re", "cp10","")],
/* 12*/     [ac("Fa#", "cp39","m"), ac("Sol","cp403","")],
/* 13 */    [ac("", "cp0","")],
/* 14*/     [ac("Fa#", "cp365","")],
/* 15*/     [ac("Si", "cp14","m"), ac("Mi","cp354","m"), ac("Si","cp674","m")],
/* 16*/     [ac("Mi", "cp73","m"), ac("Si","cp324","m")],
/* 17*/     [ac("Sol", "cp14",""), ac("Fa#","cp686","")],
/* 18*/     [ac("Sol", "cp14",""), ac("Fa#","cp559","")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "TE VERÁN LOS REYES,",
/* 2 */        "SE PONDRÁN EN PIE.",
/* 3 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 4 */        "SE INCLINARÁN,",
/* 5 */        "YO TE HE ELEGIDO,",
/* 6 */        "TE HE ELEGIDO.",
/* 7 */        "TE VERÁN LOS REYES,",
/* 8 */        "SE PONDRÁN EN PIE.",
/* 9 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 10 */        "SE INCLINARÁN,",
/* 11 */        "YO TE HE ELEGIDO,",
/* 12 */        "TE HE ELEGIDO.",
/* 13 */        "TE VERÁN LOS REYES,",
/* 14 */        "SE PONDRÁN EN PIE.",
/* 15 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 16 */        "SE INCLINARÁN,",
/* 17 */        "YO TE HE ELEGIDO,",
/* 18 */        "TE HE ELEGIDO.",
/* 19 */        "PUES AUNQUE UNA MADRE",
/* 20 */        "SE OLVIDASE DE SU HIJO,",
/* 21 */        "YO JAMÁS TE OLVIDARÉ.",
/* 22 */        "MÍRAME, EN LAS PALMAS DE MIS MANOS",
/* 23 */        "TE LLEVO TATUADA.",
/* 24 */        "MÍRAME, EN LAS PALMAS DE MIS MANOS",
/* 25 */        "TE LLEVO TATUADA.",
/* 26 */        "TE VERÁN LOS REYES,",
/* 27 */        "SE PONDRÁN EN PIE.",
/* 28 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 29 */        "SE INCLINARÁN,",
/* 30 */        "YO TE HE ELEGIDO,",
/* 31 */        "TE HE ELEGIDO.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp10","")],
/* 2 */     [ac("", "cp0","")],
/* 3*/      [ac("Fa#", "cp124","m")],
/* 4*/      [ac("Sol", "cp244","")],
/* 5 */     [ac("", "cp0","")],
/* 6*/      [ac("Fa#", "cp208","")],

/* 7*/      [ac("Re", "cp10","")],
/* 8 */     [ac("", "cp0","")],
/* 9*/      [ac("Fa#", "cp124","m")],
/* 10*/     [ac("Sol", "cp244","")],
/* 11 */    [ac("", "cp0","")],
/* 12*/     [ac("Fa#", "cp208","")],

/* 13*/     [ac("Re", "cp10","")],
/* 14 */    [ac("", "cp0","")],
/* 15*/     [ac("Fa#", "cp124","m")],
/* 16*/     [ac("Sol", "cp244","")],
/* 17 */    [ac("", "cp0","")],
/* 18*/     [ac("Fa#", "cp208","")],

/* 19*/     [ac("Re", "cp8",""), ac("Fa#","cp388","m")],
/* 20*/     [ac("Sol", "cp386","")],
/* 21*/     [ac("Fa#", "cp398","")],
/* 22*/     [ac("Sol", "cp14","")],
/* 23*/     [ac("Fa#", "cp267","")],
/* 24*/     [ac("Sol", "cp14","")],
/* 25*/     [ac("Fa#", "cp267","")],

/* 26*/     [ac("Re", "cp10","")],
/* 27 */    [ac("", "cp0","")],
/* 28*/     [ac("Fa#", "cp124","m")],
/* 29*/     [ac("Sol", "cp244","")],
/* 30 */    [ac("", "cp0","")],
/* 31*/     [ac("Fa#", "cp208","")],
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
