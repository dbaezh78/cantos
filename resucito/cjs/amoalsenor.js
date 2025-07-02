/*
╔════════════════════════════════════════════════════════════════╗
║                         FUENTE DEL CANTO                       ║
╠════════════════════════════════════════════════════════════════╣
║                Mapeo para celulares menor a 700px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pcelular = {      };
/*
╔════════════════════════════════════════════════════════════════╗
║                Mapeo para celulares menor a 900px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pTablet = {       };
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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "AMO AL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 116 (114-115)",
      dbnos: "18",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Amo al Señor, porque escucha",
/* 2 */        "mi voz suplicante;",
/* 3 */        "inclina hacia mí su oído",
/* 4 */        "el día en que lo invoco.",

/* 5 */        "Me envolvían redes de muerte,",
/* 6 */        "me alcanzaron los lazos del infierno;",
/* 7 */        "me rodeaban tristeza y angustia,",
/* 8 */        "invoqué el nombre del Señor:",
/* 9 */        "«¡Te ruego, Señor, sálvame!».",

/* 10 */        "RECOBRA, ALMA MÍA, TU REPOSO,",
/* 11 */        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
/* 12 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 13 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 14 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 15 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",

//  DERECHA
/* 16 */        "¡Tenía fe, aun cuando dije:",
/* 17 */        "«Yo soy un desgraciado»!,",
/* 18 */        "y pensaba lleno de angustia:",
/* 19 */        "«todo hombre es falso».",

/* 20 */        "¿Cómo pagaré al Señor",
/* 21 */        "todo el bien que me ha hecho?",
/* 22 */        "Alzaré la copa de la bendición",
/* 23 */        "e invocaré el nombre del Señor.",

/* 24 */        "RECOBRA, ALMA MÍA, TU REPOSO...",
/* 25 */        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
/* 26 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 27 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 28 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 29 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp0",""), ac("Fa#","cp431","m")],
/* 2*/      [ac("Sol", "cp216","")],
/* 3*/      [ac("Mi", "cp42","m6"), ac("La","cp338","7")],
/* 4*/      [ac("Re", "cp314","")],

/* 5*/      [ac("Re", "cp","")],
/* 6*/      [ac("Fa#", "cp522","m")],
/* 7*/      [ac("Sol", "cp149",""), ac("Mi","cp447","m6")],
/* 8*/      [ac("La", "cp95","7")],
/* 9*/      [ac("Re", "cp316","")],

/* 10*/      [ac("Re", "cp0",""), ac("Fa#","cp507","m")],
/* 11*/      [ac("Sol", "cp0",""), ac("Mi","cp348","m6"), ac("La","cp622","7")],
/* 12*/      [ac("Sol", "cp0",""), ac("Re","cp495","")],
/* 13*/      [ac("La", "cp409","7"), ac("Re","cp614","")],
/* 14*/      [ac("Sol", "cp0",""), ac("Re","cp493","")],
/* 15*/      [ac("La", "cp411","7"), ac("Re","cp622","")],

//  DERECHA
/* 16*/      [ac("Re", "cp0",""), ac("Fa#","cp395","m")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Sol", "cp391","")],
/* 19*/      [ac("Mi", "cp14","m6"), ac("La","cp296","7")],
/* 20*/      [ac("Re", "cp0","")],

/* 21*/      [ac("Fa#", "cp423","m")],
/* 22*/      [ac("Sol", "cp78",""), ac("Mi","cp450","m6")],
/* 23*/      [ac("La", "cp141","7")],

/* 24*/      [ac("Re", "cp0",""), ac("Fa#","cp507","m")],
/* 25*/      [ac("Sol", "cp0",""), ac("Mi","cp348","m6"), ac("La","cp622","7")],
/* 26*/      [ac("Sol", "cp0",""), ac("Re","cp495","")],
/* 27*/      [ac("La", "cp409","7"), ac("Re","cp614","")],
/* 28*/      [ac("Sol", "cp0",""), ac("Re","cp493","")],
/* 29*/      [ac("La", "cp411","7"), ac("Re","cp622","")],
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
