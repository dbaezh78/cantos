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
const NOMBREDELCANTO = "POR QUÉ LAS GENTES CONJURAN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 2",
      dbnos: "134",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¿POR QUÉ LAS GENTES CONJURAN",
/* 2 */        "POR QUÉ CONSPIRAN LOS PUEBLOS?",
/* 3 */        "SE ALZAN LOS REYES DE LA TIERRA,",
/* 4 */        "Y LOS PRÍNCIPES SE REÚNEN",
/* 5 */        "CONTRA EL SEÑOR Y CONTRA SU MESÍAS.",
/* 6 */        "«Rompamos sus coyundas y cadenas,",
/* 7 */        "alejemos de nosotros su yugo».",
/* 8 */        "El que habita en los cielos se ríe,",
/* 9 */        "el Señor se burla de ellos.",
/* 10 */        "De repente les habla con ira,",
/* 11 */        "y en su cólera los espanta:",
/* 12 */        "Sal2",
/* 13 */        "A. «PORQUE YO LE HE CONSTITUIDO SOBERANO",
/* 14 */        "EN SIÓN MI SANTO MONTE,",
/* 15 */        "EN SIÓN MI SANTO MONTE».",
/* 16 */        "YO LE HE CONSTITUIDO SOBERANO",
/* 17 */        "EN SIÓN MI SANTO MONTE,",
/* 18 */        "EN SIÓN MI SANTO MONTE».",
/* 19 */        "Anunciaré el decreto del Señor;",
/* 20 */        "Él me ha dicho: «Tú eres mi hijo;",
/* 21 */        "yo te he engendrado hoy.",
/* 22 */        "Pídeme, y te daré en herencia las naciones,",
/* 23 */        "y en dominio los confines de la tierra.",
/* 24 */        "Los quebrantarás con cetro de hierro,",
/* 25 */        "como vasos de arcilla los quebrarás».",
/* 26 */        "¿POR QUÉ LAS GENTES CONJURAN...",
/* 27 */        "POR QUÉ CONSPIRAN LOS PUEBLOS?",
/* 28 */        "SE ALZAN LOS REYES DE LA TIERRA,",
/* 29 */        "Y LOS PRÍNCIPES SE REÚNEN",
/* 30 */        "CONTRA EL SEÑOR Y CONTRA SU MESÍAS.",
/* 31 */        "Y ahora, soberanos, sed sensatos,",
/* 32 */        "instruíos, jueces de la tierra.",
/* 33 */        "Servid al Señor con temor,",
/* 34 */        "y con temblor exultad.",
/* 35 */        "No sea que se irrite",
/* 36 */        "y perezcáis en el camino",
/* 37 */        "porque de pronto se enciende su ira.",
/* 38 */        "¡Mas dichoso el que se refugia en Él!",
/* 39 */        "¿POR QUÉ LAS GENTES CONJURAN...",
/* 40 */        "POR QUÉ CONSPIRAN LOS PUEBLOS?",
/* 41 */        "SE ALZAN LOS REYES DE LA TIERRA,",
/* 42 */        "Y LOS PRÍNCIPES SE REÚNEN",
/* 43 */        "CONTRA EL SEÑOR Y CONTRA SU MESÍAS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Si7", "cp14","")],
/* 5*/      [ac("Mi", "cp","m")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Si7", "cp14","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 14*/      [ac("Si7", "cp14","")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 17*/      [ac("Si7", "cp14","")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 20*/      [ac("Si7", "cp14","")],
/* 21*/      [ac("Mi", "cp14","m")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Si7", "cp14","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Mi", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 27*/      [ac("Mi", "cp14","m")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("Si7", "cp14","")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("La", "cp14","m"), ac("Si7","cp90","")],
/* 32*/      [ac("La", "cp14","m"), ac("Si7","cp90","")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("Si7", "cp14","")],
/* 38*/      [ac("Mi", "cp14","m")],
/* 39*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 40*/      [ac("Mi", "cp14","m")],
/* 41*/      [ac("La", "cp14","m")],
/* 42*/      [ac("Si7", "cp14","")],
/* 43*/      [ac("Mi", "cp14","m")],
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
