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
      salmo: "Palomeras 65",
      dbnos: "214",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SANTO, SANTO, SANTO,",
/* 2 */        "SANTO ES EL SEÑOR,",
/* 3 */        "DIOS DEL UNIVERSO,",
/* 4 */        "SANTO ES EL SEÑOR.",
/* 5 */        "Llenos están los cielos",
/* 6 */        "y la tierra de tu gloria.",
/* 7 */        "Hosanna, hosanna, hosanna,",
/* 8 */        "hosanna en las alturas.",
/* 9 */        "SANTO, SANTO, SANTO...",
/* 10 */        "SANTO ES EL SEÑOR,",
/* 11 */        "DIOS DEL UNIVERSO,",
/* 12 */        "SANTO ES EL SEÑOR.",
/* 13 */        "Bendito es el que viene",
/* 14 */        "en nombre del Señor,",
/* 15 */        "bendito es el que viene",
/* 16 */        "en nombre del Señor.",
/* 17 */        "HOSANNA EN LAS ALTURAS,",
/* 18 */        "BENDITO ES EL QUE VIENE,",
/* 19 */        "BENDITO ES EL QUE VIENE",
/* 20 */        "EN NOMBRE DEL SEÑOR.",
/* 21 */        "SANTO, SANTO, SANTO...",
/* 22 */        "SANTO ES EL SEÑOR,",
/* 23 */        "DIOS DEL UNIVERSO,",
/* 24 */        "SANTO ES EL SEÑOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("La", "cp14","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("La", "cp14","")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24*/      [ac("La", "cp14","")],
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
