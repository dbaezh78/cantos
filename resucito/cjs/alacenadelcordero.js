/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
// --cp1: 0.1%;
   // --cp18: 1.8%;
   // --cp486: 48.6%;
   // --cp1547: 154.7%;
    };
// Mapeo específico para tablets (800px)
const pTablet = {
// --cp1: 0.1%;
   // --cp18: 1.8%;
   // --cp486: 48.6%;
   // --cp1547: 154.7%;
    };

function ac(nota, posicion, extension = "") {
   const anchoPantalla = window.innerWidth;
   let posicionAjustada = posicion;

// Solo ajustamos para tablets (601px a 900px)
   if (anchoPantalla > 600 && anchoPantalla <= 900) {
    posicionAjustada = pTablet[posicion] || posicion;

    // Si no está en el mapeo, aplicamos un factor general más preciso
    if (!pTablet[posicion]) {
     const numero = parseInt(posicion.replace('cp', ''));
     const factor = 0.971; // Factor más preciso para 800px
     posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
   }

   // Solo ajustamos para tablets (284px a 384px)
   if (anchoPantalla > 284 && anchoPantalla <= 411) {
      posicionAjustada = pcelular[posicion] || posicion;
      
      // Si no está en el mapeo, aplicamos un factor general más preciso
      if (!pcelular[posicion]) {
       const numero = parseInt(posicion.replace('cp', ''));
       const factor = 1.3; // Factor más preciso para 384px
       posicionAjustada = `cp${Math.round(numero * factor)}`;
      }
     }
   
   return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
  }
 
  /***********************
  * DATOS DEL CANTO
  ***********************/

const NOMBREDELCANTO = "A LA CENA DEL CORDERO";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno lat. «Ad cenam Agni providi»",
      dbnos: "237",

// Estructura para Cantor (texto)

cantor: [
/* 1 */        "Su cuerpo lleno de amor,",
/* 2 */        "sobre la mesa es el Pan vivo.",
/* 3 */        "Y su sangre sobre el altar,",
/* 4 */        "es el cáliz del nuevo pacto.",
/* 5 */        "Manso cordero inmolado,",
/* 6 */        "es Cristo, nuestra Pascua.",
/* 7 */        "Su cuerpo adorable",
/* 8 */        "es el verdadero pan ácimo.",
/* 9 */        "En esta hora admirable",
/* 10 */        "retornan los antiguos prodigios,",
/* 11 */        "su brazo potente nos salva",
/* 12 */        "del ángel de la muerte.",
/* 13 */        "Irradia sobre la Iglesia",
/* 14 */        "el gozo pascual, oh Señor,",
/* 15 */        "y une a tu gran victoria",
/* 16 */        "a los que han renovado el Bautismo.",
/* 17 */        "Sea honor, alabanza y gloria,",
/* 18 */        "a Cristo victorioso de la muerte,",
/* 19 */        "al Padre y al Santo Espíritu",
/* 20 */        "ahora y por los siglos eternos.",

],
   // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
   cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp372","")],
/* 2*/      [ac("La", "cp410","m")],
/* 3*/      [ac("Sol", "cp382","")],
/* 4*/      [ac("La", "cp356","m")],

/* 5*/      [ac("Sol", "cp352","")],
/* 6*/      [ac("La", "cp318","m")],
/* 7*/      [ac("Sol", "cp248","")],
/* 8*/      [ac("La", "cp338","m")],
// DERECHA
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp314","")],
/* 10*/      [ac("La", "cp434","m")],
/* 11*/      [ac("Sol", "cp372","")],
/* 12*/      [ac("La", "cp292","m")],

/* 13*/      [ac("Sol", "cp306","")],
/* 14*/      [ac("La", "cp382","m")],
/* 15*/      [ac("Sol", "cp316","")],
/* 16*/      [ac("La", "cp498","m")],

/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp404","")],
/* 18*/      [ac("La", "cp442","m")],
/* 19*/      [ac("Sol", "cp374","")],
/* 20*/      [ac("La", "cp392","m")],
      ],

   // Estructura para Asamblea (texto)
   asamblea: [
/* 1 */        "A LA CENA DEL CORDERO,",
/* 2 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 3 */        "ATRAVESADO EL MAR ROJO,",
/* 4 */        "CANTAMOS A CRISTO, EL SEÑOR",
/* 5 */        "A LA CENA DEL CORDERO,",
/* 6 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 7 */        "ATRAVESADO EL MAR ROJO,",
/* 8 */        "CANTAMOS A CRISTO, EL SEÑOR",
/* 9 */        "A LA CENA DEL CORDERO,",
/* 10 */        "VESTIDOS CON BLANCAS TÚNICAS,",
/* 11 */        "ATRAVESADO EL MAR ROJO,",
/* 12 */        "CANTAMOS A CRISTO, EL SEÑOR",
/* 13 */        "AMÉN",

      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp18","m"), ac("Sol","cp377","")],
/* 2*/      [ac("La", "cp449","m"), ac("Fa","cp591","")],
/* 3*/      [ac("", "cp5000","")],
/* 4*/      [ac("Mi", "cp492","")],

/* 5*/      [ac("La", "cp18","m"), ac("Sol","cp372","")],
/* 6*/      [ac("La", "cp444","m"), ac("Fa","cp590","")],
/* 7*/      [ac("", "0","")],
/* 8*/      [ac("Mi", "cp492","")],

/* 9*/      [ac("La", "cp18","m"), ac("Sol","cp372","")],
/* 10*/     [ac("La", "cp444","m"), ac("Fa","cp590","")],
/* 11*/     [ac("", "cp5000","")],
/* 12*/     [ac("Mi", "cp492","")],

/* 13*/      [ac("Sol", "cp12",""), ac("La","cp72","m")],
      ]
  };

/************************************************
* MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
************************************************/

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
  }
  
  // Iniciar carga del canto y configurar eventos
  document.addEventListener('DOMContentLoaded', () => {
   // Limpiar contenido existente primero para evitar duplicados
   const contenedor = document.getElementById('contenedor-partitura'); // Asegúrate de tener este ID
   if (contenedor) contenedor.innerHTML = '';
   
   cargarCantoSeguro(partitura);
   window.addEventListener('resize', manejarRedimensionamiento);
  });
