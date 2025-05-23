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

const NOMBREDELCANTO = "ALEGRÍA, HA NACIDO EL SALVADOR";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Villancico (Kiko Argüello)",
      dbnos: "12",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Un ángel vino del cielo",
/* 2 */        "trayendo una gran noticia:",
/* 3 */        "¡Hoy os ha nacido,",
/* 4 */        "ha nacido el Salvador!",
/* 5 */        "¡Fajado con lindos pañales",
/* 6 */        "y acostado en un pesebre!",
/* 7 */        "Esta será la señal",
/* 8 */        "de que Él es el Señor",
/* 9 */        "Al establo de Belén",
/* 10 */        "han llegado los pastores.",
/* 11 */        "Vienen trayendo regalos",
/* 12 */        "a Jesús el Salvador.",
/* 13 */        "Encontraron a María,",
/* 14 */        "encontraron a José.",
/* 15 */        "El buey, el asno y el niño,",
/* 16 */        "que se llamará Emmanuel.",
/* 17 */        "El buey reconoce a su dueño,",
/* 18 */        "el borrico su pesebre.",
/* 19 */        "Pero Israel no conoce,",
/* 20 */        "no conoce a su Señor.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m")],
/* 2 */     [ac("", "cp0","")],
/* 3*/      [ac("Sol", "cp30","m"), ac("Re","cp239","m")],
/* 4*/      [ac("La", "cp95",""), ac("Re","cp322","m")],

/* 5*/      [ac("Re", "cp18","m")],
/* 6 */     [ac("", "cp0","")],
/* 7*/      [ac("Sol", "cp26","m"), ac("Re","cp251","m")],
/* 8*/      [ac("La", "cp121",""), ac("Re","cp304","m")],

/* 9*/      [ac("Re", "cp14","m")],
/* 10 */    [ac("", "cp0","")],
/* 11*/     [ac("Sol", "cp14","m"), ac("Re","cp320","m")],
/* 12*/     [ac("La", "cp81",""), ac("Re","cp280","m")],

/* 13*/     [ac("Re", "cp14","m")],
/* 14 */    [ac("", "cp0","")],
/* 15*/     [ac("Sol", "cp28","m"), ac("Re","cp348","m")],
/* 16*/     [ac("La", "cp131",""), ac("Re","cp396","m")],

/* 17*/     [ac("Re", "cp14","m")],
/* 18 */    [ac("", "cp0","")],
/* 19*/     [ac("Sol", "cp24","m"), ac("Re","cp292","m")],
/* 20*/     [ac("La", "cp105",""), ac("Re","cp312","m")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,",
/* 2 */        "HA NACIDO EL SALVADOR",
/* 3 */        "ACOSTADO EN UN PESEBRE!",
/* 4 */        "¡ÉL ES EL CRISTO, EL SEÑOR!",
/* 5 */        "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,",
/* 6 */        "HA NACIDO EL SALVADOR",
/* 7 */        "ACOSTADO EN UN PESEBRE!",
/* 8 */        "¡ÉL ES EL CRISTO, EL SEÑOR!",
/* 9 */        "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,",
/* 10 */        "HA NACIDO EL SALVADOR",
/* 11 */        "ACOSTADO EN UN PESEBRE!",
/* 12 */        "¡ÉL ES EL CRISTO, EL SEÑOR!",
/* 13 */        "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,",
/* 14 */        "HA NACIDO EL SALVADOR",
/* 15 */        "ACOSTADO EN UN PESEBRE!",
/* 16 */        "¡ÉL ES EL CRISTO, EL SEÑOR!",
/* 17 */        "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,",
/* 18 */        "HA NACIDO EL SALVADOR",
/* 19 */        "ACOSTADO EN UN PESEBRE!",
/* 20 */        "¡ÉL ES EL CRISTO, EL SEÑOR!",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Fa", "cp117",""), ac("La","cp457","")],
/* 2*/      [ac("Si♭", "cp117","")],
/* 3*/      [ac("Re♭ ", "cp107","")],
/* 4*/      [ac("Do", "cp429","7")],
/* 5*/      [ac("Fa", "cp117",""), ac("La","cp457","")],
/* 6*/      [ac("Si♭", "cp117","")],
/* 7*/      [ac("Re♭ ", "cp107","")],
/* 8*/      [ac("Do", "cp429","7")],
/* 9*/      [ac("Fa", "cp117",""), ac("La","cp457","")],
/* 10*/     [ac("Si♭", "cp117","")],
/* 11*/     [ac("Re♭ ", "cp107","")],
/* 12*/     [ac("Do", "cp429","7")],
/* 13*/     [ac("Fa", "cp117",""), ac("La","cp457","")],
/* 14*/     [ac("Si♭", "cp117","")],
/* 15*/     [ac("Re♭ ", "cp107","")],
/* 16*/     [ac("Do", "cp429","7")],
/* 17*/     [ac("Fa", "cp117",""), ac("La","cp457","")],
/* 18*/     [ac("Si♭", "cp117","")],
/* 19*/     [ac("Re♭ ", "cp107","")],
/* 20*/     [ac("Do", "cp429","7")],
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