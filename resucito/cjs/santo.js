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
const NOMBREDELCANTO = "SANTO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Melodía hebraica ",
      dbnos: "215",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SANTO, ES SANTO, SANTO, ES SANTO;",
/* 2 */        "SANTO, ES SANTO, SANTO, ES SANTO;",
/* 3 */        "SANTO, ES SANTO; YAHVEH SEBAOTH.",
/* 4 */        "Los cielos y la tierra",
/* 5 */        "están llenos de Ti.",
/* 6 */        "LOS CIELOS Y LA TIERRA",
/* 7 */        "ESTÁN LLENOS DE TI.",
/* 8 */        "Hosanna en el cielo,",
/* 9 */        "hosanna.",
/* 10 */        "HOSANNA EN EL CIELO,",
/* 11 */        "HOSANNA.",
/* 12 */        "SANTO, ES SANTO, SANTO, ES SANTO...",
/* 13 */        "SANTO, ES SANTO, SANTO, ES SANTO;",
/* 14 */        "SANTO, ES SANTO; YAHVEH SEBAOTH.",
/* 15 */        "Bendito el que viene,",
/* 16 */        "en el nombre del Señor.",
/* 17 */        "A BENDITO EL QUE VIENE,",
/* 18 */        "EN EL NOMBRE DEL SEÑOR.",
/* 19 */        "Hosanna en el cielo,",
/* 20 */        "hosanna.",
/* 21 */        "HOSANNA EN EL CIELO,",
/* 22 */        "HOSANNA.",
/* 23 */        "SANTO, ES SANTO, SANTO, ES SANTO...",
/* 24 */        "SANTO, ES SANTO, SANTO, ES SANTO;",
/* 25 */        "SANTO, ES SANTO; YAHVEH SEBAOTH.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 4*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m"), ac("Re","cp150","m")],
/* 5*/      [ac("Sol", "cp","m"), ac("Re","cp90","m")],
/* 6*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 7*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 8*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 9*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 10*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 11*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13*/      [ac("Fa", "cp14","")],
/* 14*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 15*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m"), ac("Re","cp150","m")],
/* 16*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 17*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m"), ac("Re","cp150","m")],
/* 18*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 19*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 20*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 21*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 22*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
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
