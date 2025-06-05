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
const NOMBREDELCANTO = "DAYENÚ";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "De la Hagadá de Pésaj hebrea",
      dbnos: "45",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Si hubiera construido en nosotros su templo",
/* 2 */        "y no lo hubiera llenado de su Santo Espíritu:",
/* 3 */        "ESO NOS HABRÍA BASTADO,",
/* 4 */        "NOS HABRÍA BASTADO.",
/* 5 */        "DAYENÚ, DAYENÚ, DAYENÚ",
/* 6 */        "Cuánto más tenemos que dar gracias al Señor.",
/* 7 */        "CUÁNTO MÁS TENEMOS",
/* 8 */        "QUE DAR GRACIAS AL SEÑOR.",
/* 9 */        "Cuánto más tenemos que dar gracias al Señor.",
/* 10 */        "CUÁNTO MÁS TENEMOS",
/* 11 */        "QUE DAR GRACIAS AL SEÑOR.",
/* 12 */        "Que nos ha hecho salir de Egipto.",
/* 13 */        "Que ha hecho justicia del Faraón.",
/* 14 */        "Que nos ha librado de todos los enemigo",
/* 15 */        "Que nos ha dado todas sus riqueza",
/* 16 */        "Que ha abierto el mar para nosotro",
/* 17 */        "Que ha hundido a nuestros opresore",
/* 18 */        "Que nos ha dado un camino en el desierto.",
/* 19 */        "Que nos ha nutrido con el pan de la vida.",
/* 20 */        "Que nos ha dado el día del Señor.",
/* 21 */        "Que nos ha hecho una nueva Alianza.",
/* 22 */        "Que nos ha hecho entrar en su Iglesia.",
/* 23 */        "Que ha construido en nosotros su templo.",
/* 24 */        "Y lo ha llenado de su Espíritu Santo",
/* 25 */        "en el perdón de los pecados.",
/* 26 */        "Cristo nuestra Pascua está resucitado.",
/* 27 */        "CRISTO NUESTRA PASCUA",
/* 28 */        "ESTÁ RESUCITADO.",
/* 29 */        "Cristo nuestra Pascua está resucitado.",
/* 30 */        "CRISTO NUESTRA PASCUA",
/* 31 */        "ESTÁ RESUCITADO.",
/* 32 */        "Aleluya, aleluya.",
/* 33 */        "ALELUYA, ALELUYA.",
/* 34 */        "Aleluya, aleluya, aleluya",
/* 35 */        "ALELUYA, ALELUYA, ALELUYA.",
/* 36 */        "Aleluya, aleluya, aleluya.",
/* 37 */        "ALELUYA, ALELUYA, ALELUYA.",



],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Do","cp150","")],
/* 2*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 3*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 4*/      [ac(" Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 6*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 10*/      [ac("Re", "cp14","")],
/* 11*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 14*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 15*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 16*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 17*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 19*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 20*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 21*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 22*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 23*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 24*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 25*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 26*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 30*/      [ac("Re", "cp14","")],
/* 31*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 32*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 33*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 34*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 35*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 36*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 37*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],



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
