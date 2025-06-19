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
const NOMBREDELCANTO = "MISERICORDIA, DIOS MÍO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 51(50)",
      dbnos: "117",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Misericordia, Dios mío, por tu bondad,",
/* 2 */        "POR TU INMENSA COMPASIÓN",
/* 3 */        "BORRA MI CULPA;",
/* 4 */        "lava del todo mi delito,",
/* 5 */        "LIMPIA MI PECADO.",
/* 6 */        "Pues yo reconozco mi culpa,",
/* 7 */        "TENGO SIEMPRE PRESENTE MI PECADO:",
/* 8 */        "contra Ti, contra Ti sólo pequé,",
/* 9 */        "COMETÍ LA MALDAD QUE ABORRECES.",
/* 10 */        "En la sentencia tendrás razón,",
/* 11 */        "EN EL JUICIO RESULTARÁS INOCENTE.",
/* 12 */        "Mira, en la culpa nací,",
/* 13 */        "PECADOR ME CONCIBIÓ MI MADRE.",
/* 14 */        "Te gusta un corazón sincero,",
/* 15 */        "Y EN MI INTERIOR",
/* 16 */        "ME INCULCAS SABIDURÍA.",
/* 17 */        "Rocíame con el hisopo: quedaré limpio;",
/* 18 */        "LÁVAME: QUEDARÉ",
/* 19 */        "MÁS BLANCO QUE LA NIEVE.",
/* 20 */        "Hazme oír el gozo y la alegría,",
/* 21 */        "QUE SE ALEGREN",
/* 22 */        "LOS HUESOS QUEBRANTADOS.",
/* 23 */        "Aparta de mi pecado tu vista,",
/* 24 */        "BORRA EN MÍ TODA CULPA.",
/* 25 */        "Oh Dios, crea en mí un corazón puro,",
/* 26 */        "RENUÉVAME POR DENTRO",
/* 27 */        "CON ESPÍRITU FIRME;",
/* 28 */        "no me arrojes lejos de tu rostro,",
/* 29 */        "NO ME QUITES TU SANTO ESPÍRITU.",
/* 30 */        "Devuélveme la alegría de tu salvación,",
/* 31 */        "AFIÁNZAME CON ESPÍRITU GENEROSO;",
/* 32 */        "enseñaré a los malvados tus caminos,",
/* 33 */        "LOS PECADORES VOLVERÁN A TI.",
/* 34 */        "Líbrame de la sangre, oh Dios,",
/* 35 */        "Dios, Salvador mío,",
/* 36 */        "Y CANTARÁ MI LENGUA TU JUSTICIA.",
/* 37 */        "Señor, me abrirás los labios,",
/* 38 */        "Y MI BOCA PROCLAMARÁ TU ALABANZA.",
/* 39 */        "Los sacrificios no te satisfacen:",
/* 40 */        "SI TE OFRECIERA UN HOLOCAUSTO,",
/* 41 */        "TÚ NO LO QUERRÍAS.",
/* 42 */        "Mi sacrificio es un espíritu quebrantado;",
/* 43 */        "UN CORAZÓN QUEBRANTADO Y",
/* 44 */        "HUMILLADO, TÚ NO LO DESPRECIAS.",
/* 45 */        "Señor, por tu bondad, favorece a Sión,",
/* 46 */        "RECONSTRUYE",
/* 47 */        "LAS MURALLAS DE JERUSALÉN:",
/* 48 */        "Entonces aceptarás los sacrificios rituales,",
/* 49 */        "ofrendas y holocaustos,",
/* 50 */        "SOBRE TU ALTAR",
/* 51 */        "SE INMOLARÁN NOVILLOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("Sol", "cp14","m")],
/* 5*/      [ac("Re", "cp","m")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35 */   [ac("", "cp0","")],
/* 36 */   [ac("", "cp0","")],
/* 37 */   [ac("", "cp0","")],
/* 38 */   [ac("", "cp0","")],
/* 39 */   [ac("", "cp0","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43 */   [ac("", "cp0","")],
/* 44 */   [ac("", "cp0","")],
/* 45 */   [ac("", "cp0","")],
/* 46 */   [ac("", "cp0","")],
/* 47 */   [ac("", "cp0","")],
/* 48 */   [ac("", "cp0","")],
/* 49 */   [ac("", "cp0","")],
/* 50 */   [ac("", "cp0","")],
/* 51 */   [ac("", "cp0","")],
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
