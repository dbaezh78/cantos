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
const NOMBREDELCANTO = "A NADIE DEMOS OCASIÓN DE TROPIEZO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "2ª Corintios 6,3ss",
      dbnos: "2",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Hermanos, a nadie demos ocasión de tropiezo,",
/* 2 */        "hermanos, vivamos aceptando las tribulaciones,",
/* 3 */        "necesidades, angustias y fatigas,",
/* 4 */        "viviendo en pureza, paciencia y bondad,",
/* 5 */        "en el Espíritu Santo, y en el poder de Dios,",
/* 6 */        "con las armas de la justicia,",
/* 7 */        "las de la derecha y las de la izquierda.",

/* 8 */        "HERMANOS, A NADIE DEMOS",
/* 9 */        "OCASIÓN DE TROPIEZO,",
/* 10 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 11 */        "LAS TRIBULACIONES,",
/* 12 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",

/* 13 */        "En calumnias y en buena fama,",
/* 14 */        "en gloria e ignominia,",
/* 15 */        "como pobres, aunque enriqueciendo a muchos;",
/* 16 */        "como quienes nada tienen,",
/* 17 */        "aunque lo poseemos todo.",

/* 18 */        "HERMANOS, A NADIE DEMOS...",
/* 19 */        "OCASIÓN DE TROPIEZO,",
/* 20 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 21 */        "LAS TRIBULACIONES,",
/* 22 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",

/* 23 */        "Hermanos, os hemos hablado con franqueza,",
/* 24 */        "os hemos hablado en toda verdad.",
/* 25 */        "No unciros al yugo desigual con los paganos.",
/* 26 */        "¿Qué participación hay entre el fiel y el infiel?",
/* 27 */        "¿Qué unión entre el santuario de Dios",
/* 28 */        "y el santuario de los ídolos?",
/* 29 */        "Porque somos el santuario de Dios.",

/* 30 */        "HERMANOS, A NADIE DEMOS...",
/* 31 */        "OCASIÓN DE TROPIEZO,",
/* 32 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 33 */        "LAS TRIBULACIONES,",
/* 34 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",

/* 35 */        "Tengo plena confianza en el hablaros,",
/* 36 */        "porque estoy orgulloso de vosotros.",
/* 37 */        "No unciros al yugo desigual con los paganos.",
/* 38 */        "¿Qué participación hay entre el fiel y el infiel?",
/* 39 */        "¿Qué unión entre el santuario de Dios",
/* 40 */        "y el santuario de los ídolos?",

/* 41 */        "HERMANOS, A NADIE DEMOS...",
/* 42 */        "OCASIÓN DE TROPIEZO,",
/* 43 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 44 */        "LAS TRIBULACIONES,",
/* 45 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",

/* 46 */        "En pureza, paciencia y bondad,",
/* 47 */        "en el Espíritu Santo, y en el poder de Dios.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/    [ac("La", "cp10", "m"), ac("Re", "cp710", "m")],
/* 2*/    [ac("Mi", "cp79", ""),  ac("La", "cp715", "m")],
/* 3*/    [ac("Re", "cp18", "m"), ac("Mi", "cp464", "")],
/* 4*/    [ac("Re", "cp18", "m"), ac("Mi", "cp612", "")],
/* 5*/    [ac("Fa", "cp250", ""),  ac("Mi", "cp646", "")],
/* 6*/    [ac("Fa", "cp388", "")],
/* 7*/    [ac("Mi", "cp544", "")],

/* 8*/   [ac("La", "cp16", "m")],
/* 9*/   [ac("Re", "cp316", "m")],
/* 10*/   [ac("Mi", "cp104", "")],
/* 11*/   [ac("La", "cp250", "m")],
/* 12*/   [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],


/* 13*/ [ac("Re", "cp18", "m"),  ac("Mi", "cp434", "")],
/* 14*/ [ac("Re", "cp18", "m"),  ac("Mi", "cp274", "")],
/* 15*/ [ac("Re", "cp11", "m"), ac("Mi", "cp500", "")],
/* 16*/ [ac("Fa", "cp348", "")],
/* 17*/ [ac("Mi", "cp360", "")],

/* 18*/  [ac("La", "cp16", "m")],
/* 19*/  [ac("Re", "cp316", "m")],
/* 20*/  [ac("Mi", "cp104", "")],
/* 21*/  [ac("La", "cp250", "m")],
/* 22*/  [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],

/* 23*/ [ac("La", "cp18", "7"), ac("Re", "cp676", "m")],
/* 24*/ [ac("Mi", "cp516", "")],
/* 25*/ [ac("Re", "cp18", "m"), ac("Mi", "cp646", "")],
/* 26*/ [ac("Re", "cp18", "m"), ac("Mi", "cp700", "")],
/* 27*/ [ac("Fa", "cp584", "")],
/* 28*/ [ac("Mi", "cp340", "")],
/* 29*/ [ac("Re", "cp18", "m"), ac("Mi", "cp532", "")],

/* 30*/  [ac("La", "cp16", "m")],
/* 31*/  [ac("Re", "cp316", "m")],
/* 32*/  [ac("Mi", "cp104", "")],
/* 33*/  [ac("La", "cp250", "m")],
/* 34*/  [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],

/* 35*/ [ac("La", "cp18", "7"), ac("Re", "cp534", "m")],
/* 36*/ [ac("Mi", "cp484", "")],
/* 37*/ [ac("Re", "cp18", "m"), ac("Mi", "cp650", "")],
/* 38*/ [ac("Re", "cp18", "m"), ac("Mi", "cp710", "")],
/* 39*/ [ac("Fa", "cp582", "")],
/* 40*/ [ac("Mi", "cp340", "")],

/* 41*/  [ac("La", "cp16", "m")],
/* 42*/  [ac("Re", "cp316", "m")],
/* 43*/  [ac("Mi", "cp104", "")],
/* 44*/  [ac("La", "cp250", "m")],
/* 45*/  [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],

/* 46*/ [ac("Re", "cp18", "m"), ac("Mi", "cp458", "")],
/* 47*/ [ac("Fa", "cp238", ""), ac("Mi", "cp640", "")],

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
