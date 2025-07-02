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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "AMÉN, AMÉN, AMÉN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 7,12-14 ",
      dbnos: "17",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "AMÉN, AMÉN, AMÉN.",
/* 2 */        "AMÉN, AMÉN, AMÉN.",
/* 3 */        "AMÉN, AMÉN, AMÉN.",
/* 4 */        "BENDICIÓN Y GLORIA,",
/* 5 */        "SABIDURÍA,",
/* 6 */        "ACCIÓN DE GRACIAS",
/* 7 */        "DEMOS A DIOS.",
/* 8 */        "AMÉN, AMÉN, AMÉN...",
/* 9 */        "AMÉN, AMÉN, AMÉN.",
/* 10 */        "AMÉN, AMÉN, AMÉN.",
/* 11 */        "Honor y poder",
/* 12 */        "y fortaleza,",
/* 13 */        "honor y poder",
/* 14 */        "demos a Dios.",
/* 15 */        "BENDICIÓN Y GLORIA...",
/* 16 */        "SABIDURÍA,",
/* 17 */        "ACCIÓN DE GRACIAS",
/* 18 */        "DEMOS A DIOS.",
/* 19 */        "AMÉN, AMÉN, AMÉN...",
/* 20 */        "AMÉN, AMÉN, AMÉN.",
/* 21 */        "AMÉN, AMÉN, AMÉN.",
/* 22 */        "¿Quiénes son",
/* 23 */        "y de dónde vienen?",
/* 24 */        "¿QUIÉNES SON",
/* 25 */        "Y DE DÓNDE VIENEN?",
/* 26 */        "ESTOS SON LOS QUE VIENEN",
/* 27 */        "DE LA GRAN TRIBULACIÓN.",
/* 28 */        "Y LAVARON SUS TÚNICAS",
/* 29 */        "Y LAS BLANQUEARON",
/* 30 */        "EN LA SANGRE DEL CORDERO,",
/* 31 */        "EN LA SANGRE DEL CORDERO.",
/* 32 */        "ESTOS SON LOS QUE VIENEN...",
/* 33 */        "DE LA GRAN TRIBULACIÓN.",
/* 34 */        "Y LAVARON SUS TÚNICAS",
/* 35 */        "Y LAS BLANQUEARON",
/* 36 */        "EN LA SANGRE DEL CORDERO,",
/* 37 */        "EN LA SANGRE DEL CORDERO.",
/* 38 */        "AMÉN, AMÉN, AMÉN...",
/* 39 */        "AMÉN, AMÉN, AMÉN.",
/* 40 */        "AMÉN, AMÉN, AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp0","")],
/* 2*/      [ac("La", "cp48","m")],
/* 3*/      [ac("Sol", "cp54",""), ac("Do","cp302","")],

/* 4*/      [ac("Do", "cp0","")],
/* 5*/      [ac("Sol", "cp151","")],
/* 6 */     [ac("", "cp0","")],
/* 7*/      [ac("Do", "cp206","")],

/* 8*/      [ac("Do", "cp0","")],
/* 9*/      [ac("La", "cp48","m")],
/* 10*/     [ac("Sol", "cp54",""), ac("Do","cp302","")],

/* 11*/      [ac("Fa", "cp64","")],
/* 12*/      [ac("Mi", "cp115","")],
/* 13*/      [ac("Fa", "cp52","")],
/* 14*/      [ac("Mi", "cp177","")],

/* 15*/      [ac("Do", "cp0","")],
/* 16*/      [ac("Sol", "cp151","")],
/* 17 */     [ac("", "cp0","")],
/* 18*/      [ac("Do", "cp206","")],

/* 19*/      [ac("Do", "cp0","")],
/* 20*/      [ac("La", "cp48","m")],
/* 21*/      [ac("Sol", "cp54",""), ac("Do","cp302","")],

//  DERECHA
/* 22*/      [ac("Fa", "cp173","")],
/* 23*/      [ac("Mi", "cp214","")],

/* 24*/      [ac("Fa", "cp199","")],
/* 25*/      [ac("Mi", "cp252","")],

/* 26*/      [ac("Sol", "cp14","7"), ac("Do","cp386","")],
/* 27*/      [ac("Sol", "cp173",""), ac("Do","cp394","")],

/* 28*/      [ac("Fa", "cp93","")],
/* 29*/      [ac("Do", "cp276","")],
/* 30*/      [ac("Fa", "cp133",""), ac("Mi","cp441","")],
/* 31*/      [ac("Fa", "cp133",""), ac("Mi","cp441","")],

/* 32*/      [ac("Sol", "cp14","7"), ac("Do","cp394","")],
/* 33*/      [ac("Sol", "cp173",""), ac("Do","cp394","")],
/* 34*/      [ac("Fa", "cp93","")],
/* 35*/      [ac("Do", "cp276","")],
/* 36*/      [ac("Fa", "cp133",""), ac("Mi","cp441","")],
/* 37*/      [ac("Fa", "cp133",""), ac("Mi","cp441","")],

/* 38*/      [ac("Do", "cp0","")],
/* 39*/      [ac("La", "cp48","m")],
/* 40*/      [ac("Sol", "cp54",""), ac("Do","cp302","")],
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
