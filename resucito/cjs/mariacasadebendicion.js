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
const NOMBREDELCANTO = "MARÍA, CASA DE BENDICIÓN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 2,1–11 – Las Bodas de Caná",
      dbnos: "109",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "MARÍA, CASA DE BENDICIÓN,",
/* 2 */        "SALUD DE NUESTRO SIGLO,",
/* 3 */        "MORADA TERRESTRE DEL HUMILDE.",
/* 4 */        "C Tú, como en Caná de Galilea,",
/* 5 */        "has visto que nos faltaba el vino;",
/* 6 */        "que nuestra fiesta no era fiesta,",
/* 7 */        "que nuestra vida no era vida,",
/* 8 */        "porque la muerte reinaba en nosotros.",
/* 9 */        "MARÍA, CASA DE BENDICIÓN,...",
/* 10 */        "SALUD DE NUESTRO SIGLO,",
/* 11 */        "MORADA TERRESTRE DEL HUMILDE.",
/* 12 */        "Y tú nos has llevado hasta tu Hijo,",
/* 13 */        "nos has enseñado a obedecerle",
/* 14 */        "y a hacer todo lo que nos diga Él,",
/* 15 */        "para que transforme nuestra agua en vino nuevo.",
/* 16 */        "¡VICTORIA! ¡VICTORIA!",
/* 17 */        "¡VIDA ETERNA EN CRISTO RESUCITADO!",
/* 18 */        "Aleluya, alelú, aleluya.",
/* 19 */        "ALELUYA,ALELÚ,ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m"), ac("Re","cp150","m")],
/* 2*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 3*/      [ac("La", "cp14","7")],
/* 4*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 5*/      [ac("Sol", "cp","m"), ac("La","cp90","7")],
/* 6*/      [ac("Si♭", "cp14","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("La", "cp14","7")],
/* 9*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m"), ac("Re","cp150","m")],
/* 10*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 11*/      [ac("La", "cp14","7")],
/* 12*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 13*/      [ac("Solm", "cp14","")],
/* 14*/      [ac("La", "cp14","7")],
/* 15*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 16*/      [ac("Rem", "cp14","Do")],
/* 17*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 18*/      [ac("Re", "cp14","m"), ac("Do","cp90",""), ac("Re","cp150","m")],
/* 19*/      [ac("Do", "cp14",""), ac("Re","cp90","m")],
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
