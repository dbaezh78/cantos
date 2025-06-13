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
const NOMBREDELCANTO = "ÉSTE ES EL DÍA EN QUE ACTUÓ EL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 118 (117)",
      dbnos: "71",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "No he de morir,",
/* 2 */        "QUE VIVIRÉ,",
/* 3 */        "No he de morir,",
/* 4 */        "QUE VIVIRÉ,",
/* 5 */        "para cantar",
/* 6 */        "LAS HAZAÑAS DEL SEÑOR.",
/* 7 */        "Me castigó,",
/* 8 */        "ME CASTIGÓ.",
/* 9 */        "Me castigó,",
/* 10 */        "ME CASTIGÓ,",
/* 11 */        "pero no",
/* 12 */        "ME DEJÓ EN LA MUERTE.",
/* 13 */        "Dad gracias al Señor porque es bueno,",
/* 14 */        "PORQUE ES ETERNA SU MISERICORDIA.",
/* 15 */        "Que lo diga la casa de Israel:",
/* 16 */        "ES ETERNA...",
/* 17 */        "SU MISERICORDIA.",
/* 18 */        "Que lo diga la casa de Aarón:",
/* 19 */        "ES ETERNA...",
/* 20 */        "SU MISERICORDIA.",
/* 21 */        "Que lo digan los fieles del Señor:",
/* 22 */        "ES ETERNA...",
/* 23 */        "SU MISERICORDIA.",
/* 24 */        "Mejor es confiar en el Señor",
/* 25 */        "QUE FIARSE DE LOS HOMBRES,",
/* 26 */        "mejor es apoyarse en el Señor",
/* 27 */        "QUE CONFIAR EN LOS INTELIGENTES.",
/* 28 */        "Me rodeaban,",
/* 29 */        "ME RODEABAN,",
/* 30 */        "me rodeaban,",
/* 31 */        "ME RODEABAN,",
/* 32 */        "en el nombre del Señor",
/* 33 */        "LOS RECHACÉ.",
/* 34 */        "Me empujaban,",
/* 35 */        "ME EMPUJABAN,",
/* 36 */        "me empujaban,",
/* 37 */        "ME EMPUJABAN,",
/* 38 */        "pero el Señor",
/* 39 */        "ME AYUDÓ.",
/* 40 */        "Escuchad: hay cantos de victoria",
/* 41 */        "EN LAS TIENDAS DE LOS JUSTOS:",
/* 42 */        "La diestra del Señor es poderosa,",
/* 43 */        "ES EXCELSA LA DIESTRA DEL SEÑOR•.",
/* 44 */        "No he de morir...",
/* 45 */        "...EN LA MUERTE.",
/* 46 */        "No he de morir,",
/* 47 */        "QUE VIVIRÉ,",
/* 48 */        "No he de morir,",
/* 49 */        "QUE VIVIRÉ,",
/* 50 */        "para cantar",
/* 51 */        "LAS HAZAÑAS DEL SEÑOR.",
/* 52 */        "Me castigó,",
/* 53 */        "ME CASTIGÓ.",
/* 54 */        "Me castigó,",
/* 55 */        "ME CASTIGÓ,",
/* 56 */        "pero no",
/* 57 */        "ME DEJÓ EN LA MUERTE.",
/* 58 */        "Abridme las puertas del triunfo",
/* 59 */        "Y ENTRARÉ PARA DAR GRACIAS AL SEÑOR.",
/* 60 */        "Esta es la puerta del Señor:",
/* 61 */        "LOS VENCEDORES ENTRARÁN POR ELLA.",
/* 62 */        "La piedra que desecharon los arquitectos",
/* 63 */        "ES AHORA LA PIEDRA ANGULAR.",
/* 64 */        "Es el Señor quien lo ha hecho,",
/* 65 */        "HA SIDO UN MILAGRO PATENTE.",
/* 66 */        "Este es el día en que actuó el Señor:",
/* 67 */        "SEA NUESTRA ALEGRÍA Y NUESTRO GOZO.",
/* 68 */        "No he de morir...",
/* 69 */        "...EN LA MUERTE.",
/* 70 */        "No he de morir,",
/* 71 */        "QUE VIVIRÉ,",
/* 72 */        "No he de morir,",
/* 73 */        "QUE VIVIRÉ,",
/* 74 */        "para cantar",
/* 75 */        "LAS HAZAÑAS DEL SEÑOR.",
/* 76 */        "Me castigó,",
/* 77 */        "ME CASTIGÓ.",
/* 78 */        "Me castigó,",
/* 79 */        "ME CASTIGÓ,",
/* 80 */        "pero no",
/* 81 */        "ME DEJÓ EN LA MUERTE.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 15*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Do", "cp14","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("Do", "cp14","")],
/* 27*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("Fa", "cp14","")],
/* 33*/      [ac("Mi", "cp14","")],
/* 34*/      [ac("Lam", "cp14","")],
/* 35 */   [ac("", "cp0","")],
/* 36 */   [ac("", "cp0","")],
/* 37 */   [ac("", "cp0","")],
/* 38*/      [ac("Fa", "cp14","")],
/* 39*/      [ac("Mi", "cp14","")],
/* 40*/      [ac("Do", "cp14","")],
/* 41*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 42*/      [ac("Do", "cp14","")],
/* 43*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 44*/      [ac("La", "cp14","m")],
/* 45*/      [ac("Mi", "cp14","")],
/* 46*/      [ac("La", "cp14","m")],
/* 47 */   [ac("", "cp0","")],
/* 48 */   [ac("", "cp0","")],
/* 49 */   [ac("", "cp0","")],
/* 50*/      [ac("Fa", "cp14","")],
/* 51*/      [ac("Mi", "cp14","")],
/* 52*/      [ac("La", "cp14","m")],
/* 53 */   [ac("", "cp0","")],
/* 54 */   [ac("", "cp0","")],
/* 55 */   [ac("", "cp0","")],
/* 56*/      [ac("Fa", "cp14","")],
/* 57*/      [ac("Mi", "cp14","")],
/* 58*/      [ac("La", "cp14","m")],
/* 59*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 60*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 61*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 62*/      [ac("Do", "cp14","")],
/* 63*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 64*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 65*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 66*/      [ac("Do", "cp14","")],
/* 67*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 68*/      [ac("La", "cp14","m")],
/* 69*/      [ac("Mi", "cp14","")],
/* 70*/      [ac("La", "cp14","m")],
/* 71 */   [ac("", "cp0","")],
/* 72 */   [ac("", "cp0","")],
/* 73 */   [ac("", "cp0","")],
/* 74*/      [ac("Fa", "cp14","")],
/* 75*/      [ac("Mi", "cp14","")],
/* 76*/      [ac("La", "cp14","m")],
/* 77 */   [ac("", "cp0","")],
/* 78 */   [ac("", "cp0","")],
/* 79 */   [ac("", "cp0","")],
/* 80*/      [ac("Fa", "cp14","")],
/* 81*/      [ac("Mi", "cp14","")],
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
