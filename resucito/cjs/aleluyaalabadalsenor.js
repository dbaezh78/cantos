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
const NOMBREDELCANTO = "ALELUYA, ALABAD AL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 150",
      dbnos: "13",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 2 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 3 */        "Alabad al Señor en su templo,",
/* 4 */        "alabadlo en su fuerte firmamento.",
/* 5 */        "Alabadlo por sus obras estupendas,",
/* 6 */        "alabadlo por su inmensa grandeza.",
/* 7 */        "ALELUYA, ALELUYA, ALELUYA...",
/* 8 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 9 */        "Alabadlo al son de trompetas,",
/* 10 */        "alabadlo con arpas y guitarras,",
/* 11 */        "alabadlo con tambores y con danzas,",
/* 12 */        "alabadlo con trompas y flautas.",
/* 13 */        "ALELUYA, ALELUYA, ALELUYA...",
/* 14 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 15 */        "Alabadlo con platillos sonoros,",
/* 16 */        "alabadlo con platillos vibrantes.",
/* 17 */        "TODO SER ALABE AL SEÑOR,",
/* 18 */        "ALABE, ALABE AL SEÑOR.",
/* 19 */        "ALELUYA, ALELUYA, ALELUYA.....",
/* 20 */        "ALELUYA, ALELUYA, ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("La","cp421",""), ac("Mi","cp469","")],
/* 2*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("Mi","cp469","")],

/* 3*/      [ac("Mi", "cp0",""), ac("La","cp223",""), ac("Re","cp281",""), ac("La","cp379","")],
/* 4*/      [ac("Re", "cp64",""), ac("La","cp279",""), ac("Mi","cp479","")],
/* 5*/      [ac("La", "cp64",""), ac("Re","cp279",""), ac("La","cp391",""), ac("Mi","cp473","")],
/* 6*/      [ac("La", "cp64",""), ac("Re","cp324",""), ac("Mi","cp517","")],

/* 7*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("La","cp421",""), ac("Mi","cp469","")],
/* 8*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("Mi","cp469","")],

/* 9*/      [ac("Mi", "cp0",""), ac("La","cp213",""), ac("Re","cp279",""), ac("La","cp409","")],
/* 10*/      [ac("Re", "cp62",""), ac("La","cp231",""), ac("Mi","cp408","")],
/* 11*/      [ac("La", "cp64",""), ac("Re","cp306",""), ac("La","cp396",""), ac("Mi","cp506","")],
/* 12*/      [ac("La", "cp62",""), ac("Re","cp245",""), ac("Mi","cp434","")],

/* 13*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("La","cp421",""), ac("Mi","cp469","")],
/* 14*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("Mi","cp469","")],

/* 15*/      [ac("Mi", "cp0",""), ac("La","cp280",""), ac("Re","cp327",""), ac("La","cp429","")],
/* 16*/      [ac("Re", "cp64",""), ac("La","cp277",""), ac("Mi","cp422","")],

/* 17*/      [ac("La", "cp0",""), ac("Re","cp122",""), ac("La","cp225",""), ac("Mi","cp429","")],
/* 18*/      [ac("La", "cp36",""), ac("Re","cp167",""), ac("MI","cp382","")],

/* 19*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("La","cp421",""), ac("Mi","cp469","")],
/* 20*/      [ac("Mi", "cp0",""), ac("La","cp76",""), ac("Re","cp168",""), ac("La","cp250",""), ac("Re","cp342",""), ac("Mi","cp469","")],
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
