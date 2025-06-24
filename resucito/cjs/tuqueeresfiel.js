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
const NOMBREDELCANTO = "TÚ QUE ERES FIEL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 143 (142)",
      dbnos: "161",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Señor, escucha mi oración,",
/* 2 */        "presta oídos a mi súplica.",
/* 3 */        "TÚ QUE ERES FIEL,",
/* 4 */        "TÚ QUE ERES FIEL, RESPÓNDEME,",
/* 5 */        "POR TU JUSTICIA RESPÓNDEME.",
/* 6 */        "No llames a juicio a tu siervo,",
/* 7 */        "ningún hombre es inocente frente a ti.",
/* 8 */        "El enemigo me persigue,",
/* 9 */        "estrella mi vida contra el suelo.",
/* 10 */        "TÚ QUE ERES FIEL...",
/* 11 */        "TÚ QUE ERES FIEL, RESPÓNDEME,",
/* 12 */        "POR TU JUSTICIA RESPÓNDEME.",
/* 13 */        "Extiendo mis manos hacia ti,",
/* 14 */        "tengo sed de ti como tierra reseca.",
/* 15 */        "¡Escúchame pronto, Señor,",
/* 16 */        "que me falta el aliento!",
/* 17 */        "TÚ QUE ERES FIEL...",
/* 18 */        "TÚ QUE ERES FIEL, RESPÓNDEME,",
/* 19 */        "POR TU JUSTICIA RESPÓNDEME.",
/* 20 */        "Hazme conocer el camino,",
/* 21 */        "la vía que he de seguir.",
/* 22 */        "Líbrame de mis enemigos,",
/* 23 */        "Señor, que me refugio en ti.",
/* 24 */        "TÚ QUE ERES FIEL...",
/* 25 */        "TÚ QUE ERES FIEL, RESPÓNDEME,",
/* 26 */        "POR TU JUSTICIA RESPÓNDEME.",
/* 27 */        "Enséñame a cumplir tu voluntad,",
/* 28 */        "porque tú eres mi Dios;",
/* 29 */        "tu Espíritu me guíe,",
/* 30 */        "tu Espíritu me guíe por tierra llana.",
/* 31 */        "TÚ QUE ERES FIEL...",
/* 32 */        "TÚ QUE ERES FIEL, RESPÓNDEME,",
/* 33 */        "POR TU JUSTICIA RESPÓNDEME.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Do","cp150","m")],
/* 2*/      [ac("Re", "cp14",""), ac("Do","cp90","m"), ac("Re","cp150","")],
/* 3*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m")],
/* 4*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m"), ac("Re","cp150","7")],
/* 5*/      [ac("Do", "cp","m"), ac("Re","cp90","7")],
/* 6*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7")],
/* 7*/      [ac("Sol", "cp14","m")],
/* 8*/      [ac("Re", "cp14","7")],
/* 9*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 10*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m")],
/* 11*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m"), ac("Re","cp150","7")],
/* 12*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 13*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7")],
/* 14*/      [ac("Sol", "cp14","m")],
/* 15*/      [ac("Re", "cp14","7")],
/* 16*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 17*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m")],
/* 18*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m"), ac("Re","cp150","7")],
/* 19*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 20*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7")],
/* 21*/      [ac("Sol", "cp14","m")],
/* 22*/      [ac("Re", "cp14","7")],
/* 23*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 24*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m")],
/* 25*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m"), ac("Re","cp150","7")],
/* 26*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 27*/      [ac("Sol", "cp14","m"), ac("Re","cp90","7")],
/* 28*/      [ac("Sol", "cp14","m")],
/* 29*/      [ac("Re", "cp14","7")],
/* 30*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
/* 31*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m")],
/* 32*/      [ac("Sol", "cp14","m"), ac("Do","cp90","m"), ac("Re","cp150","7")],
/* 33*/      [ac("Do", "cp14","m"), ac("Re","cp90","7")],
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
