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
const NOMBREDELCANTO = "URÍ, URÍ, URÁ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Villancico (Kiko Argüello)",
      dbnos: "164",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Urí, urí, urí, urá,",
/* 2 */        "urí urí urí urá.",
/* 3 */        "URÍ, URÍ, URÍ, URÁ,",
/* 4 */        "URÍ, URÍ, URÍ, URÁ.",
/* 5 */        "URÍ, URÍ, URÍ, URÁ,",
/* 6 */        "PAMPAM, PAMPAM, PAMPARAM PAMPAM,",
/* 7 */        "PAMPAM, PAMPAM, PAMPARAM PAMPAM.",
/* 8 */        "LALALALÁ LALÁ.",
/* 9 */        "Un niño pequeño va a nacer,",
/* 10 */        "un niñito pequeño.",
/* 11 */        "UN NIÑO PEQUEÑO VA A NACER,",
/* 12 */        "UN NIÑITO PEQUEÑO.",
/* 13 */        "¿Cómo se llamará? Emmanuel.",
/* 14 */        "¿CÓMO SE LLAMARÁ? EMMANUEL.",
/* 15 */        "¿CÓMO SE LLAMARÁ? EMMANUEL.",
/* 16 */        "VEN CHIQUITITO, VEN.",
/* 17 */        "URÍ, URÍ, URÍ, URÁ,",
/* 18 */        "URÍ, URÍ, URÍ, URÁ.",
/* 19 */        "URÍ, URÍ, URÍ, URÁ,",
/* 20 */        "PAMPAM, PAMPAM, PAMPARAM PAMPAM,",
/* 21 */        "PAMPAM, PAMPAM, PAMPARAM PAMPAM.",
/* 22 */        "LALALALÁ LALÁ.",
/* 23 */        "Su madrecita está en Belén,",
/* 24 */        "su padre es carpintero.",
/* 25 */        "SU MADRECITA ESTÁ EN BELÉN,",
/* 26 */        "SU PADRE ES CARPINTERO.",
/* 27 */        "¿Cómo se llamará? Emmanuel.",
/* 28 */        "¿CÓMO SE LLAMARÁ? EMMANUEL.",
/* 29 */        "¿CÓMO SE LLAMARÁ? EMMANUEL.",
/* 30 */        "VEN CHIQUITITO, VEN.",
/* 31 */        "URÍ, URÍ, URÍ, URÁ,",
/* 32 */        "URÍ, URÍ, URÍ, URÁ.",
/* 33 */        "URÍ, URÍ, URÍ, URÁ,",
/* 34 */        "PAMPAM, PAMPAM, PAMPARAM PAMPAM,",
/* 35 */        "PAMPAM, PAMPAM, PAMPARAM PAMPAM.",
/* 36 */        "LALALALÁ LALÁ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Si", "cp14","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Si", "cp","7")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Si", "cp14","7")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Si", "cp14","7")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("Si", "cp14","7")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Si", "cp14","7")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Si", "cp14","7")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Si", "cp14","7")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Si", "cp14","7")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Si", "cp14","7")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Si", "cp14","7")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("Si", "cp14","7")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33*/      [ac("Si", "cp14","7")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35*/      [ac("Si", "cp14","7")],
/* 36*/      [ac("Mi", "cp14","m")],
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
