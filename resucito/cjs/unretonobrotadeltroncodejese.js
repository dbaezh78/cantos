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
const NOMBREDELCANTO = "UN RETOÑO BROTA DEL TRONCO DE JESÉ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 11,1-11",
      dbnos: "162",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "UN RETOÑO BROTA DEL TRONCO DE JESÉ,",
/* 2 */        "UN GERMEN DE SUS RAÍCES.",
/* 3 */        "SOBRE ÉL SE POSA EL ESPÍRITU DEL SEÑOR:",
/* 4 */        "ESPÍRITU DE SABIDURÍA E INTELIGENCIA,",
/* 5 */        "ESPÍRITU DE CONSEJO Y FORTALEZA,",
/* 6 */        "ESPÍRITU DE CIENCIA Y DE PIEDAD,",
/* 7 */        "ESPÍRITU DE TEMOR DEL SEÑOR.",
/* 8 */        "No juzgará de oídas,",
/* 9 */        "sino que ayudará a los oprimidos.",
/* 10 */        "Su palabra será una vara contra el violento",
/* 11 */        "y con el soplo de su boca matará al malvado.",
/* 12 */        "El lobo vivirá con el cordero,",
/* 13 */        "la pantera se echará con el cabrito,",
/* 14 */        "el león y el novillo pacerán juntos,",
/* 15 */        "y un niño los guiará, y un niño los guiará.",
/* 16 */        "UN RETOÑO BROTA DEL TRONCO DE JESÉ...",
/* 17 */        "UN GERMEN DE SUS RAÍCES.",
/* 18 */        "SOBRE ÉL SE POSA EL ESPÍRITU DEL SEÑOR:",
/* 19 */        "ESPÍRITU DE SABIDURÍA E INTELIGENCIA,",
/* 20 */        "ESPÍRITU DE CONSEJO Y FORTALEZA,",
/* 21 */        "ESPÍRITU DE CIENCIA Y DE PIEDAD,",
/* 22 */        "ESPÍRITU DE TEMOR DEL SEÑOR.",
/* 23 */        "La vaca y la osa estarán juntas,",
/* 24 */        "el león, como el buey, comerá paja.",
/* 25 */        "El niño de pecho hurgará",
/* 26 */        "en el agujero del áspid,",
/* 27 */        "el recién nacido meterá la mano",
/* 28 */        "en la hura de la víbora.",
/* 29 */        "Porque ya nadie hará daño.",
/* 30 */        "A. PORQUE YA NADIE HARÁ DAÑO.",
/* 31 */        "Porque la tierra estará llena",
/* 32 */        "del conocimiento del Señor.",
/* 33 */        "PORQUE LA TIERRA ESTARÁ LLENA",
/* 34 */        "DEL CONOCIMIENTO DEL SEÑOR.",
/* 35 */        "Porque aquel día",
/* 36 */        "la raíz de Jesé se levantará",
/* 37 */        "como estandarte de los pueblos,",
/* 38 */        "y las gentes lo seguirán con ansia.",
/* 39 */        "En aquel día el Señor extenderá su mano",
/* 40 */        "y un camino se formará,",
/* 41 */        "Y UN CAMINO SE FORMARÁ;",
/* 42 */        "una vía para todas las naciones,",
/* 43 */        "UNA VÍA PARA TODAS LAS NACIONES",
/* 44 */        "que la Virgen indicará.",
/* 45 */        "UN RETOÑO BROTA DEL TRONCO DE JESÉ...",
/* 46 */        "UN GERMEN DE SUS RAÍCES.",
/* 47 */        "SOBRE ÉL SE POSA EL ESPÍRITU DEL SEÑOR:",
/* 48 */        "ESPÍRITU DE SABIDURÍA E INTELIGENCIA,",
/* 49 */        "ESPÍRITU DE CONSEJO Y FORTALEZA,",
/* 50 */        "ESPÍRITU DE CIENCIA Y DE PIEDAD,",
/* 51 */        "ESPÍRITU DE TEMOR DEL SEÑOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 4*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 5*/      [ac("Re", "cp",""), ac("Sol","cp90","")],
/* 6*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 7*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 8*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 9*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 10*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 11*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 12*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 13*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 14*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 15*/      [ac("Do", "cp14",""), ac("Sol","cp90",""), ac("Re","cp150",""), ac("Sol","cp250","")],
/* 16*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 19*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 20*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 21*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 22*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 23*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 24*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 25*/      [ac("Re", "cp14","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("Do", "cp14","")],
/* 28*/      [ac("Sol", "cp14","")],
/* 29*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 30*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 31*/      [ac("Re", "cp14","")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33*/      [ac("Re", "cp14","")],
/* 34*/      [ac("Sol", "cp14","")],
/* 35*/      [ac("Si", "cp14","7")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Mi", "cp14","m")],
/* 38*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 39*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 40*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 41*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 42*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 43*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 44*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 45*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 46*/      [ac("Sol", "cp14","")],
/* 47*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 48*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 49*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
/* 50*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 51*/      [ac("Re", "cp14",""), ac("Sol","cp90","")],
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
