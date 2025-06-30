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
const NOMBREDELCANTO = "SEÑOR, TÚ ME ESCRUTAS Y CONOCES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 139 (138)",
      dbnos: "233",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Señor, tú me escrutas y conoces,",
/* 2 */        "tú sabes cuando me acuesto y me levanto.",
/* 3 */        "Sondeas mis pensamientos desde lejos,",
/* 4 */        "te son familiares todas mis sendas.",
/* 5 */        "Que no está aún en mi lengua la palabra,",
/* 6 */        "y ya tú, Señor, te la sabes toda.",
/* 7 */        "Me acosas por detrás,",
/* 8 */        "me atacas por delante,",
/* 9 */        "y al mismo tiempo",
/* 10 */        "tienes puesta sobre mí tu mano.",
/* 11 */        "Y esto es ciencia misteriosa para mí,",
/* 12 */        "ciencia que no llego a comprender,",
/* 13 */        "ciencia tan alta, que yo no la entiendo.",
/* 14 */        "¿A DÓNDE IRÉ YO LEJOS DE TU ESPÍRITU?",
/* 15 */        "¿A DÓNDE DE TU ROSTRO ESCAPARÉ?",
/* 16 */        "SI SUBO HASTA EL CIELO, ALLÍ ESTÁS TÚ,",
/* 17 */        "SI DESCIENDO HASTA LA MUERTE,",
/* 18 */        "ALLÍ TE ENCUENTRO.",
/* 19 */        "ME ACOSAS POR DETRÁS,",
/* 20 */        "ME ATACAS POR DELANTE,",
/* 21 */        "Y AL MISMO TIEMPO",
/* 22 */        "TIENES PUESTA SOBRE MÍ TU MANO.",
/* 23 */        "Y ESTO ES CIENCIA MISTERIOSA PARA MÍ,",
/* 24 */        "CIENCIA QUE NO LLEGO A COMPRENDER,",
/* 25 */        "CIENCIA TAN ALTA,",
/* 26 */        "QUE YO NO LA ENTIENDO.",
/* 27 */        "Señor, tú me escrutas y conoces,",
/* 28 */        "sondeas y pruebas mi corazón,",
/* 29 */        "para que no siga un camino de doblez,",
/* 30 */        "para que no me aparte nunca",
/* 31 */        "de tu camino.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 2*/      [ac("Re", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","m")],
/* 4*/      [ac("Sol", "cp14","m6"), ac("Re","cp90","m")],
/* 5*/      [ac("Do", "cp",""), ac("Do","cp90","7"), ac("Fa","cp150","")],
/* 6*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 7*/      [ac("Do", "cp14","")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("La", "cp14","")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 12*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 13*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 14*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Si♭", "cp14","")],
/* 16*/      [ac("La", "cp14","")],
/* 17*/      [ac("Si♭", "cp14","")],
/* 18*/      [ac("La", "cp14","")],
/* 19*/      [ac("Fa", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21 */   [ac("", "cp0","")],
/* 22*/      [ac("Si♭", "cp14","")],
/* 23*/      [ac("La", "cp14","")],
/* 24*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 25*/      [ac("Si♭", "cp14","")],
/* 26*/      [ac("La", "cp14","")],
/* 27*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 28*/      [ac("Re", "cp14","m")],
/* 29*/      [ac("Sol", "cp14","m")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Re", "cp14","m")],
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
