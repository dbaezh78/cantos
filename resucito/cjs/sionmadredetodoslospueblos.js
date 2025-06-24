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
const NOMBREDELCANTO = "SIÓN, MADRE DE TODOS LOS PUEBLOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 87 (86)",
      dbnos: "154",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Su fundación está sobre los montes santos,",
/* 2 */        "el Señor ama las puertas de Sión",
/* 3 */        "más que todas las moradas de Jacob.",
/* 4 */        "De ti se dicen cosas estupendas,",
/* 5 */        "ciudad de Dios.",
/* 6 */        "Recuerdo Ráhab y Babilonia,",
/* 7 */        "Palestina, Tiro y Etiopía,",
/* 8 */        "Cuando alguno nace en ellas se dice:",
/* 9 */        "Fulano nació allí»,",
/* 10 */        "Mas de Sión se dice: ccMadre».",
/* 11 */        "PORQUE TODOS HAN NACIDO EN ELLA.",
/* 12 */        "EL SEÑOR, ÉL MISMO LA FUNDÓ.",
/* 13 */        "¡MADRE, MADRE, CIUDAD DE DIOS!",
/* 14 */        "El Señor escribe en el libro de los pueblos:",
/* 15 */        "Este ha nacido en ella»,",
/* 16 */        "y danzando cantarán:",
/* 17 */        "Están en ti todas mis fuentes».",
/* 18 */        "Y DANZANDO, DANZANDO CANTARÁN:",
/* 19 */        "«TODAS MIS FUENTES ESTÁN EN TI.",
/* 20 */        "¡MADRE, MADRE, CIUDAD DE DIOS!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Mi", "cp14",""), ac("Si","cp90","7")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Mi", "cp14",""), ac("Si","cp90","7")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 12*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 13*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 14*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Mi", "cp14",""), ac("Si","cp90","7")],
/* 17*/      [ac("Mi", "cp14","")],
/* 18*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 20*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("Fa","cp150",""), ac("Mi","cp250","")],
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
