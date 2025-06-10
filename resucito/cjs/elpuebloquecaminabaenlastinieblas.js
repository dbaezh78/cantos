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
  else if (anchoPantalla <= 900) {
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
const NOMBREDELCANTO = "EL PUEBLO QUE CAMINABA EN LAS TINIEBLAS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 9,1-5",
      dbnos: "59",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El pueblo que caminaba en las tinieblas",
/* 2 */        "ha visto una gran luz.",
/* 3 */        "Sobre los que vivían en tierras tenebrosas,",
/* 4 */        "una gran luz ha brillado.",
/* 5 */        "Has acrecentado el gozo,",
/* 6 */        "hiciste grande la alegría.",
/* 7 */        "Se han alegrado cuando te han visto,",
/* 8 */        "como se alegran durante la siega,",
/* 9 */        "como se alegran al reparto del botín.",
/* 10 */        "A EL DOMINIO ESTARÁ",
/* 11 */        "SOBRE SUS HOMBROS,",
/* 12 */        "Y SU NOMBRE SERÁ,",
/* 13 */        "Y SU NOMBRE SERÁ:",
/* 14 */        "CONSEJERO MARAVILLOSO,",
/* 15 */        "DIOS FUERTE, PADRE ETERNO,",
/* 16 */        "PRÍNCIPE DE PAZ,",
/* 17 */        "PRÍNCIPE DE PAZ.",
/* 18 */        "Porque el yugo que pesaba sobre el pueblo,",
/* 19 */        "el yugo que oprimía sus espaldas,",
/* 20 */        "la vara del opresor",
/* 21 */        "tú la has quebrado, como en Madián.",
/* 22 */        "Y todo el que pisa con dominio,",
/* 23 */        "todo manto manchado de sangre",
/* 24 */        "será para la quema, pasto del fuego.",
/* 25 */        "Porque nos ha nacido un niño,",
/* 26 */        "porque un hijo se nos ha dado.",
/* 27 */        "A EL DOMINIO ESTARÁ...",
/* 28 */        "SOBRE SUS HOMBROS,",
/* 29 */        "Y SU NOMBRE SERÁ,",
/* 30 */        "Y SU NOMBRE SERÁ:",
/* 31 */        "CONSEJERO MARAVILLOSO,",
/* 32 */        "DIOS FUERTE, PADRE ETERNO,",
/* 33 */        "PRÍNCIPE DE PAZ,",
/* 34 */        "PRÍNCIPE DE PAZ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("Do", "cp",""), ac("La","cp90","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 10*/      [ac("Do", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("La", "cp14","♭")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 18*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 20*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 21*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 22*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 23*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 24*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 25*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 26*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 27*/      [ac("Do", "cp14","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("La", "cp14","♭")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 32*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 33*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 34*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
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
