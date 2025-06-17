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
const NOMBREDELCANTO = "HE AQUÍ MI SIERVO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 42,1-4; Mateo 12,18-21 - Primer canto de Siervo de Yahveh",
      dbnos: "81",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "He aquí mi siervo a quien elegí,",
/* 2 */        "he aquí mi siervo a quien elegí,",
/* 3 */        "mi amado,",
/* 4 */        "en quien mi alma se complace,",
/* 5 */        "mi amado",
/* 6 */        "a quien elegí.",
/* 7 */        "Haré descansar mi espíritu sobre Él,",
/* 8 */        "y anunciará el derecho a las naciones,",
/* 9 */        "y anunciará el derecho a las naciones.",
/* 10 */        "No disputará ni gritará,",
/* 11 */        "nadie oirá su voz",
/* 12 */        "en las plazas.",
/* 13 */        "LA CAÑA CASCADA NO LA QUEBRARÁ,",
/* 14 */        "LA MECHA HUMEANTE NO APAGARÁ,",
/* 15 */        "HASTA HACER TRIUNFAR EL DERECHO,",
/* 16 */        "HASTA HACER TRIUNFAR EL DERECHO.",
/* 17 */        "Y en su nombre,",
/* 18 */        "y en su nombre",
/* 19 */        "pondrán las naciones",
/* 20 */        "su esperanza.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
/* 2*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 8*/      [ac("La", "cp14","m"), ac("Mi","cp90","La"), ac("m","cp150","")],
/* 9*/      [ac("Mi", "cp14","La"), ac("m","cp90","Mi"), ac("7","cp150","La"), ac("m","cp250","")],
/* 10*/      [ac("Do", "cp14","")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Lam", "cp14","Mi")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("La", "cp14","m")],
/* 18 */   [ac("", "cp0","")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Lam", "cp14","")],
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
