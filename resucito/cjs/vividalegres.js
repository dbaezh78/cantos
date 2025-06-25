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
const NOMBREDELCANTO = "VIVID ALEGRES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Filipenses 4,4ss",
      dbnos: "172",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA,",
/* 2 */        "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA.",
/* 3 */        "VIVID ALEGRES, EL SEÑOR VIENE YA,",
/* 4 */        "Y NOS SALVARÁ,",
/* 5 */        "Y NOS SALVARÁ,",
/* 6 */        "Y NOS SALVARÁ.",
/* 7 */        "Valor, no temáis",
/* 8 */        "que el Señor viene ya,",
/* 9 */        "y nos salvará,",
/* 10 */        "y nos salvará,",
/* 11 */        "y nos salvará.",
/* 12 */        "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA...",
/* 13 */        "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA.",
/* 14 */        "VIVID ALEGRES, EL SEÑOR VIENE YA,",
/* 15 */        "Y NOS SALVARÁ,",
/* 16 */        "Y NOS SALVARÁ,",
/* 17 */        "Y NOS SALVARÁ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("La", "cp14",""), ac("La","cp90","7")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 15*/      [ac("La", "cp14","m")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
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
