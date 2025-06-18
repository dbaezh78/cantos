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
const NOMBREDELCANTO = "ME ENSEÑARÁS EL CAMINO DE LA VIDA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 16 (15)",
      dbnos: "114",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,",
/* 2 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,",
/* 3 */        "ME SACIARÁS DE GOZO EN TU PRESENCIA,",
/* 4 */        "DE ALEGRÍA PERPETUA A TU DERECHA.",
/* 5 */        "Protégeme, Dios mío, en ti me refugio.",
/* 6 */        "Yo digo a Dios: «Tú eres mi Señor,",
/* 7 */        "sin ti no tengo nada».",
/* 8 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,...",
/* 9 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,",
/* 10 */        "ME SACIARÁS DE GOZO EN TU PRESENCIA,",
/* 11 */        "DE ALEGRÍA PERPETUA A TU DERECHA.",
/* 12 */        "El Señor es mi heredad y mi copa,",
/* 13 */        "mi vida está en sus manos;",
/* 14 */        "me ha tocado en suerte un lote hermoso,",
/* 15 */        "me encanta mi heredad.",
/* 16 */        "Bendigo al Señor que me aconseja,",
/* 17 */        "hasta de noche instruye mi corazón,",
/* 18 */        "tengo siempre delante de mí al Señor,",
/* 19 */        "está a mi derecha, no vacilaré.",
/* 20 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,...",
/* 21 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,",
/* 22 */        "ME SACIARÁS DE GOZO EN TU PRESENCIA,",
/* 23 */        "DE ALEGRÍA PERPETUA A TU DERECHA.",
/* 24 */        "Por eso se alegra mi corazón,",
/* 25 */        "exulta mi alma,",
/* 26 */        "y mi carne descansa serena;",
/* 27 */        "porque no abandonarás",
/* 28 */        "mi vida en el sepulcro,",
/* 29 */        "ni dejarás que tu santo",
/* 30 */        "experimente la corrupción,",
/* 31 */        "la corrupción.",
/* 32 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,...",
/* 33 */        "ME ENSEÑARÁS EL CAMINO DE LA VIDA,",
/* 34 */        "ME SACIARÁS DE GOZO EN TU PRESENCIA,",
/* 35 */        "DE ALEGRÍA PERPETUA A TU DERECHA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m"), ac("Fa","cp90",""), ac("Re","cp150","m"), ac("La","cp250","m")],
/* 6*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("Re","cp150","m"), ac("La","cp250","m")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 9*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 12*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 13*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 14*/      [ac("Fa", "cp14","")],
/* 15*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 17*/      [ac("Re", "cp14","m")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 21*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 24*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 25*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("Re", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("Re", "cp14","m")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 32*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 33*/      [ac("Re", "cp14","m"), ac("La","cp90","m")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
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
