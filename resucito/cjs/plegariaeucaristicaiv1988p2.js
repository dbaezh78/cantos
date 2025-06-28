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
const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA IV ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(1988)",
      dbnos: "200",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Reiteraste tu alianza a los hombres;",
/* 2 */        "por los profetas los fuiste llevando",
/* 3 */        "con la esperanza de la salvación.",
/* 4 */        "Padre Santo, tanto amaste al mundo",
/* 5 */        "que, al cumplirse la plenitud de los tiempos,",
/* 6 */        "nos enviaste como salvador",
/* 7 */        "a tu único Hijo.",
/* 8 */        "El cual se encarnó",
/* 9 */        "por obra del Espíritu Santo,",
/* 10 */        "nació de María, la Virgen,",
/* 11 */        "y así compartió en todo",
/* 12 */        "nuestra condición humana",
/* 13 */        "menos en el pecado;",
/* 14 */        "anunció la salvación a los pobres,",
/* 15 */        "la liberación a los oprimidos",
/* 16 */        "y a los afligidos el consuelo.",
/* 17 */        "Para cumplir tus designios,",
/* 18 */        "él mismo se entregó a la muerte",
/* 19 */        "y, resucitando, destruyó la muerte.",
/* 20 */        "RESUCITANDO,",
/* 21 */        "DESTRUYÓ LA MUERTE",
/* 22 */        "Y NOS DIO NUEVA VIDA.",
/* 23 */        "Y porque no vivamos ya para nosotros mismos,",
/* 24 */        "sino para él,",
/* 25 */        "que por nosotros murió y resucitó,",
/* 26 */        "envió, Padre, desde tu seno",
/* 27 */        "al Espíritu Santo",
/* 28 */        "como primicia para los creyentes,",
/* 29 */        "a fin de santificar todas las cosas,",
/* 30 */        "llevando a plenitud su obra en el mundo.",
/* 31 */        "Y este mismo Espíritu",
/* 32 */        "santifique, Señor,",
/* 33 */        "estas ofrendas,",
/* 34 */        "para que sean Cuerpo y   Sangre",
/* 35 */        "de Jesucristo, nuestro Señor,",
/* 36 */        "y así celebremos el gran misterio",
/* 37 */        "que nos dejó, como alianza eterna.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Rem", "cp14","")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("Do", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Do", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Do", "cp14","")],
/* 9*/      [ac("Re", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 20*/      [ac("Do", "cp14","")],
/* 21 */   [ac("", "cp0","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 24*/      [ac("Re", "cp14","")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("Sol", "cp14","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("Re", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Re", "cp14","")],
/* 35*/      [ac("La", "cp14","m")],
/* 36*/      [ac("Re", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
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
