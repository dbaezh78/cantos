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
const NOMBREDELCANTO = "MARÍA, MADRE DEL CAMINO ARDIENTE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno a la Virgen del Tercer Milenio (Kiko Argüello)",
      dbnos: "112",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡María, Madre del camino ardiente!",
/* 2 */        "Tú nos libras del fuego de las pasiones",
/* 3 */        "con el rocío de tu intercesión,",
/* 4 */        "tú nos libras del fuego de las pasiones",
/* 5 */        "con el rocío de tu intercesión.",
/* 6 */        "¡HUMILDE MARÍA, TODA INMACULADA,",
/* 7 */        "ÁNGEL DE LA GUARDA DEL TERCER MILENIO;",
/* 8 */        "LUGAR DE TODAS LAS GRACIAS;",
/* 9 */        "IMAGEN DE LA VIRTUD;",
/* 10 */        "TU BELLEZA CANTA LA JERUSALÉN CELESTE!",
/* 11 */        "¡Tú nos has mostrado el camino!",
/* 12 */        "Bajo la cruz nos has recibido,",
/* 13 */        "Madre del camino ardiente;",
/* 14 */        "bajo la cruz nos has recibido:",
/* 15 */        "¡cómo decir no a tu Hijo sufriente!",
/* 16 */        "¡HUMILDE MARÍA, TODA INMACULADA,...",
/* 17 */        "ÁNGEL DE LA GUARDA DEL TERCER MILENIO;",
/* 18 */        "LUGAR DE TODAS LAS GRACIAS;",
/* 19 */        "IMAGEN DE LA VIRTUD;",
/* 20 */        "TU BELLEZA CANTA LA JERUSALÉN CELESTE!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m"), ac("Do","cp150",""), ac("La","cp250","")],
/* 2*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 3*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 4*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 5*/      [ac("Re", "cp",""), ac("Sol","cp90","")],
/* 6*/      [ac("Mi", "cp14","m"), ac("Do","cp90",""), ac("La","cp150",""), ac("Re","cp250","")],
/* 7*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 8*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 9*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 10*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 11*/      [ac("Mi", "cp14","m"), ac("Do","cp90",""), ac("La","cp150","")],
/* 12*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 13*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 14*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 15*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 16*/      [ac("Mi", "cp14","m"), ac("Do","cp90",""), ac("La","cp150",""), ac("Re","cp250","")],
/* 17*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 18*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 19*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 20*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
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
