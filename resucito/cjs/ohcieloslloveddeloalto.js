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
const NOMBREDELCANTO = "OH CIELOS, LLOVED DE LO ALTO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 45,8",
      dbnos: "123",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "OH CIELOS, LLOVED DE LO ALTO,",
/* 2 */        "OH NUBES, MANDADNOS AL SANTO.",
/* 3 */        "OH TIERRA, ÁBRETE, OH TIERRA,",
/* 4 */        "Y BROTE EL SALVADOR.",
/* 5 */        "Somos desierto, somos arena.",
/* 6 */        "Marana thá,",
/* 7 */        "MARANA THÁ.",
/* 8 */        "Somos el viento, nadie nos oye.",
/* 9 */        "Marana thá,",
/* 10 */        "MARANA THÁ.",
/* 11 */        "OH CIELOS, LLOVED DE LO ALTO,...",
/* 12 */        "OH NUBES, MANDADNOS AL SANTO.",
/* 13 */        "OH TIERRA, ÁBRETE, OH TIERRA,",
/* 14 */        "Y BROTE EL SALVADOR.",
/* 15 */        "Somos tinieblas, nadie nos guía.",
/* 16 */        "Marana thá,",
/* 17 */        "MARANA THÁ.",
/* 18 */        "Somos cadenas, nadie nos libra.",
/* 19 */        "Marana thá,",
/* 20 */        "MARANA THÁ.",
/* 21 */        "OH CIELOS, LLOVED DE LO ALTO,...",
/* 22 */        "OH NUBES, MANDADNOS AL SANTO.",
/* 23 */        "OH TIERRA, ÁBRETE, OH TIERRA,",
/* 24 */        "Y BROTE EL SALVADOR.",
/* 25 */        "Tenemos frío, nadie nos cubre.",
/* 26 */        "Marana thá, A MARANA THÁ.",
/* 27 */        "Tenemos hambre, nadie nos sacia.",
/* 28 */        "Marana thá,",
/* 29 */        "MARANA THÁ.",
/* 30 */        "OH CIELOS, LLOVED DE LO ALTO,...",
/* 31 */        "OH NUBES, MANDADNOS AL SANTO.",
/* 32 */        "OH TIERRA, ÁBRETE, OH TIERRA,",
/* 33 */        "Y BROTE EL SALVADOR.",
/* 34 */        "Somos las lágrimas, que nadie enjuga.",
/* 35 */        "Marana thá, MARANA THÁ.",
/* 36 */        "Somos dolor, nadie nos mira.",
/* 37 */        "Marana thá, MARANA THÁ.",
/* 38 */        "OH CIELOS, LLOVED DE LO ALTO,...",
/* 39 */        "OH NUBES, MANDADNOS AL SANTO.",
/* 40 */        "OH TIERRA, ÁBRETE, OH TIERRA,",
/* 41 */        "Y BROTE EL SALVADOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 4*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("La", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 9*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 12*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 14*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 16*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 19*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 22*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 23*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 24*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 25*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 26*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 27*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 28*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 31*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 32*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 33*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 34*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 35*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 36*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 37*/      [ac("Mi", "cp14",""), ac("Sol","cp90",""), ac("Mi","cp150","")],
/* 38*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 39*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 40*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 41*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
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
