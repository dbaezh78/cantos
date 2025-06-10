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
const NOMBREDELCANTO = "DICHOSO EL HOMBRE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 1",
      dbnos: "52",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "DICHOSO EL HOMBRE",
/* 2 */        "QUE NO SIGUE EL CONSEJO DE LOS IMPÍOS,",
/* 3 */        "NI EN LA SENDA DE LOS PECADORES SE DETIENE,",
/* 4 */        "NI EN EL BANCO DE LOS BURLONES SE SIENTA.",
/* 5 */        "Mas se complace en la palabra del Señor,",
/* 6 */        "sus salmos susurra día y noche.",
/* 7 */        "Será como árbol plantado",
/* 8 */        "junto a corrientes de agua.",
/* 9 */        "SERÁ COMO ÁRBOL PLANTADO",
/* 10 */        "JUNTO A CORRIENTES DE AGUA,",
/* 11 */        "que da fruto a su tiempo,",
/* 12 */        "nunca se marchitarán sus hojas;",
/* 13 */        "todo lo que emprende le sale bien,",
/* 14 */        "todo lo que emprende le sale bien.",
/* 15 */        "¡No así los impíos, no así!",
/* 16 */        "Que son como la paja",
/* 17 */        "que se lleva el viento.",
/* 18 */        "¡NO ASÍ LOS IMPÍOS, NO ASÍ!",
/* 19 */        "QUE SON COMO LA PAJA",
/* 20 */        "QUE SE LLEVA EL VIENTO.",
/* 21 */        "No resistirán en el juicio los impíos,",
/* 22 */        "ni los pecadores",
/* 23 */        "en la comunidad de los santos.",
/* 24 */        "Porque el Señor cuida",
/* 25 */        "el camino de sus fieles,",
/* 26 */        "mas el camino de los impíos",
/* 27 */        "acaba mal, acaba mal, acaba mal.",
/* 28 */        "DICHOSO EL HOMBRE...",
/* 29 */        "QUE NO SIGUE EL CONSEJO DE LOS IMPÍOS,",
/* 30 */        "NI EN LA SENDA DE LOS PECADORES SE DETIENE,",
/* 31 */        "NI EN EL BANCO DE LOS BURLONES SE SIENTA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("Sol", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 7*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 14*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Fa", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Fa", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("Fa", "cp14","")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("Fa", "cp14","")],
/* 27*/      [ac("Mi", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 28*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 29*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
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
