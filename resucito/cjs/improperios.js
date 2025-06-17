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
const NOMBREDELCANTO = "IMPROPERIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Adoración de la santa Cruz el Viernes santo",
      dbnos: "93",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!",
/* 2 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 3 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 4 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 5 */        "RESPÓNDEME.",
/* 6 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 7 */        "Yo te he hecho salir de Egipto,",
/* 8 */        "yo te he abierto el mar en dos partes,",
/* 9 */        "yo te he liberado del Faraón",
/* 10 */        "y tú, y tú, me has preparado la cruz.",
/* 11 */        "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!...",
/* 12 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 13 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 14 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 15 */        "RESPÓNDEME.",
/* 16 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 17 */        "C Yo te he abierto un camino en el desierto,",
/* 18 */        "yo te he alimentado con el maná,",
/* 19 */        "te he introducido en la Tierra Prometida,",
/* 20 */        "y tú, y tú, me has preparado la cruz.",
/* 21 */        "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!...",
/* 22 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 23 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 24 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 25 */        "RESPÓNDEME.",
/* 26 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 27 */        "¿Qué más he podido hacer por ti",
/* 28 */        "que no haya hecho?",
/* 29 */        "Yo te llamé: «Mi viña amada»,",
/* 30 */        "y tú, y tú me has dado fruto amargo.",
/* 31 */        "Hágios o Théos,",
/* 32 */        "SANCTUS DEUS.",
/* 33 */        "Hágios Ischyrós,",
/* 34 */        "SANCTUS FORTIS.",
/* 35 */        "Hágios Athánatos,",
/* 36 */        "ELÉISON HIMÁS.",
/* 37 */        "Sanctus et inmortalis,",
/* 38 */        "MISERERE NOBIS.",
/* 39 */        "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!...",
/* 40 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 41 */        "¿QUÉ MAL YO TE HE HECHO?",
/* 42 */        "¿EN QUÉ TE HE CONTRISTADO?",
/* 43 */        "RESPÓNDEME.",
/* 44 */        "¿EN QUÉ TE HE CONTRISTADO?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4 */   [ac("", "cp0","")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Si7", "cp14","")],
/* 7*/      [ac("La", "cp14",""), ac("La","cp90","m6")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Si7", "cp14","")],
/* 11*/      [ac("Mi", "cp14","m")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Si7", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("La","cp90","m6")],
/* 18*/      [ac("La", "cp14","m"), ac("La","cp90","m6")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Si7", "cp14","")],
/* 21*/      [ac("Mi", "cp14","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26*/      [ac("Si7", "cp14","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("La", "cp14","m6")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Si7", "cp14","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Si", "cp14","7")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Si", "cp14","7")],
/* 35*/      [ac("La", "cp14","m")],
/* 36*/      [ac("Si", "cp14","7")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Si7", "cp14","")],
/* 39*/      [ac("Mi", "cp14","m")],
/* 40 */   [ac("", "cp0","")],
/* 41*/      [ac("La", "cp14","m")],
/* 42 */   [ac("", "cp0","")],
/* 43 */   [ac("", "cp0","")],
/* 44*/      [ac("Si7", "cp14","")],
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
