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
const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA II";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo II",
      dbnos: "194",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Y CON TU ESPÍRITU.",
/* 3 */        "Levantemos el corazón.",
/* 4 */        "LO TENEMOS LEVANTADO HACIA EL SEÑOR.",
/* 5 */        "P Demos gracias al Señor, nuestro Dios.",
/* 6 */        "ES JUSTO Y NECESARIO.",
/* 7 */        "Verdaderamente,",
/* 8 */        "es justo y necesario,",
/* 9 */        "es nuestro deber y fuente de salvación",
/* 10 */        "darte gracias, siempre y en todo lugar.",
/* 11 */        "A ti, Padre Santo,",
/* 12 */        "por Jesucristo, tu amadísimo Hijo.",
/* 13 */        "Por Él, que es tu Palabra viviente,",
/* 14 */        "hiciste todas las cosas;",
/* 15 */        "tú nos lo enviaste Salvador y Redentor",
/* 16 */        "hecho hombre por obra del Espíritu Santo,",
/* 17 */        "y nacido de la Virgen María,",
/* 18 */        "para cumplir tu voluntad",
/* 19 */        "y adquirir para Ti un pueblo santo.",
/* 20 */        "Él",
/* 21 */        "extendió sus brazos en la cruz,",
/* 22 */        "muriendo destruyó la muerte.",
/* 23 */        "Y proclamó",
/* 24 */        "la resurrección.",
/* 25 */        "Y PROCLAMÓ",
/* 26 */        "LA RESURRECCIÓN.",
/* 27 */        "Por este misterio de salvación,",
/* 28 */        "unidos a los ángeles y a los santos",
/* 29 */        "cantamos a una sola voz",
/* 30 */        "el himno de tu gloria:",
/* 31 */        "SANTO, SANTO, SANTO...",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("Lam", "cp14","")],
/* 5*/      [ac("Sol", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 21*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 27*/      [ac("La", "cp14","m")],
/* 28 */   [ac("", "cp0","")],
/* 29*/      [ac("Sol", "cp14","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31 */   [ac("", "cp0","")],
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
