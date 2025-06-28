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
const NOMBREDELCANTO = "PREFACIO PARA ADVIENTO Y NAVIDAD";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Prefacio IV de Adviento*",
      dbnos: "204",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Y CON TU ESPÍRITU.",
/* 3 */        "Levantemos el corazón.",
/* 4 */        "LO TENEMOS LEVANTADO HACIA EL SEÑOR.",
/* 5 */        "Demos gracias al Señor, nuestro Dios.",
/* 6 */        "ES JUSTO Y NECESARIO.",
/* 7 */        "En verdad es justo darte gracias,",
/* 8 */        "Señor, Padre santo,",
/* 9 */        "Dios todopoderoso y eterno.",
/* 10 */        "Te alabamos, te bendecimos y te glorificamos",
/* 11 */        "por el misterio de la Virgen Madre.",
/* 12 */        "Porque, si del antiguo adversario nos vino la ruina,",
/* 13 */        "en el seno virginal de la hija de Sión ha germinado",
/* 14 */        "aquel que nos nutre con el pan de los ángeles,",
/* 15 */        "y ha brotado para todo el género humano",
/* 16 */        "la salvación y la paz.",
/* 17 */        "La gracia que Eva nos arrebató",
/* 18 */        "nos ha sido devuelta en María.",
/* 19 */        "En ella, madre de todos los hombres,",
/* 20 */        "la maternidad,",
/* 21 */        "redimida del pecado y de la muerte,",
/* 22 */        "se abre al don de una vida nueva.",
/* 23 */        "Así, donde había crecido el pecado,",
/* 24 */        "se ha desbordado tu misericordia",
/* 25 */        "en Cristo, nuestro Salvador.",
/* 26 */        "Por eso nosotros,",
/* 27 */        "mientras esperamos la venida de Cristo,",
/* 28 */        "unidos a los ángeles y a los santos,",
/* 29 */        "cantamos el himno de tu gloria:",
/* 30 */        "SANTO, SANTO, SANTO...",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("Ml", "cp14","m")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("La", "cp14","")],
/* 11*/      [ac("Ml", "cp14","m")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13*/      [ac("La", "cp14","")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Ml", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Ml", "cp14","m")],
/* 19*/      [ac("La", "cp14","m")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Ml", "cp14","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("La", "cp14","")],
/* 25*/      [ac("Ml", "cp14","m")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("Ml", "cp14","m")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("Ml", "cp14","m")],
/* 30 */   [ac("", "cp0","")],
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
