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
const NOMBREDELCANTO = "VEN DEL LÍBANO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los cantares 4,8ss",
      dbnos: "166",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Ven del Líbano, esposa,",
/* 2 */        "ven del Líbano, ven.",
/* 3 */        "Tendrás por corona la cima de los montes,",
/* 4 */        "la alta cumbre del Hermón.",
/* 5 */        "Tú me has herido, herido el corazón,",
/* 6 */        "oh, esposa, amada mía.",
/* 7 */        "Ven del Líbano, esposa,",
/* 8 */        "ven del Líbano, ven.",
/* 9 */        "BUSQUÉ EL AMOR DEL ALMA MÍA,",
/* 10 */        "LO BUSQUÉ SIN ENCONTRARLO.",
/* 11 */        "ENCONTRÉ EL AMOR DE MI VIDA,",
/* 12 */        "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS.",
/* 13 */        "Yo pertenezco a mi amado, y él es todo para mí.",
/* 14 */        "Ven, salgamos a los campos,",
/* 15 */        "nos perderemos por los pueblos.",
/* 16 */        "Saldremos al alba a las viñas",
/* 17 */        "y recogeremos de su fruto.",
/* 18 */        "Yo pertenezco a mi amado, y él es todo para mí.",
/* 19 */        "BUSQUÉ EL AMOR DEL ALMA MÍA...",
/* 20 */        "LO BUSQUÉ SIN ENCONTRARLO.",
/* 21 */        "ENCONTRÉ EL AMOR DE MI VIDA,",
/* 22 */        "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS.",
/* 23 */        "Levántate deprisa, amada mía,",
/* 24 */        "ven, paloma, ven.",
/* 25 */        "Porque el invierno ya ha pasado,",
/* 26 */        "el canto de la alondra ya se oye.",
/* 27 */        "Las flores aparecen en la tierra,",
/* 28 */        "el fuerte sol ha llegado.",
/* 29 */        "Levántate deprisa, amada mía,",
/* 30 */        "ven, paloma, ven.",
/* 31 */        "BUSQUÉ EL AMOR DEL ALMA MÍA...",
/* 32 */        "LO BUSQUÉ SIN ENCONTRARLO.",
/* 33 */        "ENCONTRÉ EL AMOR DE MI VIDA,",
/* 34 */        "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS.",
/* 35 */        "Como un sello en el corazón,",
/* 36 */        "como tatuaje en el brazo.",
/* 37 */        "El amor es fuerte como la muerte,",
/* 38 */        "las aguas no lo apagarán.",
/* 39 */        "Dar por este amor",
/* 40 */        "todos los bienes de la casa,",
/* 41 */        "sería despreciarlo.",
/* 42 */        "Como un sello en el corazón,",
/* 43 */        "como tatuaje en el brazo.",
/* 44 */        "BUSQUÉ EL AMOR DEL ALMA MÍA...",
/* 45 */        "LO BUSQUÉ SIN ENCONTRARLO.",
/* 46 */        "ENCONTRÉ EL AMOR DE MI VIDA,",
/* 47 */        "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 2*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 3*/      [ac("Re", "cp14","")],
/* 4*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 5*/      [ac("Re", "cp","")],
/* 6*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 7*/      [ac("Re", "cp14","")],
/* 8*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 9*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 10*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 12*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 13*/      [ac("Mi", "cp14",""), ac("Re","cp90",""), ac("Do","cp150",""), ac("Re","cp250","m"),ac("Re-Mi","cp250","m")],
/* 14*/      [ac("Re", "cp14","")],
/* 15*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 16*/      [ac("Re", "cp14","")],
/* 17*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 18*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 20*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 21*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 22*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 23*/      [ac("Mi", "cp14","m") ,ac("Re", "cp14","")],
/* 24*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 25*/      [ac("Re", "cp14","")],
/* 26*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 27*/      [ac("Re", "cp14","")],
/* 28*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 29*/      [ac("Re", "cp14","")],
/* 30*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 31*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 32*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 33*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 34*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 35*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 36*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 37*/      [ac("Re", "cp14","")],
/* 38*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 39 */     [ac("", "cp0","")],
/* 40*/      [ac("Re", "cp14","")],
/* 41*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 42*/      [ac("Re", "cp14","")],
/* 43*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 44*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 45*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 46*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 47*/      [ac("Do", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","m")],
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
