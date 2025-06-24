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
const NOMBREDELCANTO = "VAMOS YA, PASTORES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Villancico (Kiko Argüello)",
      dbnos: "165",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "VAMOS YA, PASTOREs ",
/* 2 */        "VAMOS A BELÉN,",
/* 3 */        "QUE HA NACIDO UN NIÑO,",
/* 4 */        "SE LLAMA EMMANUEL.",
/* 5 */        "SE LLAMA EMMANUEL,",
/* 6 */        "SE LLAMA EMMANUEL,",
/* 7 */        "VAMOS YA, PASTORES,",
/* 8 */        "VAMOS A BELÉN.",
/* 9 */        "PA RA RAM PAM PAM,",
/* 10 */        "PA RA RAM PAM PAM.",
/* 11 */        "Los pobres ya cantan,",
/* 12 */        "los niños ya ríen.",
/* 13 */        "Los pobres ya cantan,",
/* 14 */        "los niños ya ríen.",
/* 15 */        "ALEGRÍA, ALEGRÍA,",
/* 16 */        "ALEGRÍA, ALEGRÍA.",
/* 17 */        "ALEGRÍA, ALEGRÍA:",
/* 18 */        "HA NACIDO EL SALVADOR.",
/* 19 */        "VAMOS YA, PASTOREs... ",
/* 20 */        "VAMOS A BELÉN,",
/* 21 */        "QUE HA NACIDO UN NIÑO,",
/* 22 */        "SE LLAMA EMMANUEL.",
/* 23 */        "SE LLAMA EMMANUEL,",
/* 24 */        "SE LLAMA EMMANUEL,",
/* 25 */        "VAMOS YA, PASTORES,",
/* 26 */        "VAMOS A BELÉN.",
/* 27 */        "PA RA RAM PAM PAM,",
/* 28 */        "PA RA RAM PAM PAM.",
/* 29 */        "Su madre, María,",
/* 30 */        "su padre, José.",
/* 31 */        "Ha nacido un niño,",
/* 32 */        "se llama Emmanuel.",
/* 33 */        "ALEGRÍA, ALEGRÍA...",
/* 34 */        "ALEGRÍA, ALEGRÍA.",
/* 35 */        "ALEGRÍA, ALEGRÍA:",
/* 36 */        "VAMOS YA, PASTOREs ",
/* 37 */        "VAMOS A BELÉN,",
/* 38 */        "QUE HA NACIDO UN NIÑO,",
/* 39 */        "SE LLAMA EMMANUEL.",
/* 40 */        "SE LLAMA EMMANUEL,",
/* 41 */        "SE LLAMA EMMANUEL,",
/* 42 */        "VAMOS YA, PASTORES,",
/* 43 */        "VAMOS A BELÉN.",
/* 44 */        "PA RA RAM PAM PAM,",
/* 45 */        "PA RA RAM PAM PAM.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Si", "cp14","7")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Mi", "cp","m")],
/* 6*/      [ac("Si", "cp14","7")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Si", "cp14","7")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12*/      [ac("Si", "cp14","7")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("Si", "cp14","7")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("Si", "cp14","7")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Si", "cp14","7")],
/* 21*/      [ac("Mi", "cp14","m")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Mi", "cp14","m")],
/* 24*/      [ac("Si", "cp14","7")],
/* 25*/      [ac("Mi", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("Si", "cp14","7")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33*/      [ac("Mi", "cp14","m")],
/* 34*/      [ac("Si", "cp14","7")],
/* 35*/      [ac("Mi", "cp14","m")],
/* 36*/      [ac("Mi", "cp14","m")],
/* 37*/      [ac("Si", "cp14","7")],
/* 38*/      [ac("Mi", "cp14","m")],
/* 39*/      [ac("Mi", "cp14","m")],
/* 40*/      [ac("Mi", "cp14","m")],
/* 41*/      [ac("Si", "cp14","7")],
/* 42*/      [ac("Mi", "cp14","m")],
/* 43*/      [ac("Mi", "cp14","m")],
/* 44*/      [ac("Si", "cp14","7")],
/* 45*/      [ac("Mi", "cp14","m")],
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
