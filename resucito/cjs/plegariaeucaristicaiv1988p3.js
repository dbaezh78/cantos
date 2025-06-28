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
const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA IV ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(1988)",
      dbnos: "200",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Porque él mismo, llegada la hora",
/* 2 */        "en que había de ser glorificado por ti, Padre santo,",
/* 3 */        "habiendo amado a los suyos",
/* 4 */        "que estaban en el mundo,",
/* 5 */        "los amó hasta el extremo.",
/* 6 */        "Y, mientras cenaba con sus discípulos,",
/* 7 */        "tomó pan, te bendijo,",
/* 8 */        "lo partió y se lo dio, diciendo:",
/* 9 */        "Tomad y comed todos de él,",
/* 10 */        "porque esto es mi Cuerpo,",
/* 11 */        "que será entregado por vosotros.",
/* 12 */        "Del mismo modo,",
/* 13 */        "tomó el cáliz lleno del fruto de la vid",
/* 14 */        "y te dio gracias,",
/* 15 */        "lo pasó a sus discípulos, diciendo:",
/* 16 */        "Tomad y bebed todos de él,",
/* 17 */        "porque este es el cáliz de mi Sangre,",
/* 18 */        "Sangre de la alianza nueva y eterna,",
/* 19 */        "que será derramada por muchos,",
/* 20 */        "para el perdón de los pecados.",
/* 21 */        "Haced esto en conmemoración mía.",
/* 22 */        "Este es el sacramento de nuestra fe.",
/* 23 */        "ANUNCIAMOS TU MUERTE, SEÑOR,",
/* 24 */        "PROCLAMAMOS TU RESURRECCIÓN,",
/* 25 */        "¡VEN, SEÑOR JESÚS!",
/* 26 */        "Por eso, nosotros, Señor, al celebrar ahora",
/* 27 */        "el memorial de nuestra redención,",
/* 28 */        "recordamos la muerte de Cristo",
/* 29 */        "y su descenso al lugar de los muertos,",
/* 30 */        "proclamamos su resurrección",
/* 31 */        "y ascensión a tu derecha;",
/* 32 */        "y, mientras esperamos su venida gloriosa,",
/* 33 */        "te ofrecemos su Cuerpo y su Sangre,",
/* 34 */        "sacrificio agradabíe a Ti",
/* 35 */        "y salvación para todo el mundo.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Do", "cp14","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Fa", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Fa", "cp14",""), ac("Sol","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Do", "cp14","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 23*/      [ac("Do", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("Fa", "cp14","")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Fa", "cp14","")],
/* 31*/      [ac("Mi", "cp14","")],
/* 32*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 33*/      [ac("Sol", "cp14","")],
/* 34*/      [ac("La", "cp14","m")],
/* 35*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
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
