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
const NOMBREDELCANTO = "SHLOM LEJ MARIAM";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Ave María en arameo antiguo",
      dbnos: "149",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SHLOM LEJ MARIAM,",
/* 2 */        "MALIATH TAi BUTHA.",
/* 3 */        "MARAN, MARAN AMEJ,",
/* 4 */        "MARAN, MARAN AMEJ.",
/* 5 */        "Ave María, llena de gracia,",
/* 6 */        "el Señor, el Señor es contigo,",
/* 7 */        "bendita tú eres entre todas las mujeres,",
/* 8 */        "y bendito es el fruto de tu seno, Jesús.",
/* 9 */        "SANTA, SANTA MARÍA,",
/* 10 */        "MADRE, MADRE DE DIOS,",
/* 11 */        "RUEGA, RUEGA POR NOSOTROS",
/* 12 */        "QUE SOMOS, QUE SOMOS PECADORES.",
/* 13 */        "¡María, no llores!",
/* 14 */        "María, María, María.",
/* 15 */        "¡Ayaay, ayaay, aay!",
/* 16 */        "SANTA, SANTA MARÍA...",
/* 17 */        "MADRE, MADRE DE DIOS,",
/* 18 */        "RUEGA, RUEGA POR NOSOTROS",
/* 19 */        "QUE SOMOS, QUE SOMOS PECADORES.",
/* 20 */        "María, ayúdanos,",
/* 21 */        "María, ayúdanos.",
/* 22 */        "¡Virgen María!",
/* 23 */        "¡Ay ay aaay aaaaaaaaay!",
/* 24 */        "¡Ayúdanos!",
/* 25 */        "SANTA, SANTA MARÍA...",
/* 26 */        "MADRE, MADRE DE DIOS,",
/* 27 */        "RUEGA, RUEGA POR NOSOTROS",
/* 28 */        "QUE SOMOS, QUE SOMOS PECADORES.",
/* 29 */        "SHLOM LEJ MARIAM...",
/* 30 */        "MALIATH TAi BUTHA.",
/* 31 */        "MARAN, MARAN AMEJ,",
/* 32 */        "MARAN, MARAN AMEJ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/       [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 2*/       [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 3*/       [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 4*/       [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 5*/       [ac("Mi", "cp","m")],
/* 6*/       [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 7*/       [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 8*/       [ac("Do", "cp14",""), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 9*/       [ac("Mi", "cp14","m")],
/* 10 */     [ac("", "cp0","")],
/* 11*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 12*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 13*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Si", "cp14","7")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17 */     [ac("", "cp0","")],
/* 18*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 19*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 20*/      [ac("Sol", "cp14",""), ac("Si","cp90","7")],
/* 21*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 22*/      [ac("La", "cp14","m")],
/* 23 */     [ac("", "cp0","")],
/* 24*/      [ac("Si", "cp14","7")],
/* 25*/      [ac("Mi", "cp14","m")],
/* 26 */     [ac("", "cp0","")],
/* 27*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 28*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 29*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 30*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 31*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 32*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
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
