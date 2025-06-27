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
const NOMBREDELCANTO = "LETANÍAS PENITENCIALES II";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Letanía para la Celebración Penitencial",
      dbnos: "192",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Por los pecados que hemos cometido, endureciendo nuestro corazón.",
/* 2 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 3 */        "Señor, ten piedad. A SEÑOR, TEN PIEDAD.",
/* 4 */        "Por los pecados que hemos cometido ...",
/* 5 */        "... por ignorancia,",
/* 6 */        "TEN PIEDAD DE MÍ...",
/* 7 */        "QUE SOY UN PECADOR.",
/* 8 */        "... a través de la sexualidad,",
/* 9 */        "TEN PIEDAD DE MÍ...",
/* 10 */        "QUE SOY UN PECADOR.",
/* 11 */        "... tanto en público como en privado,",
/* 12 */        "TEN PIEDAD DE MÍ...",
/* 13 */        "QUE SOY UN PECADOR.",
/* 14 */        "... engañando a nuestros semejantes,",
/* 15 */        "TEN PIEDAD DE MÍ...",
/* 16 */        "QUE SOY UN PECADOR.",
/* 17 */        "... por el uso de la violencia,",
/* 18 */        "TEN PIEDAD DE MÍ...",
/* 19 */        "QUE SOY UN PECADOR.",
/* 20 */        "... insultando con nuestras palabras,",
/* 21 */        "TEN PIEDAD DE MÍ...",
/* 22 */        "QUE SOY UN PECADOR.",
/* 23 */        "... despreciando a nuestros padres y maestros,",
/* 24 */        "TEN PIEDAD DE MÍ...",
/* 25 */        "QUE SOY UN PECADOR.",
/* 26 */        "... dejándonos dominar por nuestras bajas pasiones,",
/* 27 */        "TEN PIEDAD DE MÍ...",
/* 28 */        "QUE SOY UN PECADOR.",
/* 29 */        "Señor, ten piedad.",
/* 30 */        "SEÑOR, TEN PIEDAD",
/* 31 */        "Por los pecados que hemos cometido ...",
/* 32 */        "... por medio de la mentira,",
/* 33 */        "TEN PIEDAD DE MÍ...",
/* 34 */        "QUE SOY UN PECADOR.",
/* 35 */        "... por medio del soborno,",
/* 36 */        "TEN PIEDAD DE MÍ...",
/* 37 */        "QUE SOY UN PECADOR.",
/* 38 */        "... por medio de la calumnia,",
/* 39 */        "TEN PIEDAD DE MÍ...",
/* 40 */        "QUE SOY UN PECADOR.",
/* 41 */        "... en nuestras relaciones comerciales,",
/* 42 */        "TEN PIEDAD DE MÍ...",
/* 43 */        "QUE SOY UN PECADOR.",
/* 44 */        "... por medio de la comida y la bebida,",
/* 45 */        "TEN PIEDAD DE MÍ...",
/* 46 */        "QUE SOY UN PECADOR.",
/* 47 */        "... a través del orgullo",
/* 48 */        "TEN PIEDAD DE MÍ...",
/* 49 */        "QUE SOY UN PECADOR.",
/* 50 */        "... por medio de la murmuración,",
/* 51 */        "TEN PIEDAD DE MÍ...",
/* 52 */        "QUE SOY UN PECADOR.",
/* 53 */        "... por medio de la mirada codiciosa,",
/* 54 */        "TEN PIEDAD DE MÍ...",
/* 55 */        "QUE SOY UN PECADOR.",
/* 56 */        "... por medio de la mirada deshonesta",
/* 57 */        "TEN PIEDAD DE MÍ...",
/* 58 */        "QUE SOY UN PECADOR.",
/* 59 */        "Señor, ten piedad.",
/* 60 */        "SEÑOR, TEN PIEDAD.",
/* 61 */        "Por los pecados que hemos cometido ...",
/* 62 */        "... incurriendo en la prostitución,",
/* 63 */        "TEN PIEDAD DE MÍ...",
/* 64 */        "QUE SOY UN PECADOR.",
/* 65 */        "... por falta de sinceridad,",
/* 66 */        "TEN PIEDAD DE MÍ...",
/* 67 */        "QUE SOY UN PECADOR.",
/* 68 */        "... a través de la envidia,",
/* 69 */        "TEN PIEDAD DE MÍ...",
/* 70 */        "QUE SOY UN PECADOR.",
/* 71 */        "... por irresponsabilidad,",
/* 72 */        "TEN PIEDAD DE MÍ...",
/* 73 */        "QUE SOY UN PECADOR.",
/* 74 */        "... sembrando la cizaña y el chisme,",
/* 75 */        "TEN PIEDAD DE MÍ...",
/* 76 */        "QUE SOY UN PECADOR.",
/* 77 */        "... hablando mal de otros,",
/* 78 */        "TEN PIEDAD DE MÍ...",
/* 79 */        "QUE SOY UN PECADOR.",
/* 80 */        "... resistiéndonos a la voluntad de Dios",
/* 81 */        "TEN PIEDAD DE MÍ...",
/* 82 */        "QUE SOY UN PECADOR.",
/* 83 */        "Señor, ten piedad.",
/* 84 */        "SEÑOR, TEN PIEDAD.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 2*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 3*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Si", "cp14","7")],
/* 7*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Si", "cp14","7")],
/* 10*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Si", "cp14","7")],
/* 13*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Si", "cp14","7")],
/* 16*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Si", "cp14","7")],
/* 19*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Si", "cp14","7")],
/* 22*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Si", "cp14","7")],
/* 25*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 29*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 30*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33*/      [ac("Si", "cp14","7")],
/* 34*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Si", "cp14","7")],
/* 37*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 38 */   [ac("", "cp0","")],
/* 39*/      [ac("Si", "cp14","7")],
/* 40*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 41 */   [ac("", "cp0","")],
/* 42*/      [ac("Si", "cp14","7")],
/* 43*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 44 */   [ac("", "cp0","")],
/* 45*/      [ac("Si", "cp14","7")],
/* 46*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 47 */   [ac("", "cp0","")],
/* 48*/      [ac("Si", "cp14","7")],
/* 49*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 50 */   [ac("", "cp0","")],
/* 51*/      [ac("Si", "cp14","7")],
/* 52*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 53 */   [ac("", "cp0","")],
/* 54*/      [ac("Si", "cp14","7")],
/* 55*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 56*/      [ac("Si", "cp14","7")],
/* 57 */   [ac("", "cp0","")],
/* 58*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 59*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 60*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 61 */   [ac("", "cp0","")],
/* 62 */   [ac("", "cp0","")],
/* 63*/      [ac("Si", "cp14","7")],
/* 64*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 65 */   [ac("", "cp0","")],
/* 66*/      [ac("Si", "cp14","7")],
/* 67*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 68 */   [ac("", "cp0","")],
/* 69*/      [ac("Si", "cp14","7")],
/* 70*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 71 */   [ac("", "cp0","")],
/* 72*/      [ac("Si", "cp14","7")],
/* 73*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 74 */   [ac("", "cp0","")],
/* 75*/      [ac("Si", "cp14","7")],
/* 76*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 77 */   [ac("", "cp0","")],
/* 78*/      [ac("Si", "cp14","7")],
/* 79*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 80 */   [ac("", "cp0","")],
/* 81*/      [ac("Si", "cp14","7")],
/* 82*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 83*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 84*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
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
