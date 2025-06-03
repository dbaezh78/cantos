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
const NOMBREDELCANTO = "CARMEN 63";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(Rabindranath Tagore)*",
      dbnos: "36",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Están rotas mis ataduras,",
/* 2 */        "pagadas mis deudas,",
/* 3 */        "mis puertas de par en par ...",
/* 4 */        "¡me voy a todas partes!",
/* 5 */        "Ellos, acurrucados en su rincón,",
/* 6 */        "siguen tejiendo",
/* 7 */        "el pálido lienzo de sus horas;",
/* 8 */        "o vuelven a sentarse en el polvo,",
/* 9 */        "a contar sus monedas.",
/* 10 */        "Y me llaman, y me llaman",
/* 11 */        "para que no siga.",
/* 12 */        "¡Pero ya mi espada está forjada,",
/* 13 */        "ya tengo puesta mi armadura,",
/* 14 */        "ya mi caballo se impacienta!...",
/* 15 */        "¡Y yo ganaré mi reino!",
/* 16 */        "¡Y yo ganaré mi reino!",
/* 17 */        "¡GANARÉ MI REINO,",
/* 18 */        "GANARÉ MI REINO,",
/* 19 */        "ME VOY A TODAS PARTES!",
/* 20 */        "¡GANARÉ MI REINO,",
/* 21 */        "GANARÉ MI REINO,",
/* 22 */        "ME VOY A TODAS PARTES!",
/* 23 */        "ESTÁN ROTAS MIS ATADURAS,",
/* 24 */        "PAGADAS MIS DEUDAS,",
/* 25 */        "MIS PUERTAS DE PAR EN PAR ...",
/* 26 */        "¡ME VOY A TODAS PARTES!",
/* 27 */        "¡GANARÉ MI REINO,",
/* 28 */        "GANARÉ MI REINO,",
/* 29 */        "ME VOY A TODAS PARTES!",
/* 30 */        "¡GANARÉ MI REINO,",
/* 31 */        "GANARÉ MI REINO,",
/* 32 */        "ME VOY A TODAS PARTES!",








],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp82",""), ac("Fa","cp335","")],
/* 2*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi","cp90","")],
/* 6*/      [ac("Re", "cp14","m")],
/* 7*/      [ac("Mi", "cp14","")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("Si","cp90","")],
/* 15*/      [ac("Re", "cp14",""), ac("La","cp90",""), ac("Fa#","cp150","")],
/* 16*/      [ac("Si", "cp14","m"), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 17*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 18*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 19*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 20*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 21*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 22*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 23*/      [ac("La", "cp14","m"), ac("Mi","cp90",""), ac("Fa","cp150","")],
/* 24*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 25*/      [ac("Fa", "cp14","")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 28*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 29*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 30*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 31*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 32*/      [ac("Mi", "cp14",""), ac("La","cp90","")],








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
