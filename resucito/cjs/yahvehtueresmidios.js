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
const NOMBREDELCANTO = "YAHVEH, TÚ ERES MI DIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 25,1-8",
      dbnos: "175",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "YAHVEH, TÚ ERES MI DIOS,",
/* 2 */        "YO TE ENSALZARÉ.",
/* 3 */        "Y alabaré tu nombre,",
/* 4 */        "alabaré tu nombre,",
/* 5 */        "alabaré tu nombre.",
/* 6 */        "YAHVEH, TÚ ERES MI DIOS...",
/* 7 */        "YO TE ENSALZARÉ.",
/* 8 */        "Destruirás la muerte para siempre.",
/* 9 */        "Y enjugarás las lágrimas",
/* 10 */        "de todos los rostros,",
/* 11 */        "de todos los rostros.",
/* 12 */        "YAHVEH, TÚ ERES MI DIOS...",
/* 13 */        "YO TE ENSALZARÉ.",
/* 14 */        "C Ya se acercan los pasos de los pobres,",
/* 15 */        "los pies de los humildes,",
/* 16 */        "los pies de los humildes,",
/* 17 */        "el resto de Jacob.",
/* 18 */        "YAHVEH, TÚ ERES MI DIOS...",
/* 19 */        "YO TE ENSALZARÉ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("Fa", "cp14","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Fa", "cp14","")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Fa", "cp14","")],
/* 17*/      [ac("Mi", "cp14","")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 19*/      [ac("La", "cp14","m")],
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
