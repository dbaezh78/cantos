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
const NOMBREDELCANTO = "TÚ HAS CUBIERTO DE VERGÜENZA LA MUERTE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Homilía Pascual (Melltón de Sardes)",
      dbnos: "160",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Tú has cubierto de vergüenza la muerte,",
/* 2 */        "tú has llenado de luto el infierno.",
/* 3 */        "Has golpeado la iniquidad,",
/* 4 */        "has privado a la injusticia de sus hijos,",
/* 5 */        "como Moisés al Faraón,",
/* 6 */        "como Moisés al Faraón.",
/* 7 */        "Tú nos has pasado",
/* 8 */        "de la esclavitud a la libertad,",
/* 9 */        "de las tinieblas a la luz,",
/* 10 */        "de la muerte a la vida,",
/* 11 */        "de la tiranía al reino eterno.",
/* 12 */        "Tú eres la Pascua de nuestra salvación;",
/* 13 */        "tú eres el cordero nacido de María.",
/* 14 */        "MARÍA, CORDERA SIN MANCHA,",
/* 15 */        "MARÍA, LA INOCENTE CORDERA.",
/* 16 */        "Tú has sido asesinado en Abel,",
/* 17 */        "tú fuiste atado en Isaac,",
/* 18 */        "vendido en José,",
/* 19 */        "abandonado sobre las aguas en Moisés,",
/* 20 */        "perseguido en David",
/* 21 */        "y despreciado en todos los profetas.",
/* 22 */        "Tú eres el cordero que no abre boca;",
/* 23 */        "tú eres el cordero nacido de María.",
/* 24 */        "MARÍA, CORDERA SIN MANCHA...",
/* 25 */        "MARÍA, LA INOCENTE CORDERA.",
/* 26 */        "Tú fuiste cogido del rebaño,",
/* 27 */        "conducido al sacrificio, inmolado por la tarde,",
/* 28 */        "sepultado en la noche; sobre la cruz",
/* 29 */        "no te fue roto ningún hueso, ni en la tierra",
/* 30 */        "experimentaste la corrupción.",
/* 31 */        "Tú resucitando de la muerte",
/* 32 */        "has hecho resurgir a la humanidad",
/* 33 */        "de lo profundo del sepulcro.",
/* 34 */        "Tú eres el cordero que no abre boca;",
/* 35 */        "tú eres el cordero nacido de María.",
/* 36 */        "MARÍA, CORDERA SIN MANCHA...",
/* 37 */        "MARÍA, LA INOCENTE CORDERA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 2*/      [ac("Re", "cp14","m")],
/* 3*/      [ac("La", "cp14","7")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac("Si♭", "cp","7"), ac("La","cp90","7")],
/* 6*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("La", "cp14","7")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("La", "cp14","7")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("La", "cp14","7")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 15*/      [ac("Re", "cp14","m")],
/* 16*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 17*/      [ac("Re", "cp14","m")],
/* 18*/      [ac("La", "cp14","7")],
/* 19*/      [ac("Re", "cp14","m")],
/* 20*/      [ac("La", "cp14","7")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22*/      [ac("La", "cp14","7")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 25*/      [ac("Re", "cp14","m")],
/* 26*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 27*/      [ac("Re", "cp14","m")],
/* 28*/      [ac("La", "cp14","7")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("Re", "cp14","m")],
/* 31*/      [ac("La", "cp14","7")],
/* 32 */   [ac("", "cp0","")],
/* 33*/      [ac("Re", "cp14","m")],
/* 34*/      [ac("La", "cp14","7")],
/* 35*/      [ac("Re", "cp14","m")],
/* 36*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 37*/      [ac("Re", "cp14","m")],
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
