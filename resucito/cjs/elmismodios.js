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
const NOMBREDELCANTO = "EL MISMO DIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "2 Corintios 4,6-12",
      dbnos: "224",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El mismo Dios que dijo:",
/* 2 */        "«De las tinieblas brille la luz»,",
/* 3 */        "es el mismo que ha hecho brillar la luz",
/* 4 */        "en nuestros corazones,",
/* 5 */        "para irradiar el conocimiento de su gloria,",
/* 6 */        "que está en el rostro de Cristo,",
/* 7 */        "QUE ESTÁ EN EL ROSTRO DE CRISTO.",
/* 8 */        "Pero llevamos este tesoro en vasos de barro.",
/* 9 */        "PERO LLEVAMOS ESTE TESORO",
/* 10 */        "EN VASOS DE BARRO.",
/* 11 */        "Para que se manifieste",
/* 12 */        "que lo sublime de este amor",
/* 13 */        "viene de Dios,",
/* 14 */        "viene de Dios y que no viene de nosotros.",
/* 15 */        "LLEVANDO SIEMPRE EN NUESTRO CUERPO",
/* 16 */        "EL MORIR DE JESÚS, PARA QUE",
/* 17 */        "SE MANIFIESTE EN NUESTRO CUERPO",
/* 18 */        "QUE ESTÁ RESUCITADO.",
/* 19 */        "Atribulados en todo,",
/* 20 */        "mas no desesperados;",
/* 21 */        "perseguidos, mas nunca abandonados;",
/* 22 */        "derribados, mas no aniquilados.",
/* 23 */        "LLEVANDO SIEMPRE EN NUESTRO CUERPO...",
/* 24 */        "EL MORIR DE JESÚS, PARA QUE",
/* 25 */        "SE MANIFIESTE EN NUESTRO CUERPO",
/* 26 */        "QUE ESTÁ RESUCITADO.",
/* 27 */        "Y mientras nosotros morimos",
/* 28 */        "el mundo recibe la vida.",
/* 29 */        "Y MIENTRAS NOSOTROS MORIMOS",
/* 30 */        "EL MUNDO RECIBE LA VIDA.",
/* 31 */        "LLEVANDO SIEMPRE EN NUESTRO CUERPO...",
/* 32 */        "EL MORIR DE JESÚS, PARA QUE",
/* 33 */        "SE MANIFIESTE EN NUESTRO CUERPO",
/* 34 */        "QUE ESTÁ RESUCITADO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14",""), ac("Fa#","cp90","")],
/* 2*/      [ac("Si", "cp14","m")],
/* 3*/      [ac("Fa#", "cp14","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Si", "cp","m")],
/* 6*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 7*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 8*/      [ac("Fa#", "cp14","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Si", "cp14","m")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("Si", "cp14","m"), ac("Sol","cp90","")],
/* 14*/      [ac("Fa#", "cp14","")],
/* 15*/      [ac("Si", "cp14","m")],
/* 16*/      [ac("La", "cp14",""), ac("Si","cp90","m"), ac("Sol","cp150","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Fa#", "cp14","")],
/* 19*/      [ac("Fa#", "cp14","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Si", "cp14","m")],
/* 24*/      [ac("La", "cp14",""), ac("Si","cp90","m"), ac("Sol","cp150","")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("Fa#", "cp14","")],
/* 27*/      [ac("Fa#", "cp14","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Si", "cp14","m")],
/* 32*/      [ac("La", "cp14",""), ac("Si","cp90","m"), ac("Sol","cp150","")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Fa#", "cp14","")],
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
