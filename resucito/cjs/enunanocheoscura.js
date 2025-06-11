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
const NOMBREDELCANTO = "EN UNA NOCHE OSCURA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Subida al Monte Carmelo – San Juan de la Cruz",
      dbnos: "65",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EN UNA NOCHE OSCURA,",
/* 2 */        "CON ANSIAS, EN AMORES INFLAMADA,",
/* 3 */        "¡OH DICHOSA VENTURA!",
/* 4 */        "SALÍ SIN SER NOTADA,",
/* 5 */        "ESTANDO YA MI CASA SOSEGADA.",
/* 6 */        "A oscuras y segura,",
/* 7 */        "por la secreta escala, disfrazada,",
/* 8 */        "¡oh dichosa ventura!",
/* 9 */        "a oscuras y encelada,",
/* 10 */        "estando ya mi casa sosegada.",
/* 11 */        "En la noche dichosa,",
/* 12 */        "en secreto, que nadie me veía,",
/* 13 */        "ni yo miraba cosa,",
/* 14 */        "sin otra luz y guía",
/* 15 */        "sino la que en el corazón ardía.",
/* 16 */        "Aquesta me guiaba",
/* 17 */        "más cierto que la luz del mediodía,",
/* 18 */        "adonde me esperaba",
/* 19 */        "quien yo bien me sabía,",
/* 20 */        "en parte donde nadie parecía.",
/* 21 */        "¡Oh noche que guiaste!,",
/* 22 */        "¡oh noche amable más que la alborada!,",
/* 23 */        "¡oh noche que juntaste,",
/* 24 */        "amado con amada,",
/* 25 */        "amada en el amado transformada!",
/* 26 */        "¡OH NOCHE QUE GUIASTE!,",
/* 27 */        "¡OH NOCHE AMABLE MÁS QUE LA ALBORADA!,",
/* 28 */        "¡OH NOCHE QUE JUNTASTE,",
/* 29 */        "AMADO CON AMADA,",
/* 30 */        "AMADA EN EL AMADO TRANSFORMADA!",
/* 31 */        "EN UNA NOCHE OSCURA,...",
/* 32 */        "CON ANSIAS, EN AMORES INFLAMADA,",
/* 33 */        "¡OH DICHOSA VENTURA!",
/* 34 */        "SALÍ SIN SER NOTADA,",
/* 35 */        "ESTANDO YA MI CASA SOSEGADA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Re", "cp89","m"), ac("Mi","cp578","")],
/* 3*/      [ac("Re", "cp14","m"), ac("Fa","cp90","")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 12*/      [ac("Re", "cp14","m"), ac("Fa","cp90","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("9","cp150","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 21*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("9","cp150","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 26*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("9","cp150","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("Fa", "cp14","")],
/* 30*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 33*/      [ac("Re", "cp14","m"), ac("Fa","cp90","")],
/* 34*/      [ac("Re", "cp14","m")],
/* 35*/      [ac("Mi", "cp14","")],
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
