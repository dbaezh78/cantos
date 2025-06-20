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
const NOMBREDELCANTO = "QUIÉN ES ÉSTA QUE SUBE DEL DESIERTO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los Cantares 8,5-7",
      dbnos: "138",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¿QUIÉN ES ESTA QUE SUBE DEL DESIERTO,",
/* 2 */        "QUIÉN ES ESTA QUE SUBE DEL DESIERTO,",
/* 3 */        "APOYADA EN SU AMADO, EN SU AMADO,",
/* 4 */        "APOYADA EN SU AMADO?",
/* 5 */        "Debajo del manzano te desperté,",
/* 6 */        "allí donde te concibió tu madre,",
/* 7 */        "allí donde tu madre te dio a luz,",
/* 8 */        "allí donde tu madre te dio a luz.",
/* 9 */        "¿QUIÉN ES ESTA QUE SUBE DEL DESIERTO,...",
/* 10 */        "QUIÉN ES ESTA QUE SUBE DEL DESIERTO,",
/* 11 */        "APOYADA EN SU AMADO, EN SU AMADO,",
/* 12 */        "APOYADA EN SU AMADO?",
/* 13 */        "Llévame como un sello en tu corazón,",
/* 14 */        "como un tatuaje en tu brazo,",
/* 15 */        "porque es fuerte el amor como la muerte",
/* 16 */        "y las aguas no lo pueden apagar,",
/* 17 */        "ni los ríos lo pueden anegar.",
/* 18 */        "Que si tú dieras los bienes de tu casa por el amor",
/* 19 */        "sólo encontrarías el desprecio.",
/* 20 */        "¿QUIÉN ES ESTA QUE SUBE DEL DESIERTO,...",
/* 21 */        "QUIÉN ES ESTA QUE SUBE DEL DESIERTO,",
/* 22 */        "APOYADA EN SU AMADO, EN SU AMADO,",
/* 23 */        "APOYADA EN SU AMADO?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("Sol", "cp",""), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
/* 10*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 15*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
/* 21*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
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
