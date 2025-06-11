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
const NOMBREDELCANTO = "ES PACIENTE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno al Espíritu Santo (Kiko Argüello) ",
      dbnos: "68",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Espíritu Santo es el yugo suave,",
/* 2 */        "es el yugo suave y ligero.",
/* 3 */        "EL ESPÍRITU SANTO ES EL YUGO SUAVE,",
/* 4 */        "ES EL YUGO SUAVE Y LIGERO.",
/* 5 */        "Lleno de comprensión,",
/* 6 */        "lleno de misericordia con nuestras faltas,",
/* 7 */        "lleno de ternura y compasión",
/* 8 */        "y de amor sin límites.",
/* 9 */        "ES PACIENTE, ES BENIGNO,",
/* 10 */        "ES EL SUMO BIEN,",
/* 11 */        "ES EL DON DE DIOS,",
/* 12 */        "ES LA GARANTÍA DE LA VIDA ETERNA,",
/* 13 */        "ES EL «PARÁCLITO».",
/* 14 */        "Habitando en el hombre,",
/* 15 */        "nos perdona siempre,",
/* 16 */        "habitando en el hombre,",
/* 17 */        "espera siempre.",
/* 18 */        "Lo comprende todo, lo excusa todo.",
/* 19 */        "Nos defiende siempre,",
/* 20 */        "y nos enseña a ser pacientes",
/* 21 */        "con nuestros pecados.",
/* 22 */        "Nos dice quiénes somos,",
/* 23 */        "y nos dice dónde andamos,",
/* 24 */        "cuál es el camino y porqué sufrimos.",
/* 25 */        "ES PACIENTE, ES BENIGNO,...",
/* 26 */        "ES EL SUMO BIEN,",
/* 27 */        "ES EL DON DE DIOS,",
/* 28 */        "ES LA GARANTÍA DE LA VIDA ETERNA,",
/* 29 */        "ES EL «PARÁCLITO».",
/* 30 */        "Nos dice que en nuestra vida todo es santo,",
/* 31 */        "que nuestra historia es santa,",
/* 32 */        "y nos conduce al abandono total en Cristo.",
/* 33 */        "En Él nada se pretende,",
/* 34 */        "se acepta todo, se soporta todo.",
/* 35 */        "Porque parecerse al Señor sobre la Cruz",
/* 36 */        "es nuestra gloria, es la verdad,",
/* 37 */        "es la Santidad, es nuestro ser Cristiano.",
/* 38 */        "ES PACIENTE, ES BENIGNO,...",
/* 39 */        "ES EL SUMO BIEN,",
/* 40 */        "ES EL DON DE DIOS,",
/* 41 */        "ES LA GARANTÍA DE LA VIDA ETERNA,",
/* 42 */        "ES EL «PARÁCLITO».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi","cp90","")],
/* 6*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16 */     [ac("", "cp0","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Re", "cp14","m"), ac("MI","cp90","")],
/* 19*/      [ac("Re", "cp14","m")],
/* 20*/      [ac("Fa", "cp14","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 23*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 29*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 30*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 33*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 34*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 35*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 36*/      [ac("Re", "cp14","m")],
/* 37*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 38*/      [ac("La", "cp14","m")],
/* 39*/      [ac("Mi", "cp14","")],
/* 40*/      [ac("La", "cp14","m")],
/* 41*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 42*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
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
