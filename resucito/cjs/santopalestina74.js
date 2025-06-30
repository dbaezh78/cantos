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
      salmo: "Palestina 74",
      dbnos: "216",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SANTO,SANTO,SANTO,",
/* 2 */        "SANTO,SANTO,SANTO,",
/* 3 */        "SANTO,SANTO,SANTO,",
/* 4 */        "SANTO ES EL SEÑOR.",
/* 5 */        "YAHVEH SEBAOTH,",
/* 6 */        "YAHVEH SEBAOTH.",
/* 7 */        "Los cielos",
/* 8 */        "y la tierra",
/* 9 */        "están llenos,",
/* 10 */        "están llenos de Ti.",
/* 11 */        "HOSANNA, HOSANNA,",
/* 12 */        "HOSANNA, HOSANNA.",
/* 13 */        "HOSANNA, HOSANNA,",
/* 14 */        "HOSANNA, HOSANNA,",
/* 15 */        "HOSANNA EN LO ALTO DEL CIELO,",
/* 16 */        "HOSANNA, HOSANNA.",
/* 17 */        "Bendito",
/* 18 */        "es el que viene,",
/* 19 */        "en el nombre,",
/* 20 */        "en el nombre del Señor.",
/* 21 */        "HOSANNA, HOSANNA,",
/* 22 */        "HOSANNA, HOSANNA.",
/* 23 */        "HOSANNA, HOSANNA,",
/* 24 */        "HOSANNA, HOSANNA,",
/* 25 */        "HOSANNA EN LO ALTO DEL CIELO,",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","m")],
/* 3*/      [ac("La", "cp14","")],
/* 4*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 5*/      [ac("Sol", "cp","m"), ac("La","cp90","")],
/* 6*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 7*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Sol", "cp14","m")],
/* 10*/      [ac("La", "cp14","")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("La", "cp14","")],
/* 15*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 16*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 17*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 18*/      [ac("Re", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","m")],
/* 20*/      [ac("La", "cp14","")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22*/      [ac("La", "cp14","")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("La", "cp14","")],
/* 25*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
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
