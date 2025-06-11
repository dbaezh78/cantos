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
const NOMBREDELCANTO = "ERES DIGNO DE TOMAR EL LIBRO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 5,9ss",
      dbnos: "66",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Eres digno de tomar el libro",
/* 2 */        "y abrir sus sellos",
/* 3 */        "porque tú has sido inmolado",
/* 4 */        "y has comprado con tu sangre",
/* 5 */        "hombres de toda raza,",
/* 6 */        "lengua, pueblo y nación;",
/* 7 */        "Y HAS HECHO DE ELLOS",
/* 8 */        "PARA NUESTRO DIOS",
/* 9 */        "UN REINO DE SACERDOTES,",
/* 10 */        "Y REINAN, Y REINAN",
/* 11 */        "SOBRE LA TIERRA.",
/* 12 */        "Eres digno, Cordero degollado,",
/* 13 */        "de tomar el libro",
/* 14 */        "y abrir sus sellos",
/* 15 */        "porque has comprado con tu sangre",
/* 16 */        "hombres de toda raza,",
/* 17 */        "lengua, pueblo y nación;",
/* 18 */        "Y HAS HECHO DE ELLOS...",
/* 19 */        "PARA NUESTRO DIOS",
/* 20 */        "UN REINO DE SACERDOTES,",
/* 21 */        "Y REINAN, Y REINAN",
/* 22 */        "SOBRE LA TIERRA.",
/* 23 */        "Digno eres, Cordero degollado,",
/* 24 */        "de recibir el poder, la riqueza y la gloria,",
/* 25 */        "la sabiduría, el honor y la alabanza,",
/* 26 */        "porque has comprado con tu sangre",
/* 27 */        "hombres de toda raza,",
/* 28 */        "lengua, pueblo y nación;",
/* 29 */        "Y HAS HECHO DE ELLOS...",
/* 30 */        "PARA NUESTRO DIOS",
/* 31 */        "UN REINO DE SACERDOTES,",
/* 32 */        "Y REINAN, Y REINAN",
/* 33 */        "SOBRE LA TIERRA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 3*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 4*/      [ac("La", "cp14","")],
/* 5*/      [ac("Re", "cp","m")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 14*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("Fa", "cp14","")],
/* 20*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Re", "cp14","m")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 25*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 26*/      [ac("La", "cp14","7")],
/* 27*/      [ac("Re", "cp14","m")],
/* 28 */   [ac("", "cp0","")],
/* 29*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 30*/      [ac("Fa", "cp14","")],
/* 31*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 32*/      [ac("La", "cp14","m")],
/* 33*/      [ac("Re", "cp14","m")],
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
