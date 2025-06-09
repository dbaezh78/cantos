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
  else if (anchoPantalla <= 900) {
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
const NOMBREDELCANTO = "DÍA DE REPOSO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 8,52",
      dbnos: "50",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Si alguno guarda mi Palabra",
/* 2 */        "no gustará la muerte, ¡no!",
/* 3 */        "TÚ ERES ÚNICO, EL ÚNICO CON ALEGRÍA.",
/* 4 */        "¿QUIÉN ES COMO EL SEÑOR?",
/* 5 */        "Corona de salvación,",
/* 6 */        "MEMORIAL DE ALEGRÍA",
/* 7 */        "DÍA DE REPOSO Y DE SANTIDAD",
/* 8 */        "HAS DADO A TU PUEBLO.",
/* 9 */        "DÍA DE REPOSO Y DE SANTIDAD",
/* 10 */        "HAS DADO A TU PUEBLO.",
/* 11 */        "Abraham vio este día",
/* 12 */        "Y EN ISAAC SE ALEGRÓ.",
/* 13 */        "Jacob y sus hijos en él descansaron.",
/* 14 */        "JACOB Y SUS HIJOS EN ÉL DESCANSARON.",
/* 15 */        "DÍA DE REPOSO Y DE SANTIDAD...",
/* 16 */        "HAS DADO A TU PUEBLO.",
/* 17 */        "DÍA DE REPOSO Y DE SANTIDAD",
/* 18 */        "HAS DADO A TU PUEBLO",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Ml", "cp14","m"), ac("La","cp90","m"), ac("Ml","cp150","m")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Mi", "cp","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 7*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 14*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 15*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","m")],
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
