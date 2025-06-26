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
const NOMBREDELCANTO = "ZAQUEO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 19,1-10",
      dbnos: "178",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "HABIENDO ENTRADO JESÚS EN JERICÓ,",
/* 2 */        "ATRAVESABA LA CIUDAD,",
/* 3 */        "HABIENDO ENTRADO JESÚS EN JERICÓ,",
/* 4 */        "ATRAVESABA LA CIUDAD.",
/* 5 */        "Había un hombre llamado Zaqueo,",
/* 6 */        "que era jefe de publicanos y muy rico",
/* 7 */        "que trataba de ver a Jesús, pero no podía",
/* 8 */        "porque era de pequeña estatura.",
/* 9 */        "Se adelantó corriendo",
/* 10 */        "y se subió a un sicómoro,",
/* 11 */        "pues iba a pasar por allí,",
/* 12 */        "pues iba a pasar por allí.",
/* 13 */        "Cuando llegó Jesús,",
/* 14 */        "alzó la vista y le vio,",
/* 15 */        "y le dijo: «Zaqueo, baja pronto;",
/* 16 */        "porque conviene que hoy yo entre en tu casa,",
/* 17 */        "conviene que yo entre en tu casa».",
/* 18 */        "HABIENDO ENTRADO JESÚS EN JERICÓ...",
/* 19 */        "ATRAVESABA LA CIUDAD,",
/* 20 */        "HABIENDO ENTRADO JESÚS EN JERICÓ,",
/* 21 */        "ATRAVESABA LA CIUDAD.",
/* 22 */        "Bajó deprisa Zaqueo",
/* 23 */        "y le recibió lleno de alegría.",
/* 24 */        "Al verlo, todos murmuraban:",
/* 25 */        "«Ha entrado en casa de un pecador».",
/* 26 */        "Zaqueo, se puso en pie y dijo al Señor:",
/* 27 */        "«Daré, Señor, la mitad de mis bienes a los pobres;",
/* 28 */        "y si en algo defraudé, el cuádruplo le devolveré».",
/* 29 */        "Y Jesús le dijo:",
/* 30 */        "Hoy ha llegado la salvación a esta casa,",
/* 31 */        "hoy ha llegado la salvación a esta casa.",
/* 32 */        "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA,",
/* 33 */        "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA».",
/* 34 */        "«Porque también este es hijo de Abraham,",
/* 35 */        "pues el Hijo del hombre ha venido",
/* 36 */        "a buscar y a salvar lo que estaba perdido».",
/* 37 */        "HABIENDO ENTRADO JESÚS EN JERICÓ...",
/* 38 */        "ATRAVESABA LA CIUDAD,",
/* 39 */        "HABIENDO ENTRADO JESÚS EN JERICÓ,",
/* 40 */        "ATRAVESABA LA CIUDAD.",
/* 41 */        "Zaqueo eres tú.",
/* 42 */        "Baja pronto.",
/* 43 */        "Conviene que hoy entre en tu casa. BIS A.",
/* 44 */        "HABIENDO ENTRADO... HOY HA LLEGADO...",
/* 45 */        "HABIENDO ENTRADO JESÚS EN JERICÓ...",
/* 46 */        "ATRAVESABA LA CIUDAD,",
/* 47 */        "HABIENDO ENTRADO JESÚS EN JERICÓ,",
/* 48 */        "ATRAVESABA LA CIUDAD.",
/* 49 */        "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA,",
/* 50 */        "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Sol", "cp14","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("Fa", "cp14","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14","")],
/* 28*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 31*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 32*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 33*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 34*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 35*/      [ac("Rem", "cp14","")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Sol", "cp14","")],
/* 39*/      [ac("Fa", "cp14","")],
/* 40*/      [ac("Mi", "cp14","")],
/* 41*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 42*/      [ac("Rem", "cp14",""), ac("Mi","cp90","")],
/* 43*/      [ac("Fa", "cp14",""), ac("Mi","cp90","1")],
/* 44*/      [ac("Lam", "cp14",""), ac("Lam","cp90","")],
/* 45*/      [ac("La", "cp14","m")],
/* 46*/      [ac("Sol", "cp14","")],
/* 47*/      [ac("Fa", "cp14","")],
/* 48*/      [ac("Mi", "cp14","")],
/* 49*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 50*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
