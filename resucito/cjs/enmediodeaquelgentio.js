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
const NOMBREDELCANTO = "EN MEDIO DE AQUEL GENTÍO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 8,42b-48",
      dbnos: "64",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EN MEDIO DE AQUEL GENTÍO,",
/* 2 */        "EN MEDIO DE TODA AQUELLA GENTE",
/* 3 */        "UNA MUJER, UNA MUJER LE TOCÓ.",
/* 4 */        "«¿Quién es el que me ha tocado?",
/* 5 */        "¿Quién es el que me ha tocado?»",
/* 6 */        "dijo Cristo, dijo Cristo y se paró.",
/* 7 */        "Una mujer temblorosa,",
/* 8 */        "una mujer temblorosa",
/* 9 */        "dijo a Cristo: «¡He sido yo!",
/* 10 */        "«Que soy una mujer impura,",
/* 11 */        "que soy una mujer impura",
/* 12 */        "que sufro flujo de sangre.",
/* 13 */        "A. QUE SOY UNA MUJER IMPURA,",
/* 14 */        "QUE SOY UNA MUJER IMPURA",
/* 15 */        "QUE SUFRO FLUJO DE SANGRE.",
/* 16 */        "Mas al tocar tu vestido,",
/* 17 */        "mas al tocar tu vestido",
/* 18 */        "el flujo de sangre se curó».",
/* 19 */        "«Hija, tu fe,",
/* 20 */        "tu fe te ha salvado».",
/* 21 */        "EN MEDIO DE AQUEL GENTÍO,...",
/* 22 */        "EN MEDIO DE TODA AQUELLA GENTE",
/* 23 */        "UNA MUJER, UNA MUJER LE TOCÓ.",
/* 24 */        "Si quieres tú tocar a Cristo,",
/* 25 */        "si quieres tú tocar a Cristo,",
/* 26 */        "lo puedes tocar con la fe.",
/* 27 */        "Que Él es el Hijo de Dios,",
/* 28 */        "que Él es el Hijo de Dios",
/* 29 */        "que ha venido para curarte,",
/* 30 */        "para salvarte.",
/* 31 */        "EN MEDIO DE AQUEL GENTÍO,...",
/* 32 */        "EN MEDIO DE TODA AQUELLA GENTE",
/* 33 */        "UNA MUJER, UNA MUJER LE TOCÓ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Mi", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("Mi", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 20*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("Mi", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Sol", "cp14","")],
/* 26*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Sol", "cp14","")],
/* 29*/      [ac("Fa", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33*/      [ac("Mi", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
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
