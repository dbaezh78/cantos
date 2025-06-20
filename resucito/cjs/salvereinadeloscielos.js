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
const NOMBREDELCANTO = "SALVE, REINA DE LOS CIELOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno lat. «Ave, Regina Caelorum»",
      dbnos: "144",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Salve, Reina de los Cielos,",
/* 2 */        "Señora, Señora de los Ángeles.",
/* 3 */        "Salve raíz, Salve puerta,",
/* 4 */        "tú, tú, tú abriste el camino a nuestra luz.",
/* 5 */        "ALÉGRATE, VIRGEN MARÍA,",
/* 6 */        "ENTRE TODAS LA MÁS BELLA.",
/* 7 */        "SALVE, ETERNA DONCELLA,",
/* 8 */        "RUEGA A CRISTO POR NOSOTROS.",
/* 9 */        "SALVE, ETERNA DONCELLA,",
/* 10 */        "RUEGA A CRISTO POR NOSOTROS.",
/* 11 */        "I... I... I...",
/* 12 */        "Salve raíz, Salve puerta,",
/* 13 */        "tú, tú, tú abriste el camino a nuestra luz.",
/* 14 */        "ALÉGRATE, VIRGEN MARÍA,...",
/* 15 */        "ENTRE TODAS LA MÁS BELLA.",
/* 16 */        "SALVE, ETERNA DONCELLA,",
/* 17 */        "RUEGA A CRISTO POR NOSOTROS.",
/* 18 */        "SALVE, ETERNA DONCELLA,",
/* 19 */        "RUEGA A CRISTO POR NOSOTROS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Mi7", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("Lam", "cp",""), ac("Mi7","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 8*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 9*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 10*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 11*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("Mi7", "cp14",""), ac("La","cp90","m")],
/* 14*/      [ac("Lam", "cp14",""), ac("Mi7","cp90","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 17*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 18*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 19*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
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
