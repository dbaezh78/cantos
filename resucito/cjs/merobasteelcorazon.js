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
const NOMBREDELCANTO = "ME ROBASTE EL CORAZÓN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los cantares 4,9 - 5,1",
      dbnos: "243",
      catg: "ELECCIÓN",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ME ROBASTE EL CORAZÓN,",
/* 2 */        "ME ROBASTE EL CORAZÓN,",
/* 3 */        "HERMANA MÍA, ESPOSA,",
/* 4 */        "ME ROBASTE,",
/* 5 */        "ME ROBASTE EL CORAZÓN.",
/* 6 */        "¡Qué hermosos tus amores,",
/* 7 */        "qué hermosos tus amores!",
/* 8 */        "La fragancia de tus perfumes,",
/* 9 */        "más que todos los bálsamos de amor.",
/* 10 */        "Miel destilan tus labios,",
/* 11 */        "esposa mía, hermana,",
/* 12 */        "miel y leche debajo de tu lengua.",
/* 13 */        "La fragancia de tus vestidos",
/* 14 */        "es la fragancia del Líbano, esposa, esposa mía,",
/* 15 */        "más sabrosos son tus amores que el vino.",
/* 16 */        "Huerto eres cerrado, hermana mía,",
/* 17 */        "fuente sellada, esposa mía.",
/* 18 */        "Tus frutos un paraíso de granados,",
/* 19 */        "de nardo y azafrán, de mirra y áloe.",
/* 20 */        "¡Levántate, cierzo, ábrego, y ven!",
/* 21 */        "¡LEVÁNTATE, CIERZO, ÁBREGO, Y VEN!",
/* 22 */        "Sopla en mi huerto",
/* 23 */        "para que exhale sus aromas.",
/* 24 */        "SOPLA EN MI HUERTO",
/* 25 */        "PARA QUE EXHALE SUS AROMAS.",
/* 26 */        "Y pueda entrar mi amado en su huerto",
/* 27 */        "y coma de sus frutos exquisitos.",
/* 28 */        "Ya he entrado en mi huerto, esposa mía;",
/* 29 */        "he comido mi miel en su panal,",
/* 30 */        "he bebido mi vino con su leche.",
/* 31 */        "¡Amigos, venid, bebed,",
/* 32 */        "oh queridos y embriagaos!",
/* 33 */        "¡AMIGOS, VENID, BEBED,",
/* 34 */        "OH QUERIDOS Y EMBRIAGAOS!",
/* 35 */        "ME ROBASTE EL CORAZÓN...",
/* 36 */        "ME ROBASTE EL CORAZÓN,",
/* 37 */        "HERMANA MÍA, ESPOSA,",
/* 38 */        "ME ROBASTE,",
/* 39 */        "ME ROBASTE EL CORAZÓN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 2*/      [ac("Re", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","m")],
/* 4*/      [ac("La", "cp14","")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","m")],
/* 9*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 10*/      [ac("Sol", "cp14","m")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Sol", "cp14","m")],
/* 15*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 16*/      [ac("Do", "cp14",""), ac("Re","cp90","m")],
/* 17*/      [ac("Do", "cp14",""), ac("Re","cp90","m")],
/* 18*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 19*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 20*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 21*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 22*/      [ac("La", "cp14","")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("La", "cp14","")],
/* 25*/      [ac("Re", "cp14","m")],
/* 26*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 27*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 28*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 29*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 30*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 31*/      [ac("Re", "cp14","m"), ac("Do","cp90","Si♭")],
/* 32*/      [ac("La", "cp14","")],
/* 33*/      [ac("Re", "cp14","m"), ac("Do","cp90","Si♭")],
/* 34*/      [ac("La", "cp14","")],
/* 35*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 36*/      [ac("Re", "cp14","m")],
/* 37*/      [ac("Sol", "cp14","m")],
/* 38*/      [ac("La", "cp14","")],
/* 39*/      [ac("Re", "cp14","m")],
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
