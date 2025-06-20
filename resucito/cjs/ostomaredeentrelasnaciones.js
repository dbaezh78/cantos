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
const NOMBREDELCANTO = "OS TOMARÉ DE ENTRE LAS NACIONES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Ezequiel 36,24-28",
      dbnos: "129",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "OS TOMARÉ DE ENTRE LAS NACIONES,",
/* 2 */        "OS REUNIRÉ DE TODOS LOS PUEBLOS,",
/* 3 */        "OS ROCIARÉ CON AGUA PURA",
/* 4 */        "Y YO OS PURIFICARÉ.",
/* 5 */        "Os daré un corazón nuevo,",
/* 6 */        "infundiré en vosotros un espíritu nuevo,",
/* 7 */        "os quitaré el corazón de piedra,",
/* 8 */        "os daré un corazón de carne.",
/* 9 */        "OS TOMARÉ DE ENTRE LAS NACIONES,...",
/* 10 */        "OS REUNIRÉ DE TODOS LOS PUEBLOS,",
/* 11 */        "OS ROCIARÉ CON AGUA PURA",
/* 12 */        "Y YO OS PURIFICARÉ.",
/* 13 */        "Pondré mi Espíritu dentro de vosotros",
/* 14 */        "y haré que caminéis según mi Palabra.",
/* 15 */        "Vosotros seréis mi pueblo",
/* 16 */        "y yo seré vuestro Dios.",
/* 17 */        "OS TOMARÉ DE ENTRE LAS NACIONES,...",
/* 18 */        "OS REUNIRÉ DE TODOS LOS PUEBLOS,",
/* 19 */        "OS ROCIARÉ CON AGUA PURA",
/* 20 */        "Y YO OS PURIFICARÉ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Re","cp90","7")],
/* 2*/      [ac("Sol", "cp14","m")],
/* 3*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 4*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 5*/      [ac("Re", "cp","7")],
/* 6*/      [ac("Sol", "cp14","m")],
/* 7*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 8*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 9*/      [ac("Re", "cp14","m"), ac("Re","cp90","7")],
/* 10*/      [ac("Sol", "cp14","m")],
/* 11*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 12*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 13*/      [ac("Re", "cp14","7"), ac("Sol","cp90","m")],
/* 14*/      [ac("La", "cp14",""), ac("Rem","cp90","")],
/* 15*/      [ac("Si♭", "cp14","")],
/* 16*/      [ac("La", "cp14","")],
/* 17*/      [ac("Re", "cp14","m"), ac("Re","cp90","7")],
/* 18*/      [ac("Sol", "cp14","m")],
/* 19*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 20*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
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
