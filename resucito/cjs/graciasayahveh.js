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
const NOMBREDELCANTO = "GRACIAS A YAHVEH";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 136 (135) - Melodía hebraica",
      dbnos: "77",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 2 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 3 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 4 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 5 */        "Demos gracias al Dios de los dioses,",
/* 6 */        "PORQUE ETERNA ES SU MISERICORDIA,",
/* 7 */        "demos gracias al Señor de los Señores.",
/* 8 */        "GRACIAS A YAHVEH, ALELUYA...",
/* 9 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 10 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 11 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 12 */        "Él ha abierto en dos partes el Mar Rojo,",
/* 13 */        "PORQUE ETERNA ES SU MISERICORDIA,",
/* 14 */        "hizo pasar por en medio a su pueblo.",
/* 15 */        "GRACIAS A YAHVEH, ALELUYA...",
/* 16 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 17 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 18 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 19 */        "Él ha abierto un camino en el desierto,",
/* 20 */        "PORQUE ETERNA ES SU MISERICORDIA,",
/* 21 */        "e hizo con el pueblo una alianza para siempre.",
/* 22 */        "GRACIAS A YAHVEH, ALELUYA...",
/* 23 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 24 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 25 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 26 */        "Él los condujo a la tierra prometida,",
/* 27 */        "PORQUE ETERNA ES SU MISERICORDIA,",
/* 28 */        "una tierra que mana leche y miel.",
/* 29 */        "GRACIAS A YAHVEH, ALELUYA...",
/* 30 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 31 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 32 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 33 */        "En la angustia no nos abandona,",
/* 34 */        "PORQUE ETERNA ES SU MISERICORDIA,",
/* 35 */        "Él nos libra de nuestros enemigos.",
/* 36 */        "GRACIAS A YAHVEH, ALELUYA...",
/* 37 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 38 */        "GRACIAS A YAHVEH, ALELUYA.",
/* 39 */        "GRACIAS A YAHVEH, ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("ReMim","cp250","")],
/* 2*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 4*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 5*/      [ac("Do", "cp",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 6*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 7*/      [ac("Sim", "cp14",""), ac("Mim","cp90","")],
/* 8*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("ReMim","cp250","")],
/* 9*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 10*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 11*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 12*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 13*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 14*/      [ac("Sim", "cp14",""), ac("Mim","cp90","")],
/* 15*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("ReMim","cp250","")],
/* 16*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 19*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 20*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 21*/      [ac("Sim", "cp14",""), ac("Mim","cp90","")],
/* 22*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("ReMim","cp250","")],
/* 23*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 24*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 25*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 26*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 27*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 28*/      [ac("Sim", "cp14",""), ac("Mim","cp90","")],
/* 29*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("ReMim","cp250","")],
/* 30*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 31*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 32*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 33*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 34*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150","7"), ac("Sol","cp250","")],
/* 35*/      [ac("Sim", "cp14",""), ac("Mim","cp90","")],
/* 36*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m"), ac("ReMim","cp250","")],
/* 37*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("Re","cp150",""), ac("Mi","cp250","m")],
/* 38*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 39*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
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
