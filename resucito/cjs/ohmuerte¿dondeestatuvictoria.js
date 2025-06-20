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
const NOMBREDELCANTO = "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "1 Corintios 15",
      dbnos: "127",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "En un instante, en un pestañear de ojos,",
/* 2 */        "al toque de la trompeta final,",
/* 3 */        "porque sonará la trompeta,",
/* 4 */        "y los muertos resucitarán incorruptibles",
/* 5 */        "y nosotros seremos transformados.",
/* 6 */        "POR ESO CANTAMOS:",
/* 7 */        "LA MUERTE ES ABSORBIDA",
/* 8 */        "EN LA VICTORIA.",
/* 9 */        "ALELUYA, ALELUYA.",
/* 10 */        "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?",
/* 11 */        "ALELUYA, ALELUYA.",
/* 12 */        "OH MUERTE, ¿DÓNDE ESTÁ TU AGUIJÓN?",
/* 13 */        "ALELUYA, ALELUYA.",
/* 14 */        "El aguijón de la muerte es el pecado",
/* 15 */        "y la fuerza del pecado está en la Ley,",
/* 16 */        "pero nosotros vencemos en Cristo resucitado.",
/* 17 */        "POR ESO CANTAMOS...",
/* 18 */        "LA MUERTE ES ABSORBIDA",
/* 19 */        "EN LA VICTORIA.",
/* 20 */        "ALELUYA, ALELUYA.",
/* 21 */        "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?",
/* 22 */        "ALELUYA, ALELUYA.",
/* 23 */        "OH MUERTE, ¿DÓNDE ESTÁ TU AGUIJÓN?",
/* 24 */        "ALELUYA, ALELUYA.",
/* 25 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 26 */        "Yo os recuerdo, hermanos,",
/* 27 */        "el Evangelio que yo os he anunciado,",
/* 28 */        "el mismo que yo he recibido.",
/* 29 */        "A saber:",
/* 30 */        "que Cristo murió por los pecados,",
/* 31 */        "SEGÚN LAS ESCRITURAS;",
/* 32 */        "que Él ha resucitado,",
/* 33 */        "SEGÚN LAS ESCRITURAS;",
/* 34 */        "que se apareció primero a Pedro,",
/* 35 */        "luego a los Doce,",
/* 36 */        "después a más",
/* 37 */        "de quinientos hermanos a la vez",
/* 38 */        "y por último se me apareció a mí.",
/* 39 */        "POR ESO CANTAMOS...",
/* 40 */        "LA MUERTE ES ABSORBIDA",
/* 41 */        "EN LA VICTORIA.",
/* 42 */        "ALELUYA, ALELUYA.",
/* 43 */        "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?",
/* 44 */        "ALELUYA, ALELUYA.",
/* 45 */        "OH MUERTE, ¿DÓNDE ESTÁ TU AGUIJÓN?",
/* 46 */        "ALELUYA, ALELUYA.",
/* 47 */        "ALELUYA,ALELUYA,ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("add","cp90","9")],
/* 2*/      [ac("La", "cp14","m"), ac("La","cp90","m6"), ac("Re","cp150","7")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 5*/      [ac("Do", "cp",""), ac("La","cp90","m"), ac("Fa#","cp150","")],
/* 6*/      [ac("Re", "cp14","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Fa#", "cp14","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Sim", "cp14","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("La", "cp14","")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Fa#", "cp14","")],
/* 17*/      [ac("Re", "cp14","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Fa#", "cp14","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Si m", "cp14","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("La", "cp14",""), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 26*/      [ac("Re", "cp14","")],
/* 27*/      [ac("Fa#", "cp14",""), ac("Si","cp90","m")],
/* 28*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 29*/      [ac("Re", "cp14","")],
/* 30 */   [ac("", "cp0","")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("Fa#", "cp14","")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Si", "cp14","m")],
/* 35*/      [ac("La", "cp14","")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Sol", "cp14","")],
/* 38*/      [ac("Fa#", "cp14","")],
/* 39*/      [ac("Re", "cp14","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43*/      [ac("Fa#", "cp14","")],
/* 44 */   [ac("", "cp0","")],
/* 45*/      [ac("Sim", "cp14","")],
/* 46 */   [ac("", "cp0","")],
/* 47*/      [ac("La", "cp14",""), ac("Sol","cp90",""), ac("Fa#","cp150","")],
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
