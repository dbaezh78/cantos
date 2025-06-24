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
const NOMBREDELCANTO = "TE ESTOY LLAMANDO, SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 141 (140)",
      dbnos: "158",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "A TE ESTOY LLAMANDO,",
/* 2 */        "TE ESTOY LLAMANDO, SEÑOR,",
/* 3 */        "VEN CORRIENDO,",
/* 4 */        "ESCUCHA MI VOZ QUE YO A TI GRITO.",
/* 5 */        "VALGA ANTE TI MI ORACIÓN",
/* 6 */        "COMO INCIENSO,",
/* 7 */        "EL ALZAR DE MIS MANOS",
/* 8 */        "COMO SACRIFICIO DE LA TARDE.",
/* 9 */        "C Pon, Señor, a mi boca un centinela,",
/* 10 */        "una guardia a la puerta de mis labios.",
/* 11 */        "No sea que se incline mi corazón a la maldad,",
/* 12 */        "a cometer acciones criminales.",
/* 13 */        "Que el justo me golpee por amor, y me corrija,",
/* 14 */        "para que el ungüento del malvado",
/* 15 */        "no perfume mi cabeza,",
/* 16 */        "porque yo me enviciaría en su maldad,",
/* 17 */        "porque yo me enviciaría en su maldad.",
/* 18 */        "TE ESTOY LLAMANDO,...",
/* 19 */        "TE ESTOY LLAMANDO, SEÑOR,",
/* 20 */        "VEN CORRIENDO,",
/* 21 */        "ESCUCHA MI VOZ QUE YO A TI GRITO.",
/* 22 */        "VALGA ANTE TI MI ORACIÓN",
/* 23 */        "COMO INCIENSO,",
/* 24 */        "EL ALZAR DE MIS MANOS",
/* 25 */        "COMO SACRIFICIO DE LA TARDE.",
/* 26 */        "C A ti, Señor, miran mis ojos,",
/* 27 */        "en ti me refugio, ¡no desampares mi alma!",
/* 28 */        "Guárdame tú del lazo que me tienden,",
/* 29 */        "de las trampas de tantos enemigos.",
/* 30 */        "Caigan ellos, cada uno en su red,",
/* 31 */        "que yo, unido a ti, paso indemne,",
/* 32 */        "que yo, unido a ti, paso indemne.",
/* 33 */        "TE ESTOY LLAMANDO,...",
/* 34 */        "TE ESTOY LLAMANDO, SEÑOR,",
/* 35 */        "VEN CORRIENDO,",
/* 36 */        "ESCUCHA MI VOZ QUE YO A TI GRITO.",
/* 37 */        "VALGA ANTE TI MI ORACIÓN",
/* 38 */        "COMO INCIENSO,",
/* 39 */        "EL ALZAR DE MIS MANOS",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("La", "cp14","7")],
/* 3*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("La", "cp14","7")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Rem", "cp14","")],
/* 9*/      [ac("Do", "cp14",""), ac("Fa","cp90",""), ac("La","cp150","7")],
/* 10*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","7")],
/* 11*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 12*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 13*/      [ac("Fa", "cp14",""), ac("Re","cp90","m"), ac("La","cp150","7"), ac("Re","cp250","m")],
/* 14*/      [ac("Si", "cp14","")],
/* 15*/      [ac("La", "cp14","7")],
/* 16*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 17*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 18*/      [ac("Rem", "cp14","")],
/* 19*/      [ac("La", "cp14","7")],
/* 20*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("La", "cp14","7")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Rem", "cp14","")],
/* 26*/      [ac("Do", "cp14",""), ac("Fa","cp90",""), ac("La","cp150","7")],
/* 27*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","7")],
/* 28*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 29*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 30*/      [ac("Fa", "cp14",""), ac("Re","cp90","m"), ac("La","cp150","7")],
/* 31*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 32*/      [ac("Sol", "cp14","m"), ac("Si♭","cp90",""), ac("La","cp150","7")],
/* 33*/      [ac("Rem", "cp14","")],
/* 34*/      [ac("La", "cp14","7")],
/* 35*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 36*/      [ac("Re", "cp14","m")],
/* 37 */   [ac("", "cp0","")],
/* 38*/      [ac("La", "cp14","7")],
/* 39 */   [ac("", "cp0","")],
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
