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
const NOMBREDELCANTO = "SI ME HE REFUGIADO EN EL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 11(10)",
      dbnos: "153",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SI ME HE REFUGIADO EN EL SEÑOR,",
/* 2 */        "¿CÓMO PODÉIS DECIRME,",
/* 3 */        "CÓMO PODÉIS DECIRME",
/* 4 */        "QUE HUYA COMO EL PÁJARO AL MONTE,",
/* 5 */        "QUE HUYA COMO EL PÁJARO AL MONTE?",
/* 6 */        "Yo sé que los malvados tensan el arco,",
/* 7 */        "que ajustan las flechas a la cuerda,",
/* 8 */        "para herir en la sombra al inocente.",
/* 9 */        "Mas cuando fallan los cimientos,",
/* 10 */        "¿qué puede hacer el justo?,",
/* 11 */        "¿qué puede hacer el justo?",
/* 12 */        "SI ME HE REFUGIADO EN EL SEÑOR,",
/* 13 */        "¿CÓMO PODÉIS DECIRME,",
/* 14 */        "CÓMO PODÉIS DECIRME",
/* 15 */        "QUE HUYA COMO EL PÁJARO AL MONTE,",
/* 16 */        "QUE HUYA COMO EL PÁJARO AL MONTE?",
/* 17 */        "Yo sé que los malvados tensan el arco,",
/* 18 */        "que ajustan las flechas a la cuerda,",
/* 19 */        "para herir en la sombra al inocente.",
/* 20 */        "Mas cuando fallan los cimientos,",
/* 21 */        "¿qué puede hacer el justo?,",
/* 22 */        "¿qué puede hacer el justo?",
/* 23 */        "Mas el Señor, el Señor",
/* 24 */        "está en su templo santo,",
/* 25 */        "tiene su trono en el cielo;",
/* 26 */        "sus ojos observan el mundo,",
/* 27 */        "sus pupilas las acciones de los hombres.",
/* 28 */        "El Señor escruta a los justos,",
/* 29 */        "mas también escruta a los malvados;",
/* 30 */        "y el Señor no ama la violencia,",
/* 31 */        "el Señor no ama la violencia.",
/* 32 */        "SI ME HE REFUGIADO EN EL SEÑOR...",
/* 33 */        "¿CÓMO PODÉIS DECIRME,",
/* 34 */        "CÓMO PODÉIS DECIRME",
/* 35 */        "QUE HUYA COMO EL PÁJARO AL MONTE,",
/* 36 */        "QUE HUYA COMO EL PÁJARO AL MONTE?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Si","cp90","7")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Mim", "cp14","")],
/* 4*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 5*/      [ac("Do", "cp",""), ac("Si","cp90","7")],
/* 6*/      [ac("Do", "cp14",""), ac("Si7","cp90","")],
/* 7*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 8*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 9*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 10*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 11*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 12*/      [ac("Sol", "cp14",""), ac("Si","cp90","7")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 16*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 17*/      [ac("Do", "cp14",""), ac("Si7","cp90","")],
/* 18*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 19*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 20*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 21*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 22*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 23*/      [ac("Sol", "cp14",""), ac("Si","cp90","7")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 26*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 27*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 28*/      [ac("Sol", "cp14",""), ac("Si","cp90","7"), ac("Mi","cp150","m")],
/* 29*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 30*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 31*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 32*/      [ac("Sol", "cp14",""), ac("Si","cp90","7")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 36*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
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
