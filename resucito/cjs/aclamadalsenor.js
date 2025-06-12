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
const factor = 1.6; // Factor diferente para móviles
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
      const factor = 1.3;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "ACLAMAD AL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 100 (99)",
      dbnos: "9",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ACLAMAD AL SEÑOR",
/* 2 */        "TODA LA TIERRA,",
/* 3 */        "SERVID AL SEÑOR CON ALEGRÍA.",

/* 4 */        "Acercaos a Él",
/* 5 */        "*",
/* 6 */        "con gritos de júbilo.",

/* 7 */        "ACLAMAD AL SEÑOR...",
/* 8 */        "TODA LA TIERRA,",
/* 9 */        "SERVID AL SEÑOR CON ALEGRÍA.",

/* 10 */        "Porque el Señor es nuestro Dios",
/* 11 */        "*",
/* 12 */        "y nosotros su pueblo.",

/* 13 */        "ACLAMAD AL SEÑOR...",
/* 14 */        "TODA LA TIERRA,",
/* 15 */        "SERVID AL SEÑOR CON ALEGRÍA.",

/* 16 */        "Entrad por sus puertas",
/* 17 */        "*",
/* 18 */        "con himnos de alegría.",

/* 19 */        "ACLAMAD AL SEÑOR...",
/* 20 */        "TODA LA TIERRA,",
/* 21 */        "SERVID AL SEÑOR CON ALEGRÍA.",

/* 22 */        "Bendecid su nombre",
/* 23 */        "*",
/* 24 */        "dándole gracias.",

/* 25 */        "ACLAMAD AL SEÑOR...",
/* 26 */        "TODA LA TIERRA,",
/* 27 */        "SERVID AL SEÑOR CON ALEGRÍA.",

/* 28 */        "Porque es bueno el Señor,",
/* 29 */        "*",
/* 30 */        "es eterno su amor",
/* 31 */        "*",
/* 32 */        "con nosotros.",

/* 33 */        "ACLAMAD AL SEÑOR...",
/* 34 */        "TODA LA TIERRA,",
/* 35 */        "SERVID AL SEÑOR CON ALEGRÍA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp23","m"), ac("Re","cp167","m")],
/* 3*/      [ac("Fa", "cp79",""), ac("Sol","cp255",""), ac("La","cp513","")],

/* 4*/      [ac("Re", "cp83","m"), ac("La","cp230","7")],
/* 5 */     [ac("", "cp0","")],
/* 6*/      [ac("Re", "cp299","m")],

/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Sol", "cp23","m"), ac("Re","cp167","m")],
/* 9*/      [ac("Fa", "cp79",""), ac("Sol","cp255",""), ac("La","cp513","")],
/* 10*/     [ac("Re", "cp218","m"), ac("La","cp540","7")],
/* 11 */    [ac("", "cp0","")],
/* 12*/     [ac("Re", "cp319","m")],

/* 13*/     [ac("Re", "cp14","m")],
/* 14*/     [ac("Sol", "cp23","m"), ac("Re","cp167","m")],
/* 15*/     [ac("Fa", "cp79",""), ac("Sol","cp255",""), ac("La","cp513","")],

/* 16*/     [ac("Re", "cp59","m"), ac("La","cp382","7")],
/* 17 */    [ac("", "cp0","")],
/* 18*/     [ac("Re", "cp346","m")],

/* 19*/     [ac("Re", "cp14","m")],
/* 20*/     [ac("Sol", "cp23","m"), ac("Re","cp167","m")],
/* 21*/     [ac("Fa", "cp79",""), ac("Sol","cp255",""), ac("La","cp513","")],

/* 22*/     [ac("Re", "cp109","m"), ac("La","cp352","7")],
/* 23 */    [ac("", "cp0","")],
/* 24*/     [ac("Re", "cp218","m")],

/* 25*/     [ac("Re", "cp14","m")],
/* 26*/     [ac("Sol", "cp25","m"), ac("Re","cp173","m")],
/* 27*/     [ac("Fa", "cp79",""), ac("Sol","cp255",""), ac("La","cp513","")],

/* 28*/     [ac("Re", "cp206","m"), ac("La","cp429","7")],
/* 29 */    [ac("", "cp0","")],
/* 30 */    [ac("", "cp0","")],
/* 31 */    [ac("", "cp0","")],
/* 32*/     [ac("Re", "cp165","m")],

/* 33*/     [ac("Re", "cp14","m")],
/* 34*/     [ac("Sol", "cp23","m"), ac("Re","cp167","m")],
/* 35*/     [ac("Fa", "cp79",""), ac("Sol","cp255",""), ac("La","cp513","")],
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
