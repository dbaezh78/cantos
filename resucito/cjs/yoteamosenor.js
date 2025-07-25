/*
╔════════════════════════════════════════════════════════════════╗
║                         FUENTE DEL CANTO                       ║
╠════════════════════════════════════════════════════════════════╣
║                Mapeo para celulares menor a 700px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pcelular = { 
  'cp617':'cp862',
  'cp447':'cp643',
  'cp631':'cp895',
  'cp265':'cp390',
  'cp374':'cp528',
  'cp758':'cp1050',
  'cp366':'cp531',
  'cp659':'cp924',
  'cp290':'cp422',
  'cp502':'cp710',
  'cp732':'cp1015',
      };
/*
╔════════════════════════════════════════════════════════════════╗
║                Mapeo para celulares menor a 900px              ║
╚════════════════════════════════════════════════════════════════╝  */
/*
[ac("Si", "cp143","m"), ac("La","cp617","")],
[ac("Si", "cp37","m"), ac("La","cp447",""), ac("Si","cp631","m")],
[ac("Sol", "cp61",""), ac("Fa#","cp265",""), ac("Sol","cp374",""), ac("Fa#","cp758","")],
[ac("Si", "cp129","m"), ac("Sol","cp366",""), ac("La","cp659","")],

[ac("Sol", "cp41",""), ac("Fa#","cp290",""), ac("Sol","cp502",""), ac("Fa#","cp732","")],
*/
const pTablet = {
  'cp143':'cp160',
  'cp617':'cp619',
  'cp447':'cp470',
  'cp631':'cp658',

  'cp61':'cp76',
  'cp265':'cp288',
  'cp374':'cp394',
  'cp758':'cp772',

  'cp129':'cp143',
  'cp366':'cp384',
  'cp659':'cp667',
  
  'cp41':'cp63',
  'cp290':'cp301',
  'cp502':'cp515',
  'cp732':'cp745',

      };
/*
╔════════════════════════════════════════════════════════════════╗
║            Función de Posición con factor ajustable            ║
╚════════════════════════════════════════════════════════════════╝  */
function ac(nota, posicion, extension = "") {
  const anchoPantalla = window.innerWidth;
  let posicionAjustada = posicion;
/*
╔════════════════════════════════════════════════════════════════╗
║           1. Primero verificar celulares (estricto)            ║
╚════════════════════════════════════════════════════════════════╝  */
if (anchoPantalla <= 700) {
posicionAjustada = pcelular[posicion] || posicion;
if (!pcelular[posicion]) {
const numero = parseInt(posicion.replace('cp', '')) || 0;
const factor = 1.57; // Factor diferente para móviles
posicionAjustada = `cp${Math.round(numero * factor)}`;
  }
}/*
╔════════════════════════════════════════════════════════════════╗
║        2. Luego verificar tablets (solo si no es móvil)        ║
╚════════════════════════════════════════════════════════════════╝  */
  else if (anchoPantalla >= 768 && anchoPantalla <= 1024) {
    posicionAjustada = pTablet[posicion] || posicion;
    if (!pTablet[posicion]) {
      const numero = parseInt(posicion.replace('cp', '')) || 0;
      const factor = 1.243;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "YO TE AMO, SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 18 (17)",
      dbnos: "176",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Yo te amo, Señor, tú eres mi roca,",
/* 2 */        "tú eres mi liberador, tú eres mi Dios.",
/* 3 */        "Yo te amo, yo te amo, Señor.",
/* 4 */        "LAS OLAS DE LA MUERTE ME ENVOLVÍAN,",
/* 5 */        "ME ESPANTABAN LAS TROMBAS DE BELIAL,",
/* 6 */        "ME RODEABAN LOS LAZOS DEL SEOL,",
/* 7 */        "HABÍA CAÍDO EN LOS CEPOS DE LA MUERTE.",
/* 8 */        "Clamé al Señor en mi angustia,",
/* 9 */        "a mi Dios, a mi Dios invoqué,",
/* 10 */        "y escuchó mi voz desde su templo,",
/* 11 */        "llegó mi llamada a sus oídos.",
/* 12 */        "Y la tierra fue sacudida y vaciló,",
/* 13 */        "retemblaron las bases de los montes.",
/* 14 */        "Porque inclinó los cielos y bajó.",
/* 15 */        "Y el fondo del mar quedó a la vista,",
/* 16 */        "los cimientos del orbe aparecieron.",
/* 17 */        "Extendió su mano para asirme,",
/* 18 */        "me sacó de lo profundo de las aguas.",
/* 19 */        "YO TE AMO, SEÑOR, TÚ ERES MI ROCA...",
/* 20 */        "TÚ ERES MI LIBERADOR, TÚ ERES MI DIOS.",
/* 21 */        "YO TE AMO, YO TE AMO, SEÑOR.",

/* 22 */        "LAS OLAS DE LA MUERTE ME ENVOLVÍAN...",
/* 23 */        "ME ESPANTABAN LAS TROMBAS DE BELIAL,",
/* 24 */        "ME RODEABAN LOS LAZOS DEL SEOL,",
/* 25 */        "HABÍA CAÍDO EN LOS CEPOS DE LA MUERTE.",


/* 26 */        " ",
/* 27 */        " ",
/* 28 */        " ",
/* 29 */        " ",
/* 30 */        " ",
/* 31 */        " ",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp0",""), ac("Fa#","cp249",""), ac("Si","cp489","m")],
/* 2*/      [ac("Sol", "cp12",""), ac("Fa#","cp570","")],
/* 3*/      [ac("Sol", "cp101",""), ac("Fa#","cp439","")],

/* 4*/      [ac("Re", "cp0",""), ac("Si","cp626","m")],
/* 5*/      [ac("Sol", "cp194",""), ac("Re","cp687","")],
/* 6*/      [ac("La", "cp159",""), ac("Sol","cp584","")],
/* 7*/      [ac("Re", "cp649","")],

/* 8*/      [ac("Fa#", "cp14","")],
/* 9*/      [ac("Si", "cp441","m")],
/* 10*/      [ac("La", "cp0",""), ac("Sol","cp467","")],
/* 11*/      [ac("Fa#", "cp407","")],

/* 12*/      [ac("Sol", "cp95",""), ac("Fa#","cp499","")],
/* 13*/      [ac("Sol", "cp129",""), ac("Fa#","cp530","")],
/* 14*/      [ac("Sol", "cp14",""), ac("Fa#","cp495","")],

/* 15*/      [ac("La", "cp0",""), ac("Fa#","cp519","")],
/* 16*/      [ac("La", "cp119",""), ac("Fa#","cp513","")],
/* 17*/      [ac("Sol", "cp123","")],
/* 18*/      [ac("Fa#", "cp542","")],

/* 19*/      [ac("Re", "cp0",""), ac("Fa#","cp273",""), ac("Si","cp556","m")],
/* 20*/      [ac("Sol", "cp12",""), ac("Fa#","cp675","")],
/* 21*/      [ac("Sol", "cp117",""), ac("Fa#","cp479","")],

/* 22*/      [ac("Re", "cp0",""), ac("Si","cp626","m")],
/* 23*/      [ac("Sol", "cp194",""), ac("Re","cp687","")],
/* 24*/      [ac("La", "cp159",""), ac("Sol","cp584","")],
/* 25*/      [ac("Re", "cp649","")],

/* 26*/      [ac("Si", "cp143","m"), ac("La","cp617","")],
/* 27*/      [ac("Si", "cp37","m"), ac("La","cp447",""), ac("Si","cp631","m")],
/* 28*/      [ac("Sol", "cp61",""), ac("Fa#","cp265",""), ac("Sol","cp374",""), ac("Fa#","cp758","")],
/* 29*/      [ac("Si", "cp129","m"), ac("Sol","cp366",""), ac("La","cp659","")],
/* 30*/      [ac("Sol", "cp41",""), ac("Fa#","cp290",""), ac("Sol","cp502",""), ac("Fa#","cp732","")],
/* 31 */     [ac("", "cp0","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]};/*
╔════════════════════════════════════════════════════════════════╗
║        MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO          ║
╚════════════════════════════════════════════════════════════════╝  */
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
    }/*
╔════════════════════════════════════════════════════════════════╗
║          Iniciar carga del canto y configurar eventos          ║
╚════════════════════════════════════════════════════════════════╝  */
    document.addEventListener('DOMContentLoaded', () => {
/*
╔════════════════════════════════════════════════════════════════╗
║   Limpiar contenido existente primero para evitar duplicados   ║
╚════════════════════════════════════════════════════════════════╝  */
      const contenedor = document.getElementById('contenedor-partitura');
      if (contenedor) contenedor.innerHTML = '';
            cargarCantoSeguro(partitura);
            window.addEventListener('resize', manejarRedimensionamiento);
        }
    );
