/*
╔════════════════════════════════════════════════════════════════╗
║                         FUENTE DEL CANTO                       ║
╠════════════════════════════════════════════════════════════════╣
║                Mapeo para celulares menor a 700px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pcelular = {
    'cp495':'cp643',
    'cp926':'cp928',
    'cp850':'cp860',
    'cp857':'cp852',
    'cp858':'cp861',
    'cp911':'cp913',
    'cp868':'cp858'

      };
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
const factor = 1.3; // Factor diferente para móviles
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
      const factor = 0.98;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "ELÍ, ELÍ, LAMÁ SABACTANÍ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 22 (21)",
      dbnos: "63",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ELÍ, ELÍ, LAMÁ SABACTANÍ.",
/* 2 */        "DIOS MÍO, DIOS MÍO,",
/* 3 */        "¿POR QUÉ ME HAS ABANDONADO?",
/* 4 */        "¡Qué lejos te siento de mis gritos!",
/* 5 */        "De día clamo, y no respondes,",
/* 6 */        "grito de noche, y no hay reposo para mí.",
/* 7 */        "ELÍ, ELÍ, LAMÁ SABACTANÍ...",
/* 8 */        "DIOS MÍO, DIOS MÍO,",
/* 9 */        "¿POR QUÉ ME HAS ABANDONADO?",
/* 10 */        "¡Mas tú eres el Santo,",
/* 11 */        "tú que vives en medio de mi pueblo!",
/* 12 */        "A ti clamaron nuestros padres,",
/* 13 */        "y tú les ayudaste,",
/* 14 */        "en ti confiaron y nunca quedaron confundidos.",
/* 15 */        "Entonces yo, ¿por qué no me ayudas?",
/* 16 */        "¿Acaso no soy un hombre?",
/* 17 */        "Eso soy yo: soy un gusano,",
/* 18 */        "desprecio de la gente, asco del pueblo,",
/* 19 */        "todos los que me ven de mí se ríen,",
/* 20 */        "menean la cabeza y dicen:",
/* 21 */        "«Se confió a Dios, ¡que él lo libre,",
/* 22 */        "que él le salve, si tanto dice que le ama!»",
/* 23 */        "Sí, que tú me amas, sí, que tú me quieres,",
/* 24 */        "en el seno de mi madre me formaste;",
/* 25 */        "cuando me dio a luz ya me ofreció a ti,",
/* 26 */        "desde el vientre de mi madre tú ya eras mi Dios.",
/* 27 */        "ELÍ, ELÍ, LAMÁ SABACTANÍ...",
/* 28 */        "DIOS MÍO, DIOS MÍO,",
/* 29 */        "¿POR QUÉ ME HAS ABANDONADO?",
/* 30 */        "Soy agua sucia que se tira,",
/* 31 */        "todos mis huesos se dislocan,",
/* 32 */        "mi corazón como cera, se derrite en mis entrañas.",
/* 33 */        "Mi paladar está seco como teja,",
/* 34 */        "y mi lengua está pegada a la garganta.",
/* 35 */        "ELÍ, ELÍ, LAMÁ SABACTANÍ...",
/* 36 */        "DIOS MÍO, DIOS MÍO,",
/* 37 */        "¿POR QUÉ ME HAS ABANDONADO?",
/* 38 */        "Perros innumerables me rodean,",
/* 39 */        "una banda de malhechores me acomete,",
/* 40 */        "taladran mis manos y mis pies.",
/* 41 */        "Se pueden contar mis huesos;",
/* 42 */        "me observan y me miran,",
/* 43 */        "se reparten mis vestidos, se sortean mi túnica.",
/* 44 */        "¡Mas tú, Dios mío, no estés lejos!",
/* 45 */        "Ven en mi ayuda, fuerza mía,",
/* 46 */        "libra mi alma de la espada,",
/* 47 */        "libra mi vida de las fauces del león,",
/* 48 */        "libra mi alma de los cuernos de los búfalos.",
/* 49 */        "¡Anunciaré, yo, tu nombre a mis hermanos,",
/* 50 */        "en medio de la asamblea te cantaré!:",
/* 51 */        "«Los que a Yahveh amáis, dadle alabanza,",
/* 52 */        "raza de Jacob, glorificad a Yahveh,",
/* 53 */        "temedle, pueblo de Israel».",
/* 54 */        "Porque ha sido el único",
/* 55 */        "que no ha tenido asco de este pobre",
/* 56 */        "ni ha desdeñado la miseria de mi vida;",
/* 57 */        "no me ha ocultado su rostro cuando le invocaba,",
/* 58 */        "por eso, yo ahora sé que los pobres vivirán.",
/* 59 */        "Los pobres comerán, serán saciados,",
/* 60 */        "los que buscan a Yahveh lo encontrarán:",
/* 61 */        "¡su corazón, su corazón, vivirá para siempre!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp10","m"), ac("La","cp199","m"), ac("Mi","cp418","m")],
/* 2 */     [ac("", "cp0","")],
/* 3*/      [ac("La", "cp139","m"), ac("Mi","cp495","m")],
/* 4*/      [ac("Si", "cp14","7")],
/* 5*/      [ac("", "cp","")],
/* 6 */     [ac("Mi", "cp926","m")],
/* 7*/      [ac("Mi", "cp10","m"), ac("La","cp199","m"), ac("Mi","cp418","m")],
/* 8 */     [ac("", "cp0","")],
/* 9*/      [ac("La", "cp139","m"), ac("Mi","cp495","m")],
/* 10*/     [ac("Si", "cp14","7")],
/* 11 */    [ac("", "cp0","")],
/* 12 */    [ac("", "cp0","")],
/* 13*/     [ac("", "cp0","")],
/* 14 */    [ac("Mi", "cp681","m")],
/* 15*/     [ac("La", "cp521","m")],
/* 16*/     [ac("Mi", "cp312","m")],
/* 17*/     [ac("Si", "cp14","7")],
/* 18 */    [ac("", "cp0","")],
/* 19 */    [ac("", "cp0","")],
/* 20 */    [ac("", "cp0","")],
/* 21*/     [ac("", "cp14","")],
/* 22 */    [ac("Mi", "cp868","m")],
/* 23*/     [ac("La", "cp608","m")],
/* 24*/     [ac("Mi", "cp539","m")],
/* 25*/     [ac("Si", "cp292","7")],
/* 26*/     [ac("Mi", "cp911","m")],
/* 27*/     [ac("Mi", "cp10","m"), ac("La","cp199","m"), ac("Mi","cp418","m")],
/* 28 */    [ac("", "cp0","")],
/* 29*/     [ac("La", "cp139","m"), ac("Mi","cp495","m")],
/* 30*/     [ac("Si", "cp14","7")],
/* 31 */    [ac("", "cp0","")],
/* 32 */    [ac("", "cp0","")],
/* 33*/     [ac("", "cp0","")],
/* 34 */    [ac("Mi", "cp857","m")],
/* 35*/     [ac("Mi", "cp10","m"), ac("La","cp199","m"), ac("Mi","cp418","m")],
/* 36 */    [ac("", "cp0","")],
/* 37*/     [ac("La", "cp139","m"), ac("Mi","cp495","m")],
/* 38*/     [ac("Si", "cp14","7")],
/* 39 */    [ac("", "cp0","")],
/* 40 */    [ac("", "cp0","")],
/* 41 */    [ac("", "cp0","")],
/* 42 */    [ac("", "cp0","")],
/* 43*/     [ac("Mi", "cp670","m")],
/* 44*/     [ac("La", "cp466","m")],
/* 45*/     [ac("Mi", "cp427","m")],
/* 46*/     [ac("Si", "cp14","7")],
/* 47 */    [ac("", "cp0","")],
/* 48*/     [ac("Mi", "cp614","m")],
/* 49*/     [ac("La", "cp609","m")],
/* 50*/     [ac("Mi", "cp564","m")],
/* 51*/     [ac("Si", "cp496","7")],
/* 52 */    [ac("", "cp0","")],
/* 53*/     [ac("Mi", "cp377","m")],
/* 54*/     [ac("", "cp","")],
/* 55*/     [ac("La", "cp431","m")],
/* 56*/     [ac("Mi", "cp562","m")],
/* 57 */    [ac("Si", "cp368","7")],
/* 58*/     [ac("Mi", "cp651","m")],
/* 59*/     [ac("La", "cp835","m")],
/* 60*/     [ac("Mi", "cp636","7")],
/* 61 */    [ac("Si", "cp133","7"), ac("Mi", "cp605","m")],
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
