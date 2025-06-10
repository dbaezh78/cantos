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
const NOMBREDELCANTO = "EL LAGARERO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 63,1-6",
      dbnos: "56",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¿QUIÉN ES ESE QUE VIENE DE EDOM?",
/* 2 */        "¿QUIÉN ES ESE TODO MANCHADO DE ROJO,",
/* 3 */        "ESE DEL VESTIDO ESPLENDOROSO,",
/* 4 */        "Y DE ANDAR TAN ESFORZADO?",
/* 5 */        "Soy yo, soy yo que hablo con justicia,",
/* 6 */        "soy yo un gran libertador.",
/* 7 */        "Y ¿POR QUÉ,",
/* 8 */        "POR QUÉ ESTÁ DE ROJO TU VESTIDO?",
/* 9 */        "¿POR QUÉ PARECES UN LAGARERO?",
/* 10 */        "¿POR QUÉ? ¿POR QUÉ?",
/* 11 */        "El lagar, el lagar, he pisado yo solo,",
/* 12 */        "de mi pueblo, no hubo nadie conmigo.",
/* 13 */        "Miré bien, miré bien, y no había auxiliador,",
/* 14 */        "me asombré, de que ninguno me ayudase.",
/* 15 */        "POR ESO, LA FUERZA MÍA,",
/* 16 */        "FUERZA MÍA ME SOSTUVO.",
/* 17 */        "EL DÍA DE LA VENGANZA ERA LLEGADO",
/* 18 */        "PISOTEÉ LOS PUEBLOS EN MI IRA.",
/* 19 */        "LOS PISÉ, LOS PISÉ CON FURIA,",
/* 20 */        "E HICE CORRER",
/* 21 */        "POR LA TIERRA SU SANGRE,",
/* 22 */        "Y TODOS MIS VESTIDOS HE MANCHADO.",
/* 23 */        "¿QUIÉN ES ESE QUE VIENE DE EDOM?...",
/* 24 */        "¿QUIÉN ES ESE TODO MANCHADO DE ROJO,",
/* 25 */        "ESE DEL VESTIDO ESPLENDOROSO,",
/* 26 */        "Y DE ANDAR TAN ESFORZADO?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 3*/      [ac("Si", "cp14","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp",""), ac("Mi","cp90","m")],
/* 6*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 10*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 11*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 12*/      [ac("S1", "cp14","7"), ac("Mi","cp90","m")],
/* 13*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 14*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Si", "cp14","7")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Si", "cp14","7")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Mi", "cp14","m")],
/* 24*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 25*/      [ac("Si", "cp14","7")],
/* 26*/      [ac("Mi", "cp14","m")],
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
