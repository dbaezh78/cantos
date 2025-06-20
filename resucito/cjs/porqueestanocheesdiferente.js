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
const NOMBREDELCANTO = "POR QUÉ ESTA NOCHE ES DIFERENTE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Haggadá de Pesaj - Melodía hebraica",
      dbnos: "133",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¿Por qué esta noche es diferente",
/* 2 */        "de todas las otras noches?",
/* 3 */        "DE TODAS LAS OTRAS NOCHES.",
/* 4 */        "Que todas las otras noches",
/* 5 */        "nos vamos a la cama pronto",
/* 6 */        "y no nos quedamos levantados.",
/* 7 */        "Y NO NOS QUEDAMOS LEVANTADOS.",
/* 8 */        "Mas esta noche, esta noche",
/* 9 */        "estamos levantados.",
/* 10 */        "A MAS ESTA NOCHE, ESTA NOCHE",
/* 11 */        "ESTAMOS LEVANTADOS.",
/* 12 */        "¿Por qué esta noche es diferente",
/* 13 */        "de todas las otras noches?",
/* 14 */        "DE TODAS LAS OTRAS NOCHES.",
/* 15 */        "Que todas las otras noches",
/* 16 */        "nos vamos a la cama pronto",
/* 17 */        "después de haber cenado.",
/* 18 */        "DESPUÉS DE HABER CENADO.",
/* 19 */        "Mas esta noche, esta noche hemos ayunado.",
/* 20 */        "MAS ESTA NOCHE, ESTA NOCHE",
/* 21 */        "HEMOS AYUNADO.",
/* 22 */        "¿Por qué esta noche es diferente",
/* 23 */        "de todas las otras noches?",
/* 24 */        "DE TODAS LAS OTRAS NOCHES.",
/* 25 */        "Que todas las otras noches",
/* 26 */        "nos vamos a la cama pronto",
/* 27 */        "y no esperamos nada.",
/* 28 */        "Y NO ESPERAMOS NADA.",
/* 29 */        "Mas esta noche, esta noche",
/* 30 */        "estamos esperando.",
/* 31 */        "MAS ESTA NOCHE, ESTA NOCHE",
/* 32 */        "ESTAMOS ESPERANDO.",
/* 33 */        "¿POR QUÉ ESTA NOCHE ES DIFERENTE",
/* 34 */        "DE TODAS LAS OTRAS NOCHES?",
/* 35 */        "DE TODAS LAS OTRAS NOCHES.",
/* 36 */        "Para estar levantados,",
/* 37 */        "para haber ayunado,",
/* 38 */        "para estar todos esperando.",
/* 39 */        "PARA ESTAR LEVANTADOS,",
/* 40 */        "PARA HABER AYUNADO,",
/* 41 */        "PARA ESTAR TODOS ESPERANDO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 3*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 7*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 8*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 9*/      [ac("Mi", "cp14",""), ac("Lam","cp90","")],
/* 10*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 11*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 14*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 18*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 19*/      [ac("Re", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 20*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 21*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 24*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 25*/      [ac("La", "cp14","m")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 28*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 29*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 30*/      [ac("Mi", "cp14",""), ac("Lam","cp90","")],
/* 31*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 32*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 35*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 36*/      [ac("Rem", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Mi", "cp14",""), ac("Lam","cp90","")],
/* 39*/      [ac("Rem", "cp14","")],
/* 40*/      [ac("La", "cp14","m")],
/* 41*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
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
