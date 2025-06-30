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
const NOMBREDELCANTO = "SHEMÁ ISRAEL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Deuteronomio 6,4-9",
      dbnos: "234",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Shemá Israel, Shemá Israel,",
/* 2 */        "Adonai Elohenu, Adonai Ejad.",
/* 3 */        "SHEMÁ ISRAEL, SHEMÁ ISRAEL,",
/* 4 */        "ADONAI ELOHENU, ADONAI EJAD.",
/* 5 */        "ESCUCHA ISRAEL, ESCUCHA ISRAEL,",
/* 6 */        "EL SEÑOR ES NUESTRO DIOS,",
/* 7 */        "EL SEÑOR ES UNO.",
/* 8 */        "Amarás al Señor tu Dios",
/* 9 */        "con todo tu corazón,",
/* 10 */        "con toda tu alma,",
/* 11 */        "con todas tus fuerzas.",
/* 12 */        "Graba estas palabras",
/* 13 */        "como señal en las palmas de tus manos,",
/* 14 */        "como memorial entre tus ojos,",
/* 15 */        "en las jambas de tu casa y en las puertas.",
/* 16 */        "SHEMÁ ISRAEL...",
/* 17 */        "SHEMÁ ISRAEL",
/* 18 */        "ADONAI ELOHENU, ADONAI EJAD.",
/* 19 */        "ESCUCHA ISRAEL...",
/* 20 */        "ESCUCHA ISRAEL",
/* 21 */        "EL SEÑOR ES NUESTRO DIOS,",
/* 22 */        "EL SEÑOR ES UNO.",
/* 23 */        "Enséñalo a tus hijos, Israel,",
/* 24 */        "háblales en casa,",
/* 25 */        "cuando camines por la calle,",
/* 26 */        "cuando te acuestes y te levantes.",
/* 27 */        "Este es el primer mandamiento de la vida,",
/* 28 */        "el segundo es igual a este:",
/* 29 */        "Ama a tu prójimo como a ti mismo",
/* 30 */        "y tendrás, tendrás la Vida Eterna.",
/* 31 */        "SHEMÁ ISRAEL...",
/* 32 */        "SHEMÁ ISRAEL",
/* 33 */        "ADONAI ELOHENU, ADONAI EJAD.",
/* 34 */        "ESCUCHA ISRAEL...",
/* 35 */        "ESCUCHA ISRAEL",
/* 36 */        "EL SEÑOR ES NUESTRO DIOS,",
/* 37 */        "EL SEÑOR ES UNO.",
/* 38 */        "Shemá Israel,",
/* 39 */        "SHEMÁ ISRAEL,",
/* 40 */        "ADONAI ELOHENU,",
/* 41 */        "ADONAI EJAD.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 2*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("La", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("Fa", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 10*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 13*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 14*/      [ac("Re", "cp14","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 25*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 26*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 27*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 28*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 29*/      [ac("Re", "cp14","m")],
/* 30*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 34*/      [ac("La", "cp14","m")],
/* 35*/      [ac("Sol", "cp14","")],
/* 36*/      [ac("Fa", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("La", "cp14","m")],
/* 39*/      [ac("Sol", "cp14","")],
/* 40*/      [ac("Fa", "cp14","")],
/* 41*/      [ac("La", "cp14","m")],
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
