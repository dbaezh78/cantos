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
const NOMBREDELCANTO = "LA SIEGA DE LAS NACIONES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 4,31-38",
      dbnos: "100",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Llegaron sus discípulos y le dijeron:",
/* 2 */        "«Rabbí, come, Rabbí, come».",
/* 3 */        "Pero Él les dijo: «Yo tengo para comer",
/* 4 */        "un alimento que vosotros no conocéis:",
/* 5 */        "mi alimento es hacer la voluntad",
/* 6 */        "de Aquel que me ha enviado",
/* 7 */        "y llevar a cabo su obra».",
/* 8 */        "¿NO DECÍS VOSOTROS:",
/* 9 */        "TODAVÍA CUATRO MESES",
/* 10 */        "Y LLEGA YA LA SIEGA?",
/* 11 */        "¿NO DECÍS VOSOTROS:",
/* 12 */        "TODAVÍA CUATRO MESES",
/* 13 */        "Y LLEGA YA LA SIEGA?",
/* 14 */        "Pues bien, yo os digo:",
/* 15 */        "alzad vuestros ojos y ved los campos",
/* 16 */        "que ya blanquean para la siega,",
/* 17 */        "QUE YA BLANQUEAN PARA LA SIEGA.",
/* 18 */        "¿NO DECÍS VOSOTROS:...",
/* 19 */        "TODAVÍA CUATRO MESES",
/* 20 */        "Y LLEGA YA LA SIEGA?",
/* 21 */        "¿NO DECÍS VOSOTROS:",
/* 22 */        "TODAVÍA CUATRO MESES",
/* 23 */        "Y LLEGA YA LA SIEGA?",
/* 24 */        "Ya se reúnen los segadores,",
/* 25 */        "YA SE REÚNEN LOS SEGADORES,",
/* 26 */        "y reciben el salario y recogen fruto",
/* 27 */        "para la vida eterna,",
/* 28 */        "A PARA LA VIDA ETERNA.",
/* 29 */        "¿NO DECÍS VOSOTROS:...",
/* 30 */        "TODAVÍA CUATRO MESES",
/* 31 */        "Y LLEGA YA LA SIEGA?",
/* 32 */        "¿NO DECÍS VOSOTROS:",
/* 33 */        "TODAVÍA CUATRO MESES",
/* 34 */        "Y LLEGA YA LA SIEGA?",
/* 35 */        "Yo os he mandado a segar",
/* 36 */        "lo que vosotros no habéis trabajado;",
/* 37 */        "otros se fatigaron",
/* 38 */        "y vosotros os aprovecháis de su fatiga;",
/* 39 */        "de modo que el sembrador",
/* 40 */        "se alegra, se alegra con el segador.",
/* 41 */        "¿NO DECÍS VOSOTROS:...",
/* 42 */        "TODAVÍA CUATRO MESES",
/* 43 */        "Y LLEGA YA LA SIEGA?",
/* 44 */        "¿NO DECÍS VOSOTROS:",
/* 45 */        "TODAVÍA CUATRO MESES",
/* 46 */        "Y LLEGA YA LA SIEGA?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","m"), ac("La","cp90",""), ac("Sol","cp150","m"), ac("La","cp250","")],
/* 3*/      [ac("Si♭", "cp14","")],
/* 4*/      [ac("La", "cp14","")],
/* 5*/      [ac("Si♭", "cp","")],
/* 6*/      [ac("La", "cp14","")],
/* 7*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 8*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","m")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("La", "cp14","")],
/* 17*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 18*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Re", "cp14","m")],
/* 21*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 25*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 26*/      [ac("Sol", "cp14","m")],
/* 27*/      [ac("La", "cp14","")],
/* 28*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 29*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Re", "cp14","m")],
/* 32*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Re", "cp14","m")],
/* 35*/      [ac("Sol", "cp14","m")],
/* 36*/      [ac("Do", "cp14",""), ac("La","cp90","")],
/* 37*/      [ac("Si♭", "cp14","")],
/* 38*/      [ac("La", "cp14","")],
/* 39*/      [ac("Sol", "cp14","m")],
/* 40*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 41*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 42 */   [ac("", "cp0","")],
/* 43*/      [ac("Re", "cp14","m")],
/* 44*/      [ac("Do", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 45 */   [ac("", "cp0","")],
/* 46*/      [ac("Re", "cp14","m")],
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
