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
const NOMBREDELCANTO = "MARÍA, MADRE DE LA IGLESIA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 19,26-34",
      dbnos: "111",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "«Mujer, he ahí a tu hijo,",
/* 2 */        "he ahí a tu hijo, he ahí a tu hijo",
/* 3 */        "ahí tienes a tu hijo.",
/* 4 */        "Ahí tienes a tu Madre,",
/* 5 */        "ahí tienes a tu Madre».",
/* 6 */        "MARÍA, MADRE MÍA,",
/* 7 */        "MARÍA, MADRE NUESTRA:",
/* 8 */        "VEN A VIVIR CONMIGO,",
/* 9 */        "VEN A MI CASA.",
/* 10 */        "Y ENSÉÑANOS A AMAR A TU HIJO",
/* 11 */        "COMO LO HAS AMADO TÚ,",
/* 12 */        "Y ENSÉÑANOS A AMAR A TU HIJO",
/* 13 */        "COMO LO HAS AMADO TÚ.",
/* 14 */        "«Tengo sed, tengo sed,",
/* 15 */        "todo se ha cumplido, todo se ha cumplido,",
/* 16 */        "todo se ha cumplido».",
/* 17 */        "MARÍA, MADRE MÍA,...",
/* 18 */        "MARÍA, MADRE NUESTRA:",
/* 19 */        "VEN A VIVIR CONMIGO,",
/* 20 */        "VEN A MI CASA.",
/* 21 */        "Y ENSÉÑANOS A AMAR A TU HIJO",
/* 22 */        "COMO LO HAS AMADO TÚ,",
/* 23 */        "Y ENSÉÑANOS A AMAR A TU HIJO",
/* 24 */        "COMO LO HAS AMADO TÚ.",
/* 25 */        "Llegaron, pues, los soldados,",
/* 26 */        "y viendo que estaba muerto",
/* 27 */        "no le quebraron las piernas,",
/* 28 */        "mas uno de los soldados",
/* 29 */        "le atravesó el costado con la lanza",
/* 30 */        "y al instante salió sangre y agua,",
/* 31 */        "sangre y agua.",
/* 32 */        "MARÍA, MADRE MÍA,",
/* 33 */        "MARÍA, MADRE NUESTRA:",
/* 34 */        "TÚ ERES MADRE DE LA IGLESIA,",
/* 35 */        "QUE NACE DEL COSTADO DE CRISTO",
/* 36 */        "COMO ESPOSA, NUEVA EVA.",
/* 37 */        "QUE NACE DEL COSTADO DE CRISTO",
/* 38 */        "COMO ESPOSA, NUEVA EVA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","7"), ac("La","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("Mi", "cp14","7"), ac("Fa","cp90","maj7")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("Mi", "cp14","7"), ac("Fa","cp90","maj7")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14","7"), ac("La","cp90","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 21*/      [ac("Mi", "cp14","7"), ac("Fa","cp90","maj7")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("Mi", "cp14","7"), ac("Fa","cp90","maj7")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("Fa", "cp14","maj7"), ac("Mi","cp90","")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("La", "cp14","m")],
/* 33*/      [ac("Sol", "cp14","7"), ac("La","cp90","m")],
/* 34*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 35*/      [ac("Mi", "cp14","7"), ac("Fa","cp90","maj7")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("Mi", "cp14","7"), ac("Fa","cp90","maj7")],
/* 38*/      [ac("Mi", "cp14","")],
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
