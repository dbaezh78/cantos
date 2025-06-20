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
const NOMBREDELCANTO = "OH JESÚS, AMOR MÍO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(Kiko Argüello)",
      dbnos: "126",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Oh Jesús, amor mío,",
/* 2 */        "¡cuánto me has amado,",
/* 3 */        "cuánto me has amado!",
/* 4 */        "OH JESÚS, AMOR MÍO,",
/* 5 */        "¡CUÁNTO ME HAS AMADO,",
/* 6 */        "CUÁNTO ME HAS AMADO!",
/* 7 */        "Tú has recibido las espinas de la soberbia de mí,",
/* 8 */        "para que yo reciba la humildad de ti.",
/* 9 */        "Tú has recibido los azotes de la lujuria de mí,",
/* 10 */        "para que yo reciba el amor y la pureza de ti.",
/* 11 */        "Tú has sido por la avaricia despojado por mí,",
/* 12 */        "para que yo reciba la riqueza de ti.",
/* 13 */        "OH JESÚS, AMOR MÍO,...",
/* 14 */        "¡CUÁNTO ME HAS AMADO,",
/* 15 */        "CUÁNTO ME HAS AMADO!",
/* 16 */        "Tú has recibido la hiel y el vinagre de mí,",
/* 17 */        "para que yo reciba la dulzura de ti.",
/* 18 */        "Tú has recibido el desprecio y los insultos de mí,",
/* 19 */        "para que yo reciba la mansedumbre de ti.",
/* 20 */        "Tú has recibido",
/* 21 */        "los clavos y la lanzada de mí,",
/* 22 */        "para que yo reciba la obediencia de ti.",
/* 23 */        "OH JESÚS, AMOR MÍO,...",
/* 24 */        "¡CUÁNTO ME HAS AMADO,",
/* 25 */        "CUÁNTO ME HAS AMADO!",
/* 26 */        "Tú has sido crucificado por mí,",
/* 27 */        "para que yo reciba la salvación de ti.",
/* 28 */        "Tú has recibido la muerte de mí,",
/* 29 */        "para que yo reciba la vida de ti.",
/* 30 */        "Tú has recibido la sepultura de mí,",
/* 31 */        "para que yo reciba la resurrección de ti.",
/* 32 */        "OH JESÚS, AMOR MÍO,...",
/* 33 */        "¡CUÁNTO ME HAS AMADO,",
/* 34 */        "CUÁNTO ME HAS AMADO!",
/* 35 */        "De mí, Señor, tú has recibido",
/* 36 */        "el mal, la muerte y el pecado,",
/* 37 */        "para que yo reciba de ti sólo a ti mismo.",
/* 38 */        "A mí, a mí tú te has donado.",
/* 39 */        "OH JESÚS, AMOR MÍO,...",
/* 40 */        "¡CUÁNTO ME HAS AMADO,",
/* 41 */        "CUÁNTO ME HAS AMADO!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m"), ac("Sol","cp90","m"), ac("La","cp150","m")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 27*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 28*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 29*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 30*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 31*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 32*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35*/      [ac("Mi", "cp14",""), ac("La","cp90","m"), ac("Sol","cp150","")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 38*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 39*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 40 */   [ac("", "cp0","")],
/* 41*/      [ac("Mi", "cp14","")],
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
