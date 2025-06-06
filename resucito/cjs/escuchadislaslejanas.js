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
const NOMBREDELCANTO = "ESCUCHAD, ISLAS LEJANAS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaias 49,1-16 - Segundo canto de Siervo de Yahveh",
      dbnos: "70",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Escuchad, islas lejanas,",
/* 2 */        "prestad atención, naciones,",
/* 3 */        "así habla el Señor, el Santo de Israel:",
/* 4 */        "Aquel que tiene la vida despreciada",
/* 5 */        "y es el abominio de las gentes,",
/* 6 */        "al esclavo de los dominadores:",
/* 7 */        "TE VERÁN LOS REYES,",
/* 8 */        "SE PONDRÁN EN PIE.",
/* 9 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 10 */        "SE INCLINARÁN,",
/* 11 */        "YO TE HE ELEGIDO,",
/* 12 */        "TE HE ELEGIDO.",
/* 13 */        "En el día favorable te ayudaré,",
/* 14 */        "en el día de la muerte te asistiré,",
/* 15 */        "pues te he elegido",
/* 16 */        "como alianza a las naciones.",
/* 17 */        "TE VERÁN LOS REYES,...",
/* 18 */        "SE PONDRÁN EN PIE.",
/* 19 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 20 */        "SE INCLINARÁN,",
/* 21 */        "YO TE HE ELEGIDO,",
/* 22 */        "TE HE ELEGIDO.",
/* 23 */        "Dirás a los prisioneros: «Salid»;",
/* 24 */        "dirás a los ciegos: «Mirad»;",
/* 25 */        "conducirás a los pueblos",
/* 26 */        "por el camino de la vida.",
/* 27 */        "TE VERÁN LOS REYES,...",
/* 28 */        "SE PONDRÁN EN PIE.",
/* 29 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 30 */        "SE INCLINARÁN,",
/* 31 */        "YO TE HE ELEGIDO,",
/* 32 */        "TE HE ELEGIDO.",
/* 33 */        "Mas Sión dice: «Yahveh me ha abandonado,",
/* 34 */        "Yahveh me ha olvidado».",
/* 35 */        "¿Acaso una madre olvida a su hijo de pecho,",
/* 36 */        "es que se olvida del hijo de su seno?",
/* 37 */        "PUES AUNQUE UNA MADRE",
/* 38 */        "SE OLVIDASE DE SU HIJO,",
/* 39 */        "YO JAMÁS TE OLVIDARÉ.",
/* 40 */        "MÍRAME, EN LAS PALMAS DE MIS MANOS",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","7")],
/* 2 */     [ac("", "cp0","")],
/* 3 */     [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp14","")],
/* 5*/      [ac("Fa#", "cp18",""), ac("Sol","cp409","")],
/* 6*/      [ac("Fa#", "cp437","")],
/* 7*/      [ac("Re", "cp0","")],
/* 8 */     [ac("", "cp0","")],
/* 9*/      [ac("Fa#", "cp118","m")],
/* 10*/     [ac("Sol", "cp228","")],
/* 11*/     [ac("", "cp0","")],
/* 12 */    [ac("Fa#", "cp189","")],
/* 13*/     [ac("Re", "cp6","")],
/* 14*/     [ac("Fa#", "cp121","m"), ac("Sol","cp521","")],
/* 15*/     [ac("", "cp0","")],
/* 16 */    [ac("Fa#", "cp401","")],
/* 17*/     [ac("Re", "cp0","")],
/* 18 */    [ac("", "cp0","")],
/* 19*/     [ac("Fa#", "cp118","m")],
/* 20*/     [ac("Sol", "cp228","")],
/* 21*/     [ac("", "cp0","")],
/* 22 */    [ac("Fa#", "cp189","")],
/* 23*/     [ac("Re", "cp0","")],
/* 24*/     [ac("Fa#", "cp32","m"), ac("Sol","cp372","")],
/* 25*/     [ac("", "cp0","")],
/* 26 */    [ac("Fa#", "cp343","")],
/* 27*/     [ac("Re", "cp0","")],
/* 28 */    [ac("", "cp0","")],
/* 29*/     [ac("Fa#", "cp118","m")],
/* 30*/     [ac("Sol", "cp228","")],
/* 31*/     [ac("", "cp0","")],
/* 32 */    [ac("Fa#", "cp189","")],
/* 33*/     [ac("Si", "cp4","m"), ac("Mi","cp325","m"), ac("Si","cp650","m")],
/* 34*/     [ac("Mi", "cp72","m"), ac("Si","cp314","m")],
/* 35*/     [ac("Sol", "cp14",""), ac("Fa#","cp659","")],
/* 36*/     [ac("Sol", "cp14",""), ac("Fa#","cp532","")],
/* 37*/     [ac("Re", "cp0",""), ac("Fa#","cp368","m")],
/* 38*/     [ac("Sol", "cp357","")],
/* 39*/     [ac("Fa#", "cp381","")],
/* 40*/     [ac("Sol", "cp14","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
/* 1 */        "TE LLEVO TATUADA.",
/* 2 */        "MÍRAME, EN LAS PALMAS DE MIS MANOS",
/* 3 */        "TE LLEVO TATUADA.",
/* 4 */        "TE VERÁN LOS REYES,...",
/* 5 */        "SE PONDRÁN EN PIE.",
/* 6 */        "LOS PRÍNCIPES DE LA TIERRA",
/* 7 */        "SE INCLINARÁN,",
/* 8 */        "YO TE HE ELEGIDO,",
/* 9 */        "TE HE ELEGIDO.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Fa#", "cp250","")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Fa#", "cp250","")],
/* 4*/      [ac("Re", "cp0","")],
/* 5 */     [ac("", "cp0","")],
/* 6*/      [ac("Fa#", "cp118","m")],
/* 7*/      [ac("Sol", "cp228","")],
/* 8*/      [ac("", "cp0","")],
/* 9 */     [ac("Fa#", "cp189","")],
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
