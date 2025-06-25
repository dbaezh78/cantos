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
const NOMBREDELCANTO = "VIENE EL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 93 (92) - Apocalipsis 1,5-7",
      dbnos: "170",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "VIENE EL SEÑOR",
/* 2 */        "VESTIDO DE MAJESTAD,",
/* 3 */        "VESTIDO Y CEÑIDO DE PODER.",
/* 4 */        "Así está firme el orbe y no vacila,",
/* 5 */        "la santidad es el adorno de tu casa;",
/* 6 */        "tu trono está firme desde siempre,",
/* 7 */        "desde siempre tú eres Señor.",
/* 8 */        "VIENE EL SEÑOR...",
/* 9 */        "VESTIDO DE MAJESTAD,",
/* 10 */        "VESTIDO Y CEÑIDO DE PODER.",
/* 11 */        "A Aquel, a Aquel que nos amó,",
/* 12 */        "que nos libró de todos los pecados,",
/* 13 */        "a Aquel, a Aquel que nos amó,",
/* 14 */        "que nos ha hecho sacerdotes de su reino.",
/* 15 */        "A ÉL LA GLORIA Y EL PODER",
/* 16 */        "POR LOS SIGLOS DE LOS SIGLOS.",
/* 17 */        "VIENE EL SEÑOR...",
/* 18 */        "VESTIDO DE MAJESTAD,",
/* 19 */        "VESTIDO Y CEÑIDO DE PODER.",
/* 20 */        "Él viene en las nubes y todos le verán,",
/* 21 */        "también aquellos que le traspasaron;",
/* 22 */        "todos los reyes y pueblos de la tierra",
/* 23 */        "se lamentarán, se lamentarán.",
/* 24 */        "A ÉL LA GLORIA Y EL PODER...",
/* 25 */        "POR LOS SIGLOS DE LOS SIGLOS.",
/* 26 */        "VIENE EL SEÑOR...",
/* 27 */        "VESTIDO DE MAJESTAD,",
/* 28 */        "VESTIDO Y CEÑIDO DE PODER.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 5*/      [ac("Mi", "cp","m")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 21*/      [ac("Mi", "cp14","m")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Mi", "cp14","m")],
/* 24*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 25*/      [ac("Mi", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","m")],
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
