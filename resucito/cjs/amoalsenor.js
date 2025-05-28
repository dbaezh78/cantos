/*********************** FUENTE DEL CANTO ***********************/
// ════════════════════════════
// Mapeo para celulares 483px
const pcelular = {
    };
// Mapeo específico para tablets (800px)
const pTablet = {
    };
// Función de Posición
function ac(nota, posicion, extension = "") {
      const anchoPantalla = window.innerWidth;
      let posicionAjustada = posicion;
// Ajustes de la table y el celular
// Solo ajustamos para tablets (601px a 900px)
      if (anchoPantalla > 600 && anchoPantalla <= 900) {
        posicionAjustada = pTablet[posicion] || posicion;
// ════════════════════════════════════════════════════════════════════════════════════
        // Si no está en el mapeo, aplicamos un factor general más preciso
        if (!pTablet[posicion]) {
          const numero = parseInt(posicion.replace('cp', ''));
          const factor = 0.93; // Factor más preciso para 800px
          posicionAjustada = `cp${Math.round(numero * factor)}`;
        }
      }
// ════════════════════════════════════════════════════════════════════════════════════
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
  
// ════════════════════════════════════════════════════════════════════════════════════
//     * DATOS DEL CANTO
// ════════════════════════════════════════════════════════════════════════════════════
// 
const NOMBREDELCANTO = "AMO AL SEÑOR";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 116 (114-115)",
      dbnos: "18",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Amo al Señor, porque escucha",
/* 2 */        "mi voz suplicante;",
/* 3 */        "inclina hacia mí su oído",
/* 4 */        "el día en que lo invoco.",
/* 5 */        "Me envolvían redes de muerte,",
/* 6 */        "me alcanzaron los lazos del infierno;",
/* 7 */        "me rodeaban tristeza y angustia,",
/* 8 */        "invoqué el nombre del Señor:",
/* 9 */        "«¡Te ruego, Señor, sálvame!».",
/* 10 */        "¡Tenía fe, aun cuando dije:",
/* 11 */        "«Yo soy un desgraciado»!,",
/* 12 */        "y pensaba lleno de angustia:",
/* 13 */        "todo hombre es falso».",
/* 14 */        "¿Cómo pagaré al Señor",
/* 15 */        "todo el bien que me ha hecho?",
/* 16 */        "Alzaré la copa de la bendición",
/* 17 */        "e invocaré el nombre del Señor.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Mi", "cp14","m6"), ac("La","cp90","7")],
/* 4*/      [ac("Re", "cp14","")],
/* 5*/      [ac(" ", "cp","")],
/* 6*/      [ac("Fa#", "cp14","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m6")],
/* 8*/      [ac("La", "cp14","7")],
/* 9*/      [ac("Re", "cp14","")],
/* 10*/     [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 11 */    [ac("", "cp0","")],
/* 12*/     [ac("Sol", "cp14","")],
/* 13*/     [ac("Mi", "cp14","m6"), ac("La","cp90","7")],
/* 14*/     [ac("Re", "cp14","")],
/* 15*/     [ac("Fa#", "cp14","m")],
/* 16*/     [ac("Sol", "cp14",""), ac("Mi","cp90","m6")],
/* 17*/     [ac("La", "cp14","7")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "RECOBRA, ALMA MÍA, TU REPOSO,",
/* 2 */        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
/* 3 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 4 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 5 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 6 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 7 */        "RECOBRA, ALMA MÍA, TU REPOSO,",
/* 8 */        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
/* 9 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 10 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
/* 11 */        "ÉL TE HA SALVADO DE LA MUERTE,",
/* 12 */        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp14","Fa#"), ac("m","cp90","")],
/* 2*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m6"), ac("La","cp150","7")],
/* 3*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 4*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 5*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 6*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 7*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m6"), ac("La","cp150","7")],
/* 9*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 10*/     [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 11*/     [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 12*/     [ac("La", "cp14","7"), ac("Re","cp90","")],
// ════════════════════════════════════════════════════════════════════════════════════
      ]
  };
// 
// ════════════════════════════════════════════════════════════════════════════════════
// * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
// ════════════════════════════════════════════════════════════════════════════════════
// 
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
