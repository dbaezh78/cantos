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
const NOMBREDELCANTO = "OH SEÑOR, MI CORAZÓN YA NO ES AMBICIOSO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 131 (130)",
      dbnos: "232",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "OH SEÑOR, MI CORAZÓN YA NO ES AMBICIOSO",
/* 2 */        "NI SE ELEVA CON SOBERBIA MI MIRADA,",
/* 3 */        "NI VOY EN BUSCA DE COSAS GRANDES",
/* 4 */        "QUE SON SUPERIORES A MIS FUERZAS.",
/* 5 */        "Aquietada y acallada está mi alma",
/* 6 */        "como un niño pequeño en brazos de su madre,",
/* 7 */        "como un niño amamantado está mi espíritu,",
/* 8 */        "como un niño dentro de mí.",
/* 9 */        "OH SEÑOR, MI CORAZÓN YA NO ES AMBICIOSO",
/* 10 */        "NI SE ELEVA CON SOBERBIA MI MIRADA,",
/* 11 */        "NI VOY EN BUSCA DE COSAS GRANDES",
/* 12 */        "QUE SON SUPERIORES A MIS FUERZAS.",
/* 13 */        "Aquietada y acallada está mi alma...",
/* 14 */        "como un niño pequeño en brazos de su madre,",
/* 15 */        "como un niño amamantado está mi espíritu,",
/* 16 */        "como un niño dentro de mí.",
/* 17 */        "Espera Israel, en el Señor.",
/* 18 */        "Espera Israel en el Señor, ahora y siempre.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Mi", "cp","m"), ac("La","cp90","m")],
/* 6*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 7*/      [ac("Si", "cp14","7")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 10*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 14*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 15*/      [ac("Si", "cp14","7")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
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
