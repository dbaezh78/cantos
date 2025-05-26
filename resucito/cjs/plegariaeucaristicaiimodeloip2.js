/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
//  --cp1: 0.1%;
      //  --cp18: 1.8%;
      //  --cp486: 48.6%;
      //  --cp1547: 154.7%;
    };
// Mapeo específico para tablets (800px)
const pTablet = {
//  --cp1: 0.1%;
      //  --cp18: 1.8%;
      //  --cp486: 48.6%;
      //  --cp1547: 154.7%;
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
          const factor = 0.93; // Factor más preciso para 800px
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

const NOMBREDELCANTO = "PLEGARIA EUCARÍSTICA II";

const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Modelo I (Página 2)",
      dbnos: "195",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)

cantor: [
/* 1 */        "El cual, cuando iba a ser entregado a su Pasión,",
/* 2 */        "voluntariamente aceptada, tomó el pan,",
/* 3 */        "y elevando los ojos a Ti, Padre, Padre,",
/* 4 */        "pronunció la bendición,",
/* 5 */        "lo partió y lo dio a sus discípulos, diciendo:",
/* 6 */        "Tomad y comed todos de él,",
/* 7 */        "porque esto es mi Cuerpo,",
/* 8 */        "que será entregado por vosotros.",
/* 9 */        "Del mismo modo, acabada la cena,",
/* 10 */        "tomó el cáliz, lleno del fruto de la vid,",
/* 11 */        "y elevando los ojos a Ti, Padre, Padre,",
/* 12 */        "pronunció la bendición,",
/* 13 */        "lo pasó a sus discípulos, diciendo:",
/* 14 */        "Tomad y bebed todos de él,",
/* 15 */        "porque este es el cáliz de mi Sangre,",
/* 16 */        "Sangre de la alianza nueva y eterna,",
/* 17 */        "que será derramada por muchos",
/* 18 */        "para el perdón de los pecados.",
/* 19 */        "Haced esto como mi memorial.",
/* 20 */        "Este es el sacramento de nuestra fe.",
/* 21 */        "¡Ven, Señor Jesús!",
/* 22 */        "Así, pues, Padre, al celebrar ahora",
/* 23 */        "el memorial de la muerte",
/* 24 */        "y resurrección de tu Hijo,",
/* 25 */        "te ofrecemos el pan de vida",
/* 26 */        "y el cáliz de salvación,",
/* 27 */        "y te damos gracias porque nos haces dignos",
/* 28 */        "de servirte en tu presencia.",
/* 29 */        "Te pedimos humildemente",
/* 30 */        "que el Espíritu Santo congregue en la unidad",
/* 31 */        "a cuantos participamos",
/* 32 */        "del Cuerpo y Sangre de Cristo.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/       [ac("Re", "cp14","m")],
/* 2 */      [ac("", "cp0","")],
/* 3 */      [ac("", "cp0","")],
/* 4*/       [ac("Fa", "cp14","")],
/* 5*/       [ac("Sol", "cp105","m"), ac("Re","cp612","m")],
/* 6*/       [ac("La", "cp433","7")],
/* 7*/       [ac("Re", "cp143","m")],
/* 8*/       [ac("La", "cp252","7"), ac("Re","cp455","m")],
/* 9*/       [ac("Re", "cp14","m")],
/* 10 */     [ac("", "cp0","")],
/* 11 */     [ac("", "cp0","")],
/* 12*/      [ac("Fa", "cp0","")],
/* 13*/      [ac("Sol", "cp109","m"), ac("Re","cp463","m")],
/* 14*/      [ac("La", "cp421","7")],
/* 15*/      [ac("Re", "cp139","m")],
/* 16 */     [ac("", "cp0","")],
/* 17*/      [ac("La", "cp445","7")],
/* 18*/      [ac("Re", "cp417","m")],
/* 19*/      [ac("La", "cp125","7"), ac("Re","cp473","m")],

/* 20*/      [ac("Sol", "cp22","m"), ac("La","cp574","7")],
/* 21*/      [ac("Re", "cp14","m")],
/* 22*/      [ac("Sol", "cp12","")],
/* 23 */     [ac("", "cp0","")],
/* 24*/      [ac("Mi", "cp353","m")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("La", "cp14","m"), ac("Mi","cp342","m")],
/* 28 */     [ac("", "cp0","")],
/* 29*/      [ac("Sol", "cp14","")],
/* 30*/      [ac("Si", "cp14","m")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Mi", "cp411","m")],
      ],

      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "ANUNCIAMOS TU MUERTE, SEÑOR,",
/* 2 */        "PROCLAMAMOS TU RESURRECCIÓN.",
/* 3 */        "¡MARANA THÁ! ¡MARANA THÁ!",
/* 4 */        "¡MARANA THÁ!",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Sol", "cp26","m")],
/* 3*/      [ac("La", "cp210","7"), ac("Sol","cp467","m")],
/* 4*/      [ac("La", "cp210","7")],
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
