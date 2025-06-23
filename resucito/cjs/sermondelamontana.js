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
const NOMBREDELCANTO = "SERMÓN DE LA MONTAÑA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 6,20-38",
      dbnos: "148",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Alzando los ojos hacia",
/* 2 */        "sus discípulos, Jesús decía:",
/* 3 */        "DICHOSOS LOS POBRES,",
/* 4 */        "PORQUE VUESTRO",
/* 5 */        "ES EL REINO DE DIOS.",
/* 6 */        "DICHOSOS LOS QUE AHORA",
/* 7 */        "TENÉIS HAMBRE,",
/* 8 */        "PORQUE SERÉIS SACIADOS.",
/* 9 */        "DICHOSOS LOS QUE LLORÁIS AHORA,",
/* 10 */        "PORQUE REIRÉIS.",
/* 11 */        "Dichosos seréis cuando os odien,",
/* 12 */        "os injurien a causa del Hijo del hombre.",
/* 13 */        "Alegraos ese día, que vuestra recompensa",
/* 14 */        "será grande en el cielo.",
/* 15 */        "¡AY DE VOSOTROS, LOS RICOS!",
/* 16 */        "PORQUE HABÉIS RECIBIDO",
/* 17 */        "VUESTRO CONSUELO.",
/* 18 */        "¡AY DE LOS QUE REÍS AHORA!",
/* 19 */        "PORQUE TENDRÉIS AFLICIÓN",
/* 20 */        "Y LLANTO.",
/* 21 */        "AMAD A VUESTROS ENEMIGOS,",
/* 22 */        "HACED EL BIEN A LOS QUE OS ODIAN.",
/* 23 */        "AL QUE TE HIERE EN UNA MEJILLA,",
/* 24 */        "PRESÉNTALE TAMBIÉN LA OTRA;",
/* 25 */        "AL QUE TE QUITE EL MANTO,",
/* 26 */        "NO LE NIEGUES LA TÚNICA;",
/* 27 */        "AL QUE TE QUITE LO QUE ES TUYO,",
/* 28 */        "NO SE LO RECLAMES.",
/* 29 */        "AMAD A VUESTROS ENEMIGOS,",
/* 30 */        "HACED EL BIEN A LOS QUE OS ODIAN.",
/* 31 */        "NO JUZGUÉIS,",
/* 32 */        "NO CONDENÉIS;",
/* 33 */        "PERDONAD",
/* 34 */        "Y SERÉIS PERDONADOS",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/       [ac("Re", "cp14","")],
/* 2*/       [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 3*/       [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 4*/       [ac("La", "cp14","7")],
/* 5*/       [ac("Re", "cp","")],
/* 6 */      [ac("", "cp0","")],
/* 7*/       [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 8*/       [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 9*/       [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 10*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 11*/      [ac("Si", "cp14","m"), ac("La","cp90","")],
/* 12*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("Fa#", "cp14","")],
/* 15*/      [ac("Re", "cp14",""), ac("Sol","cp90",""), ac("Re","cp150","")],
/* 16*/      [ac("La7", "cp14","")],
/* 17*/      [ac("Re", "cp14","")],
/* 18*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 19*/      [ac("La", "cp14","7")],
/* 20*/      [ac("Re", "cp14","")],
/* 21*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Mi","cp150","")],
/* 22*/      [ac("Si7", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 25*/      [ac("Fa#", "cp14",""), ac("Si","cp90",""), ac("Fa#","cp150","")],
/* 26*/      [ac("Do#7", "cp14",""), ac("Fa#","cp90","")],
/* 27*/      [ac("Si", "cp14",""), ac("Fa#","cp90","")],
/* 28*/      [ac("Do#7", "cp14",""), ac("Fa#","cp90","")],
/* 29*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Mi","cp150","")],
/* 30*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 31*/      [ac("Fa#", "cp14",""), ac("Si","cp90",""), ac("Fa#","cp150","")],
/* 32*/      [ac("Si", "cp14",""), ac("Fa#","cp90","")],
/* 33*/      [ac("Si", "cp14",""), ac("Fa#","cp90","")],
/* 34*/      [ac("Do#", "cp14","7"), ac("Fa#","cp90","")],
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
