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
const NOMBREDELCANTO = "SALMODIAS PARA LA ORACIÓN DE LOS FIELES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Para las solemnidades",
      dbnos: "211",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Oremos, hermanos,",
/* 2 */        "por la Iglesia santa de Dios,",
/* 3 */        "por su servidor el Papa N/ .,",
/* 4 */        "por los obispos, los sacerdotes, diáconos,",
/* 5 */        "y todo tu pueblo santo:",
/* 6 */        "para que partícipes de los bienes celestiales",
/* 7 */        "podamos anunciar a este mundo que sufre",
/* 8 */        "la Buena Noticia de Jesucristo resucitado.",
/* 9 */        "¡ESCÚCHANOS, OH SEÑOR!",
/* 10 */        "Oremos, hermanos, por los gobernantes,",
/* 11 */        "y por todos los hombres",
/* 12 */        "que han sido constituidos como jefes",
/* 13 */        "y conductores de las naciones:",
/* 14 */        "para que cesen las guerras,",
/* 15 */        "para que desaparezcan las divisiones,",
/* 16 */        "y se construyan caminos",
/* 17 */        "de paz y justicia para todos los pueblos.",
/* 18 */        "¡ESCÚCHANOS, OH SEÑOR!",
/* 19 */        "Oremos por todos los hombres",
/* 20 */        "que sufren en su cuerpo o en su espíritu,",
/* 21 */        "y por todos los pobres de la tierra:",
/* 22 */        "para que por medio de tus profetas",
/* 23 */        "reciban el anuncio de la salvación y la vida,",
/* 24 */        "el consuelo de tu Palabra,",
/* 25 */        "y la comunión de los fieles de tu Iglesia.",
/* 26 */        "¡ESCÚCHANOS, OH SEÑOR!",
/* 27 */        "Oremos por esta asamblea santa,",
/* 28 */        "que convocada en tu Nombre",
/* 29 */        "celebra hoy el memorial de la muerte",
/* 30 */        "y resurrección de tu Hijo:",
/* 31 */        "para que el Señor nos conceda a todos",
/* 32 */        "el celo por la salvación de los hombres,",
/* 33 */        "el amor a los que sufren,",
/* 34 */        "y la alegría de proclamar en esta generación",
/* 35 */        "tu amor y tu misericordia.",
/* 36 */        "¡ESCÚCHANOS, OH SEÑOR!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mim", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Sol", "cp","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Mi", "cp14","m"), ac("Re","cp90","Mi"), ac("m","cp150","")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Re","cp90","Mi"), ac("m","cp150","")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Mi", "cp14","m"), ac("Re","cp90","Mi"), ac("m","cp150","")],
/* 18*/      [ac("Mi", "cp14","m"), ac("Re","cp90","Mi"), ac("m","cp150","")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Mi", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 26*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 27*/      [ac("Mi", "cp14","m")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 36*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
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
