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
const NOMBREDELCANTO = "OH DIOS, POR TU NOMBRE SÁLVAME";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 54 (53)",
      dbnos: "124",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "OH DIOS, POR TU NOMBRE SÁLVAME,",
/* 2 */        "POR TU PODER HAZME JUSTICIA.",
/* 3 */        "OH DIOS, ESCUCHA MI ORACIÓN,",
/* 4 */        "ATIENDE A LAS PALABRAS DE MI BOCA.",
/* 5 */        "Porque los arrogantes se han aliado contra mí,",
/* 6 */        "los prepotentes andan buscando mi vida,",
/* 7 */        "no tienen nunca a Dios presente,",
/* 8 */        "no tienen nunca a Dios presente.",
/* 9 */        "MAS VED, QUE DIOS VIENE EN MI AYUDA,",
/* 10 */        "EL SEÑOR, EL SEÑOR ME SOSTIENE.",
/* 11 */        "De todo corazón le ofreceré un sacrificio,",
/* 12 */        "celebraré su nombre, porque es bueno,",
/* 13 */        "de toda angustia Él me ha liberado,",
/* 14 */        "de toda angustia me ha liberado,",
/* 15 */        "de toda angustia me ha liberado.",
/* 16 */        "OH DIOS, POR TU NOMBRE SÁLVAME,...",
/* 17 */        "POR TU PODER HAZME JUSTICIA.",
/* 18 */        "OH DIOS, ESCUCHA MI ORACIÓN,",
/* 19 */        "ATIENDE A LAS PALABRAS DE MI BOCA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","7")],
/* 2*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m"), ac("Fa","cp90","7")],
/* 4*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","7"), ac("Re","cp90","m")],
/* 6*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 7*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 8*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 9*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 10*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 11*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 12*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 13*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 14*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 15*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m"), ac("Fa","cp90","7")],
/* 17*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m"), ac("Fa","cp90","7")],
/* 19*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
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
