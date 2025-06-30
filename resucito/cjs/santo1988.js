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
      salmo: "1988",
      dbnos: "219",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Santo, Santo, Santo.",
/* 2 */        "SANTO,SANTO,SANTO.",
/* 3 */        "Los cielos y la tierra",
/* 4 */        "están llenos de tu Gloria.",
/* 5 */        "LOS CIELOS Y LA TIERRA",
/* 6 */        "ESTÁN LLENOS DE TU GLORIA.",
/* 7 */        "Hosanna en lo alto del Cielo.",
/* 8 */        "HOSANNA EN LO ALTO DEL CIELO.",
/* 9 */        "A SANTO,SANTO,SANTO.",
/* 10 */        "SANTO,SANTO,SANTO.",
/* 11 */        "Bendito es el que viene",
/* 12 */        "en el nombre del Señor.",
/* 13 */        "BENDITO ES EL QUE VIENE",
/* 14 */        "EN EL NOMBRE DEL SEÑOR.",
/* 15 */        "Hosanna en lo alto del Cielo.",
/* 16 */        "HOSANNA EN LO ALTO DEL CIELO.",
/* 17 */        "SANTO,SANTO,SANTO.",
/* 18 */        "SANTO,SANTO,SANTO.",
/* 19 */        "Santo, Santo, Santo.",
/* 20 */        "SANTO,SANTO,SANTO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 10*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 11*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 18*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
