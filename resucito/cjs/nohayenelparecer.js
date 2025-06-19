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
const NOMBREDELCANTO = "NO HAY EN ÉL PARECER";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 53,2ss - Cuarto canto del Siervo de Yahveh",
      dbnos: "121",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "No hay en Él parecer,",
/* 2 */        "no hay hermosura",
/* 3 */        "que atraiga las miradas,",
/* 4 */        "no hay en él belleza que agrade.",
/* 5 */        "Despreciado,",
/* 6 */        "desecho de los hombres,",
/* 7 */        "varón de dolores,",
/* 8 */        "conocedor de todos los quebrantos.",
/* 9 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 10 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 11 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 12 */        "ANTE QUIEN SE VUELVE EL ROSTRO.",
/* 13 */        "Menospreciado,",
/* 14 */        "estimado en nada.",
/* 15 */        "Despreciado,",
/* 16 */        "desecho de los hombres,",
/* 17 */        "varón de dolores,",
/* 18 */        "conocedor de todos los quebrantos.",
/* 19 */        "ANTE QUIEN SE VUELVE EL ROSTRO,...",
/* 20 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 21 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 22 */        "ANTE QUIEN SE VUELVE EL ROSTRO.",
/* 23 */        "Pero fue Él, el que cargó con los pecados.",
/* 24 */        "Pero fue Él, el que cargó con los dolores.",
/* 25 */        "TODOS NOSOTROS",
/* 26 */        "ANDÁBAMOS ERRANTES.",
/* 27 */        "MALTRATADO,",
/* 28 */        "MAS ÉL SE SOMETIÓ,",
/* 29 */        "NO ABRIÓ LA BOCA,",
/* 30 */        "COMO CORDERO LLEVADO AL MATADERO.",
/* 31 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 32 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 33 */        "ANTE QUIEN SE VUELVE EL ROSTRO,",
/* 34 */        "ANTE QUIEN SE VUELVE EL ROSTRO.",
/* 35 */        "¡MALTRATADO!",
/* 36 */        "¡MALTRATADO!",
/* 37 */        "¡MALTRATADO!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol7", "cp14","")],
/* 4*/      [ac("Do", "cp14","")],
/* 5*/      [ac("Do", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Do", "cp14","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Do", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol7", "cp14","")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("Do", "cp14","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Do", "cp14","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Do", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Sol7", "cp14","")],
/* 22*/      [ac("Do", "cp14","")],
/* 23*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 24*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 25*/      [ac("Fa", "cp14","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("Do", "cp14","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("Do", "cp14","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("La", "cp14","m")],
/* 33*/      [ac("Sol7", "cp14","")],
/* 34*/      [ac("Do", "cp14","")],
/* 35*/      [ac("Do", "cp14","")],
/* 36 */   [ac("", "cp0","")],
/* 37 */   [ac("", "cp0","")],
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
