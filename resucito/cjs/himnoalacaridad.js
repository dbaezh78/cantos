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
const NOMBREDELCANTO = "HIMNO A LA CARIDAD";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "1 Corintios 13,1-7",
      dbnos: "86",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Aunque hablara las lenguas de los ángeles,",
/* 2 */        "si no tengo amor, nada.",
/* 3 */        "Aunque tuviera el don de profecía",
/* 4 */        "y conociera todos los misterios,",
/* 5 */        "aunque tuviera plenitud de fe",
/* 6 */        "y pudiera trasladar montañas,",
/* 7 */        "si no tengo amor, nada.",
/* 8 */        "Aunque repartiera",
/* 9 */        "todos mis bienes a los pobres",
/* 10 */        "y entregara mi cuerpo a las llamas,",
/* 11 */        "si no tengo amor, nada.",
/* 12 */        "PORQUE EL AMOR,",
/* 13 */        "EL AMOR, EL AMOR,",
/* 14 */        "ES PACIENTE, ES SERVICIAL,",
/* 15 */        "NO ES ENVIDIOSO,",
/* 16 */        "NO SE JACTA, NO SE ENGRÍE,",
/* 17 */        "ES DECOROSO,",
/* 18 */        "NO BUSCA LO SUYO, NO SE IRRITA.",
/* 19 */        "NO TOMA EN CUENTA EL MAL,",
/* 20 */        "NO TOMA EN CUENTA EL MAL,",
/* 21 */        "NO SE ALEGRA DE LA INJUSTICIA,",
/* 22 */        "SE ALEGRA CON LA VERDAD.",
/* 23 */        "TODO LO CREE,",
/* 24 */        "TODO LO EXCUSA,",
/* 25 */        "TODO LO ESPERA,",
/* 26 */        "SOPORTA TODO, SOPORTA TODO.",
/* 27 */        "PORQUE EL AMOR, EL AMOR,",
/* 28 */        "PORQUE EL AMOR ES DIOS",
/* 29 */        "ES DIOS, ES DIOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("Sol","cp150","")],
/* 3*/      [ac("Do", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Do", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Sol","cp90","")],
/* 8*/      [ac("Do", "cp14","")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Fa", "cp14",""), ac("Sol","cp90","")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Do", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Fa", "cp14",""), ac("Sol","cp90","")],
/* 19*/      [ac("Do", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("Do", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Do", "cp14","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("Do", "cp14","")],
/* 29 */   [ac("", "cp0","")],
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
