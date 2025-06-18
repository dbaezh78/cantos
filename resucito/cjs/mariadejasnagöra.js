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
const NOMBREDELCANTO = "MARÍA DE JASNA GÖRA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno a la Virgen de Jasna Göra, Częstochowa Polonia (Kiko Argüello) ",
      dbnos: "110",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "MARÍA DE JASNA GÓRA",
/* 2 */        "MARIA, SANCTA MARIA",
/* 3 */        "MATER ABSCONDITA,",
/* 4 */        "AT SEMPER SOLICITA;",
/* 5 */        "TU, REDEMPTORIS MATER,",
/* 6 */        "ORA PRO NOBIS.",
/* 7 */        "Surge como Débora,",
/* 8 */        "sálvanos como Judit,",
/* 9 */        "canta como Ana,",
/* 10 */        "intercede como Ester.",
/* 11 */        "MARÍA DE JASNA GÓRA...",
/* 12 */        "MARIA, SANCTA MARIA",
/* 13 */        "MATER ABSCONDITA,",
/* 14 */        "AT SEMPER SOLICITA;",
/* 15 */        "TU, REDEMPTORIS MATER,",
/* 16 */        "ORA PRO NOBIS.",
/* 17 */        "Madre del Cielo,",
/* 18 */        "enséñanos a seguir las huellas de Cristo,",
/* 19 */        "las huellas del Siervo,",
/* 20 */        "del humilde Hijo,",
/* 21 */        "de la humilde Madre,",
/* 22 */        "de la siempre Virgen María.",
/* 23 */        "MARÍA DE JASNA GÓRA...",
/* 24 */        "MARIA, SANCTA MARIA",
/* 25 */        "MATER ABSCONDITA,",
/* 26 */        "AT SEMPER SOLICITA;",
/* 27 */        "TU, REDEMPTORIS MATER,",
/* 28 */        "ORA PRO NOBIS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Sol", "cp14","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("La", "cp14","")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 9*/      [ac("Sol", "cp14","m")],
/* 10*/      [ac("La", "cp14","")],
/* 11*/      [ac("La", "cp14","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Sol", "cp14","m")],
/* 16*/      [ac("La", "cp14","")],
/* 17*/      [ac("Re", "cp14","m")],
/* 18*/      [ac("Sol", "cp14","m")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22*/      [ac("La", "cp14","")],
/* 23*/      [ac("La", "cp14","")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Sol", "cp14","m")],
/* 28*/      [ac("La", "cp14","")],
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
