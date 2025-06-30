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
const NOMBREDELCANTO = "LA PALOMA VOLÓ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Oda XXIV de Salomón",
      dbnos: "242",
      catg: "ELECCIÓN",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "LA PALOMA VOLÓ",
/* 2 */        "SOBRE LA CABEZA DEL SEÑOR",
/* 3 */        "Y SALMODIÓ SOBRE ÉL.",
/* 4 */        "Y EL SEÑOR MOSTRÓ",
/* 5 */        "EL DISEÑO DE SU AMOR,",
/* 6 */        "DISEÑO DE ARTE INEFABLE",
/* 7 */        "PARA CADA HOMBRE.",
/* 8 */        "Y los abismos se abrieron,",
/* 9 */        "y se oyeron terribles gritos",
/* 10 */        "como de mujeres en parto.",
/* 11 */        "Y el Señor destruyó los abismos",
/* 12 */        "con la luz de su victoria.",
/* 13 */        "LA PALOMA VOLÓ...",
/* 14 */        "SOBRE LA CABEZA DEL SEÑOR",
/* 15 */        "Y SALMODIÓ SOBRE ÉL.",
/* 16 */        "Y EL SEÑOR MOSTRÓ",
/* 17 */        "EL DISEÑO DE SU AMOR,",
/* 18 */        "DISEÑO DE ARTE INEFABLE",
/* 19 */        "PARA CADA HOMBRE.",
/* 20 */        "Mas los diseños se perdieron",
/* 21 */        "y lloraban los ángeles del cielo;",
/* 22 */        "los diseños de aquellos",
/* 23 */        "que no siguieron hacer su voluntad.",
/* 24 */        "Porque el Señor ha mostrado su camino,",
/* 25 */        "y ha dado a aquellos que lo siguen",
/* 26 */        "la gracia de revestirse de su santidad.",
/* 27 */        "LA PALOMA VOLÓ...",
/* 28 */        "SOBRE LA CABEZA DEL SEÑOR",
/* 29 */        "Y SALMODIÓ SOBRE ÉL.",
/* 30 */        "Y EL SEÑOR MOSTRÓ",
/* 31 */        "EL DISEÑO DE SU AMOR,",
/* 32 */        "DISEÑO DE ARTE INEFABLE",
/* 33 */        "PARA CADA HOMBRE.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Si", "cp14","7")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("La", "cp","m6")],
/* 6*/      [ac("Si", "cp14","7")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Si", "cp14","7")],
/* 11*/      [ac("Do", "cp14","")],
/* 12*/      [ac("Si", "cp14","7")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("Si", "cp14","7")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("La", "cp14","m6")],
/* 18*/      [ac("Si", "cp14","7")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 21*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 22*/      [ac("Do", "cp14","")],
/* 23*/      [ac("Si", "cp14","7")],
/* 24*/      [ac("Do", "cp14","Si"), ac("7","cp90","")],
/* 25*/      [ac("Do", "cp14","")],
/* 26*/      [ac("Si", "cp14","7")],
/* 27*/      [ac("Mi", "cp14","m")],
/* 28*/      [ac("Si", "cp14","7")],
/* 29*/      [ac("Mi", "cp14","m")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("La", "cp14","m6")],
/* 32*/      [ac("Si", "cp14","7")],
/* 33*/      [ac("Mi", "cp14","m")],
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
