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
const NOMBREDELCANTO = "LEVANTO MIS OJOS A LOS MONTES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 121 (120)",
      dbnos: "105",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "LEVANTO MIS OJOS A LOS MONTES:",
/* 2 */        "¿DE DÓNDE ME VENDRÁ EL AUXILIO?",
/* 3 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 4 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 5 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 6 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 7 */        "No permitirá que resbale tu pie,",
/* 8 */        "tu guardián no duerme;",
/* 9 */        "no duerme ni reposa",
/* 10 */        "el guardián de Israel.",
/* 11 */        "LEVANTO MIS OJOS A LOS MONTES...",
/* 12 */        "¿DE DÓNDE ME VENDRÁ EL AUXILIO?",
/* 13 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 14 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 15 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 16 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 17 */        "El Señor te guarda a su sombra,",
/* 18 */        "Él está a tu derecha;",
/* 19 */        "de día el sol no te hará daño,",
/* 20 */        "ni la luna de noche.",
/* 21 */        "LEVANTO MIS OJOS A LOS MONTES...",
/* 22 */        "¿DE DÓNDE ME VENDRÁ EL AUXILIO?",
/* 23 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 24 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 25 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 26 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 27 */        "El Señor te guarda de todo mal,",
/* 28 */        "él guarda tu alma;",
/* 29 */        "vigila tus entradas y salidas,",
/* 30 */        "ahora y por siempre.",
/* 31 */        "LEVANTO MIS OJOS A LOS MONTES...",
/* 32 */        "¿DE DÓNDE ME VENDRÁ EL AUXILIO?",
/* 33 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 34 */        "QUE HIZO EL CIELO Y LA TIERRA.",
/* 35 */        "EL AUXILIO ME VIENE DEL SEÑOR,",
/* 36 */        "QUE HIZO EL CIELO Y LA TIERRA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 2*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 3*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 4*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 5*/      [ac("Do", "cp",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 6*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 7*/      [ac("I", "cp14",""), ac("m","cp90","")],
/* 8*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 9*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 10*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 12*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 13*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 14*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 15*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 16*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 17*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 18*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 19*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 20*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 21*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 22*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 23*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 24*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 25*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 26*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 27*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 28*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 29*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 30*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 31*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 32*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 33*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 34*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Sol","cp150","")],
/* 35*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
/* 36*/      [ac("Do", "cp14",""), ac("Re","cp90","7"), ac("Sol","cp150","")],
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
