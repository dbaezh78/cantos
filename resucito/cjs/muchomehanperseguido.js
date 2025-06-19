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
const NOMBREDELCANTO = "MUCHO ME HAN PERSEGUIDO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 129 (128)",
      dbnos: "119",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Mucho me han perseguido desde mi juventud,",
/* 2 */        "mucho me han perseguido, que lo diga Israel.",
/* 3 */        "MUCHO ME HAN PERSEGUIDO",
/* 4 */        "DESDE MI JUVENTUD,",
/* 5 */        "MUCHO ME HAN PERSEGUIDO,",
/* 6 */        "PERO NO HAN PODIDO CONMIGO.",
/* 7 */        "Sobre mi espalda araron aradores,",
/* 8 */        "sobre mi espalda alargaron sus surcos.",
/* 9 */        "A SOBRE MI ESPALDA ARARON",
/* 10 */        "LOS ARADORES,",
/* 11 */        "SOBRE MI ESPALDA ALARGARON",
/* 12 */        "SUS SURCOS.",
/* 13 */        "Mas el Señor, que es justo,",
/* 14 */        "rompió las coyundas de los malvados.",
/* 15 */        "Mas el Señor, que es justo,",
/* 16 */        "rompió las coyundas de los malvados.",
/* 17 */        "Retrocedan los que odian a Sión,",
/* 18 */        "retrocedan los que odian a Sión.",
/* 19 */        "RETROCEDAN LOS QUE ODIAN A SIÓN,",
/* 20 */        "RETROCEDAN LOS QUE ODIAN A SIÓN.",
/* 21 */        "Que sean como la hierba",
/* 22 */        "que crece en el tejado,",
/* 23 */        "como la hierba que se seca",
/* 24 */        "antes de arrancarla.",
/* 25 */        "De ella no llena el segador su mano,",
/* 26 */        "de ella no llena su regazo el gavillador.",
/* 27 */        "RETROCEDAN LOS QUE ODIAN A SIÓN,...",
/* 28 */        "RETROCEDAN LOS QUE ODIAN A SIÓN.",
/* 29 */        "MUCHO ME HAN PERSEGUIDO...",
/* 30 */        "DESDE MI JUVENTUD,",
/* 31 */        "MUCHO ME HAN PERSEGUIDO,",
/* 32 */        "PERO NO HAN PODIDO CONMIGO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23 */   [ac("", "cp0","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("La", "cp14","m")],
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
