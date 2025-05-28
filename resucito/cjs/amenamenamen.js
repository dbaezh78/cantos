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
const NOMBREDELCANTO = "AMÉN, AMÉN, AMÉN";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 7,12-14 ",
      dbnos: "17",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Honor y poder",
/* 2 */        "y fortaleza,",
/* 3 */        "honor y poder",
/* 4 */        "demos a Dios.",
/* 5 */        "¿Quiénes son",
/* 6 */        "y de dónde vienen?",


































],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Fa", "cp14","")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac(" ", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],


































      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "AMÉN, AMÉN, AMÉN.",
/* 2 */        "AMÉN, AMÉN, AMÉN.",
/* 3 */        "AMÉN, AMÉN, AMÉN.",
/* 4 */        "BENDICIÓN Y GLORIA,",
/* 5 */        "SABIDURÍA,",
/* 6 */        "ACCIÓN DE GRACIAS",
/* 7 */        "DEMOS A DIOS.",
/* 8 */        "AMÉN, AMÉN, AMÉN.",
/* 9 */        "AMÉN, AMÉN, AMÉN.",
/* 10 */        "AMÉN, AMÉN, AMÉN.",
/* 11 */        "BENDICIÓN Y GLORIA,",
/* 12 */        "SABIDURÍA,",
/* 13 */        "ACCIÓN DE GRACIAS",
/* 14 */        "DEMOS A DIOS.",
/* 15 */        "AMÉN, AMÉN, AMÉN.",
/* 16 */        "AMÉN, AMÉN, AMÉN.",
/* 17 */        "AMÉN, AMÉN, AMÉN.",
/* 18 */        "¿QUIÉNES SON",
/* 19 */        "Y DE DÓNDE VIENEN?",
/* 20 */        "ESTOS SON LOS QUE VIENEN",
/* 21 */        "DE LA GRAN TRIBULACIÓN.",
/* 22 */        "Y LAVARON SUS TÚNICAS",
/* 23 */        "Y LAS BLANQUEARON",
/* 24 */        "EN LA SANGRE DEL CORDERO,",
/* 25 */        "EN LA SANGRE DEL CORDERO.",
/* 26 */        "ESTOS SON LOS QUE VIENEN",
/* 27 */        "DE LA GRAN TRIBULACIÓN.",
/* 28 */        "Y LAVARON SUS TÚNICAS",
/* 29 */        "Y LAS BLANQUEARON",
/* 30 */        "EN LA SANGRE DEL CORDERO,",
/* 31 */        "EN LA SANGRE DEL CORDERO.",
/* 32 */        "AMÉN, AMÉN, AMÉN.",
/* 33 */        "AMÉN, AMÉN, AMÉN.",
/* 34 */        "AMÉN, AMÉN, AMÉN.",






      ],
      asambleaAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 4*/      [ac("Do", "cp14","")],
/* 5*/      [ac("Sol", "cp14","")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("Do", "cp14","")],
/* 8*/      [ac("Do", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 11*/      [ac("Do", "cp14","")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Do", "cp14","")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 18*/      [ac("Fa", "cp14","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20*/      [ac("Sol", "cp14","7"), ac("Do","cp90","")],
/* 21*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 22*/      [ac("Fa", "cp14","")],
/* 23*/      [ac("Do", "cp14","")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("Sol", "cp14","7"), ac("Do","cp90","")],
/* 27*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 28*/      [ac("Fa", "cp14","")],
/* 29*/      [ac("Do", "cp14","")],
/* 30*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 31*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 32*/      [ac("Do", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],






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
