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
const NOMBREDELCANTO = "EL MESÍAS LEÓN";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Comentario al Apocalipsis (Victorino de Pettau)",
      dbnos: "57",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Mesías, león para vencer,",
/* 2 */        "se hizo Cordero para sufrir.",
/* 3 */        "EL MESÍAS, LEÓN PARA VENCER,",
/* 4 */        "SE HIZO CORDERO PARA SUFRIR.",
/* 5 */        "Subió al leño para ser",
/* 6 */        "esposo, para morir.",
/* 7 */        "Y su Sangre dejó",
/* 8 */        "dote para su esposa virgen.",
/* 9 */        "EL MESÍAS, LEÓN PARA VENCER,...",
/* 10 */        "SE HIZO CORDERO PARA SUFRIR.",
/* 11 */        "Y descendió a los infiernos",
/* 12 */        "en busca de la oveja perdida.",
/* 13 */        "Y con ella subió al Cielo,",
/* 14 */        "y la hizo entrar en la casa del Padre.",
/* 15 */        "EL MESÍAS, LEÓN PARA VENCER,...",
/* 16 */        "SE HIZO CORDERO PARA SUFRIR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Do", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 14*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 15*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m")],
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
