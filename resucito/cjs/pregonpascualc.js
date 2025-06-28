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
const NOMBREDELCANTO = "PREGÓN PASCUAL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "«Exsultet»",
      dbnos: "206",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡Oh admirable condescendencia de tu amor!",
/* 2 */        "¡Oh incomparable ternura y caridad!,",
/* 3 */        "por rescatar al esclavo has sacrificado al Hijo.",
/* 4 */        "Sin el pecado de Adán,",
/* 5 */        "Cristo no nos habría rescatado.",
/* 6 */        "¡OH FELIZ CULPA QUE MERECIÓ",
/* 7 */        "TAN GRANDE REDENTOR!",
/* 8 */        "¡OH FELIZ CULPA!",
/* 9 */        "¡Oh noche maravillosa",
/* 10 */        "en que despojaste al Faraón",
/* 11 */        "y enriqueciste a Israel!",
/* 12 */        "¡Oh noche maravillosa,",
/* 13 */        "tú sola conociste la hora",
/* 14 */        "en que Cristo resucitó!",
/* 15 */        "¡Oh noche que destruyes el pecado",
/* 16 */        "y lavas todas nuestras culpas!",
/* 17 */        "¡Oh noche realmente gloriosa",
/* 18 */        "que reconcilias",
/* 19 */        "al hombre con su Dios!",
/* 20 */        "ESTA ES LA NOCHE",
/* 21 */        "EN QUE CRISTO HA VENCIDO LA MUERTE BIS",
/* 22 */        "Y DEL INFIERNO RETORNA VICTORIOSO.",
/* 23 */        "En esta noche acepta, Padre Santo,",
/* 24 */        "este sacrificio de alabanza que la Iglesia",
/* 25 */        "te ofrece por medio de sus ministros",
/* 26 */        "en la liturgia solemne de este cirio,",
/* 27 */        "que es el signo de la nueva luz.",
/* 28 */        "Te rogamos, Señor, que este cirio",
/* 29 */        "ofrecido en el honor de tu nombre",
/* 30 */        "brille radiante;",
/* 31 */        "llegue hasta ti, como perfume suave,",
/* 32 */        "se confunda con las estrellas del cielo.",
/* 33 */        "Lo encuentre encendido el lucero de la mañana,",
/* 34 */        "esa estrella que no conoce el ocaso.",
/* 35 */        "QUE ES CRISTO TU HIJO,",
/* 36 */        "RESUCITADO, RESUCITADO",
/* 37 */        "DE LA MUERTE.",
/* 38 */        "AMÉN, AMÉN, AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 5*/      [ac("Fa", "cp",""), ac("Mi","cp90","7")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 18*/      [ac("Fa", "cp14","")],
/* 19*/      [ac("Mi", "cp14","7")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 24*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7"), ac("La","cp150","m")],
/* 29*/      [ac("Sol", "cp14","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("La", "cp14","m")],
/* 33*/      [ac("Sol", "cp14","")],
/* 34*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 35*/      [ac("La", "cp14","m")],
/* 36*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 37*/      [ac("Mi", "cp14","")],
/* 38*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
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
