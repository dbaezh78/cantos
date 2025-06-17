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
const NOMBREDELCANTO = "HIMNO DE ADVIENTO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno lat. «Vox clara ecce Intonat»",
      dbnos: "88",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Una voz recia disipa con sus ecos la oscuridad,",
/* 2 */        "lejos el ensueño, Jesús brilla ya.",
/* 3 */        "Levántese el alma entorpecida",
/* 4 */        "y deje de arrastrarse por el suelo:",
/* 5 */        "amanece una nueva estrella.",
/* 6 */        "Ved, que se nos envía un Cordero",
/* 7 */        "para satisfacer gratuitamente nuestras deudas:",
/* 8 */        "vayamos a Él con lágrimas,",
/* 9 */        "pidámosle todos perdón.",
/* 10 */        "PARA QUE, CUANDO APAREZCA GLORIOSO",
/* 11 */        "EN SU SEGUNDA VENIDA,",
/* 12 */        "Y LLENE EL MUNDO DE ESPANTO,",
/* 13 */        "ÉL NOS PROTEJA PIADOSO.",
/* 14 */        "POR ESO",
/* 15 */        "YO LE CANTO ESTA BALADA",
/* 16 */        "AL PADRE, AL HIJO Y AL ESPÍRITU,",
/* 17 */        "QUE ELLOS VIVAN, AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("La", "cp14","7")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("La", "cp14","7")],
/* 5*/      [ac("Re", "cp","m")],
/* 6*/      [ac("Sol", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("La", "cp14","7")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Sol", "cp14","m")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("La", "cp14","7")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","m")],
/* 15*/      [ac("Re", "cp14","m")],
/* 16*/      [ac("La", "cp14","7")],
/* 17*/      [ac("Re", "cp14","m")],
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
