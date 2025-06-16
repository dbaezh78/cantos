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
const NOMBREDELCANTO = "EVENU SHALOM ALEJEM";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Melodía hebraica",
      dbnos: "73",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EVENU SHALOM ALEJEM,",
/* 2 */        "EVENU SHALOM ALEJEM,",
/* 3 */        "EVENU SHALOM ALEJEM,",
/* 4 */        "EVENU SHALOM, SHALOM,",
/* 5 */        "SHALOM ALEJEM.",
/* 6 */        "QUE SEA LA PAZ CON NOSOTROS,",
/* 7 */        "QUE SEA LA PAZ CON NOSOTROS,",
/* 8 */        "QUE SEA LA PAZ CON NOSOTROS,",
/* 9 */        "EVENU SHALOM, SHALOM,",
/* 10 */        "SHALOM ALEJEM.",
/* 11 */        "EVENU SHALOM ALEJEM,...",
/* 12 */        "EVENU SHALOM ALEJEM,",
/* 13 */        "EVENU SHALOM ALEJEM,",
/* 14 */        "EVENU SHALOM, SHALOM,",
/* 15 */        "SHALOM ALEJEM.",
/* 16 */        "E SIA LA PACE CON NOI,",
/* 17 */        "E SIA LA PACE CON NOI,",
/* 18 */        "E SIA LA PACE CON NOI,",
/* 19 */        "EVENU SHALOM, SHALOM,",
/* 20 */        "SHALOM ALEJEM.",
/* 21 */        "ET LA PAIX SOIT AVEC NOUS...",
/* 22 */        "AND MAY PEACE BE WITH US...",
/* 23 */        "UND SEi DER FRIEDE MIT UNS...",
/* 24 */        "EVENU SHALOM ALEJEM,...",
/* 25 */        "EVENU SHALOM ALEJEM,",
/* 26 */        "EVENU SHALOM ALEJEM,",
/* 27 */        "EVENU SHALOM, SHALOM,",
/* 28 */        "SHALOM ALEJEM.",
/* 29 */        "DIGAMOS LA PAZ AL MUNDO,",
/* 30 */        "CANTEMOS LA PAZ AL MUNDO,",
/* 31 */        "QUE NUESTRA VIDA SEA GLORIOSA,",
/* 32 */        "YO TE SALUDO: LA PAZ,",
/* 33 */        "LA PAZ SEA CONTIGO.",
/* 34 */        "EVENU SHALOM ALEJEM,...",
/* 35 */        "EVENU SHALOM ALEJEM,",
/* 36 */        "EVENU SHALOM ALEJEM,",
/* 37 */        "EVENU SHALOM, SHALOM,",
/* 38 */        "SHALOM ALEJEM.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","m")],
/* 3*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 4*/      [ac("La", "cp14","7")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("Re", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","m")],
/* 8*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 9*/      [ac("La", "cp14","7")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("Sol", "cp14","m")],
/* 13*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 14*/      [ac("La", "cp14","7")],
/* 15*/      [ac("Re", "cp14","m")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","m")],
/* 18*/      [ac("La", "cp14",""), ac("Rem","cp90","")],
/* 19*/      [ac("La", "cp14","7")],
/* 20*/      [ac("Re", "cp14","m")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Re", "cp14","m")],
/* 25*/      [ac("Sol", "cp14","m")],
/* 26*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 27*/      [ac("La", "cp14","7")],
/* 28*/      [ac("Re", "cp14","m")],
/* 29*/      [ac("Re", "cp14","m")],
/* 30*/      [ac("Sol", "cp14","m")],
/* 31*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 32*/      [ac("La", "cp14","7")],
/* 33*/      [ac("Re", "cp14","m")],
/* 34*/      [ac("Re", "cp14","m")],
/* 35*/      [ac("Sol", "cp14","m")],
/* 36*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 37*/      [ac("La", "cp14","7")],
/* 38*/      [ac("Re", "cp14","m")],
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
