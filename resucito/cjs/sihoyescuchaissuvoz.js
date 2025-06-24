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
const NOMBREDELCANTO = "SI HOY ESCUCHÁIS SU VOZ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 95 (94)",
      dbnos: "152",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SI HOY ESCUCHÁIS SU VOZ",
/* 2 */        "NO ENDUREZCÁIS EL CORAZÓN.",
/* 3 */        "Venid, aclamemos al Señor,",
/* 4 */        "demos vítores a la roca que nos salva;",
/* 5 */        "entremos a su presencia dándole gracias,",
/* 6 */        "aclamándolo con cantos y salmos.",
/* 7 */        "SI HOY ESCUCHÁIS SU VOZ...",
/* 8 */        "NO ENDUREZCÁIS EL CORAZÓN.",
/* 9 */        "Porque el Señor es un Dios grande,",
/* 10 */        "más grande que todos los dioses;",
/* 11 */        "suyo es el mar, suya es la tierra,",
/* 12 */        "son suyas las cumbres de los montes.",
/* 13 */        "SI HOY ESCUCHÁIS SU VOZ...",
/* 14 */        "NO ENDUREZCÁIS EL CORAZÓN.",
/* 15 */        "Entrad, postrémonos por tierra,",
/* 16 */        "bendiciendo al Señor, creador nuestro.",
/* 17 */        "Porque El es nuestro Dios y nosotros su pueblo,",
/* 18 */        "el rebaño que Él conduce.",
/* 19 */        "SI HOY ESCUCHÁIS SU VOZ...",
/* 20 */        "NO ENDUREZCÁIS EL CORAZÓN.",
/* 21 */        "¡Ojalá! ¡Ojalá escuchéis hoy su voz",
/* 22 */        "y no endurezcáis el corazón!",
/* 23 */        "Como en Meribá,",
/* 24 */        "como el día de Masá en el desierto,",
/* 25 */        "donde vuestros padres dudaron de mí,",
/* 26 */        "aunque habían visto mis obras",
/* 27 */        "me obligaron a hacer su voluntad.",
/* 28 */        "Durante cuarenta años",
/* 29 */        "me disgustó aquella generación.",
/* 30 */        "Y dije «Este es un pueblo",
/* 31 */        "de corazón extraviado,",
/* 32 */        "no quiere conocer mis caminos,",
/* 33 */        "por eso no entrarán en mi descanso».",
/* 34 */        "SI HOY ESCUCHÁIS SU VOZ...",
/* 35 */        "NO ENDUREZCÁIS EL CORAZÓN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14",""), ac("Fa#","cp90","m")],
/* 2*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 3*/      [ac("Do#", "cp14","m"), ac("Fa#","cp90","m")],
/* 4*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 5*/      [ac("Do#", "cp","m"), ac("Sol#","cp90","")],
/* 6*/      [ac("Do#", "cp14","m"), ac("Mi","cp90","")],
/* 7*/      [ac("Mi", "cp14",""), ac("Fa#","cp90","m")],
/* 8*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 9*/      [ac("Do#", "cp14","m"), ac("Fa#","cp90","m")],
/* 10*/      [ac("517", "cp14",""), ac("MI","cp90","")],
/* 11*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 12*/      [ac("Do#", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("Mi", "cp14",""), ac("Fa#","cp90","m")],
/* 14*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 15*/      [ac("Do#", "cp14","m"), ac("Fa#","cp90","m")],
/* 16*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 17*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 18*/      [ac("Do#", "cp14","m"), ac("MI","cp90","")],
/* 19*/      [ac("Mi", "cp14",""), ac("Fa#","cp90","m")],
/* 20*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 21*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 22*/      [ac("Do#", "cp14","m")],
/* 23*/      [ac("Fa#", "cp14","m")],
/* 24*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 25*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Do#", "cp14","m")],
/* 28*/      [ac("Fa#", "cp14","m")],
/* 29*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 30*/      [ac("Do#", "cp14","m")],
/* 31*/      [ac("Sol#", "cp14","")],
/* 32 */   [ac("", "cp0","")],
/* 33*/      [ac("Do#", "cp14","m"), ac("Mi","cp90","")],
/* 34*/      [ac("Mi", "cp14",""), ac("Fa#","cp90","m")],
/* 35*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
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
