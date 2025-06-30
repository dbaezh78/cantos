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
const NOMBREDELCANTO = "HERMOSA ERES, AMIGA MÍA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los cantares 6-7",
      dbnos: "241",
      catg: "ELECCIÓN",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "HERMOSA ERES...",
/* 2 */        "AMIGA MÍA, COMO TIRSÁ,",
/* 3 */        "BELLÍSIMA, COMO JERUSALÉN.",
/* 4 */        "JERUSALÉN, JERUSALÉN,",
/* 5 */        "JERUSALÉN, JERUSALÉN.",
/* 6 */        "¡Qué lindos son tus pies en las sandalias,",
/* 7 */        "hija de príncipe!",
/* 8 */        "Las curvas de tus caderas,",
/* 9 */        "obra de manos de un artista.",
/* 10 */        "Tu ombligo es como un ánfora redonda.",
/* 11 */        "Tu cuello, es una torre de marfil.",
/* 12 */        "Tus ojos, como las piscinas de Jesbón,",
/* 13 */        "tu cabeza es como el monte Carmelo,",
/* 14 */        "tu pelo, es como la púrpura;",
/* 15 */        "¡un rey en él está prisionero!",
/* 16 */        "HERMOSA ERES...",
/* 17 */        "AMIGA MÍA, COMO TIRSÁ,",
/* 18 */        "BELLÍSIMA, COMO JERUSALÉN.",
/* 19 */        "JERUSALÉN, JERUSALÉN,",
/* 20 */        "JERUSALÉN, JERUSALÉN.",
/* 21 */        "«¿Quién es ésta que surge",
/* 22 */        "como la aurora,",
/* 23 */        "bella como la luna,",
/* 24 */        "esplendente como el sol?»",
/* 25 */        "¡Qué bella eres, oh amor,",
/* 26 */        "qué bella eres, oh delicia!",
/* 27 */        "Bellísima como Jerusalén,",
/* 28 */        "bellísima como Jerusalén,",
/* 29 */        "Jerusalén ¡Aay! Jerusalén,",
/* 30 */        "Jerusalén, Jerusalén.",
/* 31 */        "HERMOSA ERES...",
/* 32 */        "AMIGA MÍA, COMO TIRSÁ,",
/* 33 */        "BELLÍSIMA, COMO JERUSALÉN.",
/* 34 */        "JERUSALÉN, JERUSALÉN,",
/* 35 */        "JERUSALÉN, JERUSALÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("La", "cp14","7")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 5*/      [ac("Sol", "cp","m"), ac("La","cp90","7")],
/* 6*/      [ac("Sol", "cp14","m")],
/* 7*/      [ac("La", "cp14","7")],
/* 8*/      [ac("Sol", "cp14","m")],
/* 9*/      [ac("La", "cp14","7")],
/* 10*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 11*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 12*/      [ac("Sol m", "cp14",""), ac("La","cp90","7")],
/* 13*/      [ac("Sol m", "cp14",""), ac("La","cp90","7")],
/* 14*/      [ac("Si♭ ", "cp14",""), ac("La","cp90","7")],
/* 15*/      [ac("Si♭ ", "cp14",""), ac("La","cp90","7")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("La", "cp14","7")],
/* 18*/      [ac("Re", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 20*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 21*/      [ac("Re", "cp14","7")],
/* 22*/      [ac("Sol", "cp14","m")],
/* 23*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 24*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 25*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 26*/      [ac("Re", "cp14","m")],
/* 27*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 28*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 29*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 30*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 31*/      [ac("Re", "cp14","m")],
/* 32*/      [ac("La", "cp14","7")],
/* 33*/      [ac("Re", "cp14","m")],
/* 34*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 35*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
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
