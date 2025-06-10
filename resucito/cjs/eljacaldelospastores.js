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
  else if (anchoPantalla <= 900) {
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
const NOMBREDELCANTO = "EL JACAL DE LOS PASTORES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los Cantares 1,2-8",
      dbnos: "55",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Que me bese con besos de su boca,",
/* 2 */        "mejores son que el vino tus amores.",
/* 3 */        "Tu nombre es ungüento que se vierte,",
/* 4 */        "por eso te aman las doncellas.",
/* 5 */        "LLÉVAME EN POS DE TI, SALGAMOS.",
/* 6 */        "LLÉVAME TRAS DE TI, CORRAMOS.",
/* 7 */        "CELEBRAREMOS TUS AMORES MÁS QUE EL VINO,",
/* 8 */        "CON CUÁNTA RAZÓN ERES AMADO.",
/* 9 */        "HAZME SABER, AMADO DE MI ALMA,",
/* 10 */        "DÓNDE APACIENTAS EL REBAÑO,",
/* 11 */        "PARA QUE YO NO ANDE VAGABUNDA",
/* 12 */        "DETRÁS DE OTROS COMPAÑEROS.",
/* 13 */        "Si no lo sabes, oh bella entre las bellas,",
/* 14 */        "sigue la senda de mis ovejas",
/* 15 */        "y lleva por allí tus cabras",
/* 16 */        "hasta el jacal de los pastores.",
/* 17 */        "LLÉVAME EN POS DE TI, SALGAMOS...",
/* 18 */        "LLÉVAME TRAS DE TI, CORRAMOS.",
/* 19 */        "CELEBRAREMOS TUS AMORES MÁS QUE EL VINO,",
/* 20 */        "CON CUÁNTA RAZÓN ERES AMADO.",
/* 21 */        "HAZME SABER, AMADO DE MI ALMA,",
/* 22 */        "DÓNDE APACIENTAS EL REBAÑO,",
/* 23 */        "PARA QUE YO NO ANDE VAGABUNDA",
/* 24 */        "DETRÁS DE OTROS COMPAÑEROS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Re", "cp14","m")],
/* 18*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Re", "cp14","m")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Re", "cp14","m")],
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
