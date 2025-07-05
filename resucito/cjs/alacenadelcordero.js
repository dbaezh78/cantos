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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.5272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "A LA CENA DEL CORDERO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno lat. «Ad cenam Agni providi»",
      dbnos: "237",
      catg: "ELECCIÓN",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "A LA CENA DEL CORDERO,",
/* 2 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 3 */        "ATRAVESADO EL MAR ROJO,",
/* 4 */        "CANTAMOS A CRISTO, EL SEÑOR.",

/* 5 */        "Su cuerpo lleno de amor,",
/* 6 */        "sobre la mesa es el Pan vivo.",
/* 7 */        "Y su sangre sobre el altar,",
/* 8 */        "es el cáliz del nuevo pacto.",
/* 9 */        "Manso cordero inmolado,",
/* 10 */        "es Cristo, nuestra Pascua.",
/* 11 */        "Su cuerpo adorable",
/* 12 */        "es el verdadero pan ácimo.",

/* 13 */        "A LA CENA DEL CORDERO...",
/* 14 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 15 */        "ATRAVESADO EL MAR ROJO,",
/* 16 */        "CANTAMOS A CRISTO, EL SEÑOR.",

/* 17 */        "En esta hora admirable",
/* 18 */        "retornan los antiguos prodigios,",
/* 19 */        "su brazo potente nos salva",
/* 20 */        "del ángel de la muerte.",
/* 21 */        "Irradia sobre la Iglesia",
/* 22 */        "el gozo pascual, oh Señor,",
/* 23 */        "y une a tu gran victoria",
/* 24 */        "a los que han renovado el Bautismo.",

/* 25 */        "A LA CENA DEL CORDERO...",
/* 26 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 27 */        "ATRAVESADO EL MAR ROJO,",
/* 28 */        "CANTAMOS A CRISTO, EL SEÑOR.",

/* 29 */        "Sea honor, alabanza y gloria,",
/* 30 */        "a Cristo victorioso de la muerte,",
/* 31 */        "al Padre y al Santo Espíritu",
/* 32 */        "ahora y por los siglos eternos.",

/* 33 */        "A LA CENA DEL CORDERO...",
/* 34 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 35 */        "ATRAVESADO EL MAR ROJO,",
/* 36 */        "CANTAMOS A CRISTO, EL SEÑOR.",

/* 37 */        "AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/       [ac("La", "cp18","m"), ac("Sol","cp377","")],
/* 2*/       [ac("La", "cp449","m"), ac("Fa","cp591","")],
/* 3*/       [ac("", "cp","")],
/* 4*/       [ac("Mi", "cp492","")],

/* 5*/      [ac("La", "cp14","m"), ac("Sol","cp372","")],
/* 6*/      [ac("La", "cp410","m")],
/* 7*/      [ac("Sol", "cp382","")],
/* 8*/      [ac("La", "cp356","m")],

/* 9*/      [ac("Sol", "cp352","")],
/* 10*/      [ac("La", "cp318","m")],
/* 11*/      [ac("Sol", "cp248","")],
/* 12*/      [ac("La", "cp338","m")],

/* 13*/       [ac("La", "cp18","m"), ac("Sol","cp377","")],
/* 14*/       [ac("La", "cp449","m"), ac("Fa","cp591","")],
/* 15*/       [ac("", "cp","")],
/* 16*/       [ac("Mi", "cp492","")],

/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp314","")],
/* 10*/      [ac("La", "cp434","m")],
/* 11*/      [ac("Sol", "cp372","")],
/* 12*/      [ac("La", "cp292","m")],

/* 13*/      [ac("Sol", "cp306","")],
/* 14*/      [ac("La", "cp382","m")],
/* 15*/      [ac("Sol", "cp316","")],
/* 16*/      [ac("La", "cp498","m")],

/* 1*/       [ac("La", "cp18","m"), ac("Sol","cp377","")],
/* 2*/       [ac("La", "cp449","m"), ac("Fa","cp591","")],
/* 3*/       [ac("", "cp","")],
/* 4*/       [ac("Mi", "cp492","")],

/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp404","")],
/* 18*/      [ac("La", "cp442","m")],
/* 19*/      [ac("Sol", "cp374","")],
/* 20*/      [ac("La", "cp392","m")],

/* 1*/       [ac("La", "cp18","m"), ac("Sol","cp377","")],
/* 2*/       [ac("La", "cp449","m"), ac("Fa","cp591","")],
/* 3*/       [ac("", "cp","")],
/* 4*/       [ac("Mi", "cp492","")],

/* 2*/       [ac("Sol", "cp1",""), ac("La","cp68","m")],

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
