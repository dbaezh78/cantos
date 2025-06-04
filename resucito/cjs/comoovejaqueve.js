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
const NOMBREDELCANTO = "COMO OVEJA QUE VE";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Kontáklon (Romano el Meloda)",
      dbnos: "40",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Como oveja que ve cómo se llevan",
/* 2 */        "su corderito al matadero,",
/* 3 */        "María lo seguía consumida de dolor.",
/* 4 */        "Y le decía: «¿Dónde te llevan, Hijo mío?",
/* 5 */        "¿Cómo se acaba tan pronto",
/* 6 */        "el curso de tu vida?",
/* 7 */        "¡Háblame: no pases, te ruego, sin hablarme.",
/* 8 */        "Hijo mío, Hijo mío y Dios mío!",
/* 9 */        "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!",
/* 10 */        "Nunca hubiera podido imaginar",
/* 11 */        "que llegaría a verte en este estado,",
/* 12 */        "nunca hubiera creído",
/* 13 */        "que llegarían a tal punto de odio y de furor,",
/* 14 */        "apresándote contra toda justicia.",
/* 15 */        "¡Quisiera comprender! ¡Ay de mí!",
/* 16 */        "¡QUISIERA COMPRENDER! ¡AY DE MÍ!",
/* 17 */        "¡Cómo es posible que la luz se apague!",
/* 18 */        "¡CÓMO ES POSIBLE QUE LA LUZ SE APAGUE!",
/* 19 */        "¡Cómo es posible que te claven en una cruz!",
/* 20 */        "Hijo mío, Hijo mío y Dios mío!",
/* 21 */        "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!».",
/* 22 */        "«¿Por qué lloras, por qué lloras, madre mía?",
/* 23 */        "¿Por qué lloras, por qué lloras, madre mía?",
/* 24 */        "¿Acaso no debería sufrir?",
/* 25 */        "¿Acaso no debo morir?",
/* 26 */        "Entonces, ¿cómo podría salvar a Adán?",
/* 27 */        "Entonces, ¿cómo podrías ver a Eva",
/* 28 */        "que vuelve a la vida?».",
/* 29 */        "COMO OVEJA QUE VE CÓMO SE LLEVAN...",
/* 30 */        "SU CORDERITO AL MATADERO,",
/* 31 */        "MARÍA LO SEGUÍA CONSUMIDA DE DOLOR.",
/* 32 */        "Y LE DECÍA: «¿DÓNDE TE LLEVAN, HIJO MÍO?",
/* 33 */        "¿CÓMO SE ACABA TAN PRONTO",
/* 34 */        "EL CURSO DE TU VIDA?",
/* 35 */        "¡Háblame: no pases, te ruego, sin hablarme,",
/* 36 */        "Hijo mío, Hijo mío y Dios mío!",
/* 37 */        "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!",



],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4*/      [ac("La", "cp14","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Si", "cp14","7")],
/* 7*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 8*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 9*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("La", "cp14","m")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Mi", "cp14","m")],
/* 14*/      [ac("Si", "cp14","7")],
/* 15*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("Si", "cp14","7")],
/* 18*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 19*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 20*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 21*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 22*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 23*/      [ac("Mi", "cp14","m")],
/* 24*/      [ac("La", "cp14","m6")],
/* 25*/      [ac("Si", "cp14","7")],
/* 26*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Si", "cp14","7")],
/* 29*/      [ac("Mi", "cp14","m")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Mi", "cp14","m")],
/* 32*/      [ac("La", "cp14","m")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Si", "cp14","7")],
/* 35*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 36*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 37*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],



      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
      ],
      asambleaAcordes: [
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
