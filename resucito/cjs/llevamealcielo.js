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
const NOMBREDELCANTO = "LLÉVAME AL CIELO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Filipenses 1,23",
      dbnos: "107",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "LLÉVAME AL CIELO,",
/* 2 */        "LLÉVAME AL CIELO,",
/* 3 */        "OH, OH SEÑOR.",
/* 4 */        "PORQUE MORIR,",
/* 5 */        "PORQUE MORIR,",
/* 6 */        "ES CON MUCHO LO MEJOR,",
/* 7 */        "ES CON MUCHO LO MEJOR,",
/* 8 */        "ESTAR CONTIGO,",
/* 9 */        "ESTAR CONTIGO.",
/* 10 */        "Una cosa te ruego,",
/* 11 */        "eso solo te pido:",
/* 12 */        "no dudar nunca de tu amor,",
/* 13 */        "no dudar nunca de Ti,",
/* 14 */        "estar contigo,",
/* 15 */        "estar contigo.",
/* 16 */        "LLÉVAME AL CIELO,...",
/* 17 */        "LLÉVAME AL CIELO,",
/* 18 */        "OH, OH SEÑOR.",
/* 19 */        "PORQUE MORIR,",
/* 20 */        "PORQUE MORIR,",
/* 21 */        "ES CON MUCHO LO MEJOR,",
/* 22 */        "ES CON MUCHO LO MEJOR,",
/* 23 */        "ESTAR CONTIGO,",
/* 24 */        "ESTAR CONTIGO.",
/* 25 */        "Oh qué bueno,",
/* 26 */        "oh qué dulce,",
/* 27 */        "ha sido tu amor conmigo,",
/* 28 */        "ha sido tu amor conmigo,",
/* 29 */        "oh qué bueno,",
/* 30 */        "oh qué dulce.",
/* 31 */        "LLÉVAME AL CIELO,...",
/* 32 */        "LLÉVAME AL CIELO,",
/* 33 */        "OH, OH SEÑOR.",
/* 34 */        "PORQUE MORIR,",
/* 35 */        "PORQUE MORIR,",
/* 36 */        "ES CON MUCHO LO MEJOR,",
/* 37 */        "ES CON MUCHO LO MEJOR,",
/* 38 */        "ESTAR CONTIGO,",
/* 39 */        "ESTAR CONTIGO.",
/* 40 */        "Una cosa te ruego,...",
/* 41 */        "eso solo te pido:",
/* 42 */        "no dudar nunca de tu amor,",
/* 43 */        "no dudar nunca de Ti,",
/* 44 */        "estar contigo,",
/* 45 */        "estar contigo.",
/* 46 */        "LLÉVAME AL CIELO,...",
/* 47 */        "LLÉVAME AL CIELO,",
/* 48 */        "OH, OH SEÑOR.",
/* 49 */        "PORQUE MORIR,",
/* 50 */        "PORQUE MORIR,",
/* 51 */        "ES CON MUCHO LO MEJOR,",
/* 52 */        "ES CON MUCHO LO MEJOR,",
/* 53 */        "ESTAR CONTIGO,",
/* 54 */        "ESTAR CONTIGO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 7*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("Si7", "cp14","")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 13*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("Si7", "cp14","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 22*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("Si7", "cp14","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 28*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 29*/      [ac("Si7", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("Mi", "cp14","")],
/* 32 */   [ac("", "cp0","")],
/* 33*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 37*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 38*/      [ac("Si7", "cp14","")],
/* 39*/      [ac("Mi", "cp14","")],
/* 40*/      [ac("Mi", "cp14","")],
/* 41 */   [ac("", "cp0","")],
/* 42*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 43*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 44*/      [ac("Si7", "cp14","")],
/* 45*/      [ac("Mi", "cp14","")],
/* 46*/      [ac("Mi", "cp14","")],
/* 47 */   [ac("", "cp0","")],
/* 48*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 49*/      [ac("Mi", "cp14","")],
/* 50 */   [ac("", "cp0","")],
/* 51*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 52*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 53*/      [ac("Si7", "cp14","")],
/* 54*/      [ac("Mi", "cp14","")],
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
