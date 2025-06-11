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
const factor = 1.5; // Factor diferente para móviles
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
const NOMBREDELCANTO = "ESCÓNDEME EN LO OCULTO DE TU TIENDA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 27 (26)",
      dbnos: "69",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ESCÓNDEME",
/* 2 */        "EN LO OCULTO DE TU TIENDA,",
/* 3 */        "SOBRE TU ROCA LEVÁNTAME.",
/* 4 */        "Yahveh es mi luz y mi salvación,",
/* 5 */        "¿a quién he de temer?",
/* 6 */        "Yahveh es el refugio de mi vida,",
/* 7 */        "¿por quién he de temblar?",
/* 8 */        "ESCÓNDEME...",
/* 9 */        "EN LO OCULTO DE TU TIENDA,",
/* 10 */        "SOBRE TU ROCA LEVÁNTAME.",
/* 11 */        "Cuando se acercan contra mí los malvados",
/* 12 */        "a devorar mi carne,",
/* 13 */        "son ellos, mis adversarios y enemigos,",
/* 14 */        "los que tropiezan y sucumben.",
/* 15 */        "ESCÓNDEME...",
/* 16 */        "EN LO OCULTO DE TU TIENDA,",
/* 17 */        "SOBRE TU ROCA LEVÁNTAME.",
/* 18 */        "Aunque acampe un ejército contra mí,",
/* 19 */        "mi corazón no teme;",
/* 20 */        "aunque estalle una guerra contra mí,",
/* 21 */        "estoy seguro en ella.",
/* 22 */        "ESCÓNDEME...",
/* 23 */        "EN LO OCULTO DE TU TIENDA,",
/* 24 */        "SOBRE TU ROCA LEVÁNTAME.",
/* 25 */        "Una cosa he pedido a Yahveh,",
/* 26 */        "eso solo estoy buscando:",
/* 27 */        "habitar en la Casa de Yahveh,",
/* 28 */        "todos los días de mi vida.",
/* 29 */        "ESCÓNDEME...",
/* 30 */        "EN LO OCULTO DE TU TIENDA,",
/* 31 */        "SOBRE TU ROCA LEVÁNTAME.",
/* 32 */        "Él me dará cobijo en su cabaña",
/* 33 */        "el día de la desdicha;",
/* 34 */        "me esconderá en lo oculto de su tienda,",
/* 35 */        "sobre su roca me levantará.",
/* 36 */        "ESCÓNDEME...",
/* 37 */        "EN LO OCULTO DE TU TIENDA,",
/* 38 */        "SOBRE TU ROCA LEVÁNTAME.",
/* 39 */        "Escucha, Yahveh, mi voz que clama,",
/* 40 */        "¡tenme piedad, respóndeme!",
/* 41 */        "Sí, Yahveh, tu rostro busco:",
/* 42 */        "no me ocultes tu rostro.",
/* 43 */        "ESCÓNDEME...",
/* 44 */        "EN LO OCULTO DE TU TIENDA,",
/* 45 */        "SOBRE TU ROCA LEVÁNTAME.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/       [ac("La", "cp10","m")],
/* 2*/       [ac("Sol", "cp451","")],
/* 3*/       [ac("Fa", "cp238",""), ac("Mi","cp503","")],
/* 4*/       [ac("La", "cp14","m"), ac("Fa","cp544","")],
/* 5*/       [ac("Mi", "cp","")],
/* 6*/       [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 7*/       [ac("Mi", "cp14","")],
/* 8*/       [ac("La", "cp14","m")],
/* 9*/       [ac("Sol", "cp14","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 25*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 32*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 33*/      [ac("Mi", "cp14","")],
/* 34*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 35*/      [ac("Mi", "cp14","")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("Sol", "cp14","")],
/* 38*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 39*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 40*/      [ac("Mi", "cp14","")],
/* 41*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 42*/      [ac("Mi", "cp14","")],
/* 43*/      [ac("La", "cp14","m")],
/* 44*/      [ac("Sol", "cp14","")],
/* 45*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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