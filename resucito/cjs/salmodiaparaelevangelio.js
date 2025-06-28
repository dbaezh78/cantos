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
const NOMBREDELCANTO = "SALMODIA PARA EL EVANGELIO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 3,11-20 ",
      dbnos: "208",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Señor esté con vosotros.",
/* 2 */        "Y CON TU ESPÍRITU.",
/* 3 */        "Del evangelio según San Juan.",
/* 4 */        "GLORIA A TI, SEÑOR.",
/* 5 */        "En aquel tiempo Jesús dijo:",
/* 6 */        "«En verdad, en verdad te digo: nosotros hablamos de lo que sabemos",
/* 7 */        "y damos testimonio de lo que hemos visto,",
/* 8 */        "pero vosotros no aceptáis nuestro testimonio.",
/* 9 */        "Si al deciros cosas de la tierra, no creéis,",
/* 10 */        "¿cómo vais a creer si os digo cosas del cielo?",
/* 11 */        "Nadie ha subido al cielo sino el que bajó del cielo, el Hijo del hombre.",
/* 12 */        "Y como Moisés levantó la serpiente en el desierto,",
/* 13 */        "así tiene que ser levantado el Hijo del hombre,",
/* 14 */        "para que todo el que crea tenga por él vida eterna.",
/* 15 */        "Porque tanto amó Dios al mundo que dio a su Hijo único,",
/* 16 */        "para que todo el que crea en él no perezca, sino que tenga vida eterna».",
/* 17 */        "Palabra del Señor.",
/* 18 */        "GLORIA A TI, SEÑOR JESÚS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"),ac("Mim","cp250","")],
/* 2*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 3*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 4*/      [ac("La", "cp14","m"), ac("MI","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
/* 5*/      [ac("Mi", "cp","m")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("Si","cp90","7"), ac("Sol","cp150","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("Si","cp90","7"), ac("Sol","cp150","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 17*/      [ac("Sol", "cp14",""), ac("Si","cp90","7"), ac("Sol","cp150","")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","7"), ac("Mi","cp250","m")],
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
