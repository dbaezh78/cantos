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
const NOMBREDELCANTO = "ME HAS SEDUCIDO, SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Jeremias 20,7-18",
      dbnos: "115",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ME HAS SEDUCIDO, SEÑOR,",
/* 2 */        "Y ME HE DEJADO SEDUCIR.",
/* 3 */        "HAS LUCHADO CONMIGO",
/* 4 */        "Y ME HAS VENCIDO.",
/* 5 */        "HAS SIDO MÁS FUERTE QUE YO,",
/* 6 */        "ME HAS PODIDO.",
/* 7 */        "Cuando hablo debo gritar:",
/* 8 */        "«¡Violencia!», «¡Opresión!»",
/* 9 */        "Así tu palabra es para mí befa y oprobio.",
/* 10 */        "Me decía: «No pensaré más en Él,",
/* 11 */        "no hablaré más en su nombre•.",
/* 12 */        "Mas en mi corazón",
/* 13 */        "había un fuego ardiente,",
/* 14 */        "que corría por mis huesos.",
/* 15 */        "MAS EN MI CORAZÓN",
/* 16 */        "HABÍA UN FUEGO ARDIENTE,",
/* 17 */        "QUE CORRÍA POR MIS HUESOS.",
/* 18 */        "ME HAS SEDUCIDO, SEÑOR,...",
/* 19 */        "Y ME HE DEJADO SEDUCIR.",
/* 20 */        "HAS LUCHADO CONMIGO",
/* 21 */        "Y ME HAS VENCIDO.",
/* 22 */        "HAS SIDO MÁS FUERTE QUE YO,",
/* 23 */        "ME HAS PODIDO.",
/* 24 */        "Maldito el día en que nací.",
/* 25 */        "Maldito el hombre",
/* 26 */        "que le dio la noticia a mi padre:",
/* 27 */        "«Te ha nacido un hijo».",
/* 28 */        "¿Por qué he salido del seno de mi madre,",
/* 29 */        "si sólo debo ver penas y aflicción?",
/* 30 */        "MAS EL SEÑOR ESTÁ CONMIGO,",
/* 31 */        "COMO UN HÉROE VALEROSO.",
/* 32 */        "Cantad himnos al Señor, alabad su Nombre",
/* 33 */        "que ha salvado la vida de este pobre.",
/* 34 */        "MAS EL SEÑOR ESTÁ CONMIGO,",
/* 35 */        "COMO UN HÉROE VALEROSO.",
/* 36 */        "ME HAS SEDUCIDO, SEÑOR,...",
/* 37 */        "Y ME HE DEJADO SEDUCIR.",
/* 38 */        "HAS LUCHADO CONMIGO",
/* 39 */        "Y ME HAS VENCIDO.",
/* 40 */        "HAS SIDO MÁS FUERTE QUE YO,",
/* 41 */        "ME HAS PODIDO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","7")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Mi7", "cp14","")],
/* 7*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 10*/      [ac("Mi", "cp14","7")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Mi", "cp14","7")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 15*/      [ac("Mi", "cp14","7")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","7")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Fa", "cp14","")],
/* 23*/      [ac("Mi", "cp14","7")],
/* 24*/      [ac("Mi", "cp14","7")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("La","cp150","m")],
/* 33*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 34*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 35*/      [ac("Do", "cp14","")],
/* 36*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Mi", "cp14","7")],
/* 39*/      [ac("La", "cp14","m")],
/* 40*/      [ac("Fa", "cp14","")],
/* 41*/      [ac("Mi", "cp14","7")],
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
