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
const NOMBREDELCANTO = "HE ESPERADO EN EL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 40 (39)",
      dbnos: "83",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "HE ESPERADO,",
/* 2 */        "HE ESPERADO EN EL SEÑOR,",
/* 3 */        "Y ÉL HACIA MÍ SE HA INCLINADO,",
/* 4 */        "HA ESCUCHADO MI GRITO,",
/* 5 */        "ME HA SACADO",
/* 6 */        "DE LA FOSA DE LA MUERTE.",
/* 7 */        "Me ha sacado del fango de la ciénaga,",
/* 8 */        "ha puesto mis pies sobre la roca,",
/* 9 */        "ha establecido mis pasos",
/* 10 */        "en un camino, en un camino de salvación.",
/* 11 */        "HE ESPERADO,...",
/* 12 */        "HE ESPERADO EN EL SEÑOR,",
/* 13 */        "Y ÉL HACIA MÍ SE HA INCLINADO,",
/* 14 */        "HA ESCUCHADO MI GRITO,",
/* 15 */        "ME HA SACADO",
/* 16 */        "DE LA FOSA DE LA MUERTE.",
/* 17 */        "Ha puesto en mi boca un cantar nuevo,",
/* 18 */        "una alabanza, una alabanza a nuestro Dios.",
/* 19 */        "Muchos vendrán y lo verán,",
/* 20 */        "y tantos en Él confiarán.",
/* 21 */        "HE ESPERADO,...",
/* 22 */        "HE ESPERADO EN EL SEÑOR,",
/* 23 */        "Y ÉL HACIA MÍ SE HA INCLINADO,",
/* 24 */        "HA ESCUCHADO MI GRITO,",
/* 25 */        "ME HA SACADO",
/* 26 */        "DE LA FOSA DE LA MUERTE.",
/* 27 */        "Dios mío, ¡cuántas maravillas,",
/* 28 */        "cuántos prodigios en nuestro favor!",
/* 29 */        "Si los quiero anunciar y proclamar,",
/* 30 */        "son tantos que me superan en número.",
/* 31 */        "HE ESPERADO,...",
/* 32 */        "HE ESPERADO EN EL SEÑOR,",
/* 33 */        "Y ÉL HACIA MÍ SE HA INCLINADO,",
/* 34 */        "HA ESCUCHADO MI GRITO,",
/* 35 */        "ME HA SACADO",
/* 36 */        "DE LA FOSA DE LA MUERTE.",
/* 37 */        "No quisiste sacrificios ni oblación,",
/* 38 */        "por eso me has abierto el oído.",
/* 39 */        "No has querido víctima por la culpa,",
/* 40 */        "por eso he dicho: he aquí que vengo",
/* 41 */        "para hacer tu voluntad.",
/* 42 */        "HE ESPERADO,...",
/* 43 */        "HE ESPERADO EN EL SEÑOR,",
/* 44 */        "Y ÉL HACIA MÍ SE HA INCLINADO,",
/* 45 */        "HA ESCUCHADO MI GRITO,",
/* 46 */        "ME HA SACADO",
/* 47 */        "DE LA FOSA DE LA MUERTE.",
/* 48 */        "De mí está escrito en tu libro",
/* 49 */        "que yo haga, Señor, tu voluntad.",
/* 50 */        "Dios mío, eso sólo quiero:",
/* 51 */        "tu palabra, tu palabra en mis entrañas.",
/* 52 */        "HE ESPERADO,...",
/* 53 */        "HE ESPERADO EN EL SEÑOR,",
/* 54 */        "Y ÉL HACIA MÍ SE HA INCLINADO,",
/* 55 */        "HA ESCUCHADO MI GRITO,",
/* 56 */        "ME HA SACADO",
/* 57 */        "DE LA FOSA DE LA MUERTE.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Mim", "cp14","")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("Lam", "cp14","Mim")],
/* 8*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 9*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Mim", "cp14","")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 20*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Mim", "cp14","")],
/* 23*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 25*/      [ac("Fa", "cp14","")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 28*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 29*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 30*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Mim", "cp14","")],
/* 33*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 34*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 35*/      [ac("Fa", "cp14","")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("Lam", "cp14","Mim")],
/* 38*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 39*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 40*/      [ac("Fa", "cp14","")],
/* 41*/      [ac("Mi7", "cp14","")],
/* 42*/      [ac("La", "cp14","m")],
/* 43*/      [ac("Mim", "cp14","")],
/* 44*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 45*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 46*/      [ac("Fa", "cp14","")],
/* 47*/      [ac("Mi", "cp14","")],
/* 48*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 49*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 50*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 51*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 52*/      [ac("La", "cp14","m")],
/* 53*/      [ac("Mim", "cp14","")],
/* 54*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 55*/      [ac("Fa", "cp14",""), ac("Mi7","cp90","")],
/* 56*/      [ac("Fa", "cp14","")],
/* 57*/      [ac("Mi", "cp14","")],
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
