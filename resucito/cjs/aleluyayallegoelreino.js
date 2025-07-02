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
const NOMBREDELCANTO = "ALELUYA, YA LLEGÓ EL REINO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 19,6-9",
      dbnos: "15",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 2 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 3 */        "Ya llegó el Reino",
/* 4 */        "del Señor y su Cristo.",
/* 5 */        "Ya llegó el Reino",
/* 6 */        "del Señor nuestro Dios.",
/* 7 */        "ALELUYA...",
/* 8 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 9 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 10 */        "Démosle gloria,",
/* 11 */        "han llegado las bodas.",
/* 12 */        "Démosle gloria,",
/* 13 */        "las bodas con nuestro Dios.",
/* 14 */        "ALELUYA...",
/* 15 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 16 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 17 */        "Bienaventurados",
/* 18 */        "los invitados a bodas,",
/* 19 */        "a las bodas del Cordero.",
/* 20 */        "Bienaventurados",
/* 21 */        "los invitados a bodas,",
/* 22 */        "a las bodas con el Señor.",
/* 23 */        "ALELUYA...",
/* 24 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 25 */        "ALELUYA, ALELUYA, ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp0",""), ac("Mi","cp251",""), ac("La","cp463","m")],
/* 2*/      [ac("Do", "cp83",""), ac("Mi","cp251",""), ac("La","cp463","m")],

/* 3*/      [ac("Do", "cp0",""), ac("Mi","cp201","")],
/* 4*/      [ac("La", "cp270","m")],
/* 5*/      [ac("Do", "cp",""), ac("Mi","cp199","")],
/* 6*/      [ac("La", "cp330","m")],

/* 7*/      [ac("Do", "cp14","")],
/* 8*/      [ac("Do", "cp0",""), ac("Mi","cp251",""), ac("La","cp463","m")],
/* 9*/      [ac("Do", "cp83",""), ac("Mi","cp251",""), ac("La","cp463","m")],

/* 10*/      [ac("Do", "cp0",""), ac("Mi","cp187","")],
/* 11*/      [ac("La", "cp278","m")],
/* 12*/      [ac("Do", "cp0",""), ac("Mi","cp183","")],
/* 13*/      [ac("La", "cp403","m")],

/* 14*/      [ac("Do", "cp0","")],
/* 15*/      [ac("Do", "cp0",""), ac("Mi","cp251",""), ac("La","cp463","m")],
/* 16*/      [ac("Do", "cp83",""), ac("Mi","cp251",""), ac("La","cp463","m")],

/* 17*/      [ac("Do", "cp0","")],
/* 18*/      [ac("Mi", "cp0","")],
/* 19*/      [ac("La", "cp337","m")],
/* 20*/      [ac("Do", "cp0","")],
/* 21*/      [ac("Mi", "cp0","")],
/* 22*/      [ac("La", "cp369","m")],

/* 23*/      [ac("Do", "cp0","")],
/* 24*/      [ac("Do", "cp0",""), ac("Mi","cp251",""), ac("La","cp463","m")],
/* 25*/      [ac("Do", "cp83",""), ac("Mi","cp251",""), ac("La","cp463","m")],
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
