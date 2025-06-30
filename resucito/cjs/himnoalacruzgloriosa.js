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
const NOMBREDELCANTO = "HIMNO A LA CRUZ GLORIOSA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Homilía La Santa Pascua (Anónimo s. II)",
      dbnos: "227",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "LA CRUZ GLORIOSA",
/* 2 */        "DEL SEÑOR RESUCITADO",
/* 3 */        "ES EL ÁRBOL DE LA SALVACIÓN.",
/* 4 */        "DE ÉL YO ME NUTRO,",
/* 5 */        "EN ÉL ME DELEITO,",
/* 6 */        "EN SUS RAÍCES CREZCO,",
/* 7 */        "EN SUS RAMAS YO ME EXTIENDO.",
/* 8 */        "C. Su rocío me da fuerza,",
/* 9 */        "su Espíritu como brisa me fecunda;",
/* 10 */        "a su sombra he puesto yo mi tienda.",
/* 11 */        "En el hambre es la comida,",
/* 12 */        "en la desnudez es mi vestido,",
/* 13 */        "en la sed es agua viva.",
/* 14 */        "Angosto sendero, mi puerta estrecha,",
/* 15 */        "escala de Jacob, lecho de amor",
/* 16 */        "donde nos ha desposado el Señor.",
/* 17 */        "LA CRUZ GLORIOSA...",
/* 18 */        "DEL SEÑOR RESUCITADO",
/* 19 */        "ES EL ÁRBOL DE LA SALVACIÓN.",
/* 20 */        "DE ÉL YO ME NUTRO,",
/* 21 */        "EN ÉL ME DELEITO,",
/* 22 */        "EN SUS RAÍCES CREZCO,",
/* 23 */        "EN SUS RAMAS YO ME EXTIENDO.",
/* 24 */        "En el temor es mi defensa,",
/* 25 */        "en el tropiezo me da fuerzas,",
/* 26 */        "en la victoria es la corona,",
/* 27 */        "en la lucha ella es mi premio.",
/* 28 */        "Árbol de vida eterna,",
/* 29 */        "misterio del universo.",
/* 30 */        "Columna de la tierra,",
/* 31 */        "tu cima toca el cielo",
/* 32 */        "y en tus brazos abiertos",
/* 33 */        "brilla el amor de Dios.",
/* 34 */        "LA CRUZ GLORIOSA...",
/* 35 */        "DEL SEÑOR RESUCITADO",
/* 36 */        "ES EL ÁRBOL DE LA SALVACIÓN.",
/* 37 */        "DE ÉL YO ME NUTRO,",
/* 38 */        "EN ÉL ME DELEITO,",
/* 39 */        "EN SUS RAÍCES CREZCO,",
/* 40 */        "EN SUS RAMAS YO ME EXTIENDO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2*/      [ac("Sol# ", "cp14","Do# m")],
/* 3*/      [ac("Fa# m", "cp14","Sol#")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Sol# ", "cp","Do# m")],
/* 6*/      [ac("Fa#m", "cp14","")],
/* 7*/      [ac("Si7 ", "cp14","Mi")],
/* 8*/      [ac("Sol# ", "cp14","La")],
/* 9*/      [ac("Sol#", "cp14","")],
/* 10*/      [ac("Fa# m", "cp14","Sol#")],
/* 11*/      [ac("La", "cp14","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Sol#", "cp14","")],
/* 14*/      [ac("Fa# m", "cp14","Sol#")],
/* 15*/      [ac("Fa#m", "cp14","")],
/* 16*/      [ac("Sol#", "cp14","")],
/* 17*/      [ac("Mi", "cp14","")],
/* 18*/      [ac("Sol# ", "cp14","Do# m")],
/* 19*/      [ac("Fa# m", "cp14","Sol#")],
/* 20*/      [ac("Mi", "cp14","")],
/* 21*/      [ac("Sol# ", "cp14","Do# m")],
/* 22*/      [ac("Fa#m", "cp14","")],
/* 23*/      [ac("Si7 ", "cp14","Mi")],
/* 24*/      [ac("Sol# ", "cp14","La")],
/* 25*/      [ac("Sol#", "cp14","")],
/* 26*/      [ac("La", "cp14","")],
/* 27*/      [ac("Sol#", "cp14","")],
/* 28*/      [ac("Fa# m", "cp14","Sol#")],
/* 29*/      [ac("Fa# m", "cp14","Sol#")],
/* 30*/      [ac("La", "cp14","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33*/      [ac("Sol#", "cp14","")],
/* 34*/      [ac("Mi", "cp14","")],
/* 35*/      [ac("Sol# ", "cp14","Do# m")],
/* 36*/      [ac("Fa# m", "cp14","Sol#")],
/* 37*/      [ac("Mi", "cp14","")],
/* 38*/      [ac("Sol# ", "cp14","Do# m")],
/* 39*/      [ac("Fa#m", "cp14","")],
/* 40*/      [ac("Si7 ", "cp14","Mi")],
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
