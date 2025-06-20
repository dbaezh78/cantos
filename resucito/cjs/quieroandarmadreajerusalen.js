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
const NOMBREDELCANTO = "QUIERO ANDAR, MADRE, A JERUSALÉN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Canto sefardí",
      dbnos: "140",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Quiero andar, madre,",
/* 2 */        "a Jerusalén, Jerusalén.",
/* 3 */        "A comer las hierbas",
/* 4 */        "y a saciarme de ellas,",
/* 5 */        "saciarme de ellas.",
/* 6 */        "A. EN EL SENDERO ME ENCUENTRO YO.",
/* 7 */        "EN EL SENDERO CAMINO YO.",
/* 8 */        "EN EL SEÑOR DE TODO EL MUNDO,",
/* 9 */        "DE TODO EL MUNDO.",
/* 10 */        "LA LA, LA LA LA LA LA LA LALA ...",
/* 11 */        "LA LA, LA ... LA",
/* 12 */        "LALALA ...",
/* 13 */        "Canto sefardí",
/* 14 */        "Hazme comer las hierbas,",
/* 15 */        "que pueda saciar mis ansias,",
/* 16 */        "que son ansias de amistad,",
/* 17 */        "que son ansias de humildad,",
/* 18 */        "que son ansias,",
/* 19 */        "que son ansias de obediencia.",
/* 20 */        "EN EL SENDERO ME ENCUENTRO YO...",
/* 21 */        "EN EL SENDERO CAMINO YO.",
/* 22 */        "EN EL SEÑOR DE TODO EL MUNDO,",
/* 23 */        "DE TODO EL MUNDO.",
/* 24 */        "ADONAI ELOHENU,",
/* 25 */        "ADONAI ELOHENU,",
/* 26 */        "ADONAI EJAD.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 21*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 22*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 26*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
