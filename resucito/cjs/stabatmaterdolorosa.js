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
const NOMBREDELCANTO = "STABAT MATER DOLOROSA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno latin",
      dbnos: "156",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "STABAT MATER DOLOROSA",
/* 2 */        "IUXTA CRUCEM LACRIMOSA,",
/* 3 */        "DUM PENDEBAT FILIUS.",
/* 4 */        "C Era su alma un gemido,",
/* 5 */        "era un dolor, era un grito,",
/* 6 */        "cuando una espada la atravesó.",
/* 7 */        "Oh qué triste y afligida",
/* 8 */        "está la bendita Madre",
/* 9 */        "del Unigénito.",
/* 10 */        "STABAT MATER DOLOROSA...",
/* 11 */        "IUXTA CRUCEM LACRIMOSA,",
/* 12 */        "DUM PENDEBAT FILIUS.",
/* 13 */        "¿Cuál es el hombre que no llora",
/* 14 */        "al ver a la Madre de Cristo",
/* 15 */        "en tanto suplicio?",
/* 16 */        "Por los pecados de su gente",
/* 17 */        "Ella ve a Jesús en tormentos,",
/* 18 */        "y sometido a los azotes.",
/* 19 */        "STABAT MATER DOLOROSA...",
/* 20 */        "IUXTA CRUCEM LACRIMOSA,",
/* 21 */        "DUM PENDEBAT FILIUS.",
/* 22 */        "Ella ve a su Hijo amado",
/* 23 */        "que muere desolado,",
/* 24 */        "y que entrega su Espíritu.",
/* 25 */        "Oh, Cristo, cuando yo deba morir,",
/* 26 */        "por tu bendita Madre hazme conseguir",
/* 27 */        "la palma de la victoria.",
/* 28 */        "AMÉN, AMÉN, AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","madd9")],
/* 2*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 3*/      [ac("La", "cp14","")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac("Do", "cp","7"), ac("Si♭","cp90","7")],
/* 6*/      [ac("La", "cp14","")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 9*/      [ac("La", "cp14","")],
/* 10*/      [ac("Re", "cp14","madd9")],
/* 11*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 18*/      [ac("La", "cp14","")],
/* 19*/      [ac("Re", "cp14","madd9")],
/* 20*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 21*/      [ac("La", "cp14","")],
/* 22*/      [ac("Re", "cp14","m")],
/* 23*/      [ac("Do", "cp14","7"), ac("Si♭","cp90","7")],
/* 24*/      [ac("La", "cp14","")],
/* 25*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 26*/      [ac("Si♭", "cp14","7")],
/* 27*/      [ac("La", "cp14","")],
/* 28*/      [ac("Re", "cp14","m"), ac("Si♭","cp90","7"), ac("La","cp150","7")],
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
