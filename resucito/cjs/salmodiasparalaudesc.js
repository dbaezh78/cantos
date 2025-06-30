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
const NOMBREDELCANTO = "SALMODIAS PARA LAUDES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo I, II, III, IV, V",
      dbnos: "212",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "MI BOCA HABLARÁ SABIAMENTE;",
/* 2 */        "Y SERÁN MUY SENSATAS MIS REFLEXIONES;",
/* 3 */        "prestaré oído al proverbio",
/* 4 */        "Y propondré mi problema al son de la cítara.",
/* 5 */        "Gracias te damos, Señor Dios omnipotente,",
/* 6 */        "EL QUE ERES Y EL QUE ERAS,",
/* 7 */        "porque has asumido el gran poder,",
/* 8 */        "Y COMENZASTE A REINAR.",
/* 9 */        "Ahora se estableció la salud y el poderío,",
/* 10 */        "y el reinado de nuestro Dios,",
/* 11 */        "Y LA POTESTAD DE SU CRISTO.",
/* 12 */        "El Señor reina la tierra goza,",
/* 13 */        "se alegran las islas innumerables.",
/* 14 */        "TINIEBLA Y NUBE LO RODEAN,",
/* 15 */        "JUSTICIA Y DERECHO SOSTIENEN SU TRONO.",
/* 16 */        "Delante de él avanza fuego,",
/* 17 */        "abrasando en torno a los enemigos;",
/* 18 */        "SUS RELÁMPAGOS DESLUMBRAN EL ORBE,",
/* 19 */        "Y, VIÉNDOLOS, LA TIERRA SE ESTREMECE.",
/* 20 */        "Cantad al Señor un cántico nuevo,",
/* 21 */        "resuene su alabanza en la asamblea de los fieles.",
/* 22 */        "QUE SE ALEGRE ISRAEL POR SU CREADOR,",
/* 23 */        "LOS HIJOS DE SIÓN POR SU REY.",
/* 24 */        "Alabad su nombre con danzas,",
/* 25 */        "cantadle con tambores y cítaras;",
/* 26 */        "PORQUE EL SEÑOR AMA A SU PUEBLO",
/* 27 */        "Y ADORNA CON LA VICTORIA A LOS HUMILDES.",
/* 28 */        "Dios de los padres y Señor de la misericordia",
/* 29 */        "QUE CON TU PALABRA HICISTE TODAS LAS COSAS,",
/* 30 */        "y en tu sabiduría formaste al hombre,",
/* 31 */        "PARA QUE DOMINASE SOBRE TUS CRIATURAS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 5*/      [ac("Mi", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 7*/      [ac("Mi", "cp14","m"), ac("Sol","cp90","")],
/* 8*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Do", "cp14","")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Do", "cp14",""), ac("SI","cp90","m"), ac("Mi","cp150","m")],
/* 24*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Do", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 28*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("Sol", "cp14","m"), ac("La","cp90","7"), ac("Re","cp150","m")],
/* 31*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
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
