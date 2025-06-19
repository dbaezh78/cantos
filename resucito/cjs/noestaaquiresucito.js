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
const NOMBREDELCANTO = "NO ESTÁ AQUÍ, RESUCITÓ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 28,1-8",
      dbnos: "120",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Pasado el sábado,",
/* 2 */        "al alba del primer día de la semana,",
/* 3 */        "María Magdalena y la otra María",
/* 4 */        "fueron al sepulcro.",
/* 5 */        "Cuando de pronto se produjo un terremoto,",
/* 6 */        "el Ángel del Señor bajó del cielo,",
/* 7 */        "e hizo rodar la piedra.",
/* 8 */        "Y el Ángel dijo a las mujeres:",
/* 9 */        "«No temáis, sé que buscáis a Jesús,",
/* 10 */        "el Crucificado.",
/* 11 */        "No está aquí, ha resucitado.",
/* 12 */        "A. NO ESTÁ AQUÍ, HA RESUCITADO.",
/* 13 */        "No está aquí, resucitó,",
/* 14 */        "A. NO ESTÁ AQUÍ, RESUCITÓ.",
/* 15 */        "Id de prisa a decir a sus discípulos:",
/* 16 */        "ha resucitado de entre los muertos.",
/* 17 */        "Id de prisa a decir a sus discípulos:",
/* 18 */        "ha resucitado de entre los muertos",
/* 19 */        "y os precede en Galilea.",
/* 20 */        "Mt 28,1-8",
/* 21 */        "NO ESTÁ AQUÍ, RESUCITÓ.",
/* 22 */        "NO ESTÁ AQUÍ, RESUCITÓ.",
/* 23 */        "NO ESTÁ AQUÍ, RESUCITÓ.",
/* 24 */        "Y os precede en Galilea,",
/* 25 */        "Y OS PRECEDE EN GALILEA;",
/* 26 */        "allí le veréis,",
/* 27 */        "ALLÍ LE VERÉIS.",
/* 28 */        "NO ESTÁ AQUÍ, RESUCITÓ...",
/* 29 */        "NO ESTÁ AQUÍ, RESUCITÓ.",
/* 30 */        "NO ESTÁ AQUÍ, RESUCITÓ.",
/* 31 */        "Y os precede en Galilea,",
/* 32 */        "Y OS PRECEDE EN GALILEA;",
/* 33 */        "allí le veréis,",
/* 34 */        "ALLÍ LE VERÉIS».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi","cp90","")],
/* 6*/      [ac("Fa", "cp14",""), ac("Sol","cp90",""), ac("Sol","cp150",""), ac("Mi","cp250","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 9*/      [ac("Re", "cp14","7"), ac("Do","cp90","7")],
/* 10*/      [ac("Re", "cp14","7")],
/* 11*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7"), ac("Sol","cp150","m")],
/* 12*/      [ac("Re", "cp14","7"), ac("Sol","cp90","m")],
/* 13*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 14*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 15*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7")],
/* 16*/      [ac("Sol", "cp14","m")],
/* 17*/      [ac("Re", "cp14","7")],
/* 18*/      [ac("Sol", "cp14","m")],
/* 19*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7"), ac("Sol","cp150","m")],
/* 22*/      [ac("Re", "cp14","7"), ac("Sol","cp90","m")],
/* 23*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 24*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 25*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 26*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 27*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 28*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7"), ac("Sol","cp150","m")],
/* 29*/      [ac("Re", "cp14","7"), ac("Sol","cp90","m")],
/* 30*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 31*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 32*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 33*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 34*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
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
