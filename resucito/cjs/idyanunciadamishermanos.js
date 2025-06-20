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
const NOMBREDELCANTO = "ID Y ANUNCIAD A MIS HERMANOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 28,10.16-20",
      dbnos: "92",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "«ID Y ANUNCIAD A MIS HERMANOS",
/* 2 */        "QUE VAYAN A GALILEA.",
/* 3 */        "Que allí me verán,",
/* 4 */        "QUE ALLÍ ME VERÁN».",
/* 5 */        "Los discípulos fueron a Galilea,",
/* 6 */        "al monte que Jesús les había indicado.",
/* 7 */        "Cuando lo vieron le adoraron.",
/* 8 */        "Y Jesús les dijo:",
/* 9 */        "«Me ha sido dado todo poder",
/* 10 */        "en el cielo y en la tierra.",
/* 11 */        "A ME HA SIDO DADO TODO PODER",
/* 12 */        "EN EL CIELO Y EN LA TIERRA.",
/* 13 */        "C Id, pues, y haced discípulos",
/* 14 */        "a todas las gentes",
/* 15 */        "bautizándolas en el nombre del Padre",
/* 16 */        "y del Hijo y del Espíritu Santo,",
/* 17 */        "y enseñándoles a poner en práctica,",
/* 18 */        "todo lo que yo os he mandado.",
/* 19 */        "«ID Y ANUNCIAD A MIS HERMANOS...",
/* 20 */        "QUE VAYAN A GALILEA.",
/* 21 */        "Ved que yo estoy con vosotros,",
/* 22 */        "ved que yo estoy con vosotros",
/* 23 */        "todos los días.",
/* 24 */        "A. VED QUE YO ESTOY CON VOSOTROS,",
/* 25 */        "VED QUE YO ESTOY CON VOSOTROS",
/* 26 */        "TODOS LOS DÍAS.",
/* 27 */        "Hasta el fin del mundo,",
/* 28 */        "HASTA EL FIN DEL MUNDO».",
/* 29 */        "«ID Y ANUNCIAD A MIS HERMANOS...",
/* 30 */        "QUE VAYAN A GALILEA».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("La", "cp","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
/* 6*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 7*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 10*/      [ac("Do", "cp14","")],
/* 11*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 14*/      [ac("Do", "cp14","")],
/* 15*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Fa", "cp14","")],
/* 18*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Sol", "cp14","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Mi", "cp14","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
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
