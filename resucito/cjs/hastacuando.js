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
const NOMBREDELCANTO = "HASTA CUÁNDO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 13 (12)",
      dbnos: "80",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¿Hasta cuándo,",
/* 2 */        "por fin te acordarás, Yahveh, de mí,",
/* 3 */        "y tu rostro",
/* 4 */        "a mí lo volverás?",
/* 5 */        "CANTARÉ A YAHVEH,",
/* 6 */        "CANTARÉ AL QUE ES MI REDENTOR.",
/* 7 */        "Mírame,",
/* 8 */        "respóndeme, Yahveh, amor de mí,",
/* 9 */        "alumbra mis ojos,",
/* 10 */        "no me duerma yo en la muerte.",
/* 11 */        "CANTARÉ A YAHVEH,...",
/* 12 */        "CANTARÉ AL QUE ES MI REDENTOR.",
/* 13 */        "Que no puedan,",
/* 14 */        "decir mis enemigos: ••le vencí»,",
/* 15 */        "mis enemigos",
/* 16 */        "se alegrarán si yo cayera.",
/* 17 */        "CANTARÉ A YAHVEH,...",
/* 18 */        "CANTARÉ AL QUE ES MI REDENTOR.",
/* 19 */        "C. Pero yo",
/* 20 */        "espero en tu piedad,",
/* 21 */        "y mi corazón",
/* 22 */        "se alegrará en tu salvación.",
/* 23 */        "CANTARÉ A YAHVEH,...",
/* 24 */        "CANTARÉ AL QUE ES MI REDENTOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Mi", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 18*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("MI", "cp14","")],
/* 21 */   [ac("", "cp0","")],
/* 22*/      [ac("Lam", "cp14","")],
/* 23*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 24*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
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
