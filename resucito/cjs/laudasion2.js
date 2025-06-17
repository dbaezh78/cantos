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
const NOMBREDELCANTO = "LAUDA SIÓN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Secuencia del Corpus Christi (Santo Tomas de Aquino) ",
      dbnos: "103",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Tú no ves, tú no comprendes;",
/* 2 */        "mas la fe te lo confirma",
/* 3 */        "más allá de la razón.",
/* 4 */        "Es signo lo que aparece,",
/* 5 */        "y esconde un gran misterio,",
/* 6 */        "una realidad sublime.",
/* 7 */        "Comes carne, bebes sangre,",
/* 8 */        "en las dos especies;",
/* 9 */        "pero queda Cristo entero.",
/* 10 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 11 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 12 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 13 */        "El que come solo parte,",
/* 14 */        "ni separa ni divide,",
/* 15 */        "en tanto que lo recibe.",
/* 16 */        "Que sean uno, que sean mil,",
/* 17 */        "igualmente lo reciben",
/* 18 */        "y nunca se consume.",
/* 19 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 20 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 21 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 22 */        "Buen pastor, pan verdadero,",
/* 23 */        "de nosotros ten piedad.",
/* 24 */        "Danos los bienes eternos",
/* 25 */        "en la tierra de los vivos.",
/* 26 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 27 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 28 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 29 */        "¡Oh, Señor, que todo sabes!",
/* 30 */        "¡Oh, Señor, que todo puedes!",
/* 31 */        "¡Que nos sacias en la tierra!",
/* 32 */        "Conduce a tus hermanos",
/* 33 */        "a la cena del cielo;",
/* 34 */        "en el gozo de los santos.",
/* 35 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 36 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 37 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 38 */        "NOTA:",
/* 39 */        "En la convivencia de itinerantes de España del año",
/* 40 */        "2003, Kiko cantó este himno en la Eucaristía como",
/* 41 */        "canto de entrada. En aquella ocasión, utilizó como",
/* 42 */        "estribillo el texto en latín que reproducimos a",
/* 43 */        "continuación, con el fin de que pueda ser utilizado",
/* 44 */        "por los salmistas si así lo consideráis apropiado para",
/* 45 */        "la celebración.",
/* 46 */        "LAUDA, SION, SALVATOREM,",
/* 47 */        "LAUDA DUCEM ET PASTOREM",
/* 48 */        "IN HYMNIS ET CANTICIS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Mi", "cp14","")],
/* 32*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("Mi", "cp14","")],
/* 38 */   [ac("", "cp0","")],
/* 39 */   [ac("", "cp0","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43 */   [ac("", "cp0","")],
/* 44 */   [ac("", "cp0","")],
/* 45 */   [ac("", "cp0","")],
/* 46*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 47*/      [ac("La", "cp14","m")],
/* 48*/      [ac("MI", "cp14","")],
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
