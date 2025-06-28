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
const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA II";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo I",
      dbnos: "194",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Santo eres en verdad, Señor,",
/* 2 */        "fuente de toda santidad:",
/* 3 */        "santifica estos dones",
/* 4 */        "con la efusión de tu Espíritu,",
/* 5 */        "de manera que sean para nosotros",
/* 6 */        "Cuerpo y      Sangre",
/* 7 */        "de Jesucristo, Nuestro Señor.",
/* 8 */        "El cual, cuando iba a ser entregado a su Pasión,",
/* 9 */        "voluntariamente aceptada,",
/* 10 */        "tomó pan,",
/* 11 */        "dándote gracias,",
/* 12 */        "lo partió",
/* 13 */        "y lo dio a sus discípulos, diciendo:",
/* 14 */        "Tomad y comed todos de él,",
/* 15 */        "porque esto es mi Cuerpo,",
/* 16 */        "que será entregado por vosotros.",
/* 17 */        "Del mismo modo, acabada la cena,",
/* 18 */        "tomó el cáliz,",
/* 19 */        "y dándote gracias de nuevo,",
/* 20 */        "lo pasó a sus discípulos, diciendo:",
/* 21 */        "Tomad y bebed todos de él,",
/* 22 */        "éste es el cáliz de mi Sangre,",
/* 23 */        "Sangre de la alianza nueva y eterna,",
/* 24 */        "que será derramada por vosotros",
/* 25 */        "y por muchos,",
/* 26 */        "para el perdón",
/* 27 */        "para el perdón*",
/* 28 */        "de los pecados.",
/* 29 */        "Haced esto en conmemoración mía.",
/* 30 */        "Este es el sacramento de nuestra fe.",
/* 31 */        "ANUNCIAMOS TU MUERTE, SEÑOR,",
/* 32 */        "PROCLAMAMOS TU RESURRECCIÓN,",
/* 33 */        "¡VEN, SEÑOR JESÚS!",
/* 34 */        "¡VEN, SEÑOR JESÚS!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14","")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("Si", "cp14","m")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Si", "cp14","m")],
/* 16*/      [ac("Mi", "cp14","m ")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("Si", "cp14","m")],
/* 23*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("Si", "cp14","m")],
/* 27*/      [ac("La", "cp14","")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("Si", "cp14","m")],
/* 33*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 34*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
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
