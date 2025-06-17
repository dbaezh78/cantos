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
const NOMBREDELCANTO = "LA CORDERA DE DIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 1,18s; 2,13s.18",
      dbnos: "96",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Era la Virgen María prometida de José,",
/* 2 */        "cuando antes de que vivieran juntos,",
/* 3 */        "se encontró encinta por obra",
/* 4 */        "del Espíritu Santo.",
/* 5 */        "Y José, como era justo",
/* 6 */        "y no quería repudiarla,",
/* 7 */        "decidió abandonarla en secreto.",
/* 8 */        "QUÉ AMARGA ES EL AGUA, MARÍA,",
/* 9 */        "CORDERA DE DIOS, HUMILDE CORDERA,",
/* 10 */        "QUE NO TE RESISTES AL MAL.",
/* 11 */        "MADRE DE JESÚS Y MADRE NUESTRA,",
/* 12 */        "RUEGA POR NOSOTROS,",
/* 13 */        "RUEGA POR NOSOTROS.",
/* 14 */        "María dio a luz a su hijo,",
/* 15 */        "lo envolvió en pañales",
/* 16 */        "y lo acostó en un pesebre",
/* 17 */        "porque no había sitio para ellos en la posada.",
/* 18 */        "QUÉ AMARGA ES EL AGUA, MARÍA,...",
/* 19 */        "CORDERA DE DIOS, HUMILDE CORDERA,",
/* 20 */        "QUE NO TE RESISTES AL MAL.",
/* 21 */        "MADRE DE JESÚS Y MADRE NUESTRA,",
/* 22 */        "RUEGA POR NOSOTROS,",
/* 23 */        "RUEGA POR NOSOTROS.",
/* 24 */        "Y una noche José se levantó,",
/* 25 */        "tomó al niño y a su madre",
/* 26 */        "y huyó a Egipto",
/* 27 */        "porque querían matar al niño.",
/* 28 */        "QUÉ AMARGA ES EL AGUA, MARÍA,...",
/* 29 */        "CORDERA DE DIOS, HUMILDE CORDERA,",
/* 30 */        "QUE NO TE RESISTES AL MAL.",
/* 31 */        "MADRE DE JESÚS Y MADRE NUESTRA,",
/* 32 */        "RUEGA POR NOSOTROS,",
/* 33 */        "RUEGA POR NOSOTROS.",
/* 34 */        "Un grito se siente en Ramá, ¡Ay Ayaay!",
/* 35 */        "un llanto y un lamento grande:",
/* 36 */        "es Raquel que llora a sus hijos,",
/* 37 */        "y no quiere ser consolada,",
/* 38 */        "porque ya no existen.",
/* 39 */        "QUÉ AMARGA ES EL AGUA, MARÍA,...",
/* 40 */        "CORDERA DE DIOS, HUMILDE CORDERA,",
/* 41 */        "QUE NO TE RESISTES AL MAL.",
/* 42 */        "MADRE DE JESÚS Y MADRE NUESTRA,",
/* 43 */        "RUEGA POR NOSOTROS,",
/* 44 */        "RUEGA POR NOSOTROS.",
/* 45 */        "El Ángel del Señor le dijo a José en Egipto:",
/* 46 */        "«Levántate, toma contigo al niño y a su madre",
/* 47 */        "y vuelve a la tierra de Israel,",
/* 48 */        "porque \"de Egipto llamé a mi Hijo\"».",
/* 49 */        "CORDERA DE DIOS, HUMILDE CORDERA,...",
/* 50 */        "QUE NO TE RESISTES AL MAL.",
/* 51 */        "MADRE DE JESÚS Y MADRE NUESTRA,",
/* 52 */        "RUEGA POR NOSOTROS,",
/* 53 */        "RUEGA POR NOSOTROS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 2*/      [ac("Do", "cp14","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Si", "cp14","7")],
/* 5*/      [ac("Mi", "cp","m")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Do", "cp14","")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Si", "cp14","7")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Do", "cp14","")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Si", "cp14","7")],
/* 23*/      [ac("Mi", "cp14","m")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Do", "cp14","")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Do", "cp14","")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Si", "cp14","7")],
/* 33*/      [ac("Mi", "cp14","m")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35*/      [ac("La", "cp14","m")],
/* 36*/      [ac("Do", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Si", "cp14","7")],
/* 39*/      [ac("Mi", "cp14","m")],
/* 40*/      [ac("Do", "cp14","")],
/* 41*/      [ac("Mi", "cp14","m")],
/* 42*/      [ac("La", "cp14","m")],
/* 43*/      [ac("Si", "cp14","7")],
/* 44*/      [ac("Mi", "cp14","m")],
/* 45*/      [ac("Mi", "cp14","m")],
/* 46*/      [ac("La", "cp14","m")],
/* 47*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 48*/      [ac("Mi", "cp14","m")],
/* 49*/      [ac("Do", "cp14","")],
/* 50*/      [ac("Mi", "cp14","m")],
/* 51*/      [ac("La", "cp14","m")],
/* 52*/      [ac("Si", "cp14","7")],
/* 53*/      [ac("Mi", "cp14","m")],
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
