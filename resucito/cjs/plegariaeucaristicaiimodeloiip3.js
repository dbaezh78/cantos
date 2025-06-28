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
      salmo: "Modelo II (1987)",
      dbnos: "197",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Así, pues, Padre, al celebrar ahora el memorial",
/* 2 */        "de la muerte y resurrección de tu Hijo,",
/* 3 */        "te ofrecemos el pan de vida",
/* 4 */        "y el cáliz de salvación,",
/* 5 */        "y te damos gracias",
/* 6 */        "porque nos haces dignos de servirte en tu presencia.",
/* 7 */        "Te pedimos humildemente",
/* 8 */        "que el Espíritu Santo congregue en la unidad",
/* 9 */        "a cuantos participamos",
/* 10 */        "del Cuerpo y Sangre de Cristo.",
/* 11 */        "P Acuérdate, Señor, de tu Iglesia",
/* 12 */        "extendida por toda la tierra;",
/* 13 */        "y con el Papa ... N/,",
/* 14 */        "con nuestro obispo ... N/.",
/* 15 */        "y de todos los que en ella cuidan de tu pueblo,",
/* 16 */        "llévala a su perfección por la caridad.",
/* 17 */        "Acuérdate también de nuestros hermanos",
/* 18 */        "que durmieron en la esperanza de la resurrección,",
/* 19 */        "y de todos los que han muerto",
/* 20 */        "en tu misericordia;",
/* 21 */        "admítelos a contemplar la luz de tu rostro.",
/* 22 */        "Ten misericordia de todos nosotros,",
/* 23 */        "y así, con María, la Virgen Madre de Dios,",
/* 24 */        "su esposo San José,",
/* 25 */        "los apóstoles",
/* 26 */        "y cuantos vivieron en tu amistad",
/* 27 */        "a través de los tiempos",
/* 28 */        "merezcamos, por tu Hijo Jesucristo,",
/* 29 */        "compartir la vida eterna",
/* 30 */        "y cantar tus alabanzas.",
/* 31 */        "P. Por Cristo, con Cristo y en Cristo,",
/* 32 */        "a ti, Dios Padre omnipotente,",
/* 33 */        "en la unidad del Espíritu Santo,",
/* 34 */        "todo honor y toda gloria",
/* 35 */        "por los siglos de los siglos.",
/* 36 */        "AMÉN, AMÉN, AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14","")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Si", "cp14","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Si", "cp14","m")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 22*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27 */   [ac("", "cp0","")],
/* 28*/      [ac("Sol", "cp14","")],
/* 29*/      [ac("Si", "cp14","m")],
/* 30*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("Si", "cp14","m")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35*/      [ac("Sol", "cp14","")],
/* 36*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("La","cp150",""), ac("Mi","cp250","m")],
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
