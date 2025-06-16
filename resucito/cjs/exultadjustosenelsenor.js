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
const NOMBREDELCANTO = "EXULTAD, JUSTOS, EN EL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 33 (32)",
      dbnos: "75",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EXULTAD, JUSTOS, EN EL SEÑOR,",
/* 2 */        "DE LOS SANTOS ES PROPIA LA ALABANZA.",
/* 3 */        "DAD GRACIAS AL SEÑOR CON LA CÍTARA,",
/* 4 */        "CON EL ARPA DE DIEZ CUERDAS",
/* 5 */        "TOCAD PARA ÉL.",
/* 6 */        "Cantad al Señor un cantar nuevo,",
/* 7 */        "tocad la cítara con arte y aclamadle.",
/* 8 */        "Porque recta es la palabra del Señor,",
/* 9 */        "verdad son todas sus obras.",
/* 10 */        "En Él están la justicia y el derecho,",
/* 11 */        "de su amor está llena la tierra.",
/* 12 */        "EXULTAD, JUSTOS, EN EL SEÑOR,...",
/* 13 */        "DE LOS SANTOS ES PROPIA LA ALABANZA.",
/* 14 */        "DAD GRACIAS AL SEÑOR CON LA CÍTARA,",
/* 15 */        "CON EL ARPA DE DIEZ CUERDAS",
/* 16 */        "TOCAD PARA ÉL.",
/* 17 */        "La Palabra del Señor hizo los cielos,",
/* 18 */        "el aliento de su boca sus ejércitos.",
/* 19 */        "El Señor anula los planes de las naciones,",
/* 20 */        "hace vanos los proyectos de los pueblos.",
/* 21 */        "Mas el proyecto del Señor,",
/* 22 */        "el proyecto del Señor",
/* 23 */        "subsiste por siempre.",
/* 24 */        "EXULTAD, JUSTOS, EN EL SEÑOR,...",
/* 25 */        "DE LOS SANTOS ES PROPIA LA ALABANZA.",
/* 26 */        "DAD GRACIAS AL SEÑOR CON LA CÍTARA,",
/* 27 */        "CON EL ARPA DE DIEZ CUERDAS",
/* 28 */        "TOCAD PARA ÉL.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14","Mi"), ac("m","cp90","")],
/* 2*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("Do", "cp14","")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 7*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 8*/      [ac("Do", "cp14","")],
/* 9*/      [ac("Re", "cp14",""), ac("Si","cp90","7")],
/* 10*/      [ac("Do", "cp14","")],
/* 11*/      [ac("Re", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150","I"), ac("SI","cp250","7")],
/* 12*/      [ac("Sol", "cp14","Mi"), ac("m","cp90","")],
/* 13*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 18*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 19*/      [ac("Do", "cp14","")],
/* 20*/      [ac("Re", "cp14",""), ac("Si","cp90","7")],
/* 21*/      [ac("Do", "cp14","")],
/* 22*/      [ac("Re", "cp14","")],
/* 23*/      [ac("Si", "cp14","7"), ac("Do","cp90","I"), ac("Si","cp150","7")],
/* 24*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 25*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Do", "cp14","")],
/* 28*/      [ac("Sol", "cp14","")],
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
