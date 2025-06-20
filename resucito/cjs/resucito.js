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
const NOMBREDELCANTO = "RESUCITÓ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(Kiko Argüello)",
      dbnos: "142",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "RESUCITÓ, RESUCITÓ,",
/* 2 */        "RESUCITÓ, ALELUYA.",
/* 3 */        "ALELUYA, ALELUYA,",
/* 4 */        "ALELUYA, RESUCITÓ.",
/* 5 */        "La muerte,",
/* 6 */        "¿dónde está la muerte?,",
/* 7 */        "¿dónde está mi muerte?,",
/* 8 */        "¿dónde su victoria?",
/* 9 */        "RESUCITÓ, RESUCITÓ...",
/* 10 */        "RESUCITÓ, ALELUYA.",
/* 11 */        "ALELUYA, ALELUYA,",
/* 12 */        "ALELUYA, RESUCITÓ.",
/* 13 */        "Gracias",
/* 14 */        "sean dadas al Padre,",
/* 15 */        "que nos pasó a su Reino,",
/* 16 */        "donde se vive de amor.",
/* 17 */        "RESUCITÓ, RESUCITÓ...",
/* 18 */        "RESUCITÓ, ALELUYA.",
/* 19 */        "ALELUYA, ALELUYA,",
/* 20 */        "ALELUYA, RESUCITÓ.",
/* 21 */        "RESUCITÓ",
/* 22 */        "(Klko Argüello)",
/* 23 */        "Alegría,",
/* 24 */        "alegría, hermanos,",
/* 25 */        "que si hoy nos queremos",
/* 26 */        "es porque resucitó.",
/* 27 */        "RESUCITÓ, RESUCITÓ...",
/* 28 */        "RESUCITÓ, ALELUYA.",
/* 29 */        "ALELUYA, ALELUYA,",
/* 30 */        "ALELUYA, RESUCITÓ.",
/* 31 */        "Si con Él morimos,",
/* 32 */        "con Él vivimos,",
/* 33 */        "con Él cantamos:",
/* 34 */        "¡Aleluya!",
/* 35 */        "A. ALELUYA,ALELUYA,",
/* 36 */        "ALELUYA, RESUCITÓ.",
/* 37 */        "RESUCITÓ, RESUCITÓ,",
/* 38 */        "RESUCITÓ, ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Sol", "cp14","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 20*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("Fa", "cp14","")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 28*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 29*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 30*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33*/      [ac("Fa", "cp14","")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 36*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 37*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 38*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
