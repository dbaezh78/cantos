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
const NOMBREDELCANTO = "HIMNO DE LA ASCENSIÓN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno de Laudes del tiempo Pascual, de la Ascensión a Pentecostés  / Himno de la liturgia de las horas ",
      dbnos: "89",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EL BUEN PASTOR HA SUBIDO",
/* 2 */        "A LA DERECHA DEL PADRE,",
/* 3 */        "VELA EL PEQUEÑO REBAÑO",
/* 4 */        "CON MARÍA EN EL CENÁCULO.",
/* 5 */        "Del esplendor eterno",
/* 6 */        "desciende el crisma profético,",
/* 7 */        "que consagra a los apóstoles",
/* 8 */        "en heraldos del Evangelio.",
/* 9 */        "EL BUEN PASTOR HA SUBIDO...",
/* 10 */        "A LA DERECHA DEL PADRE,",
/* 11 */        "VELA EL PEQUEÑO REBAÑO",
/* 12 */        "CON MARÍA EN EL CENÁCULO.",
/* 13 */        "Ven, oh divino Espíritu,",
/* 14 */        "con tus santos dones",
/* 15 */        "y transforma nuestros cuerpos",
/* 16 */        "en el templo de tu santa gloria.",
/* 17 */        "EL BUEN PASTOR HA SUBIDO...",
/* 18 */        "A LA DERECHA DEL PADRE,",
/* 19 */        "VELA EL PEQUEÑO REBAÑO",
/* 20 */        "CON MARÍA EN EL CENÁCULO.",
/* 21 */        "Oh luz de eterna sabiduría,",
/* 22 */        "revélanos el gran misterio",
/* 23 */        "del Dios uno y trino",
/* 24 */        "fuente de eterno amor.",
/* 25 */        "EL BUEN PASTOR HA SUBIDO...",
/* 26 */        "A LA DERECHA DEL PADRE,",
/* 27 */        "VELA EL PEQUEÑO REBAÑO",
/* 28 */        "CON MARÍA EN EL CENÁCULO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("La", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14","")],
/* 28*/      [ac("La", "cp14","m")],
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
