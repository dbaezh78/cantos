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
const factor = 0.86; // Factor diferente para móviles
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
      const factor = 0.9;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "PALOMA INCORRUPTA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Kontákion (Romano el Meloda)",
      dbnos: "130",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Dios te salve, María,",
/* 2 */        "radiante como el sol.",
/* 3 */        "Tú nos muestras el camino;",
/* 4 */        "esperanza de los confines de la tierra;",
/* 5 */        "tú eres la sola Paloma incorrupta.",
/* 6 */        "Está en ti toda la belleza del Espíritu;",
/* 7 */        "gloria que en el mundo",
/* 8 */        "hace bella la creación.",
/* 9 */        "A DIOS TE SALVE, MARÍA,",
/* 10 */        "RADIANTE COMO EL SOL.",
/* 11 */        "PALOMA INCORRUPTA;",
/* 12 */        "REFUGIO DE LAS ALMAS DÉBILES;",
/* 13 */        "ARCA DEL ESPÍRITU SANTO.",
/* 14 */        "C Dios te salve, María,",
/* 15 */        "radiante como el sol.",
/* 16 */        "Tú intercedes por todos los hombres;",
/* 17 */        "tú eres el refugio de las almas débiles;",
/* 18 */        "filacteria de la perfecta castidad;",
/* 19 */        "arca perfumadísima del Espíritu Santo.",
/* 20 */        "A DIOS TE SALVE, MARÍA,...",
/* 21 */        "RADIANTE COMO EL SOL.",
/* 22 */        "PALOMA INCORRUPTA;",
/* 23 */        "REFUGIO DE LAS ALMAS DÉBILES;",
/* 24 */        "ARCA DEL ESPÍRITU SANTO.",
/* 25 */        "Dios te salve, María,",
/* 26 */        "radiante como el sol.",
/* 27 */        "A ti suplican todos los hombres.",
/* 28 */        "A ti pedimos por la Iglesia:",
/* 29 */        "dale nuevo vigor de gracia y santidad.",
/* 30 */        "A DIOS TE SALVE, MARÍA,...",
/* 31 */        "RADIANTE COMO EL SOL.",
/* 32 */        "PALOMA INCORRUPTA;",
/* 33 */        "REFUGIO DE LAS ALMAS DÉBILES;",
/* 34 */        "ARCA DEL ESPÍRITU SANTO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 2*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 3*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("Fa#", "cp","")],
/* 6*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Fa#", "cp14","")],
/* 9*/      [ac("Sim", "cp14",""), ac("Mi","cp90","m")],
/* 10*/      [ac("Fa#", "cp14","")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 14*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 15*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 16*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 17*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 18*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 19*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 20*/      [ac("Sim", "cp14",""), ac("Mi","cp90","m")],
/* 21*/      [ac("Fa#", "cp14","")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 25*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 26*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 27*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 28*/      [ac("Sol", "cp14","")],
/* 29*/      [ac("Fa#", "cp14","")],
/* 30*/      [ac("Sim", "cp14",""), ac("Mi","cp90","m")],
/* 31*/      [ac("Fa#", "cp14","")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
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
