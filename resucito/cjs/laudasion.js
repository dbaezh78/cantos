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
const NOMBREDELCANTO = "LAUDA SIÓN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Secuencia del Corpus Christi (Santo Tomas de Aquino) ",
      dbnos: "103",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Alaba, Sión, al Salvador,",
/* 2 */        "Él es tu guía y tu Pastor.",
/* 3 */        "Alábalo con himnos y cantos.",
/* 4 */        "ESTE ES EL PAN DE LOS ÁNGELES,",
/* 5 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 6 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 7 */        "Canta con todo fervor,",
/* 8 */        "al pan vivo que da vida:",
/* 9 */        "este es el tema del canto",
/* 10 */        "y el objeto de alabanza.",
/* 11 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 12 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 13 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 14 */        "Ciertamente se donó,",
/* 15 */        "al grupo de doce hermanos,",
/* 16 */        "en fraterna y Santa Cena.",
/* 17 */        "Esta es la fiesta solemne,",
/* 18 */        "en la cual celebramos,",
/* 19 */        "la primera y Santa Cena.",
/* 20 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 21 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 22 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 23 */        "Es el banquete del nuevo Rey,",
/* 24 */        "la nueva Pascua y nueva Ley,",
/* 25 */        "donde lo antiguo termina.",
/* 26 */        "Lo antiguo se verá nuevo,",
/* 27 */        "la realidad a la sombra;",
/* 28 */        "¡Es todo luz, ya no hay tinieblas!",
/* 29 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 30 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 31 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 32 */        "Cristo deja en su memoria,",
/* 33 */        "lo que hizo en Santa Cena,",
/* 34 */        "nosotros lo renovamos.",
/* 35 */        "Obedientes a su palabra,",
/* 36 */        "consagramos pan y vino,",
/* 37 */        "¡Hostia de la salvación!",
/* 38 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 39 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 40 */        "ESTE ES EL PAN DE LOS HIJOS.",
/* 41 */        "Es cierto a los cristianos,",
/* 42 */        "que se transforma el pan en carne,",
/* 43 */        "y que el vino se hace sangre.",
/* 44 */        "ESTE ES EL PAN DE LOS ÁNGELES,...",
/* 45 */        "PAN DE LOS QUE HACEN CAMINO.",
/* 46 */        "ESTE ES EL PAN DE LOS HIJOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 8*/      [ac("La", "cp14","m")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 15*/      [ac("Lam", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Mi", "cp14","")],
/* 32*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("Mi", "cp14","")],
/* 38*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 39*/      [ac("La", "cp14","m")],
/* 40*/      [ac("Mi", "cp14","")],
/* 41*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 42*/      [ac("La", "cp14","m")],
/* 43*/      [ac("Mi", "cp14","")],
/* 44*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 45*/      [ac("La", "cp14","m")],
/* 46*/      [ac("Mi", "cp14","")],
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
