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
const NOMBREDELCANTO = "VEN, ESPÍRITU SANTO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Secuencia de Pentecostés - Himno latin. «Veni, Sancte Spiritus»",
      dbnos: "167",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "VEN, ESPÍRITU SANTO,",
/* 2 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 3 */        "Ven, padre de los pobres,",
/* 4 */        "ven, luz del corazón.",
/* 5 */        "Ven, consolador buenísimo,",
/* 6 */        "dulce huésped del alma.",
/* 7 */        "VEN, ESPÍRITU SANTO...",
/* 8 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 9 */        "Ven, dulce refrigerio,",
/* 10 */        "en la fatiga tú eres descanso;",
/* 11 */        "en el calor tú eres nuestro alivio;",
/* 12 */        "en el llanto eres consuelo.",
/* 13 */        "VEN, ESPÍRITU SANTO...",
/* 14 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 15 */        "Oh luz dichosísima",
/* 16 */        "inunda de tu resplandor",
/* 17 */        "lo íntimo del corazón de tus fieles,",
/* 18 */        "llega hasta el fondo del alma.",
/* 19 */        "VEN, ESPÍRITU SANTO...",
/* 20 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 21 */        "Sin tu luz nada hay puro en el hombre,",
/* 22 */        "nada hay inocente.",
/* 23 */        "Mira la fuerza del pecado,",
/* 24 */        "cuando tú no estás con nosotros.",
/* 25 */        "VEN, ESPÍRITU SANTO...",
/* 26 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 27 */        "Lava lo que está sucio,",
/* 28 */        "riega lo que está árido,",
/* 29 */        "sana lo que está enfermo.",
/* 30 */        "Convierte al duro y al rígido.",
/* 31 */        "VEN, ESPÍRITU SANTO...",
/* 32 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 33 */        "Inflama lo que está tibio,",
/* 34 */        "encamina al que se ha extraviado.",
/* 35 */        "Danos tus siete dones,",
/* 36 */        "danos tu amor y tu alegría.",
/* 37 */        "VEN, ESPÍRITU SANTO...",
/* 38 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 39 */        "Danos virtud y premio,",
/* 40 */        "danos la alegría de la salvación,",
/* 41 */        "danos una muerte santa,",
/* 42 */        "danos el gozo eterno.",
/* 43 */        "VEN, ESPÍRITU SANTO...",
/* 44 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 45 */        "Danos sabiduría y entendimiento,",
/* 46 */        "danos ciencia y piedad,",
/* 47 */        "danos consejo y fortaleza,",
/* 48 */        "danos el temor de Dios.",
/* 49 */        "VEN, ESPÍRITU SANTO...",
/* 50 */        "ENVÍA UN RAYO DE TU LUZ.",
/* 51 */        "Danos tus santos frutos:",
/* 52 */        "danos paciencia y bondad,",
/* 53 */        "danos amor y alegría,",
/* 54 */        "danos justicia y verdad.",
/* 55 */        "VEN, ESPÍRITU SANTO...",
/* 56 */        "ENVÍA UN RAYO DE TU LUZ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Do", "cp",""), ac("Fa","cp90","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 20*/      [ac("Mi", "cp14","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35 */   [ac("", "cp0","")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 38*/      [ac("Mi", "cp14","")],
/* 39 */   [ac("", "cp0","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 44*/      [ac("Mi", "cp14","")],
/* 45 */   [ac("", "cp0","")],
/* 46 */   [ac("", "cp0","")],
/* 47 */   [ac("", "cp0","")],
/* 48 */   [ac("", "cp0","")],
/* 49*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 50*/      [ac("Mi", "cp14","")],
/* 51 */   [ac("", "cp0","")],
/* 52 */   [ac("", "cp0","")],
/* 53 */   [ac("", "cp0","")],
/* 54 */   [ac("", "cp0","")],
/* 55*/      [ac("Do", "cp14",""), ac("Fa","cp90","")],
/* 56*/      [ac("Mi", "cp14","")],
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
