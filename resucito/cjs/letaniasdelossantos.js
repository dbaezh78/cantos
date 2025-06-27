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
const NOMBREDELCANTO = "LETANÍAS DE LOS SANTOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "De la liturgia bautismal de la Vigilia pascual",
      dbnos: "189",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Señor, ten piedad.",
/* 2 */        "Cristo, ten piedad.",
/* 3 */        "Señor, ten piedad.",
/* 4 */        "Santa María, Madre de Dios.",
/* 5 */        "San Miguel.",
/* 6 */        "Santos ángeles de Dios.",
/* 7 */        "San Juan Bautista.",
/* 8 */        "San José.",
/* 9 */        "Santos Pedro y Pablo.",
/* 10 */        "San Andrés.",
/* 11 */        "San Juan.",
/* 12 */        "Santa María Magdalena.",
/* 13 */        "San Esteban.",
/* 14 */        "San Ignacio de Antioquía.",
/* 15 */        "San Lorenzo.",
/* 16 */        "Santas Perpetua y Felicidad.",
/* 17 */        "Santa Inés.",
/* 18 */        "San Gregorio.",
/* 19 */        "San Agustín.",
/* 20 */        "San Atanasio.",
/* 21 */        "San Basilio.",
/* 22 */        "San Martín.",
/* 23 */        "San Benito.",
/* 24 */        "Santos Francisco y Domingo.",
/* 25 */        "San Francisco Javier.",
/* 26 */        "San Juan María Vianney.",
/* 27 */        "SEÑOR, TEN PIEDAD.",
/* 28 */        "CRISTO, TEN PIEDAD.",
/* 29 */        "SEÑOR, TEN PIEDAD.",
/* 30 */        "RUEGA POR NOSOTROS.",
/* 31 */        "RUEGA POR NOSOTROS.",
/* 32 */        "ROGAD POR NOSOTROS.",
/* 33 */        "RUEGA POR NOSOTROS.",
/* 34 */        "RUEGA POR NOSOTROS.",
/* 35 */        "ROGAD POR NOSOTROS.",
/* 36 */        "RUEGA POR NOSOTROS.",
/* 37 */        "RUEGA POR NOSOTROS.",
/* 38 */        "RUEGA POR NOSOTROS.",
/* 39 */        "RUEGA POR NOSOTROS.",
/* 40 */        "RUEGA POR NOSOTROS.",
/* 41 */        "RUEGA POR NOSOTROS.",
/* 42 */        "ROGAD POR NOSOTROS.",
/* 43 */        "RUEGA POR NOSOTROS.",
/* 44 */        "RUEGA POR NOSOTROS.",
/* 45 */        "RUEGA POR NOSOTROS.",
/* 46 */        "RUEGA POR NOSOTROS.",
/* 47 */        "RUEGA POR NOSOTROS.",
/* 48 */        "RUEGA POR NOSOTROS.",
/* 49 */        "RUEGA POR NOSOTROS.",
/* 50 */        "ROGAD POR NOSOTROS.",
/* 51 */        "RUEGA POR NOSOTROS.",
/* 52 */        "RUEGA POR NOSOTROS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m")],
/* 2 */     [ac("", "cp0","")],
/* 3 */     [ac("", "cp0","")],
/* 4*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 5 */     [ac("", "cp0","")],
/* 6*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 8 */     [ac("", "cp0","")],
/* 9*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 10*/     [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 11 */    [ac("", "cp0","")],
/* 12 */    [ac("", "cp0","")],
/* 13 */    [ac("", "cp0","")],
/* 14 */    [ac("", "cp0","")],
/* 15 */    [ac("", "cp0","")],
/* 16*/     [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 17*/     [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 18 */    [ac("", "cp0","")],
/* 19 */    [ac("", "cp0","")],
/* 20 */    [ac("", "cp0","")],
/* 21 */    [ac("", "cp0","")],
/* 22 */    [ac("", "cp0","")],
/* 23 */    [ac("", "cp0","")],
/* 24*/     [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 25 */    [ac("", "cp0","")],
/* 26 */    [ac("", "cp0","")],
/* 27 */    [ac("", "cp0","")],
/* 28 */    [ac("", "cp0","")],
/* 29 */    [ac("", "cp0","")],
/* 30*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 31 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 32*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 33*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 34 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 35*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 36*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 37 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 38 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 39 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 40 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 41 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 42*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 43*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 44 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 45 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 46 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 47 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 48 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 49 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 50*/     [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 51 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
/* 52 */    [ac("Do", "cp14",""), ac("Re","cp267","7")],
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
