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
const NOMBREDELCANTO = "NO RESISTÁIS AL MAL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 5,38ss",
      dbnos: "230",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Habéis oído que se dijo:",
/* 2 */        "«Ojo por ojo, y diente por diente».",
/* 3 */        "Mas yo os digo, mas yo os digo:",
/* 4 */        "NO RESISTÁIS AL MAL,",
/* 5 */        "NO RESISTÁIS AL MAL,",
/* 6 */        "NO RESISTÁIS AL MAL,",
/* 7 */        "NO RESISTÁIS AL MAL.",
/* 8 */        "Y si alguno te golpea en la mejilla derecha",
/* 9 */        "preséntale también la otra.",
/* 10 */        "Y si alguno",
/* 11 */        "te lleva a juicio para quitarte la túnica",
/* 12 */        "déjale también el manto.",
/* 13 */        "Al que te obligue a andar una milla,",
/* 14 */        "vete con él dos.",
/* 15 */        "Y al que te robe lo que es tuyo,",
/* 16 */        "no se lo reclames.",
/* 17 */        "NO RESISTÁIS AL MAL. ..",
/* 18 */        "Habéis oído que se dijo:",
/* 19 */        "«Amarás a tu prójimo y odiarás a tu enemigo».",
/* 20 */        "Mas yo os digo, mas yo os digo:",
/* 21 */        "Amad a vuestros enemigos,",
/* 22 */        "haced el bien a los que os odian,",
/* 23 */        "rezad por los que os persiguen,",
/* 24 */        "bendecid a los que os calumnian.",
/* 25 */        "Y seréis hijos de vuestro Padre celeste,",
/* 26 */        "que hace salir su sol sobre buenos y malos",
/* 27 */        "y manda la lluvia también",
/* 28 */        "sobre los pecadores.",
/* 29 */        "A NO RESISTÁIS AL MAL. ..",
/* 30 */        "Sed perfectos",
/* 31 */        "como vuestro Padre celestial es perfecto,",
/* 32 */        "porque Él es bueno con los malvados,",
/* 33 */        "porque Él es bueno con los pecadores.",
/* 34 */        "NO RESISTÁIS AL MAL. ..",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","")],
/* 2*/      [ac("Si", "cp14","m")],
/* 3*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 4*/      [ac("Re", "cp14","")],
/* 5*/      [ac("Si", "cp","m")],
/* 6*/      [ac("La", "cp14","")],
/* 7*/      [ac("Si", "cp14","m")],
/* 8*/      [ac("Si", "cp14","m"), ac("Re","cp90","")],
/* 9*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 10*/      [ac("Si", "cp14","m")],
/* 11*/      [ac("Re", "cp14","")],
/* 12*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 13*/      [ac("La", "cp14","")],
/* 14*/      [ac("Si", "cp14","m")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Si", "cp14","m")],
/* 17*/      [ac("Re", "cp14","")],
/* 18*/      [ac("Re", "cp14","")],
/* 19*/      [ac("Si", "cp14","m")],
/* 20*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 21*/      [ac("Re", "cp14","")],
/* 22*/      [ac("Si", "cp14","m")],
/* 23*/      [ac("La", "cp14","")],
/* 24*/      [ac("Si", "cp14","m")],
/* 25*/      [ac("Re", "cp14","")],
/* 26*/      [ac("La", "cp14"," "), ac("Si","cp90","m")],
/* 27*/      [ac("La", "cp14","")],
/* 28*/      [ac("Si", "cp14","m")],
/* 29*/      [ac("Re", "cp14","")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31*/      [ac("Si", "cp14","m")],
/* 32*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 33*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 34*/      [ac("Re", "cp14","")],
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
