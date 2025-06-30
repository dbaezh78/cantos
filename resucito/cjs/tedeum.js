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
const NOMBREDELCANTO = "TE DEUM";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno",
      dbnos: "220",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "A ti, oh Dios, te alabamos,",
/* 2 */        "a ti, Señor, te reconocemos.",
/* 3 */        "A ti, Eterno Padre,",
/* 4 */        "te venera toda la creación.",
/* 5 */        "A TI CANTAN LOS ÁNGELES,",
/* 6 */        "Y TODAS LAS POTENCIAS DEL CIELO:",
/* 7 */        "SANTO, SANTO, SANTO,",
/* 8 */        "SANTO, SANTO, SANTO,",
/* 9 */        "EL SEÑOR DEL UNIVERSO.",
/* 10 */        "Los cielos y la tierra están llenos",
/* 11 */        "de la majestad de tu gloria.",
/* 12 */        "A ti te ensalza el glorioso",
/* 13 */        "coro de los apóstoles,",
/* 14 */        "la multitud adorable de los profetas,",
/* 15 */        "el cándido ejército de los mártires.",
/* 16 */        "A ti la Iglesia santa,",
/* 17 */        "extendida por toda la tierra,",
/* 18 */        "te proclama: Padre de inmensa majestad,",
/* 19 */        "Hijo único y verdadero, digno de adoración,",
/* 20 */        "Espíritu Santo, Defensor.",
/* 21 */        "A TI CANTAN LOS ÁNGELES...",
/* 22 */        "Y TODAS LAS POTENCIAS DEL CIELO:",
/* 23 */        "SANTO, SANTO, SANTO,",
/* 24 */        "SANTO, SANTO, SANTO,",
/* 25 */        "EL SEÑOR DEL UNIVERSO.",
/* 26 */        "Tú eres el Rey de la gloria, Cristo.",
/* 27 */        "Tú eres el Hijo único del Padre.",
/* 28 */        "Tú, para liberar al hombre,",
/* 29 */        "aceptaste la condición humana",
/* 30 */        "sin desdeñar el seno de la Virgen.",
/* 31 */        "Tú, rotas las cadenas de la muerte,",
/* 32 */        "abriste a los creyentes el reino de los cielos.",
/* 33 */        "Tú te sientas a la derecha de Dios",
/* 34 */        "en la gloria del Padre.",
/* 35 */        "A TI CANTAN LOS ÁNGELES...",
/* 36 */        "Y TODAS LAS POTENCIAS DEL CIELO:",
/* 37 */        "SANTO, SANTO, SANTO,",
/* 38 */        "SANTO, SANTO, SANTO,",
/* 39 */        "EL SEÑOR DEL UNIVERSO.",
/* 40 */        "Creemos que un día",
/* 41 */        "has de venir como juez.",
/* 42 */        "Te rogamos, que vengas en ayuda de tus siervos",
/* 43 */        "a quienes redimiste con tu preciosa sangre.",
/* 44 */        "Haz que en la gloria eterna",
/* 45 */        "nos asociemos a tus santos.",
/* 46 */        "Salva a tu pueblo, Señor, y bendice tu heredad.",
/* 47 */        "Sé su pastor, ensálzalo eternamente.",
/* 48 */        "A TI CANTAN LOS ÁNGELES...",
/* 49 */        "Y TODAS LAS POTENCIAS DEL CIELO:",
/* 50 */        "SANTO, SANTO, SANTO,",
/* 51 */        "SANTO, SANTO, SANTO,",
/* 52 */        "EL SEÑOR DEL UNIVERSO.",
/* 53 */        "Día tras día te bendecimos",
/* 54 */        "y alabamos tu nombre para siempre,",
/* 55 */        "por eternidad de eternidades.",
/* 56 */        "Dígnate, Señor, en este día",
/* 57 */        "guardarnos del pecado.",
/* 58 */        "Ten piedad de nosotros, Señor,",
/* 59 */        "ten piedad de nosotros.",
/* 60 */        "Que tu misericordia venga sobre nosotros,",
/* 61 */        "como lo esperamos de ti.",
/* 62 */        "En ti, Señor, confiamos,",
/* 63 */        "que no quedemos confundidos eternamente.",
/* 64 */        "A TI CANTAN LOS ÁNGELES...",
/* 65 */        "Y TODAS LAS POTENCIAS DEL CIELO:",
/* 66 */        "SANTO, SANTO, SANTO,",
/* 67 */        "SANTO, SANTO, SANTO,",
/* 68 */        "EL SEÑOR DEL UNIVERSO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","")],
/* 2*/      [ac("La", "cp14","")],
/* 3*/      [ac("Si", "cp14","m")],
/* 4*/      [ac("Fa#", "cp14","")],
/* 5*/      [ac("Re", "cp","")],
/* 6*/      [ac("La", "cp14","")],
/* 7*/      [ac("Si", "cp14","m")],
/* 8*/      [ac("Fa#", "cp14","")],
/* 9*/      [ac("Si", "cp14","m")],
/* 10 */   [ac("", "cp0","")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Re", "cp14","")],
/* 22*/      [ac("La", "cp14","")],
/* 23*/      [ac("Si", "cp14","m")],
/* 24*/      [ac("Fa#", "cp14","")],
/* 25*/      [ac("Si", "cp14","m")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35*/      [ac("Re", "cp14","")],
/* 36*/      [ac("La", "cp14","")],
/* 37*/      [ac("Si", "cp14","m")],
/* 38*/      [ac("Fa#", "cp14","")],
/* 39*/      [ac("Si", "cp14","m")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43 */   [ac("", "cp0","")],
/* 44 */   [ac("", "cp0","")],
/* 45 */   [ac("", "cp0","")],
/* 46 */   [ac("", "cp0","")],
/* 47 */   [ac("", "cp0","")],
/* 48*/      [ac("Re", "cp14","")],
/* 49*/      [ac("La", "cp14","")],
/* 50*/      [ac("Si", "cp14","m")],
/* 51*/      [ac("Fa#", "cp14","")],
/* 52*/      [ac("Si", "cp14","m")],
/* 53 */   [ac("", "cp0","")],
/* 54 */   [ac("", "cp0","")],
/* 55 */   [ac("", "cp0","")],
/* 56 */   [ac("", "cp0","")],
/* 57 */   [ac("", "cp0","")],
/* 58 */   [ac("", "cp0","")],
/* 59 */   [ac("", "cp0","")],
/* 60 */   [ac("", "cp0","")],
/* 61 */   [ac("", "cp0","")],
/* 62 */   [ac("", "cp0","")],
/* 63 */   [ac("", "cp0","")],
/* 64*/      [ac("Re", "cp14","")],
/* 65*/      [ac("La", "cp14","")],
/* 66*/      [ac("Si", "cp14","m")],
/* 67*/      [ac("Fa#", "cp14","")],
/* 68*/      [ac("Si", "cp14","m")],
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
