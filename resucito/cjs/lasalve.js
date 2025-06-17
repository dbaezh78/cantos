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
const NOMBREDELCANTO = "LA SALVE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno lat. «Salve Regina»",
      dbnos: "99",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Dios te salve,",
/* 2 */        "Reina y Madre de misericordia,",
/* 3 */        "vida, dulzura y esperanza nuestra.",
/* 4 */        "Dios te salve.",
/* 5 */        "A ti llamamos los desterrados hijos de Eva,",
/* 6 */        "a ti suspiramos, gimiendo y llorando",
/* 7 */        "en este valle de lágrimas,",
/* 8 */        "en este valle de lágrimas.",
/* 9 */        "Ea, pues, Señora, abogada nuestra,",
/* 10 */        "vuelve a nosotros",
/* 11 */        "esos tus ojos misericordiosos,",
/* 12 */        "y después de este destierro",
/* 13 */        "muéstranos a Jesús,",
/* 14 */        "fruto bendito de tu vientre.",
/* 15 */        "¡Oh, clementísima!",
/* 16 */        "¡Oh, piadosa!",
/* 17 */        "¡Oh, dulce Virgen María!",
/* 18 */        "Ruega por nosotros,",
/* 19 */        "Santa Madre de Dios,",
/* 20 */        "para que seamos dignos",
/* 21 */        "de alcanzar las promesas",
/* 22 */        "de Jesucristo,",
/* 23 */        "de Jesucristo.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("La", "cp","m"), ac("Mi","cp90","m")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 10*/      [ac("Fa", "cp14","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("Fa", "cp14","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("Lam", "cp14","")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Fa", "cp14","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23 */   [ac("", "cp0","")],
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
