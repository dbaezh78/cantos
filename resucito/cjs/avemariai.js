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
const NOMBREDELCANTO = "AVE MARÍA I";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lc 1,28ss",
      dbnos: "21",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Ave María,",
/* 2 */        "llena de gracia,",
/* 3 */        "el Señor es contigo,",
/* 4 */        "bendita tú eres",
/* 5 */        "entre todas las mujeres,",
/* 6 */        "y bendito es el fruto",
/* 7 */        "de tu vientre, Jesús.",
/* 8 */        "SANTA MARÍA,",
/* 9 */        "MADRE DE DIOS,",
/* 10 */        "RUEGA POR NOSOTROS",
/* 11 */        "QUE SOMOS PECADORES,",
/* 12 */        "RUEGA AHORA",
/* 13 */        "Y EN LA HORA DE NUESTRA MUERTE.",
/* 14 */        "AMÉN, AMÉN, AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Rem", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 9*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Rem", "cp14","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("Mi","cp150",""), ac("La","cp250","m")],
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
