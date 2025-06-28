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
const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA IV ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(1988)",
      dbnos: "200",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Dirige tu mirada sobre esta Víctima",
/* 2 */        "que tú mismo has preparado a tu Iglesia,",
/* 3 */        "y concede a cuantos compartimos este pan",
/* 4 */        "y este cáliz,",
/* 5 */        "que, congregados en un solo cuerpo",
/* 6 */        "por el Espíritu Santo,",
/* 7 */        "seamos en Cristo, víctima para tu alabanza.",
/* 8 */        "ALABANZA DE TU GLORIA,",
/* 9 */        "ALABANZA DE TU GLORIA.",
/* 10 */        "Acuérdate, Señor, de todos aquellos",
/* 11 */        "por quienes te ofrecemos este sacrificio;",
/* 12 */        "de tu servidor el Papa ... N/., de nuestro obispo ... N/.,",
/* 13 */        "del orden episcopal, de todo el clero,",
/* 14 */        "de cuantos aquí reunidos hacemos esta oblación,",
/* 15 */        "de todo tu pueblo santo",
/* 16 */        "y de aquellos que te buscan con sincero corazón.",
/* 17 */        "Acuérdate también de los que murieron",
/* 18 */        "en la paz de Cristo",
/* 19 */        "y de todos los difuntos cuya fe solo tú conociste.",
/* 20 */        "Padre misericordioso,",
/* 21 */        "que todos tus hijos nos reunamos",
/* 22 */        "en la heredad de tu reino,",
/* 23 */        "con María, la Virgen Madre de Dios,",
/* 24 */        "su esposo san José,",
/* 25 */        "y con los apóstoles y los santos;",
/* 26 */        "y allí, junto con toda la creación,",
/* 27 */        "libre ya del pecado y de la muerte,",
/* 28 */        "te glorifiquemos por Cristo, Señor nuestro,",
/* 29 */        "por quien concedes al mundo",
/* 30 */        "todos los bienes.",
/* 31 */        "Por Cristo, con Cristo y en Cristo,",
/* 32 */        "a ti Dios Padre omnipotente,",
/* 33 */        "en la unidad del Espíritu Santo,",
/* 34 */        "todo honor y gloria",
/* 35 */        "por los siglos de los siglos.",
/* 36 */        "AMÉN, AMÉN, AMÉN, AMÉN",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Fa", "cp","")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("Mi", "cp14","7")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 18 */   [ac("", "cp0","")],
/* 19*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Re", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Mi", "cp14","7")],
/* 32*/      [ac("Fa", "cp14","")],
/* 33*/      [ac("Mi", "cp14","7")],
/* 34*/      [ac("Fa", "cp14","")],
/* 35*/      [ac("Mi", "cp14","")],
/* 36*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
