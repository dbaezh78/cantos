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
const NOMBREDELCANTO = "CUANDO DORMÍA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los Cantares 5,2ss ",
      dbnos: "222",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Cuando dormía",
/* 2 */        "y mi corazón velaba,",
/* 3 */        "la voz de mi amado oí:",
/* 4 */        "«Abre, hermana mía,",
/* 5 */        "ábreme, paloma,",
/* 6 */        "que mi cabeza está cubierta de rocío",
/* 7 */        "y mis cabellos del relente de la noche».",
/* 8 */        "Metió la mano",
/* 9 */        "por el agujero de la cerradura",
/* 10 */        "y toda entera me estremecí.",
/* 11 */        "Me levanté corriendo",
/* 12 */        "y mis manos destilaron mirra,",
/* 13 */        "mirra fluida mis dedos",
/* 14 */        "por el pestillo de la puerta.",
/* 15 */        "OS CONJURO,",
/* 16 */        "HIJAS DE JERUSALÉN,",
/* 17 */        "SI ENCONTRÁIS A MI AMADO,",
/* 18 */        "DECIDLE QUE MUERO DE AMOR.",
/* 19 */        "Abrí, abrí a mi amado,",
/* 20 */        "pero no estaba,",
/* 21 */        "ya había pasado.",
/* 22 */        "Y el alma se me escapó en su huida.",
/* 23 */        "Lo busqué, no lo hallé,",
/* 24 */        "lo llamé, lo llamé,",
/* 25 */        "y no me respondió.",
/* 26 */        "Me encontraron los guardias,",
/* 27 */        "que hacen la ronda,",
/* 28 */        "me golpearon, me desnudaron",
/* 29 */        "los guardias de las murallas.",
/* 30 */        "OS CONJURO,...",
/* 31 */        "HIJAS DE JERUSALÉN,",
/* 32 */        "SI ENCONTRÁIS A MI AMADO,",
/* 33 */        "DECIDLE QUE MUERO DE AMOR.",
/* 34 */        "¡Ay, si tú fueras mi hermano,",
/* 35 */        "te podría besar,",
/* 36 */        "al encontrarte en la puerta!",
/* 37 */        "OS CONJURO,...",
/* 38 */        "HIJAS DE JERUSALÉN,",
/* 39 */        "SI ENCONTRÁIS A MI AMADO,",
/* 40 */        "DECIDLE QUE MUERO DE AMOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi","cp90","")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Do", "cp14","")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("Fa", "cp14","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("Do", "cp14","")],
/* 20*/      [ac("Mi", "cp14","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14","")],
/* 28*/      [ac("Fa", "cp14","")],
/* 29*/      [ac("Mi", "cp14","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("Fa", "cp14","")],
/* 33*/      [ac("Mi", "cp14","")],
/* 34*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 35*/      [ac("Fa", "cp14","")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Sol", "cp14","")],
/* 39*/      [ac("Fa", "cp14","")],
/* 40*/      [ac("Mi", "cp14","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]
  };/*
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
