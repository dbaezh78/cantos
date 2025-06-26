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
const NOMBREDELCANTO = "YO VENGO A REUNIR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 66,18-21",
      dbnos: "177",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Yo vengo a reunir,",
/* 2 */        "YO VENGO A REUNIR,",
/* 3 */        "a todas las naciones,",
/* 4 */        "A TODAS LAS NACIONES.",
/* 5 */        "Vendrán y verán mi gloria,",
/* 6 */        "VENDRÁN Y VERÁN MI GLORIA.",
/* 7 */        "GLORIA, GLORIA, GLORIA.",
/* 8 */        "GLORIA, GLORIA, GLORIA.",
/* 9 */        "Y pondré en ellos una señal",
/* 10 */        "y los enviaré a las naciones más lejanas,",
/* 11 */        "para que anuncien mi gloria,",
/* 12 */        "para que anuncien mi gloria.",
/* 13 */        "GLORIA, GLORIA, GLORIA...",
/* 14 */        "GLORIA, GLORIA, GLORIA.",
/* 15 */        "Y traerán a vuestros hermanos",
/* 16 */        "de entre todas las naciones,",
/* 17 */        "como oblación al Señor,",
/* 18 */        "como oblación al Señor.",
/* 19 */        "Y de entre ellos tomaré",
/* 20 */        "sacerdotes para mí,",
/* 21 */        "sacerdotes que anunciarán mi gloria,",
/* 22 */        "sacerdotes que anunciarán mi gloria.",
/* 23 */        "GLORIA, GLORIA, GLORIA...",
/* 24 */        "GLORIA, GLORIA, GLORIA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Fa#", "cp",""), ac("Si","cp90","7")],
/* 6*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 8*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 9*/      [ac("Do#", "cp14","m")],
/* 10*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 12*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 14*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 15*/      [ac("Sol#", "cp14",""), ac("La","cp90","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 18*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 19*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 20*/      [ac("Si", "cp14",""), ac("Sol#","cp90","")],
/* 21*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 23*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 24*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
/* 7 */        "Mi",
/* 8 */        "Mi",
/* 13 */        "Mi",
/* 14 */        "Mi",
/* 23 */        "Mi",
/* 24 */        "Mi",
      ],
      asambleaAcordes: [
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
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
