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
const NOMBREDELCANTO = "QUIÉN NOS SEPARARÁ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Romanos 8,34-39",
      dbnos: "139",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¿QUIÉN NOS SEPARARÁ,",
/* 2 */        "QUIÉN NOS SEPARARÁ,",
/* 3 */        "DEL AMOR DE DIOS?",
/* 4 */        "C ¿Acaso Cristo Jesús,",
/* 5 */        "el que murió,",
/* 6 */        "más aún el que resucitó,",
/* 7 */        "el que a la derecha de Dios",
/* 8 */        "intercede por nosotros?",
/* 9 */        "¿QUIÉN NOS SEPARARÁ...",
/* 10 */        "QUIÉN NOS SEPARARÁ,",
/* 11 */        "DEL AMOR DE DIOS?",
/* 12 */        "¿La tribulación,",
/* 13 */        "la angustia, la persecución,",
/* 14 */        "el hambre, la desnudez,",
/* 15 */        "si en todo vencemos",
/* 16 */        "por aquel que nos amó?",
/* 17 */        "¿QUIÉN NOS SEPARARÁ...",
/* 18 */        "QUIÉN NOS SEPARARÁ,",
/* 19 */        "DEL AMOR DE DIOS?",
/* 20 */        "Si seguros estamos",
/* 21 */        "que ni la muerte, ni la vida,",
/* 22 */        "ni lo presente, ni lo futuro,",
/* 23 */        "ni la altura, ni la profundidad,",
/* 24 */        "ni otra criatura alguna,",
/* 25 */        "nos podrá separar de Dios.",
/* 26 */        "A. NOS PODRÁ SEPARAR,",
/* 27 */        "NOS PODRÁ SEPARAR",
/* 28 */        "DEL AMOR DE DIOS",
/* 29 */        "MANIFESTADO EN CRISTO JESÚS.",
/* 30 */        "¿QUIÉN NOS SEPARARÁ...",
/* 31 */        "QUIÉN NOS SEPARARÁ,",
/* 32 */        "DEL AMOR DE DIOS?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Sol", "cp14","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("Fa", "cp14","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14","")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14","")],
/* 28*/      [ac("Fa", "cp14","")],
/* 29*/      [ac("Mi", "cp14","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
