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
  else if (anchoPantalla <= 900) {
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
const NOMBREDELCANTO = "DECIDLE A LOS DE CORAZÓN CANSADO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 35,4ss",
      dbnos: "48",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Decidle a los de corazón cansado,",
/* 2 */        "decídselo, decídselo a los pobres:",
/* 3 */        "«¡Ánimo, no temáis!",
/* 4 */        "que vuestro Dios viene a salvaros».",
/* 5 */        "Ya se abren los ojos de los ciegos,",
/* 6 */        "se abren los oídos de los sordos.",
/* 7 */        "El cojo salta como un ciervo,",
/* 8 */        "grita de júbilo la lengua del mudo.",
/* 9 */        "PORQUE SE ABRIRÁ UN CAMINO,",
/* 10 */        "UN CAMINO DE SALVACIÓN;",
/* 11 */        "UNA SENDA, UNA VÍA",
/* 12 */        "PARA LOS POBRES.",
/* 13 */        "Y por ella retornarán",
/* 14 */        "los rescatados del Señor.",
/* 15 */        "Y POR ELLA RETORNARÁN",
/* 16 */        "LOS RESCATADOS DEL SEÑOR.",
/* 17 */        "Todos los pobres, ciegos y cojos,",
/* 18 */        "los alejados del Señor.",
/* 19 */        "TODOS LOS POBRES, CIEGOS Y COJOS,",
/* 20 */        "LOS ALEJADOS DEL SEÑOR.",
/* 21 */        "¡Los pecadores!",
/* 22 */        "Y CANTARÁN FELICIDAD,",
/* 23 */        "Y CANTARÁN FELICIDAD.",
/* 24 */        "ALELUYA, ALELUYA.",
/* 25 */        "ALELUYA, ALELUYA.",
/* 26 */        "ALELUYA, ALELUYA.",
/* 27 */        "ALELUYA, ALELUY",













],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m"), ac("Re","cp90","m9")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("Do","cp150","")],
/* 10*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 11*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Mi", "cp14","m")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Mi", "cp14","m")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 27*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],













],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]
  };/*
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
