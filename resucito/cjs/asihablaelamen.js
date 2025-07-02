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
const NOMBREDELCANTO = "ASÍ HABLA EL AMÉN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 3,14-20",
      dbnos: "20",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ASÍ HABLA EL AMÉN,",
/* 2 */        "EL TESTIGO FIEL Y VERAZ,",
/* 3 */        "EL PRINCIPIO",
/* 4 */        "DE LAS CRIATURAS DE DIOS.",

/* 5 */        "Conozco tu conducta:",
/* 6 */        "no eres ni frío ni caliente.",
/* 7 */        "¡Ojalá fueras frío o caliente",
/* 8 */        "y no tibio!",
/* 9 */        "Porque voy a vomitarte de mi boca.",

/* 10 */        "Tú dices: «Yo soy rico, nada me falta»,",
/* 11 */        "y no te das cuenta",
/* 12 */        "que eres un desgraciado,",
/* 13 */        "digno de compasión,",
/* 14 */        "pobre, ciego y desnudo.",

/* 15 */        "ASÍ HABLA EL AMÉN...",
/* 16 */        "EL TESTIGO FIEL Y VERAZ,",
/* 17 */        "EL PRINCIPIO",
/* 18 */        "DE LAS CRIATURAS DE DIOS.",

/* 19 */        "Te aconsejo que me compres",
/* 20 */        "oro acrisolado al fuego,",
/* 21 */        "para que te enriquezcas,",
/* 22 */        "y vestidos blancos",
/* 23 */        "para cubrir tu desnudez.",
/* 24 */        "Mira que estoy a la puerta y llamo;",
/* 25 */        "si alguno oye mi voz y me abre,",
/* 26 */        "entraré en su casa,",
/* 27 */        "y cenaré con él y él conmigo.",

/* 28 */        "ASÍ HABLA EL AMÉN...",
/* 29 */        "EL TESTIGO FIEL Y VERAZ,",
/* 30 */        "EL PRINCIPIO",
/* 31 */        "DE LAS CRIATURAS DE DIOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("Do", "cp121",""), ac("Re","cp386","7")],
/* 3 */     [ac("", "cp0","")],
/* 4*/      [ac("Mi", "cp421","m")],

/* 5*/      [ac("Mi", "cp14","m")],
/* 6*/      [ac("Sol", "cp58","")],
/* 7*/      [ac("Re", "cp377","7")],
/* 8*/      [ac("Si", "cp76","7")],
/* 9*/      [ac("Mi", "cp514","m")],

/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Re", "cp341","7")],
/* 13*/      [ac("Si", "cp286","7")],
/* 14*/      [ac("Mi", "cp314","m")],

// DERECHA
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("Do", "cp121",""), ac("Re","cp386","7")],
/* 17 */     [ac("", "cp0","")],
/* 18*/      [ac("Mi", "cp421","m")],

/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("Re", "cp300","7")],
/* 22*/      [ac("Si", "cp195","7")],
/* 23*/      [ac("Mi", "cp353","m")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Sol", "cp14","")],
/* 26*/      [ac("Re", "cp248","7"), ac("Si","cp325","7")],
/* 27*/      [ac("Mi", "cp400","m")],

/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Do", "cp121",""), ac("Re","cp386","7")],
/* 30 */     [ac("", "cp0","")],
/* 31*/      [ac("Mi", "cp421","m")],
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
