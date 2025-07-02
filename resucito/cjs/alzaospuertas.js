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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "ALZAOS, PUERTAS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 24 (23)",
      dbnos: "16",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Del Señor es la tierra,",
/* 2 */        "DEL SEÑOR ES LA TIERRA,",
/* 3 */        "y todo aquello que contiene,",
/* 4 */        "Y TODO AQUELLO QUE CONTIENE,",
/* 5 */        "el orbe y sus habitantes.",
/* 6 */        "ALZAOS, PUERTAS,",
/* 7 */        "ALZAD LOS DINTELES,",
/* 8 */        "PUERTAS ETERNAS,",
/* 9 */        "DEBE ENTRAR EL REY",
/* 10 */        "DE LA GLORIA, DE LA GLORIA.",
/* 11 */        "¿Quién es ese Rey de la gloria?",
/* 12 */        "¿QUIÉN ES ESE REY DE LA GLORIA?",
/* 13 */        "El Señor, el fuerte, el valiente,",
/* 14 */        "EL SEÑOR, EL FUERTE, EL VALIENTE,",
/* 15 */        "el Señor, valiente en la batalla,",
/* 16 */        "VALIENTE EN LA BATALLA.",
/* 17 */        "El Señor de los ejércitos,",
/* 18 */        "EL SEÑOR DE LOS EJÉRCITOS.",
/* 19 */        "Él es el Rey de la gloria,",
/* 20 */        "EL REY DE LA GLORIA.",
/* 21 */        "ALZAOS, PUERTAS ...",
/* 22 */        "ALZAD LOS DINTELES,",
/* 23 */        "PUERTAS ETERNAS,",
/* 24 */        "DEBE ENTRAR EL REY",
/* 25 */        "DE LA GLORIA, DE LA GLORIA.",
/* 26 */        "¿Quién subirá al monte del Señor?",
/* 27 */        "¿QUIÉN SUBIRÁ AL MONTE DEL SEÑOR?",
/* 28 */        "El de manos inocentes y puro corazón,",
/* 29 */        "EL DE MANOS INOCENTES",
/* 30 */        "Y PURO CORAZÓN,",
/* 31 */        "el que no conduce su vida por vanidad,",
/* 32 */        "POR VANIDAD.",
/* 33 */        "Y nosotros somos su Iglesia,",
/* 34 */        "Y NOSOTROS SOMOS SU IGLESIA,",
/* 35 */        "que hoy viene a tu presencia,",
/* 36 */        "QUE HOY VIENE A TU PRESENCIA,",
/* 37 */        "que busca tu rostro, oh Dios de Jacob,",
/* 38 */        "OH DIOS DE JACOB.",
/* 39 */        "ALZAOS, PUERTAS ...",
/* 40 */        "ALZAD LOS DINTELES,",
/* 41 */        "PUERTAS ETERNAS,",
/* 42 */        "DEBE ENTRAR EL REY",
/* 43 */        "DE LA GLORIA, DE LA GLORIA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp0","")],
/* 2 */     [ac("", "cp0","")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4 */     [ac("", "cp0","")],
/* 5*/      [ac("La", "cp",""), ac("Si","cp298","7")],

//ALZAOS, PUERTAS,
/* 6*/      [ac("Mi", "cp0","")],
/* 7*/      [ac("Sol", "cp64","")],
/* 8*/      [ac("La", "cp197","")],
/* 9*/      [ac("Mi", "cp326","")],
/* 10 */    [ac("", "cp0","")],

/* 11*/     [ac("Mi", "cp0","m"), ac("La","cp140","m"), ac("Mi","cp430","m")],
/* 12*/     [ac("La", "cp0","m"), ac("Mi","cp491","m")],
/* 13*/     [ac("Si", "cp0","m")],
/* 14 */    [ac("", "cp0","")],
/* 15*/     [ac("Sol", "cp115",""), ac("La","cp433","")],
/* 16*/     [ac("Si", "cp337","")],

/* 17*/     [ac("Mi", "cp0","m"), ac("Si","cp280","m")],
/* 18*/     [ac("Mi", "cp109","m"), ac("Si","cp344","m")],

// DERECHA
/* 19*/     [ac("Sol", "cp40",""), ac("La","cp316","")],
/* 20*/     [ac("Si", "cp274","")],

//ALZAOS, PUERTAS,
/* 21*/     [ac("Mi", "cp0","")],
/* 22*/     [ac("Sol", "cp64","")],
/* 23*/     [ac("La", "cp197","")],
/* 24*/     [ac("Mi", "cp326","")],
/* 25 */    [ac("", "cp0","")],

/* 26*/     [ac("Mi", "cp0","m"), ac("La","cp201","m"), ac("Mi","cp523","m")],
/* 27*/     [ac("La", "cp228","m"), ac("Mi","cp600","m")],
/* 28*/     [ac("Si", "cp0","m")],
/* 29 */    [ac("", "cp0","")],
/* 30 */    [ac("", "cp0","")],
/* 31*/     [ac("Sol", "cp0",""), ac("La","cp602","")],
/* 32*/     [ac("Si", "cp181","")],

/* 33*/     [ac("Mi", "cp0","m"), ac("Si","cp390","m")],
/* 34*/     [ac("Mi", "cp95","m"), ac("Si","cp471","m")],
/* 35*/     [ac("Mi", "cp149","m"), ac("Si","cp382","m")],
/* 36*/     [ac("Mi", "cp181","m"), ac("Si","cp439","m")],
/* 37*/     [ac("Sol", "cp91",""), ac("La","cp586","")],
/* 38*/     [ac("Si", "cp260","")],

//ALZAOS, PUERTAS,
/* 39*/     [ac("Mi", "cp0","")],
/* 40*/     [ac("Sol", "cp64","")],
/* 41*/     [ac("La", "cp197","")],
/* 42*/     [ac("Mi", "cp326","")],
/* 43 */    [ac("", "cp0","")],
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
