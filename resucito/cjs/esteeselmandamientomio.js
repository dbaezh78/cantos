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
const NOMBREDELCANTO = "ESTE ES EL MANDAMIENTO MÍO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Jn 15,12ss",
      dbnos: "72",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ESTE ES EL MANDAMIENTO MÍO:",
/* 2 */        "QUE OS AMÉIS.",
/* 3 */        "ESTE ES EL MANDAMIENTO MÍO:",
/* 4 */        "QUE OS AMÉIS",
/* 5 */        "LOS UNOS A LOS OTROS",
/* 6 */        "COMO YO OS HE AMADO,",
/* 7 */        "COMO YO OS HE AMADO,",
/* 8 */        "COMO YO OS HE AMADO.",
/* 9 */        "Nadie tiene mayor amor",
/* 10 */        "que el que da su vida por sus amigos.",
/* 11 */        "Vosotros sois mis amigos,",
/* 12 */        "vosotros sois mis amigos.",
/* 13 */        "Vosotros sois mis amigos,",
/* 14 */        "vosotros sois mis amigos.",
/* 15 */        "No me habéis elegido vosotros a mí,",
/* 16 */        "NO ME HABÉIS ELEGIDO",
/* 17 */        "VOSOTROS A MÍ,",
/* 18 */        "sino que yo os he elegido a vosotros,",
/* 19 */        "SINO QUE YO",
/* 20 */        "OS HE ELEGIDO A VOSOTROS.",
/* 21 */        "Si el mundo os odia",
/* 22 */        "sabed que antes me ha odiado a mí;",
/* 23 */        "si el mundo os odia.",
/* 24 */        "Padre, como tú estás en mí y yo estoy en ti,",
/* 25 */        "que ellos sean uno en nosotros,",
/* 26 */        "QUE ELLOS SEAN UNO EN NOSOTROS,",
/* 27 */        "para que el mundo crea",
/* 28 */        "que tú me has enviado,",
/* 29 */        "PARA QUE EL MUNDO CREA",
/* 30 */        "QUE TÚ ME HAS ENVIADO.",
/* 31 */        "ESTE ES EL MANDAMIENTO MÍO:",
/* 32 */        "QUE OS AMÉIS COMO YO OS HE AMADO,",
/* 33 */        "QUE OS AMÉIS COMO YO OS HE AMADO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Do","cp90","Mi")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Do", "cp14","Mi")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Do", "cp","Mi")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Fa", "cp14","Mi")],
/* 8*/      [ac("Fa", "cp14","Mi")],
/* 9*/      [ac("La", "cp14","7")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("Fa", "cp14","Mi")],
/* 13*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 14*/      [ac("Fa", "cp14","Mi")],
/* 15*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","")],
/* 18*/      [ac("Rem", "cp14","Mi")],
/* 19*/      [ac("Rem", "cp14","")],
/* 20*/      [ac("Mi", "cp14","")],
/* 21*/      [ac("La", "cp14","7")],
/* 22*/      [ac("Rem", "cp14","")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24*/      [ac("La", "cp14","7"), ac("Re","cp90","m"), ac("Mi","cp150","")],
/* 25*/      [ac("Re", "cp14","m *"), ac("Mi","cp90","")],
/* 26*/      [ac("Re", "cp14","m"), ac("Mi", "cp514","")],
/* 27*/      [ac("Fa", "cp14","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("Fa", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("Rem", "cp14","Mi")],
/* 32*/      [ac("Rem", "cp14","Mi")],
/* 33*/      [ac("Fa", "cp14","Mi")],
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
