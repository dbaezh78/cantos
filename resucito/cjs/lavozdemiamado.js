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
const NOMBREDELCANTO = "LA VOZ DE MI AMADO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los Cantares 2,8-17",
      dbnos: "101",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡La voz de mi amado!",
/* 2 */        "Helo aquí que viene,",
/* 3 */        "saltando por los montes,",
/* 4 */        "brincando por los collados.",
/* 5 */        "Semejante es mi amado a una gacela,",
/* 6 */        "o a un joven cervatillo,",
/* 7 */        "semejante es mi amado a una gacela.",
/* 8 */        "Vedle que ya se para",
/* 9 */        "detrás de nuestra cerca,",
/* 10 */        "mira por la ventana, atisba por la reja.",
/* 11 */        "Empieza a hablar mi amado y me dice:",
/* 12 */        "¡LEVÁNTATE, AMADA MÍA,",
/* 13 */        "LEVÁNTATE,",
/* 14 */        "HERMOSA MÍA, Y VENTE!",
/* 15 */        "Porque, mira, ha pasado ya el invierno,",
/* 16 */        "han cesado las lluvias y se han ido,",
/* 17 */        "aparecen las flores en la tierra,",
/* 18 */        "el tiempo de las canciones ha llegado.",
/* 19 */        "Se oye el arrullo de la tórtola,",
/* 20 */        "echa la higuera sus yemas",
/* 21 */        "y la viña exhala su fragancia.",
/* 22 */        "¡LEVÁNTATE, AMADA MÍA,...",
/* 23 */        "LEVÁNTATE,",
/* 24 */        "HERMOSA MÍA, Y VENTE!",
/* 25 */        "Paloma mía que vives en las grietas de la roca",
/* 26 */        "en escarpados escondrijos,",
/* 27 */        "déjame oír tu voz, déjame oír tu voz.",
/* 28 */        "Cazadnos las raposas,",
/* 29 */        "las pequeñas raposas",
/* 30 */        "que devastan nuestra viña,",
/* 31 */        "porque nuestra viña está ya en flor,",
/* 32 */        "A. PORQUE NUESTRA VIÑA ESTÁ YA EN FLOR.",
/* 33 */        "Mi amado es para mí,",
/* 34 */        "y yo soy para mi amado.",
/* 35 */        "Antes que sople la brisa",
/* 36 */        "y se alarguen las sombras con la muerte,",
/* 37 */        "RETORNA, RETORNA, RETORNA.",
/* 38 */        "¡LEVÁNTATE, AMADA MÍA,...",
/* 39 */        "LEVÁNTATE,",
/* 40 */        "HERMOSA MÍA, Y VENTE!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Do", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Fa", "cp14","")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Do", "cp14","")],
/* 12*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("Fa", "cp14","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 17*/      [ac("Fa", "cp14","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("Fa", "cp14","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Fa", "cp14","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 26*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 27*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 28*/      [ac("Do", "cp14","")],
/* 29*/      [ac("Mi", "cp14","")],
/* 30*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 31*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 32*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 33*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 34*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 35*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 36*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 37*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m"), ac("1","cp250","A.")],
/* 38 */   [ac("", "cp0","")],
/* 39*/      [ac("Fa", "cp14","")],
/* 40*/      [ac("Mi", "cp14","")],
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
