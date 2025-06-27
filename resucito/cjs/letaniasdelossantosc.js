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
const NOMBREDELCANTO = "LETANÍAS DE LOS SANTOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "De la liturgia bautismal de la Vigilia pascual",
      dbnos: "189",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Santa Catalina de Siena.",
/* 2 */        "Santa Teresa de Jesús.",
/* 3 */        "Santos y santas de Dios",
/* 4 */        "Muéstrate propicio.",
/* 5 */        "De todo mal.",
/* 6 */        "De todo pecado.",
/* 7 */        "De la muerte eterna.",
/* 8 */        "Por tu encarnación.",
/* 9 */        "Por tu muerte y resurrección.",
/* 10 */        "Por el envío del Espíritu Santo.",
/* 11 */        "Nosotros que somos pecadores.",
/* 12 */        "Para que regeneres a",
/* 13 */        "... N/.",
/* 14 */        "con la gracia del Bautismo.",
/* 15 */        "Para que regeneres a estos",
/* 16 */        "elegidos con la gracia del Bautismo.",
/* 17 */        "Para que santifiques esta agua",
/* 18 */        "en la que renacerán tus nuevos hijos.",
/* 19 */        "Jesús hijo de Dios vivo.",
/* 20 */        "Cristo, óyenos.",
/* 21 */        "Cristo, escúchanos.",
/* 22 */        "RUEGA POR NOSOTROS.",
/* 23 */        "RUEGA POR NOSOTROS.",
/* 24 */        "LÍBRANOS, SEÑOR.",
/* 25 */        "LÍBRANOS, SEÑOR.",
/* 26 */        "LÍBRANOS, SEÑOR.",
/* 27 */        "LÍBRANOS, SEÑOR.",
/* 28 */        "LÍBRANOS, SEÑOR.",
/* 29 */        "LÍBRANOS, SEÑOR.",
/* 30 */        "LÍBRANOS, SEÑOR.",
/* 31 */        "LÍBRANOS, SEÑOR.",
/* 32 */        "LÍBRANOS, SEÑOR.",
/* 33 */        "LÍBRANOS, SEÑOR.",
/* 34 */        "LÍBRANOS, SEÑOR.",
/* 35 */        "LÍBRANOS, SEÑOR.",
/* 36 */        "LÍBRANOS, SEÑOR.",
/* 37 */        "LÍBRANOS, SEÑOR.",
/* 38 */        "LÍBRANOS, SEÑOR.",
/* 39 */        "CRISTO, ÓYENOS.",
/* 40 */        "CRISTO, ESCÚCHANOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 20*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 21*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 22*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 23*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 24*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 25*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 26*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 27*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 28*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 29*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 30*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 31*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 32*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 33*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 34*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 35*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 36*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 37*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 38*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 39*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
/* 40*/      [ac("Do", "cp14",""), ac("Re","cp90","7")],
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
