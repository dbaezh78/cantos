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
const NOMBREDELCANTO = "QUÉ ESTUPENDO, QUÉ ALEGRÍA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 133 (132)",
      dbnos: "137",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!",
/* 2 */        "¡LOS HERMANOS SIEMPRE UNIDOS!",
/* 3 */        "Es como ungüento que desciende por la barba,",
/* 4 */        "por la barba de Aarón.",
/* 5 */        "A. ES COMO UNGÜENTO QUE DESCIENDE POR LA BARBA,",
/* 6 */        "POR LA BARBA DE AARÓN.",
/* 7 */        "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!...",
/* 8 */        "¡LOS HERMANOS SIEMPRE UNIDOS!",
/* 9 */        "Como rocío que desciende del Hermón",
/* 10 */        "sobre el monte de Sión,",
/* 11 */        "A. COMO ROCÍO QUE DESCIENDE DEL HERMÓN",
/* 12 */        "SOBRE EL MONTE DE SIÓN.",
/* 13 */        "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!...",
/* 14 */        "¡LOS HERMANOS SIEMPRE UNIDOS!",
/* 15 */        "Nos bendice el Señor desde lo alto,",
/* 16 */        "la vida nos da eternamente,",
/* 17 */        "A. NOS BENDICE EL SEÑOR DESDE LO ALTO,",
/* 18 */        "LA VIDA NOS DA ETERNAMENTE.",
/* 19 */        "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!...",
/* 20 */        "¡LOS HERMANOS SIEMPRE UNIDOS!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m"), ac("Mi","cp250","")],
/* 2*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m"), ac("Mi","cp250","")],
/* 8*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m"), ac("Mi","cp250","")],
/* 14*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m"), ac("Mi","cp250","")],
/* 20*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
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
