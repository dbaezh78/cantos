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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "AQUEDAH";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Gn 22,1-19 - Del Targum Neofiti sobre el sacrificio de Isaac",
      dbnos: "19",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Era todavía de noche cuando Abraham",
/* 2 */        "se disponía a sacrificar a su hijo;",
/* 3 */        "los dos se miraban fijamente",
/* 4 */        "cuando le dijo su hijo Isaac:",

/* 5 */        "«AQUEDAH, AQUEDAH,",
/* 6 */        "AQUEDAH, AQUEDAH»",

/* 7 */        "«Átame, átame fuerte, padre mío,",
/* 8 */        "no sea que por el miedo me resista",
/* 9 */        "y no sea válido tu sacrificio",
/* 10 */        "y los dos seamos rechazados.",

/* 11 */        "«AQUEDAH, AQUEDAH...",
/* 12 */        "AQUEDAH, AQUEDAH»",

/* 13 */        "«ÁTAME, ÁTAME FUERTE,",
/* 14 */        "PADRE MÍO, QUE YO NO ME RESISTA».",

/* 15 */        "Venid y ved la fe sobre la tierra,",
/* 16 */        "venid y ved la fe sobre la tierra,",
/* 17 */        "el padre que sacrifica a su hijo,",
/* 18 */        "y el hijo querido que le ofrece su cuello.",

/* 19 */        "«AQUEDAH, AQUEDAH...",
/* 20 */        "AQUEDAH, AQUEDAH»",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp0","m"), ac("Re","cp600","m9")],
/* 2*/      [ac("La", "cp490","m")],
/* 3*/      [ac("Re", "cp415","m9")],
/* 4*/      [ac("Mi", "cp411","")],

/* 5*/      [ac("La", "cp121","m"), ac("Re","cp320","m9")],
/* 6*/      [ac("La", "cp294","m")],

/* 7*/      [ac("La", "cp0","m"), ac("Re","cp515","m9")],
/* 8*/      [ac("La", "cp528","m")],
/* 9*/      [ac("Re", "cp401","m9")],
/* 10*/      [ac("Mi", "cp409","")],

/* 11*/      [ac("La", "cp121","m"), ac("Re","cp320","m9")],
/* 12*/      [ac("La", "cp294","m")],

/* 13*/      [ac("La", "cp14","m"), ac("Re","cp308","m9")],
/* 14*/      [ac("La", "cp534","m")],

/* 15*/      [ac("La", "cp0","m")],
/* 16*/      [ac("Re", "cp443","m")],
/* 17*/      [ac("Re", "cp474","m9")],
/* 18*/      [ac("Mi", "cp581","7")],

/* 19*/      [ac("La", "cp121","m"), ac("Re","cp320","m9")],
/* 20*/      [ac("La", "cp294","m")],
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
