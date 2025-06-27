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
const NOMBREDELCANTO = "LETANÍAS PENITENCIALES I";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Letanía para la Celebración Penitencial – modelo abreviado",
      dbnos: "191",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Tú que al ciego que gritaba le diste la vista,",
/* 2 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 3 */        "Señor, ten piedad. A SEÑOR, TEN PIEDAD.",
/* 4 */        "Tú que no condenaste a la adúltera,",
/* 5 */        "TEN PIEDAD DE MÍ...",
/* 6 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 7 */        "Tú que comiste con publicanos y pecadores,",
/* 8 */        "TEN PIEDAD DE MÍ...",
/* 9 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 10 */        "Tú que llevaste la salvación a la casa de Zaqueo,",
/* 11 */        "TEN PIEDAD DE MÍ...",
/* 12 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 13 */        "Tú que de la muerte llamaste a Lázaro,",
/* 14 */        "TEN PIEDAD DE MÍ...",
/* 15 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 16 */        "Tú que a Judas lo amaste hasta el final,",
/* 17 */        "TEN PIEDAD DE MÍ...",
/* 18 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 19 */        "Señor, ten piedad.",
/* 20 */        "SEÑOR, TEN PIEDAD.",
/* 21 */        "Tú que desde la cruz perdonaste al ladrón,",
/* 22 */        "TEN PIEDAD DE MÍ...",
/* 23 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 24 */        "Tú que eres el único que no te escandalizas de mí,",
/* 25 */        "TEN PIEDAD DE MÍ...",
/* 26 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 27 */        "Tú que eres el único que amas al enemigo",
/* 28 */        "TEN PIEDAD DE MÍ...",
/* 29 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 30 */        "Tú que has entrado en la muerte por mis pecados, Señor,",
/* 31 */        "TEN PIEDAD DE MÍ...",
/* 32 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 33 */        "Tú que para mi salvación has resucitado de la muerte,",
/* 34 */        "TEN PIEDAD DE MÍ...",
/* 35 */        "TEN PIEDAD DE MÍ, QUE SOY UN PECADOR.",
/* 36 */        "Señor, ten piedad.",
/* 37 */        "SEÑOR, TEN PIEDAD.",
/* 38 */        "TEN PIEDAD DE MÍ...",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 2*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 3*/      [ac("Do", "cp14",""), ac("Si","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 4*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 5*/      [ac("Si", "cp","7")],
/* 6*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 7*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 8*/      [ac("Si", "cp14","7")],
/* 9*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 10*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 11*/      [ac("Si", "cp14","7")],
/* 12*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 13*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 14*/      [ac("Si", "cp14","7")],
/* 15*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 16*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 19*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 20*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 21*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 22*/      [ac("Si", "cp14","7")],
/* 23*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 24*/      [ac("Mim", "cp14",""), ac("Lam","cp90","")],
/* 25*/      [ac("Si", "cp14","7")],
/* 26*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 27*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 28*/      [ac("Si", "cp14","7")],
/* 29*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 30*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 31*/      [ac("Si", "cp14","7")],
/* 32*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 33*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 34*/      [ac("Si", "cp14","7")],
/* 35*/      [ac("Si", "cp14","7"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 36*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 37*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 38*/      [ac("Si", "cp14","7")],
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
