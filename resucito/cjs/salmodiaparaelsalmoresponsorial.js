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
const NOMBREDELCANTO = "SALMODIA PARA EL SALMO RESPONSORIAL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo I, II, III",
      dbnos: "210",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "MI ALMA ESTÁ SEDIENTA DE TI,",
/* 2 */        "SEÑOR, DIOS MÍO;",
/* 3 */        "MI ALMA ESTÁ SEDIENTA DE TI.",
/* 4 */        "Oh Dios, tú eres mi Dios, por ti madrugo,",
/* 5 */        "mi alma está sedienta de ti,",
/* 6 */        "mi carne tiene ansia de ti,",
/* 7 */        "como tierra reseca, agostada, sin agua.",
/* 8 */        "MI ALMA ESTÁ SEDIENTA DE TI...",
/* 9 */        "SEÑOR, DIOS MÍO;",
/* 10 */        "MI ALMA ESTÁ SEDIENTA DE TI.",
/* 11 */        "¡Cómo te contemplaba en el santuario",
/* 12 */        "viendo tu fuerza y tu gloria!",
/* 13 */        "Tu gracia vale más que la vida,",
/* 14 */        "te alabarán mis labios.",
/* 15 */        "MI ALMA ESTÁ SEDIENTA DE TI...",
/* 16 */        "SEÑOR, DIOS MÍO;",
/* 17 */        "MI ALMA ESTÁ SEDIENTA DE TI.",
/* 18 */        "EL SEÑOR ES MI PASTOR,",
/* 19 */        "NADA ME FALTA;",
/* 20 */        "EL SEÑOR ES MI PASTOR,",
/* 21 */        "NADA ME FALTA.",
/* 22 */        "Preparas una mesa ante mí,",
/* 23 */        "enfrente de mis enemigos,",
/* 24 */        "me unges la cabeza con perfume,",
/* 25 */        "y mi copa rebosa.",
/* 26 */        "EL SEÑOR ES MI PASTOR...",
/* 27 */        "NADA ME FALTA;",
/* 28 */        "EL SEÑOR ES MI PASTOR,",
/* 29 */        "NADA ME FALTA.",
/* 30 */        "Tu bondad y tu misericordia me acompañan",
/* 31 */        "todos los días de mi vida,",
/* 32 */        "y habitaré en la casa del Señor",
/* 33 */        "por años sin término.",
/* 34 */        "EL SEÑOR ES MI PASTOR...",
/* 35 */        "NADA ME FALTA;",
/* 36 */        "EL SEÑOR ES MI PASTOR,",
/* 37 */        "NADA ME FALTA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 2*/      [ac("Si", "cp14","7")],
/* 3*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 4*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 5*/      [ac("La", "cp","m"), ac("Si","cp90","7")],
/* 6*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 7*/      [ac("Do", "cp14",""), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 8*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 9*/      [ac("Si", "cp14","7")],
/* 10*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 11*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 12*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 13*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 14*/      [ac("Do", "cp14",""), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 15*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 16*/      [ac("Si", "cp14","7")],
/* 17*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 18*/      [ac("Sol", "cp14","")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Do", "cp14","")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("Do", "cp14","")],
/* 25*/      [ac("Sol", "cp14","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27 */   [ac("", "cp0","")],
/* 28*/      [ac("Do", "cp14","")],
/* 29*/      [ac("Sol", "cp14","")],
/* 30*/      [ac("Sol", "cp14","")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 34*/      [ac("Sol", "cp14","")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Do", "cp14","")],
/* 37*/      [ac("Sol", "cp14","")],
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
