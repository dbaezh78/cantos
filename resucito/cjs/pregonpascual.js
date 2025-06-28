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
const NOMBREDELCANTO = "PREGÓN PASCUAL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "«Exsultet»",
      dbnos: "206",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Exulten los coros de los ángeles,",
/* 2 */        "exulte la asamblea celeste,",
/* 3 */        "y un himno de gloria",
/* 4 */        "aclame el triunfo del Señor resucitado.",
/* 5 */        "Alégrese la tierra, inundada por la nueva luz.",
/* 6 */        "EL ESPLENDOR DEL REY",
/* 7 */        "DESTRUYÓ LAS TINIEBLAS,",
/* 8 */        "DESTRUYÓ LAS TINIEBLAS,",
/* 9 */        "LAS TINIEBLAS DEL MUNDO.",
/* 10 */        "Que se alegre nuestra madre la Iglesia,",
/* 11 */        "resplandeciente de la gloria de su Señor;",
/* 12 */        "y que en este lugar resuene unánime",
/* 13 */        "la aclamación de un pueblo en fiesta.",
/* 14 */        "El Señor esté con vosotros.",
/* 15 */        "A Y CON TU ESPÍRITU.",
/* 16 */        "Levantemos el corazón.",
/* 17 */        "LO TENEMOS LEVANTADO HACIA EL SEÑOR.",
/* 18 */        "Demos gracias al Señor, nuestro Dios.",
/* 19 */        "ES JUSTO Y NECESARIO.",
/* 20 */        "Realmente es justo y necesario",
/* 21 */        "exaltar con el canto la alegría del espíritu",
/* 22 */        "y elevar un himno al Padre Todopoderoso,",
/* 23 */        "y a su único Hijo, Jesucristo.",
/* 24 */        "Él ha pagado por todos al eterno Padre",
/* 25 */        "la deuda de Adán,",
/* 26 */        "y con su Sangre, derramada por amor,",
/* 27 */        "ha cancelado la condena antigua del pecado.",
/* 28 */        "Esta es la Pascua,",
/* 29 */        "en que se inmola el Cordero.",
/* 30 */        "Esta es la noche",
/* 31 */        "en que fueron liberados",
/* 32 */        "nuestros padres de Egipto.",
/* 33 */        "Esta es la noche",
/* 34 */        "que nos salva de la oscuridad del mal.",
/* 35 */        "ESTA ES LA NOCHE",
/* 36 */        "EN QUE CRISTO HA VENCIDO LA MUERTE",
/* 37 */        "Y DEL INFIERNO RETORNA VICTORIOSO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Fa", "cp",""), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","7")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Mi", "cp14","7")],
/* 10*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 11*/      [ac("La", "cp14","m"), ac("Do","cp90",""), ac("La","cp150","m")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 20*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 21*/      [ac("La", "cp14","m"), ac("Do","cp90",""), ac("La","cp150","m")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 27*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 29*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 30*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 31*/      [ac("Fa", "cp14","")],
/* 32*/      [ac("Mi", "cp14","7")],
/* 33*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 34*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 35*/      [ac("La", "cp14","m")],
/* 36*/      [ac("Sol", "cp14","")],
/* 37*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
