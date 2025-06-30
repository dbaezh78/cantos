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
const NOMBREDELCANTO = "COMO LIRIO ENTRE LOS CARDOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los cantares 1,13ss ",
      dbnos: "240",
      catg: "ELECCIÓN",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Como perfume de mirra es mi amado,",
/* 2 */        "así es mi amado,",
/* 3 */        "reposa sobre mi pecho.",
/* 4 */        "Como lirio entre los cardos es mi amada,",
/* 5 */        "así es mi amada,",
/* 6 */        "así es mi amada entre las doncellas.",
/* 7 */        "¡QUÉ BELLA ERES, AMADA MÍA!",
/* 8 */        "¡QUÉ BELLA ERES, QUÉ BELLA ERES!",
/* 9 */        "PALOMAS SON TUS OJOS,",
/* 10 */        "PALOMAS SON TUS OJOS.",
/* 11 */        "¡QUÉ HERMOSO ERES, AMADO MÍO!",
/* 12 */        "¡QUÉ HERMOSO ERES, QUÉ DELICIOSO!",
/* 13 */        "PURO VERDOR ES NUESTRO LECHO,",
/* 14 */        "PURO VERDOR ES NUESTRO LECHO.",
/* 15 */        "Como el manzano entre los árboles silvestres,",
/* 16 */        "así es mi amado,",
/* 17 */        "así es mi amado entre los jóvenes.",
/* 18 */        "A su sombra que anhelaba estoy sentada,",
/* 19 */        "y es dulce su fruto,",
/* 20 */        "¡qué dulce al paladar!",
/* 21 */        "ME HA INTRODUCIDO",
/* 22 */        "EN LA SALA DEL BANQUETE,",
/* 23 */        "Y LA BANDERA QUE ENARBOLA",
/* 24 */        "SOBRE MÍ ES EL AMOR.",
/* 25 */        "Su izquierda sobre mi cabeza,",
/* 26 */        "y con su diestra me abraza.",
/* 27 */        "YO OS CONJURO, HIJAS DE JERUSALÉN",
/* 28 */        "NO DESPERTÉIS AL AMOR,",
/* 29 */        "HASTA QUE A ELLA LE PLAZCA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m")],
/* 2*/      [ac("Fa#", "cp14","")],
/* 3*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 4*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m")],
/* 5*/      [ac("Fa#", "cp","")],
/* 6*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 7*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 8*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 10*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 12*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 13*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 14*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 15*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m")],
/* 16*/      [ac("Fa#", "cp14","")],
/* 17*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 18*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m")],
/* 19*/      [ac("Fa#", "cp14","")],
/* 20*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("Fa#", "cp14","")],
/* 23*/      [ac("Mi", "cp14","m")],
/* 24*/      [ac("Fa#", "cp14","")],
/* 25*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 26*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 27*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Si","cp150","m")],
/* 28*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 29*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
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
