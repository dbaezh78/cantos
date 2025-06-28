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
const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA IV ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(1988)",
      dbnos: "200",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Y CON TU ESPÍRITU.",
/* 3 */        "Levantemos el corazón.",
/* 4 */        "LO TENEMOS LEVANTADO HACIA EL SEÑOR.",
/* 5 */        "Demos gracias al Señor, nuestro Dios.",
/* 6 */        "ES JUSTO Y NECESARIO.",
/* 7 */        "Realmente es justo darte gracias,",
/* 8 */        "y deber nuestro glorificarte, Padre santo,",
/* 9 */        "porque tú eres el único Dios vivo y verdadero",
/* 10 */        "que existes desde siempre y vives para siempre;",
/* 11 */        "luz sobre toda luz.",
/* 12 */        "Porque tú solo eres bueno y fuente de vida,",
/* 13 */        "hiciste todas las cosas",
/* 14 */        "para colmarlas de tus bendiciones",
/* 15 */        "y alegrar su multitud con la claridad de tu gloria.",
/* 16 */        "Por eso, innumerables ángeles en tu presencia,",
/* 17 */        "contemplando la gloria de tu rostro,",
/* 18 */        "te sirven siempre y te glorifican sin cesar.",
/* 19 */        "Y con ellos también nosotros, llenos de alegría,",
/* 20 */        "y por nuestra voz las demás criaturas,",
/* 21 */        "aclamamos tu nombre cantando:",
/* 22 */        "SANTO, SANTO, SANTO ...",
/* 23 */        "Te alabamos, Padre santo, porque eres grande",
/* 24 */        "y porque hiciste todas las cosas",
/* 25 */        "con sabiduría y amor.",
/* 26 */        "A imagen tuya creaste al hombre",
/* 27 */        "y le encomendaste el universo entero,",
/* 28 */        "para que, sirviéndote solo a ti, su Creador,",
/* 29 */        "dominara todo lo creado.",
/* 30 */        "Y cuando por desobediencia perdió tu amistad,",
/* 31 */        "no lo abandonaste al poder de la muerte,",
/* 32 */        "sino que, compadecido,",
/* 33 */        "tendiste la mano a todos,",
/* 34 */        "para que te encuentre",
/* 35 */        "el que te busca",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 8*/      [ac("Re", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Do", "cp14",""), ac("Lam","cp90","")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("Re", "cp14","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("Re", "cp14","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 20*/      [ac("Do", "cp14","")],
/* 21*/      [ac("Re", "cp14",""), ac("Mi","cp90","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 24*/      [ac("Re", "cp14","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Do", "cp14","")],
/* 27*/      [ac("Re", "cp14","")],
/* 28*/      [ac("Fa", "cp14","")],
/* 29*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 30*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("Re", "cp14","")],
/* 33*/      [ac("Mi", "cp14","")],
/* 34*/      [ac("Re", "cp14","")],
/* 35*/      [ac("Mi", "cp14","")],
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
