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
const NOMBREDELCANTO = "SALMODIAS PARA LAUDES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo I, II, III, IV, V",
      dbnos: "212",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "A ti acude todo mortal",
/* 2 */        "A CAUSA DE SUS CULPAS;",
/* 3 */        "Nuestros delitos nos abruman,",
/* 4 */        "PERO TÚ LOS PERDONAS.",
/* 5 */        "Levantan y enrollan mi vida",
/* 6 */        "como una tienda de pastores.",
/* 7 */        "COMO UN TEJEDOR, DEVANABA YO MI VIDA,",
/* 8 */        "Y ME CORTAN LA TRAMA.",
/* 9 */        "Día y noche me estás acabando,",
/* 10 */        "sollozo hasta el amanecer.",
/* 11 */        "ME QUIEBRAS LOS HUESOS COMO UN LEÓN,",
/* 12 */        "DÍA Y NOCHE ME ESTÁS ACABANDO.",
/* 13 */        "Tú eres mi Dios y protector,",
/* 14 */        "¿por qué me rechazas?,",
/* 15 */        "¿POR QUÉ VOY ANDANDO SOMBRÍO,",
/* 16 */        "HOSTIGADO POR MI ENEMIGO?",
/* 17 */        "Escuchad, cielos, y hablaré,",
/* 18 */        "oye, tierra, los dichos de mi boca:",
/* 19 */        "DESCIENDA COMO LLUVIA MI DOCTRINA,",
/* 20 */        "DESTILE COMO ROCÍO MI PALABRA.",
/* 21 */        "Dios es nuestro refugio y nuestra fuerza,",
/* 22 */        "Poderoso defensor en el peligro.",
/* 23 */        "POR ESO NO TEMEMOS AUNQUE TIEMBLE LA TIERRA,",
/* 24 */        "Y LOS MONTES SE DESPLOMEN EN EL MAR.",
/* 25 */        "Que hiervan y bramen sus olas,",
/* 26 */        "que sacudan a los montes con su furia.",
/* 27 */        "EL SEÑOR DE LOS EJÉRCITOS ESTÁ CON NOSOTROS,",
/* 28 */        "NUESTRO ALCÁZAR ES EL DIOS DE JACOB.",
/* 29 */        "El correr de las acequias alegra la ciudad de Dios,",
/* 30 */        "el Altísimo consagra su morada.",
/* 31 */        "TENIENDO A DIOS EN MEDIO, NO VACILA;",
/* 32 */        "DIOS LAS SOCORRE AL DESPUNTAR LA AURORA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 2*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 3*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 4*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 5*/      [ac("La", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Lam", "cp14","")],
/* 10*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 14*/      [ac("Re", "cp14","m")],
/* 15*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 18*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 19*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 21*/      [ac("Mi", "cp14","m"), ac("Sol","cp90","")],
/* 22*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Sol","cp90","")],
/* 24*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 25*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 26*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 27*/      [ac("Mi", "cp14","m"), ac("Sol","cp90","")],
/* 28*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 29*/      [ac("Mi", "cp14","m"), ac("Sol","cp90","")],
/* 30*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 31*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 32*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
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
