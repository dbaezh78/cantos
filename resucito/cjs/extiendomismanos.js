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
const NOMBREDELCANTO = "EXTIENDO MIS MANOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Oda XXVII de Salomón",
      dbnos: "74",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EXTIENDO MIS MANOS,",
/* 2 */        "EXTIENDO MIS MANOS,",
/* 3 */        "Y GRITO AL SEÑOR ,",
/* 4 */        "Y GRITO AL SEÑOR.",
/* 5 */        "Abbá, Padre mío,",
/* 6 */        "Abbá, Padre mío.",
/* 7 */        "En tus manos encomiendo mi espíritu,",
/* 8 */        "en tus manos encomiendo mi espíritu.",
/* 9 */        "EXTIENDO MIS MANOS,...",
/* 10 */        "EXTIENDO MIS MANOS,",
/* 11 */        "Y GRITO AL SEÑOR ,",
/* 12 */        "Y GRITO AL SEÑOR.",
/* 13 */        "Porque el extender las manos",
/* 14 */        "es el signo de su Cruz,",
/* 15 */        "y el estar derecho",
/* 16 */        "es el leño alzado,",
/* 17 */        "es el leño alzado.",
/* 18 */        "EXTIENDO MIS MANOS,...",
/* 19 */        "EXTIENDO MIS MANOS,",
/* 20 */        "Y GRITO AL SEÑOR ,",
/* 21 */        "Y GRITO AL SEÑOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","Si"), ac("m","cp90","Sol")],
/* 2*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 3*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 4*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 5*/      [ac("Fa#", "cp","")],
/* 6*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 7*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 8*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Re","cp250","")],
/* 9*/      [ac("Re", "cp14","Si"), ac("m","cp90","Sol")],
/* 10*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 12*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 13*/      [ac("Fa#", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","")],
/* 15*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 16*/      [ac("La", "cp14","")],
/* 17*/      [ac("Re", "cp14","")],
/* 18*/      [ac("Re", "cp14","Si"), ac("m","cp90","Sol")],
/* 19*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 20*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 21*/      [ac("La", "cp14",""), ac("Re","cp90","")],
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