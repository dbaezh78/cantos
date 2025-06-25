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
const NOMBREDELCANTO = "VOSOTROS SOIS LA LUZ DEL MUNDO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 5,14ss ",
      dbnos: "173",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "VOSOTROS SOIS LA LUZ DEL MUNDO,",
/* 2 */        "SOIS LA LUZ, LA LUZ DEL MUNDO,",
/* 3 */        "LA LUZ DEL MUNDO.",
/* 4 */        "No puede ocultarse una ciudad",
/* 5 */        "situada en la cima de un monte;",
/* 6 */        "no puede ocultarse una ciudad",
/* 7 */        "situada en la cima de un monte.",
/* 8 */        "Ni se enciende una lámpara,",
/* 9 */        "para ponerla debajo del celemín,",
/* 10 */        "sino sobre el candelero,",
/* 11 */        "Mt 5,14ss",
/* 12 */        "para que ilumine a los que están en la casa.",
/* 13 */        "Brille así vuestra luz",
/* 14 */        "delante de los hombres,",
/* 15 */        "para que vean vuestras buenas obras",
/* 16 */        "y glorifiquen a vuestro Padre que está en los cielos.",
/* 17 */        "VOSOTROS SOIS LA LUZ DEL MUNDO...",
/* 18 */        "SOIS LA LUZ, LA LUZ DEL MUNDO,",
/* 19 */        "LA LUZ DEL MUNDO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Re", "cp14","m"), ac("Mi","cp90",""), ac("Re","cp150","m"), ac("Mi","cp250","")],
/* 3*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 15*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 18*/      [ac("Re", "cp14","m"), ac("Mi","cp90",""), ac("Re","cp150","m"), ac("Mi","cp250","")],
/* 19*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
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
