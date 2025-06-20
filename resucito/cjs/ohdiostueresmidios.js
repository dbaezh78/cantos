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
const NOMBREDELCANTO = "OH DIOS, TÚ ERES MI DIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 63 (62)",
      dbnos: "125",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "OH DIOS, TÚ ERES MI DIOS,",
/* 2 */        "TE ANHELO DESDE LA AURORA,",
/* 3 */        "SEDIENTA DE TI ESTÁ MI ALMA.",
/* 4 */        "Sedienta de ti está mi alma,",
/* 5 */        "ansia de ti tiene mi carne:",
/* 6 */        "tierra reseca y árida,",
/* 7 */        "tierra reseca y árida, sin agua.",
/* 8 */        "OH DIOS, TÚ ERES MI DIOS,...",
/* 9 */        "TE ANHELO DESDE LA AURORA,",
/* 10 */        "SEDIENTA DE TI ESTÁ MI ALMA.",
/* 11 */        "Tu amor es para mí más que la vida,",
/* 12 */        "por eso te ensalzan mis labios;",
/* 13 */        "así yo te bendigo",
/* 14 */        "y en tu Nombre levanto mis manos.",
/* 15 */        "OH DIOS, TÚ ERES MI DIOS,...",
/* 16 */        "TE ANHELO DESDE LA AURORA,",
/* 17 */        "SEDIENTA DE TI ESTÁ MI ALMA.",
/* 18 */        "Unida a ti está mi alma,",
/* 19 */        "con fuerza me sostiene tu derecha",
/* 20 */        "cuando me acuerdo de ti,",
/* 21 */        "cuando en medio de la noche pienso en ti.",
/* 22 */        "OH DIOS, TÚ ERES MI DIOS,...",
/* 23 */        "TE ANHELO DESDE LA AURORA,",
/* 24 */        "SEDIENTA DE TI ESTÁ MI ALMA.",
/* 25 */        "Saciada de ti está mi alma,",
/* 26 */        "te canta con júbilo mi boca,",
/* 27 */        "porque tú eres mi auxilio",
/* 28 */        "y a la sombra de tus alas exulto.",
/* 29 */        "OH DIOS, TÚ ERES MI DIOS,...",
/* 30 */        "TE ANHELO DESDE LA AURORA,",
/* 31 */        "SEDIENTA DE TI ESTÁ MI ALMA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 8*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 12*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 15*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 19*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 22*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 26*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 29*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Fa", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
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
