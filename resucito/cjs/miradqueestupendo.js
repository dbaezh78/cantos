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
const NOMBREDELCANTO = "MIRAD QUÉ ESTUPENDO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 133 (132)",
      dbnos: "116",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡MIRAD QUÉ ESTUPENDO,",
/* 2 */        "GUSTAD QUÉ ALEGRÍA",
/* 3 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 4 */        "¡MIRAD QUÉ ESTUPENDO,",
/* 5 */        "GUSTAD QUÉ ALEGRÍA",
/* 6 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 7 */        "Es ungüento perfumado que desciende,",
/* 8 */        "que desciende por la barba de Aarón.",
/* 9 */        "ES UNGÜENTO PERFUMADO",
/* 10 */        "QUE DESCIENDE",
/* 11 */        "HASTA EL BORDE DEL MANTO.",
/* 12 */        "¡MIRAD QUÉ ESTUPENDO,...",
/* 13 */        "GUSTAD QUÉ ALEGRÍA",
/* 14 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 15 */        "¡MIRAD QUÉ ESTUPENDO,",
/* 16 */        "GUSTAD QUÉ ALEGRÍA",
/* 17 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 18 */        "Es como rocío del Hermón",
/* 19 */        "que desciende sobre el monte Sión;",
/* 20 */        "A. ES ROCÍO DEL HERMÓN QUE DESCIENDE",
/* 21 */        "SOBRE EL MONTE SIÓN.",
/* 22 */        "¡MIRAD QUÉ ESTUPENDO,...",
/* 23 */        "GUSTAD QUÉ ALEGRÍA",
/* 24 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 25 */        "¡MIRAD QUÉ ESTUPENDO,",
/* 26 */        "GUSTAD QUÉ ALEGRÍA",
/* 27 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 28 */        "Porque allí el Señor nos ha dado,",
/* 29 */        "nos ha dado su bendición.",
/* 30 */        "PORQUE ALLÍ EL SEÑOR NOS HA DADO,",
/* 31 */        "NOS HA DADO SU AMOR.",
/* 32 */        "¡MIRAD QUÉ ESTUPENDO,...",
/* 33 */        "GUSTAD QUÉ ALEGRÍA",
/* 34 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 35 */        "¡MIRAD QUÉ ESTUPENDO,",
/* 36 */        "GUSTAD QUÉ ALEGRÍA",
/* 37 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 38 */        "Porque allí el Señor nos ha dado",
/* 39 */        "la vida eternamente.",
/* 40 */        "PORQUE ALLÍ EL SEÑOR NOS HA DADO",
/* 41 */        "LA VIDA PARA SIEMPRE.",
/* 42 */        "¡MIRAD QUÉ ESTUPENDO,...",
/* 43 */        "GUSTAD QUÉ ALEGRÍA",
/* 44 */        "EL AMOR ENTRE LOS HERMANOS!",
/* 45 */        "¡MIRAD QUÉ ESTUPENDO,",
/* 46 */        "GUSTAD QUÉ ALEGRÍA",
/* 47 */        "EL AMOR ENTRE LOS HERMANOS!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 7*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 8*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 9*/      [ac("Do", "cp14","")],
/* 10*/      [ac("Si7", "cp14","")],
/* 11*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 18*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 19*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 20*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 21*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 25*/      [ac("Mi", "cp14","m")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 28*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 29*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 30*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 31*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 35*/      [ac("Mi", "cp14","m")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 38*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 39*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 40*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 41*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 42*/      [ac("Mi", "cp14","m")],
/* 43 */   [ac("", "cp0","")],
/* 44*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 45*/      [ac("Mi", "cp14","m")],
/* 46 */   [ac("", "cp0","")],
/* 47*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si7","cp250","")],
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
