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
const NOMBREDELCANTO = "FELICIDAD PARA EL HOMBRE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 128 (127)",
      dbnos: "76",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "FELICIDAD PARA EL HOMBRE",
/* 2 */        "QUE TEME AL SEÑOR,",
/* 3 */        "FELICIDAD PARA EL HOMBRE",
/* 4 */        "QUE CAMINA POR SU SENDERO.",
/* 5 */        "Vivirá del trabajo de sus manos,",
/* 6 */        "será feliz y gozará de todo bien;",
/* 7 */        "su esposa como vid fecunda en medio de su casa;",
/* 8 */        "sus hijos, como brotes de olivo en torno a su mesa.",
/* 9 */        "FELICIDAD PARA EL HOMBRE...",
/* 10 */        "QUE TEME AL SEÑOR,",
/* 11 */        "FELICIDAD PARA EL HOMBRE",
/* 12 */        "QUE CAMINA POR SU SENDERO.",
/* 13 */        "Así será bendecido el hombre que teme al Señor.",
/* 14 */        "¡Que te bendiga Dios desde Sión,",
/* 15 */        "que puedas tú ver la prosperidad de Jerusalén,",
/* 16 */        "que puedas tú ver a los hijos de tus hijos!",
/* 17 */        "¡Paz a Israel!",
/* 18 */        "FELICIDAD PARA EL HOMBRE...",
/* 19 */        "QUE TEME AL SEÑOR,",
/* 20 */        "FELICIDAD PARA EL HOMBRE",
/* 21 */        "QUE CAMINA POR SU SENDERO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 3*/      [ac("Re", "cp14","m9")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Re", "cp10","m"),ac("Mi", "cp400","")],
/* 6*/      [ac("Re", "cp10","m"),ac("Mi", "cp400","")],
/* 7*/      [ac("Fa", "cp14",""),ac("Mi", "cp400","")],
/* 8*/      [ac("Fa", "cp14",""),ac("Mi", "cp400","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 11*/      [ac("Re", "cp14","m9")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("Re", "cp10","m"),ac("Mi", "cp400","")],
/* 14*/      [ac("Re", "cp10","m"),ac("Mi", "cp400","")],
/* 15*/      [ac("Fa", "cp14",""),ac("Mi", "cp400","")],
/* 16*/      [ac("Fa", "cp14","")],
/* 17*/      [ac("Mi", "cp14","")],
/* 18*/      [ac("Lam", "cp14","")],
/* 19*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 20*/      [ac("Re", "cp14","m9")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
