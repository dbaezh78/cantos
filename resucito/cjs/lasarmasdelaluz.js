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
const NOMBREDELCANTO = "LAS ARMAS DE LA LUZ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "cf Efesios 6,11.ss",
      dbnos: "102",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Revestíos de la armadura de Dios,",
/* 2 */        "empuñando las armas de la luz.",
/* 3 */        "REVESTÍOS DE LA ARMADURA DE DIOS,",
/* 4 */        "EMPUÑANDO LAS ARMAS DE LA LUZ.",
/* 5 */        "Porque nuestra lucha",
/* 6 */        "no es contra la carne ni la sangre,",
/* 7 */        "más contra los espíritus del mal",
/* 8 */        "que viven en el mundo tenebroso.",
/* 9 */        "CEÑIDOS CON LA VERDAD,",
/* 10 */        "REVESTIDOS DE LA JUSTICIA DE LA CRUZ.",
/* 11 */        "Que no se resiste al mal,",
/* 12 */        "mas lleva sobre sí los pecados de los demás.",
/* 13 */        "CALZADOS CON EL CELO",
/* 14 */        "POR ANUNCIAR EL EVANGELIO,",
/* 15 */        "MAS SOBRE TODO",
/* 16 */        "CON EL ESCUDO DE LA FE.",
/* 17 */        "C Que Cristo te ama ciertamente,",
/* 18 */        "que ha dado su vida por ti",
/* 19 */        "cuando eras malvado y pecador.",
/* 20 */        "CON LA ESPADA DEL ESPÍRITU,",
/* 21 */        "QUE ES LA PALABRA DE DIOS,",
/* 22 */        "Y CORONADOS",
/* 23 */        "CON EL YELMO DE LA SALVACIÓN.",
/* 24 */        "Que Cristo Jesús resucitó,",
/* 25 */        "que él es el Señor,",
/* 26 */        "que volverá, que volverá",
/* 27 */        "y nos llevará con él.",
/* 28 */        "A ALELUYA,ALELÚ,ALELÚ,ALELUYA.",
/* 29 */        "ALELUYA,ALELÚ,ALELÚ,ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
/* 2*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Re","cp90","m9")],
/* 4*/      [ac("Mi", "cp14","7"), ac("La","cp90","m")],
/* 5*/      [ac("Fa", "cp","")],
/* 6*/      [ac("Mi", "cp14","7")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","7")],
/* 9*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","7")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Mi", "cp14","7")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 26*/      [ac("Re", "cp14","m")],
/* 27*/      [ac("Mi", "cp14","7")],
/* 28*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
/* 29*/      [ac("La", "cp14","m"), ac("Mi","cp90","7")],
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
