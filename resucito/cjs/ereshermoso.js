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
const NOMBREDELCANTO = "ERES HERMOSO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 45 (44) ",
      dbnos: "67",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ERES HERMOSO, EL MÁS HERMOSO",
/* 2 */        "DE LOS HIJOS DE ADÁN,",
/* 3 */        "DE LOS HIJOS DE ADÁN.",
/* 4 */        "LA GRACIA ESTÁ EN TUS LABIOS.",
/* 5 */        "ERES BENDITO,",
/* 6 */        "EL BENDITO PARA SIEMPRE.",
/* 7 */        "Ciñe la espada a tu flanco, oh valiente,",
/* 8 */        "y marcha lleno de gloria y esplendor,",
/* 9 */        "cabalga por la verdad,",
/* 10 */        "la mansedumbre, la justicia.",
/* 11 */        "¡Tensa tu arco,",
/* 12 */        "que hace temible tu derecha!",
/* 13 */        "Agudas son tus flechas,",
/* 14 */        "te han sido entregados los pueblos.",
/* 15 */        "A TE HAN SIDO ENTREGADOS",
/* 16 */        "LOS PUEBLOS.",
/* 17 */        "ERES HERMOSO, EL MÁS HERMOSO",
/* 18 */        "DE LOS HIJOS DE ADÁN,",
/* 19 */        "DE LOS HIJOS DE ADÁN.",
/* 20 */        "LA GRACIA ESTÁ EN TUS LABIOS.",
/* 21 */        "ERES BENDITO,",
/* 22 */        "EL BENDITO PARA SIEMPRE.",
/* 23 */        "Desde los palacios de marfil",
/* 24 */        "las cítaras cantan para ti.",
/* 25 */        "Hijas de reyes son tus favoritas;",
/* 26 */        "a tu derecha está la reina,",
/* 27 */        "en oro de Ofir.",
/* 28 */        "A TU DERECHA ESTÁ LA REINA",
/* 29 */        "EN ORO DE OFIR.",
/* 30 */        "ERES HERMOSO, EL MÁS HERMOSO",
/* 31 */        "DE LOS HIJOS DE ADÁN,",
/* 32 */        "DE LOS HIJOS DE ADÁN.",
/* 33 */        "LA GRACIA ESTÁ EN TUS LABIOS.",
/* 34 */        "ERES BENDITO,",
/* 35 */        "EL BENDITO PARA SIEMPRE.",
/* 36 */        "Escucha, hija, y mira, inclina el oído,",
/* 37 */        "olvida tu pueblo y la casa de tu padre,",
/* 38 */        "y el rey se prendará de tu belleza.",
/* 39 */        "Y EL REY SE PRENDARÁ",
/* 40 */        "DE TU BELLEZA.",
/* 41 */        "El es tu Señor, ¡entrégate a él!",
/* 42 */        "Y en lugar de padres, tendrás hijos,",
/* 43 */        "que serán príncipes sobre la tierra.",
/* 44 */        "ERES HERMOSO, EL MÁS HERMOSO",
/* 45 */        "DE LOS HIJOS DE ADÁN,",
/* 46 */        "DE LOS HIJOS DE ADÁN.",
/* 47 */        "LA GRACIA ESTÁ EN TUS LABIOS.",
/* 48 */        "ERES BENDITO,",
/* 49 */        "EL BENDITO PARA SIEMPRE.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4 */   [ac("", "cp0","")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 8*/      [ac("La", "cp14",""), ac("Sol#","cp90","")],
/* 9*/      [ac("Fa#", "cp14","m")],
/* 10*/      [ac("Sol#", "cp14","")],
/* 11*/      [ac("Fa#", "cp14","m")],
/* 12*/      [ac("La", "cp14",""), ac("Sol#","cp90","")],
/* 13*/      [ac("Fa#", "cp14","m"), ac("Sol#","cp90","")],
/* 14*/      [ac("Si", "cp14",""), ac("La","cp90",""), ac("Sol#","cp150","")],
/* 15*/      [ac("Si", "cp14",""), ac("La","cp90","")],
/* 16*/      [ac("Sol#", "cp14","")],
/* 17*/      [ac("Mi", "cp14","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 24*/      [ac("La", "cp14",""), ac("Sol#","cp90","")],
/* 25*/      [ac("Fa#", "cp14","m"), ac("Sol#","cp90","")],
/* 26*/      [ac("Si", "cp14",""), ac("La","cp90","")],
/* 27*/      [ac("Sol#", "cp14","")],
/* 28*/      [ac("Si", "cp14",""), ac("La","cp90","")],
/* 29*/      [ac("Sol#", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90",""), ac("La","cp150",""), ac("Sol#","cp250","")],
/* 37*/      [ac("Fa#", "cp14","m"), ac("Sol#","cp90","")],
/* 38*/      [ac("Si", "cp14",""), ac("La","cp90",""), ac("Sol#","cp150","")],
/* 39*/      [ac("Si", "cp14",""), ac("La","cp90","")],
/* 40*/      [ac("Sol#", "cp14","")],
/* 41*/      [ac("Fa#", "cp32","m"), ac("Sol#","cp201",""), ac("Fa#","cp325","m"), ac("Sol#","cp479","")],
/* 42*/      [ac("Si", "cp14",""), ac("La","cp90","")],
/* 43*/      [ac("Sol#", "cp14","")],
/* 44*/      [ac("Mi", "cp14","")],
/* 45 */   [ac("", "cp0","")],
/* 46 */   [ac("", "cp0","")],
/* 47 */   [ac("", "cp0","")],
/* 48 */   [ac("", "cp0","")],
/* 49 */   [ac("", "cp0","")],
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
