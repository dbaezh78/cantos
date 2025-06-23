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
const NOMBREDELCANTO = "SI HABÉIS RESUCITADO CON CRISTO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Colosense 3,1-4",
      dbnos: "151",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SI HABÉIS RESUCITADO CON CRISTO,",
/* 2 */        "BUSCAD LAS COSAS DE ARRIBA,",
/* 3 */        "DONDE ESTÁ CRISTO,",
/* 4 */        "DONDE ESTÁ CRISTO",
/* 5 */        "SENTADO A LA DIESTRA DE DIOS.",
/* 6 */        "Aspirad a las cosas del Cielo,",
/* 7 */        "y no a las de la tierra.",
/* 8 */        "ASPIRAD A LAS COSAS DEL CIELO,",
/* 9 */        "Y NO A LAS DE LA TIERRA.",
/* 10 */        "Porque habéis muerto,",
/* 11 */        "porque habéis muerto,",
/* 12 */        "y vuestra vida está oculta",
/* 13 */        "unida con Cristo en Dios.",
/* 14 */        "Y cuando   aparezca Cristo,",
/* 15 */        "que es vuestra vida,",
/* 16 */        "entonces vosotros",
/* 17 */        "apareceréis gloriosos con Él.",
/* 18 */        "SI HABÉIS RESUCITADO CON CRISTO...",
/* 19 */        "BUSCAD LAS COSAS DE ARRIBA,",
/* 20 */        "DONDE ESTÁ CRISTO,",
/* 21 */        "DONDE ESTÁ CRISTO",
/* 22 */        "SENTADO A LA DIESTRA DE DIOS.",
/* 23 */        "Aspirad a las cosas del Cielo,",
/* 24 */        "y no a las de la tierra.",
/* 25 */        "ASPIRAD A LAS COSAS DEL CIELO,",
/* 26 */        "Y NO A LAS DE LA TIERRA.",
/* 27 */        "Porque habéis muerto,",
/* 28 */        "y vuestra vida está oculta",
/* 29 */        "unida con Cristo en Dios.",
/* 30 */        "PORQUE HABÉIS MUERTO,",
/* 31 */        "Y VUESTRA VIDA ESTÁ OCULTA",
/* 32 */        "UNIDA CON CRISTO EN DIOS.",
/* 33 */        "Y cuando   aparezca Cristo,",
/* 34 */        "que es vuestra vida,",
/* 35 */        "entonces vosotros",
/* 36 */        "apareceréis gloriosos con Él.",
/* 37 */        "SI HABÉIS RESUCITADO CON CRISTO...",
/* 38 */        "BUSCAD LAS COSAS DE ARRIBA,",
/* 39 */        "DONDE ESTÁ CRISTO,",
/* 40 */        "DONDE ESTÁ CRISTO",
/* 41 */        "SENTADO A LA DIESTRA DE DIOS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Si", "cp","7")],
/* 6*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("Si", "cp14","7")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Si", "cp14","7")],
/* 14*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 15*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 16*/      [ac("Do", "cp14","")],
/* 17*/      [ac("Si", "cp14","7")],
/* 18*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 21 */   [ac("", "cp0","")],
/* 22*/      [ac("Si", "cp14","7")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Si", "cp14","7")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("Si", "cp14","7")],
/* 30*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Si", "cp14","7")],
/* 33*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 34*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 35*/      [ac("Do", "cp14","")],
/* 36*/      [ac("Si", "cp14","7")],
/* 37*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 38*/      [ac("Mi", "cp14","m")],
/* 39*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 40 */   [ac("", "cp0","")],
/* 41*/      [ac("Si", "cp14","7")],
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
