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
const NOMBREDELCANTO = "HIMNO A LA KENOSIS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Filipenses 2,1-11",
      dbnos: "87",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Con un mismo amor,",
/* 2 */        "con un mismo espíritu,",
/* 3 */        "con los mismos sentimientos.",
/* 4 */        "Nada por rivalidad,",
/* 5 */        "ni por vanagloria,",
/* 6 */        "mas todo con humildad.",
/* 7 */        "Considerando a los otros como superiores a ti,",
/* 8 */        "no buscando tu propio interés,",
/* 9 */        "teniendo los sentimientos de Jesús.",
/* 10 */        "El cual, siendo Dios,",
/* 11 */        "no retuvo ávidamente su dignidad,",
/* 12 */        "sino que se hizo hombre.",
/* 13 */        "Y hecho hombre, se humilló a sí mismo,",
/* 14 */        "tomando condición de esclavo,",
/* 15 */        "obedeciendo hasta la muerte.",
/* 16 */        "¡Y qué muerte!:",
/* 17 */        "muerte de pecador, muerte de malhechor,",
/* 18 */        "¡muerte de cruz!",
/* 19 */        "Por eso Dios lo resucitó, lo exaltó",
/* 20 */        "y le dio el Nombre más alto que existe:",
/* 21 */        "Cristo Jesús es el Señor,",
/* 22 */        "ALELUYA.",
/* 23 */        "Cristo Jesús es el Señor,",
/* 24 */        "ALELUYA.",
/* 25 */        "Cristo Jesús es el Señor,",
/* 26 */        "ALELUYA.",
/* 27 */        "¡ALELUYA!",
/* 28 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 29 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 30 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 31 */        "¡ALELUYA!",
/* 32 */        "Cristo Jesús es mi Señor,",
/* 33 */        "ALELUYA.",
/* 34 */        "Cristo Jesús es tu Señor,",
/* 35 */        "ALELUYA.",
/* 36 */        "Cristo Jesús es el Señor,",
/* 37 */        "ALELUYA.",
/* 38 */        "¡ALELUYA!",
/* 39 */        "ALELUYA,ALELUYA,ALELUYA...",
/* 40 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 41 */        "ALELUYA,ALELUYA,ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Si7", "cp14","")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Si7", "cp","")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Si7", "cp14","")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("Si7", "cp14","")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("Si7", "cp14","")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("La","cp150","m"), ac("Mi","cp250","m")],
/* 18*/      [ac("Si7", "cp14","")],
/* 19*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 20*/      [ac("Si7", "cp14","")],
/* 21*/      [ac("Mi", "cp14","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Re", "cp14","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Do", "cp14","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Si7", "cp14","")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Re", "cp14","")],
/* 30*/      [ac("Do", "cp14","")],
/* 31*/      [ac("Si7", "cp14","")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Re", "cp14","")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Do", "cp14","")],
/* 37 */   [ac("", "cp0","")],
/* 38*/      [ac("Si7", "cp14","")],
/* 39*/      [ac("Mi", "cp14","m")],
/* 40*/      [ac("Re", "cp14","")],
/* 41*/      [ac("Do", "cp14","")],
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
