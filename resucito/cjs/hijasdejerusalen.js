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
const NOMBREDELCANTO = "HIJAS DE JERUSALÉN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 23,28-46",
      dbnos: "84",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "HIJAS DE JERUSALÉN,",
/* 2 */        "NO LLORÉIS,",
/* 3 */        "NO LLORÉIS POR MÍ.",
/* 4 */        "Que si esto hacen con el leño verde,",
/* 5 */        "con el seco, ¿qué se hará?,",
/* 6 */        "con el seco, ¿qué se hará?",
/* 7 */        "¡Aaaay!",
/* 8 */        "HIJAS DE JERUSALÉN,...",
/* 9 */        "NO LLORÉIS,",
/* 10 */        "NO LLORÉIS POR MÍ.",
/* 11 */        "Padre, perdónales,",
/* 12 */        "porque no saben qué es lo que hacen.",
/* 13 */        "Perdónales, perdónales.",
/* 14 */        "¡Aaaay!",
/* 15 */        "HIJAS DE JERUSALÉN,...",
/* 16 */        "NO LLORÉIS,",
/* 17 */        "NO LLORÉIS POR MÍ.",
/* 18 */        "Le 23,28-46",
/* 19 */        "Yo te aseguro:",
/* 20 */        "hoy estarás conmigo",
/* 21 */        "en el Paraíso.",
/* 22 */        "HIJAS DE JERUSALÉN,...",
/* 23 */        "NO LLORÉIS,",
/* 24 */        "NO LLORÉIS POR MÍ.",
/* 25 */        "e ¡Padre!, ¡Padre!,",
/* 26 */        "en tus manos",
/* 27 */        "encomiendo mi espíritu.",
/* 28 */        "¡Ah! ¡Ah! ¡Ah!",
/* 29 */        "HIJAS DE JERUSALÉN,...",
/* 30 */        "NO LLORÉIS,",
/* 31 */        "NO LLORÉIS POR MÍ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 5*/      [ac("Sol", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Fa", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18 */   [ac("", "cp0","")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Fa", "cp14","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Fa", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Fa", "cp14","")],
/* 31*/      [ac("La", "cp14","m")],
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
