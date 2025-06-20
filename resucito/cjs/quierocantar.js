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
const NOMBREDELCANTO = "QUIERO CANTAR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 57 (56)",
      dbnos: "141",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "QUIERO CANTAR,",
/* 2 */        "A TI QUIERO CANTAR,",
/* 3 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 4 */        "DESPIERTA, ARPA Y CÍTARA.",
/* 5 */        "Misericordia, Dios mío, misericordia,",
/* 6 */        "que mi alma se refugia en Ti.",
/* 7 */        "Me refugio a la sombra de tus alas,",
/* 8 */        "hasta que pase el peligro.",
/* 9 */        "QUIERO CANTAR...",
/* 10 */        "A TI QUIERO CANTAR,",
/* 11 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 12 */        "DESPIERTA, ARPA Y CÍTARA.",
/* 13 */        "Invoco a Dios, al Dios Altísimo,",
/* 14 */        "a Dios, que ha hecho tanto por mí.",
/* 15 */        "Desde el cielo me envía la salvación,",
/* 16 */        "confunde a los que ansían matarme.",
/* 17 */        "QUIERO CANTAR...",
/* 18 */        "A TI QUIERO CANTAR,",
/* 19 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 20 */        "DESPIERTA, ARPA Y CÍTARA.",
/* 21 */        "Misericordia, Dios mío, misericordia,",
/* 22 */        "que estoy echado entre leones,",
/* 23 */        "leones devoradores de hombres,",
/* 24 */        "sus dientes son lanzas y flechas.",
/* 25 */        "QUIERO CANTAR...",
/* 26 */        "A TI QUIERO CANTAR,",
/* 27 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 28 */        "DESPIERTA, ARPA Y CÍTARA.",
/* 29 */        "Misericordia, Dios mío, misericordia,",
/* 30 */        "que han tendido una red a mis pasos,",
/* 31 */        "una red a mis pasos,",
/* 32 */        "me han cavado delante una fosa,",
/* 33 */        "pero han sido ellos los que han caído en ella.",
/* 34 */        "QUIERO CANTAR...",
/* 35 */        "A TI QUIERO CANTAR,",
/* 36 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 37 */        "DESPIERTA, ARPA Y CÍTARA.",
/* 38 */        "Mi corazón está firme, Dios mío,",
/* 39 */        "para Ti, oh Dios, quiero cantar,",
/* 40 */        "a la aurora yo quiero despertar,",
/* 41 */        "despertad, arpa y cítara.",
/* 42 */        "QUIERO CANTAR...",
/* 43 */        "A TI QUIERO CANTAR,",
/* 44 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 45 */        "DESPIERTA, ARPA Y CÍTARA.",
/* 46 */        "Te daré gracias ante los pueblos, Señor,",
/* 47 */        "cantaré, cantaré ante las naciones,",
/* 48 */        "porque tu amor ha sido grande conmigo,",
/* 49 */        "tu bondad más alta que los cielos.",
/* 50 */        "QUIERO CANTAR...",
/* 51 */        "A TI QUIERO CANTAR,",
/* 52 */        "DESPIERTA, DESPIERTA GLORIA MÍA,",
/* 53 */        "DESPIERTA, ARPA Y CÍTARA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","")],
/* 2*/      [ac("Fa#", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 5*/      [ac("Re", "cp",""), ac("Fa#","cp90","m")],
/* 6*/      [ac("Sol", "cp14","")],
/* 7*/      [ac("Mim", "cp14","")],
/* 8*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 9*/      [ac("Re", "cp14","")],
/* 10*/      [ac("Fa#", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 13*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Mim", "cp14","")],
/* 16*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 17*/      [ac("Re", "cp14","")],
/* 18*/      [ac("Fa#", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 21*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("Mim", "cp14","")],
/* 24*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 25*/      [ac("Re", "cp14","")],
/* 26*/      [ac("Fa#", "cp14","m")],
/* 27*/      [ac("Sol", "cp14","")],
/* 28*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 29*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("Mim", "cp14","")],
/* 33*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 34*/      [ac("Re", "cp14","")],
/* 35*/      [ac("Fa#", "cp14","m")],
/* 36*/      [ac("Sol", "cp14","")],
/* 37*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 38*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 39*/      [ac("Sol", "cp14","")],
/* 40*/      [ac("Mim", "cp14","")],
/* 41*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 42*/      [ac("Re", "cp14","")],
/* 43*/      [ac("Fa#", "cp14","m")],
/* 44*/      [ac("Sol", "cp14","")],
/* 45*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 46*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 47*/      [ac("Sol", "cp14","")],
/* 48*/      [ac("Mim", "cp14","")],
/* 49*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 50*/      [ac("Re", "cp14","")],
/* 51*/      [ac("Fa#", "cp14","m")],
/* 52*/      [ac("Sol", "cp14","")],
/* 53*/      [ac("La", "cp14",""), ac("Re","cp90","")],
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
