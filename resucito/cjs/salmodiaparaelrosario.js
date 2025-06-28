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
const NOMBREDELCANTO = "SALMODIA PARA EL ROSARIO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Santo Rosario",
      dbnos: "209",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Padre nuestro, que estás en el cielo,",
/* 2 */        "santificado sea tu Nombre;",
/* 3 */        "venga a nosotros tu reino;",
/* 4 */        "hágase tu voluntad en la tierra como en el cielo.",
/* 5 */        "DANOS HOY NUESTRO PAN DE CADA DÍA;",
/* 6 */        "PERDONA NUESTRAS OFENSAS,",
/* 7 */        "COMO TAMBIÉN NOSOTROS PERDONAMOS A LOS QUE NOS OFENDEN;",
/* 8 */        "NO NOS DEJES CAER EN LA TENTACIÓN,",
/* 9 */        "Y LÍBRANOS DEL MAL, AMÉN.",
/* 10 */        "Dios te Salve, María, llena eres de gracia, el Señor es contigo,",
/* 11 */        "bendita tú eres entre todas las mujeres,",
/* 12 */        "y bendito es el fruto de tu vientre Jesús.",
/* 13 */        "SANTA MARIA, MADRE DE DIOS,",
/* 14 */        "RUEGA POR NOSOTROS, PECADORES,",
/* 15 */        "AHORA Y EN LA HORA DE NUESTRA MUERTE. AMÉN.",
/* 16 */        "Gloria al Padre, y al Hijo, y al Espíritu Santo.",
/* 17 */        "COMO ERA EN EL PRINCIPIO AHORA Y SIEMPRE,",
/* 18 */        "POR LOS SIGLOS DE LOS SIGLOS. AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 5*/      [ac("La", "cp","m")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 13*/      [ac("La", "cp14","m")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 16*/      [ac("Sol", "cp14",""), ac("Re","cp90",""), ac("Sol","cp150","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
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
