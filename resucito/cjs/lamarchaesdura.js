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
const NOMBREDELCANTO = "LA MARCHA ES DURA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Espiritual negro «Go down, Moses»",
      dbnos: "98",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "La marcha es dura, recio el sol,",
/* 2 */        "lento el caminar.",
/* 3 */        "Moisés caudillo de Israel",
/* 4 */        "lo va a liberar.",
/* 5 */        "OYE, PADRE, EL GRITO DE TU PUEBLO.",
/* 6 */        "OYE, PADRE, MANDA AL SALVADOR.",
/* 7 */        "El pueblo anhela vida y paz,",
/* 8 */        "quiere resurgir.",
/* 9 */        "Moisés caudillo de Israel",
/* 10 */        "va a librarlo al fin.",
/* 11 */        "OYE, PADRE, EL GRITO DE TU PUEBLO.",
/* 12 */        "OYE, PADRE, MANDA AL SALVADOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Si7","cp90",""), ac("Mi","cp150","m")],
/* 2*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 3*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 4*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 5*/      [ac("Mi", "cp","m"), ac("La","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 6*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 7*/      [ac("Mi", "cp14","m"), ac("Si7","cp90",""), ac("Mi","cp150","m")],
/* 8*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 9*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 10*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
/* 11*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 12*/      [ac("Si7", "cp14",""), ac("Mim","cp90","")],
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
