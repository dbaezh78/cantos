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
const NOMBREDELCANTO = "HIMNO A LA CARIDAD";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "1 Corintios 13,1-7",
      dbnos: "86",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "TE BENDECIMOS EN ESTA HORA,",
/* 2 */        "¡OH CRISTO MÍO!, VERBO DE DIOS,",
/* 3 */        "LUZ DE LA LUZ SIN COMIENZO.",
/* 4 */        "TE BENDECIMOS, VERBO DE DIOS,",
/* 5 */        "TE BENDECIMOS, VERBO DE DIOS.",
/* 6 */        "Te bendecimos, ¡oh triple luz",
/* 7 */        "de una indivisa gloria!",
/* 8 */        "Has dominado las tinieblas,",
/* 9 */        "has hecho resurgir la luz",
/* 10 */        "resucitando de la noche.",
/* 11 */        "Tú eres la eterna luz",
/* 12 */        "que ilumina nuestras vidas.",
/* 13 */        "Tú eres la eterna luz",
/* 14 */        "que alboreas sobre el mundo.",
/* 15 */        "Tú eres la eterna luz,",
/* 16 */        "te bendecimos, Señor.",
/* 17 */        "TE BENDECIMOS EN ESTA HORA,...",
/* 18 */        "¡OH CRISTO MÍO!, VERBO DE DIOS,",
/* 19 */        "LUZ DE LA LUZ SIN COMIENZO.",
/* 20 */        "TE BENDECIMOS, VERBO DE DIOS,",
/* 21 */        "TE BENDECIMOS, VERBO DE DIOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("Si7", "cp14",""), ac("Mi","cp90","m")],
/* 5*/      [ac("Si7", "cp",""), ac("Mi","cp90","m")],
/* 6*/      [ac("Re7", "cp14",""), ac("Sol","cp90","")],
/* 7*/      [ac("Si7", "cp14","")],
/* 8*/      [ac("Mim", "cp14","")],
/* 9*/      [ac("Si7", "cp14","")],
/* 10*/      [ac("Mim", "cp14","")],
/* 11*/      [ac("Si7", "cp14","")],
/* 12*/      [ac("Mim", "cp14","")],
/* 13*/      [ac("Si7", "cp14","")],
/* 14*/      [ac("Mim", "cp14","")],
/* 15*/      [ac("Si7", "cp14","")],
/* 16*/      [ac("Mim", "cp14","")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Si7", "cp14",""), ac("Mi","cp90","m")],
/* 21*/      [ac("Si7", "cp14",""), ac("Mi","cp90","m")],
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
