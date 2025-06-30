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
      salmo: "1982",
      dbnos: "218",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SANTO,SANTO,SANTO",
/* 2 */        "ES EL SEÑOR.",
/* 3 */        "SANTO,SANTO,SANTO",
/* 4 */        "ES EL SEÑOR,",
/* 5 */        "DIOS DEL UNIVERSO.",
/* 6 */        "Los cielos y la tierra",
/* 7 */        "están llenos de tu Gloria.",
/* 8 */        "HOSANNA, HOSANNA,",
/* 9 */        "HOSANNA,HOSANNA",
/* 10 */        "EN LO ALTO DEL CIELO.",
/* 11 */        "HOSANNA, HOSANNA,",
/* 12 */        "HOSANNA,HOSANNA",
/* 13 */        "EN LO ALTO DEL CIELO.",
/* 14 */        "Bendito es el que viene",
/* 15 */        "en el nombre del Señor,",
/* 16 */        "en el nombre del Señor.",
/* 17 */        "HOSANNA, HOSANNA...",
/* 18 */        "HOSANNA,HOSANNA",
/* 19 */        "EN LO ALTO DEL CIELO.",
/* 20 */        "HOSANNA, HOSANNA,",
/* 21 */        "HOSANNA,HOSANNA",
/* 22 */        "EN LO ALTO DEL CIELO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("Sol", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Re", "cp14","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
