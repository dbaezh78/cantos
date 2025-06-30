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
const NOMBREDELCANTO = "JACOB";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Genesis 32,23-29 ",
      dbnos: "228",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Era ya noche cuando Jacob se levantó,",
/* 2 */        "tomó a sus mujeres y a todos sus hijos",
/* 3 */        "y cruzó el vado de Yabboq.",
/* 4 */        "Los tomó y les hizo pasar el río,",
/* 5 */        "e hizo pasar también todos sus bienes",
/* 6 */        "y Jacob quedó solo.",
/* 7 */        "Y de pronto alguien luchó con él.",
/* 8 */        "Y DE PRONTO ALGUIEN LUCHÓ CON ÉL.",
/* 9 */        "Luchó, luchó con él hasta el alba.",
/* 10 */        "Viendo Aquel que Jacob se le resistía,",
/* 11 */        "le golpeó con fuerza en la cadera",
/* 12 */        "y el fémur de Jacob se dislocó",
/* 13 */        "en la lucha con Aquel.",
/* 14 */        "Suéltame, que ya viene la aurora.",
/* 15 */        "SUÉLTAME, QUE YA VIENE LA AURORA.",
/* 16 */        "Suéltame, que ya viene la aurora».",
/* 17 */        "«No, no te soltaré",
/* 18 */        "si no me bendices.",
/* 19 */        "NO, NO TE SOLTARÉ",
/* 20 */        "SI NO ME BENDICES».",
/* 21 */        "Y Dios le preguntó:",
/* 22 */        "«¿Cuál es tu nombre? ¿Cuál es tu nombre?»",
/* 23 */        "«Jacob», respondió él,",
/* 24 */        "«Jacob», respondió él.",
/* 25 */        "«No te llamarás más Jacob.",
/* 26 */        "ISRAEL, ISRAEL,",
/* 27 */        "ISRAEL SERÁ TU NOMBRE.",
/* 28 */        "ISRAEL, HAS CONOCIDO TU DEBILIDAD.",
/* 29 */        "ISRAEL, TE APOYARÁS EN DIOS.",
/* 30 */        "ISRAEL, FUERTE CON DIOS.",
/* 31 */        "ISRAEL, TU VENCERÁS.",
/* 32 */        "ISRAEL, HAS CONOCIDO TU DEBILIDAD.",
/* 33 */        "ISRAEL, TE APOYARÁS EN DIOS».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Fa", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 10*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("Do", "cp14",""), ac("Re","cp90","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("Do", "cp14",""), ac("Re","cp90","")],
/* 20*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 21*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Fa", "cp14","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 27*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 29*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 30*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 31*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 32*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 33*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
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
