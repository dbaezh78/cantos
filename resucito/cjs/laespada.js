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
const NOMBREDELCANTO = "LA ESPADA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Ezequiel 21,14-22",
      dbnos: "97",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Espada, espada, bruñida para matar.",
/* 2 */        "ESPADA, ESPADA, BRUÑIDA PARA MATAR.",
/* 3 */        "María, María, madre de Dios.",
/* 4 */        "MARÍA, MARÍA, MADRE DE DIOS.",
/* 5 */        "Grita, hijo de hombre,",
/* 6 */        "grita, hijo de hombre:",
/* 7 */        "la espada es para mi pueblo,",
/* 8 */        "espada para mi pueblo.",
/* 9 */        "ESPADA, ESPADA, BRUÑIDA PARA MATAR.",
/* 10 */        "MARÍA, MARÍA, MADRE DE DIOS.",
/* 11 */        "Gira a tu derecha,",
/* 12 */        "gira hacia tu izquierda,",
/* 13 */        "allí donde tus filos quedarán saciados,",
/* 14 */        "allí donde se saciará mi alma.",
/* 15 */        "ESPADA, ESPADA, BRUÑIDA PARA MATAR.",
/* 16 */        "MARÍA, MARÍA, MADRE DE DIOS.",
/* 17 */        "Bruñida para matar,",
/* 18 */        "bruñida para matar.",
/* 19 */        "Grita, hijo de hombre,",
/* 20 */        "Grita, hijo de hombre:",
/* 21 */        "La espada es para mi pueblo,",
/* 22 */        "espada para mi pueblo.",
/* 23 */        "ESPADA, ESPADA, BRUÑIDA PARA MATAR.",
/* 24 */        "MARÍA, MARÍA, MADRE DE DIOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 2*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 3*/      [ac("Do", "cp14",""), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 4*/      [ac("Do", "cp14",""), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 5*/      [ac("La", "cp","m"), ac("Mi","cp90","7")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m"), ac("Mi","cp90","7")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 9*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 10*/      [ac("Do", "cp14",""), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 11*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 12*/      [ac("Re", "cp14","m"), ac("Mi","cp90","7")],
/* 13*/      [ac("Re", "cp14","m"), ac("Mi","cp90","7")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 15*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 16*/      [ac("Do", "cp14",""), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 17*/      [ac("Re", "cp14","m"), ac("Mi","cp90","7")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 19*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Re", "cp14","m"), ac("Mi","cp90","7")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 23*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 24*/      [ac("Do", "cp14",""), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
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
