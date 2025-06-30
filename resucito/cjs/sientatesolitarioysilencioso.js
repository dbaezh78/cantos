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
const NOMBREDELCANTO = "SIÉNTATE SOLITARIO Y SILENCIOSO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lamentaciones 3",
      dbnos: "235",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Dios mío, Dios mío,",
/* 2 */        "me has llevado, me has llevado",
/* 3 */        "y me has hecho caminar entre tinieblas.",
/* 4 */        "Has construido para mí un yugo,",
/* 5 */        "has atado mi cabeza, mi cabeza",
/* 6 */        "y la barbilla.",
/* 7 */        "Has tensado tu arco,",
/* 8 */        "y me has fijado, me has fijado",
/* 9 */        "como blanco de tus flechas.",
/* 10 */        "Aun cuando grito y gimo,",
/* 11 */        "tú sofocas, sofocas",
/* 12 */        "mi oración.",
/* 13 */        "Contemplar mi miseria",
/* 14 */        "y mi vida errante",
/* 15 */        "es para mí hiel y amargura.",
/* 16 */        "¿Mas qué puedo hacer",
/* 17 */        "si hasta me falta la esperanza,",
/* 18 */        "la esperanza que viene del Señor,",
/* 19 */        "que viene del Señor?",
/* 20 */        "SIÉNTATE SOLITARIO Y SILENCIOSO,",
/* 21 */        "PORQUE DIOS TE LO HA IMPUESTO.",
/* 22 */        "HUMILLA TU BOCA EN EL POLVO,",
/* 23 */        "QUIZÁ HAYA ESPERANZA.",
/* 24 */        "PON LA MEJILLA A QUIEN TE HIERE:",
/* 25 */        "PORQUE NO RECHAZA",
/* 26 */        "PARA SIEMPRE EL SEÑOR.",
/* 27 */        "AUN CUANDO AFLIGE",
/* 28 */        "USA DE MISERICORDIA,",
/* 29 */        "según su gran amor.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 2*/      [ac("Si", "cp14","m")],
/* 3*/      [ac("Re", "cp14","")],
/* 4*/      [ac("Fa#", "cp14","m")],
/* 5*/      [ac("Si", "cp","m")],
/* 6*/      [ac("Re", "cp14","")],
/* 7*/      [ac("Fa#", "cp14","m")],
/* 8*/      [ac("Si", "cp14","m")],
/* 9*/      [ac("Re", "cp14","")],
/* 10*/      [ac("Fa#", "cp14","m")],
/* 11*/      [ac("Si", "cp14","m")],
/* 12*/      [ac("Re", "cp14","")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("La", "cp14","")],
/* 15*/      [ac("Re", "cp14","")],
/* 16*/      [ac("Fa#", "cp14","")],
/* 17*/      [ac("Si", "cp14","m")],
/* 18*/      [ac("La", "cp14",""), ac("Sol","cp90","")],
/* 19*/      [ac("Fa#", "cp14","")],
/* 20*/      [ac("Re", "cp14"," "), ac("Fa#","cp90","m")],
/* 21*/      [ac("Si", "cp14","m"), ac("Re","cp90","")],
/* 22*/      [ac("Fa#", "cp14","m")],
/* 23*/      [ac("Si", "cp14","m"), ac("Re","cp90","")],
/* 24*/      [ac("Mi", "cp14","m"), ac("La","cp90","7")],
/* 25*/      [ac("Sol", "cp14","")],
/* 26*/      [ac("La", "cp14","")],
/* 27*/      [ac("sol", "cp14","")],
/* 28*/      [ac("La", "cp14","")],
/* 29*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
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
