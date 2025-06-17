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
const NOMBREDELCANTO = "JERUSALÉN RECONSTRUIDA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Tobias 13,11-17",
      dbnos: "94",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Bendice, alma mía al Señor,",
/* 2 */        "bendice, alma mía, al gran Rey,",
/* 3 */        "porque será reconstruida",
/* 4 */        "Jerusalén, Jerusalén.",
/* 5 */        "JERUSALÉN, JERUSALÉN,",
/* 6 */        "JERUSALÉN, JERUSALÉN.",
/* 7 */        "JERUSALÉN RECONSTRUIDA,",
/* 8 */        "JERUSALÉN PARA SIEMPRE.",
/* 9 */        "Jerusalén será reconstruida,",
/* 10 */        "con zafiros y esmeraldas,",
/* 11 */        "de piedras preciosas sus murallas,",
/* 12 */        "sus torres con oro puro.",
/* 13 */        "Sus plazas serán de rubí,",
/* 14 */        "sus calles de oro de Ofir,",
/* 15 */        "sobre sus puertas se exultará",
/* 16 */        "y en sus casas se cantará.",
/* 17 */        "JERUSALÉN, JERUSALÉN,...",
/* 18 */        "JERUSALÉN, JERUSALÉN.",
/* 19 */        "JERUSALÉN RECONSTRUIDA,",
/* 20 */        "JERUSALÉN PARA SIEMPRE.",
/* 21 */        "Brillará tu luz hasta los confines de la tierra,",
/* 22 */        "vendrán a ti pueblos numerosos,",
/* 23 */        "vendrán a ti todas las naciones,",
/* 24 */        "hasta la casa de tu Nombre.",
/* 25 */        "Las generaciones te cantarán,",
/* 26 */        "todos los pueblos exultarán",
/* 27 */        "y en ella el nombre de tu Elegido",
/* 28 */        "será para siempre, será para siempre.",
/* 29 */        "JERUSALÉN, JERUSALÉN,...",
/* 30 */        "JERUSALÉN, JERUSALÉN.",
/* 31 */        "JERUSALÉN RECONSTRUIDA,",
/* 32 */        "JERUSALÉN PARA SIEMPRE.",
/* 33 */        "Malditos sean los que te dicen palabras crueles,",
/* 34 */        "malditos sean los que te destruyen,",
/* 35 */        "todos los que derriban tus murallas,",
/* 36 */        "y tiran por tierra tus torres.",
/* 37 */        "Mas sean benditos, benditos para siempre,",
/* 38 */        "los que te construyen, los que te edifican.",
/* 39 */        "Benditos los que te aman,",
/* 40 */        "los que lloran por tus castigos,",
/* 41 */        "porque en tus puertas exultarán,",
/* 42 */        "porque en sus casas te cantarán.",
/* 43 */        "JERUSALÉN, JERUSALÉN,...",
/* 44 */        "JERUSALÉN, JERUSALÉN.",
/* 45 */        "JERUSALÉN RECONSTRUIDA,",
/* 46 */        "JERUSALÉN PARA SIEMPRE.",
/* 47 */        "ALELUYA,ALELUYA,ALELUYA,ALELUYA.",
/* 48 */        "ALELUYA,ALELUYA,ALELUYA,ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Re", "cp14","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Mi", "cp","m"), ac("Re","cp90","")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Re", "cp14","")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Re", "cp14","")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("Re", "cp14","")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Re", "cp14","")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Re", "cp14","")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Re", "cp14","")],
/* 24*/      [ac("Mlm", "cp14","")],
/* 25*/      [ac("Re", "cp14","")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Re", "cp14","")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("Re", "cp14","")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35*/      [ac("Re", "cp14","")],
/* 36*/      [ac("Mi", "cp14","m")],
/* 37*/      [ac("Re", "cp14",""), ac("Mim","cp90","")],
/* 38*/      [ac("Re", "cp14",""), ac("Mim","cp90","")],
/* 39*/      [ac("Re", "cp14","")],
/* 40*/      [ac("Mi", "cp14","m")],
/* 41*/      [ac("Re", "cp14","")],
/* 42*/      [ac("Mi", "cp14","m")],
/* 43*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 44*/      [ac("Mi", "cp14","m")],
/* 45*/      [ac("Re", "cp14","")],
/* 46*/      [ac("Mi", "cp14","m")],
/* 47*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Mi","cp150","m")],
/* 48*/      [ac("Re", "cp14",""), ac("Mim","cp90","")],
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
