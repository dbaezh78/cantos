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
  else if (anchoPantalla <= 900) {
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
const NOMBREDELCANTO = "EL COMBATE ESCATOLÓGICO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 19,11-20",
      dbnos: "53",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Veo el cielo abierto,",
/* 2 */        "y un caballo blanco,",
/* 3 */        "el que lo monta lleva un manto,",
/* 4 */        "lleno de sangre, lleno de sangre.",
/* 5 */        "Sus ojos, llamas de fuego,",
/* 6 */        "y en su boca hay una espada",
/* 7 */        "para herir, para herir.",
/* 8 */        "¿Cuál es su nombre?",
/* 9 */        "¿Cuál es su nombre?",
/* 10 */        "SU NOMBRE ES,",
/* 11 */        "SU NOMBRE ES",
/* 12 */        "PALABRA DE DIOS.",
/* 13 */        "Veo una bestia y un profeta",
/* 14 */        "que se reúnen para un combate,",
/* 15 */        "para un combate,",
/* 16 */        "contra el que monta en el caballo",
/* 17 */        "y lleva el manto lleno de sangre,",
/* 18 */        "lleno de sangre.",
/* 19 */        "ÉL PISA SOLO EN EL LAGAR",
/* 20 */        "DE LA FURIOSA CÓLERA DE DIOS.",
/* 21 */        "Veo la bestia que es capturada,",
/* 22 */        "y con ella el profeta,",
/* 23 */        "por el que monta en el caballo",
/* 24 */        "y lleva el manto lleno de sangre.",
/* 25 */        "ALELUYA, ALELUYA,",
/* 26 */        "ALELUYA, ALELUYA,",
/* 27 */        "ALELUYA, ALELUYA,",
/* 28 */        "¡ALELUYA!",
/* 29 */        "¿Cuál es su nombre?",
/* 30 */        "¿Cuál es su nombre?",
/* 31 */        "SU NOMBRE ES,",
/* 32 */        "SU NOMBRE ES",
/* 33 */        "PALABRA DE DIOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("Do", "cp14","")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Mi", "cp14",""), ac("Fa","cp90","")],
/* 14*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("Fa", "cp14","")],
/* 17*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 21*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Mi", "cp14","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("Do", "cp14","")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Mi", "cp14","")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
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
