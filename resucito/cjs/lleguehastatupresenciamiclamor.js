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
const NOMBREDELCANTO = "LLEGUE HASTA TU PRESENCIA MI CLAMOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 119 (118)",
      dbnos: "106",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡Señor, Señor Jesús!",
/* 2 */        "Llegue hasta tu presencia mi clamor,",
/* 3 */        "brota de mis labios tu canción,",
/* 4 */        "canta mi lengua tus palabras,",
/* 5 */        "alma mía, Jesús.",
/* 6 */        "Sea conmigo tu mano para ayudarme,",
/* 7 */        "de ti anhelo la salvación,",
/* 8 */        "viva mi alma para alabarte,",
/* 9 */        "mírame, ando errante.",
/* 10 */        "VEN, EN BUSCA DE TU SIERVO,",
/* 11 */        "VEN, SEÑOR JESÚS.",
/* 12 */        "VEN, QUE YO SIN TI ME PIERDO,",
/* 13 */        "VEN, SEÑOR JESÚS.",
/* 14 */        "Llegue hasta tu presencia mi clamor,...",
/* 15 */        "brota de mis labios tu canción,",
/* 16 */        "canta mi lengua tus palabras,",
/* 17 */        "alma mía, Jesús.",
/* 18 */        "Sea conmigo tu mano para ayudarme,",
/* 19 */        "de ti anhelo la salvación,",
/* 20 */        "viva mi alma para alabarte,",
/* 21 */        "mírame, ando errante.",
/* 22 */        "VEN, EN BUSCA DE TU SIERVO,...",
/* 23 */        "VEN, SEÑOR JESÚS.",
/* 24 */        "VEN, QUE YO SIN TI ME PIERDO,",
/* 25 */        "VEN, SEÑOR JESÚS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("Fa", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 13*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Fa", "cp14","")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 23*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
