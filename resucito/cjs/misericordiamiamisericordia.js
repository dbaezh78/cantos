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
const NOMBREDELCANTO = "MISERICORDIA MÍA, MISERICORDIA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 51 (50)",
      dbnos: "118",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 2 */        "Misericordia, Dios mío, por tu bondad,",
/* 3 */        "por tu inmensa compasión borra mi culpa;",
/* 4 */        "lava del todo mi delito,",
/* 5 */        "limpia mi pecado.",
/* 6 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 7 */        "Pues yo reconozco mi culpa,",
/* 8 */        "tengo siempre presente mi pecado:",
/* 9 */        "contra Ti, contra Ti sólo pequé,",
/* 10 */        "cometí la maldad que aborreces.",
/* 11 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 12 */        "En la sentencia tendrás razón,",
/* 13 */        "en el juicio resultarás inocente.",
/* 14 */        "Mira, en la culpa nací,",
/* 15 */        "pecador me concibió mi madre.",
/* 16 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 17 */        "Te gusta un corazón sincero,",
/* 18 */        "y en mi interiorme inculcas sabiduría.",
/* 19 */        "Rocíame con el hisopo: quedaré limpio;",
/* 20 */        "lávame: quedaré más blanco que la nieve.",
/* 21 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 22 */        "Hazme oír el gozo y la alegría,",
/* 23 */        "que se alegren los huesos quebrantados.",
/* 24 */        "Aparta de mi pecado tu vista,",
/* 25 */        "borra en mí toda culpa.",
/* 26 */        "A MISERICORDIA MÍA ...",
/* 27 */        "Oh Dios, crea en mí un corazón puro,",
/* 28 */        "renuévame por dentro con espíritu firme;",
/* 29 */        "no me arrojes lejos de tu rostro,",
/* 30 */        "no me quites tu Santo Espíritu.",
/* 31 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 32 */        "Devuélveme la alegría de tu salvación,",
/* 33 */        "afiánzame con espíritu generoso;",
/* 34 */        "enseñaré a los malvados tus caminos,",
/* 35 */        "los pecadores volverán a ti.",
/* 36 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 37 */        "Líbrame de la sangre, oh Dios,",
/* 38 */        "Dios, Salvador mío,",
/* 39 */        "y cantará mi lengua tu justicia.",
/* 40 */        "Señor, me abrirás los labios,",
/* 41 */        "y mi boca proclamará tu alabanza.",
/* 42 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 43 */        "C Los sacrificios no te satisfacen:",
/* 44 */        "si te ofreciera un holocausto, tú no lo querrías.",
/* 45 */        "Mi sacrificio es un espíritu quebrantado;",
/* 46 */        "un corazón quebrantado y humillado,",
/* 47 */        "tú no lo desprecias.",
/* 48 */        "MISERICORDIA MÍA, MISERICORDIA ...",
/* 49 */        "C Señor, por tu bondad, favorece a Sión,",
/* 50 */        "reconstruye las murallas de Jerusalén:",
/* 51 */        "Entonces aceptarás los sacrificios rituales,",
/* 52 */        "ofrendas y holocaustos,",
/* 53 */        "sobre tu altar se inmolarán novillos.",
/* 54 */        "MISERICORDIA MÍA, MISERICORDIA ...",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 2*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Mi", "cp","m")],
/* 6*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 37 */   [ac("", "cp0","")],
/* 38 */   [ac("", "cp0","")],
/* 39 */   [ac("", "cp0","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 43 */   [ac("", "cp0","")],
/* 44 */   [ac("", "cp0","")],
/* 45 */   [ac("", "cp0","")],
/* 46 */   [ac("", "cp0","")],
/* 47 */   [ac("", "cp0","")],
/* 48*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 49 */   [ac("", "cp0","")],
/* 50 */   [ac("", "cp0","")],
/* 51 */   [ac("", "cp0","")],
/* 52 */   [ac("", "cp0","")],
/* 53 */   [ac("", "cp0","")],
/* 54*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
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
