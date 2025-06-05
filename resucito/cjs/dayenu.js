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
          const factor = 0.99; // Factor más preciso para 800px
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
/* 1 */         "Cuántos bienes nos ha dado el Señor.",
/* 2 */         "CUÁNTOS BIENES",
/* 3 */         "NOS HA DADO EL SEÑOR.",
/* 4 */         "Cuántos bienes nos ha dado el Señor.",
/* 5 */         "A CUÁNTOS BIENES",
/* 6 */         "NOS HA DADO EL SEÑOR.",
/* 7 */         "Si Cristo nos hubiera hecho salir de Egipto",
/* 8 */         "y no hubiera hecho justicia del Faraón:",
/* 9 */         "ESO NOS HABRÍA BASTADO,",
/* 10 */        "NOS HABRÍA BASTADO.",
/* 11 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 12 */        "Si hubiera hecho justicia del Faraón",
/* 13 */        "y no nos hubiera librado de todos los ídolos:",
/* 14 */        "ESO NOS HABRÍA BASTADO...,",
/* 15 */        "NOS HABRÍA BASTADO.",
/* 16 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 17 */        "Si nos hubiera librado de todos los ídolos",
/* 18 */        "y no nos hubiera dado todas sus riquezas:",
/* 19 */        "ESO NOS HABRÍA BASTADO,...",
/* 20 */        "NOS HABRÍA BASTADO.",
/* 21 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 22 */        "Si nos hubiera dado todas sus riquezas",
/* 23 */        "y no hubiera abierto el mar para nosotros:",
/* 24 */        "ESO NOS HABRÍA BASTADO,...",
/* 25 */        "NOS HABRÍA BASTADO.",
/* 26 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 27 */        "Si hubiera abierto el mar para nosotros",
/* 28 */        "y no hubiera hundido a nuestros opresores:",
/* 29 */        "ESO NOS HABRÍA BASTADO,...",
/* 30 */        "NOS HABRÍA BASTADO.",
/* 31 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 32 */        "Si hubiera hundido a nuestros opresores",
/* 33 */        "y no nos hubiera abierto un camino en el desierto:",
/* 34 */        "ESO NOS HABRÍA BASTADO,...",
/* 35 */        "NOS HABRÍA BASTADO.",
/* 36 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 37 */        "Si nos hubiera abierto un camino en el desierto",
/* 38 */        "y no nos hubiera nutrido con el pan de la vida:",
/* 39 */        "ESO NOS HABRÍA BASTADO,...",
/* 40 */        "NOS HABRÍA BASTADO.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/       [ac("Mi", "cp14","m"), ac("La","cp159","m"), ac("Mi","cp571","m")],
/* 2*/       [ac("La", "cp197","m")],
/* 3*/       [ac("Mi", "cp361","m")],
/* 4*/       [ac("Re", "cp173",""), ac("Do","cp407",""), ac("Mi","cp577","m")],
/* 5*/       [ac("Re", "cp236","")],
/* 6*/       [ac("Do", "cp157",""), ac("Mi","cp370","m")],
/* 7*/       [ac("La", "cp363","m"), ac("Si","cp620","7")],
/* 8*/       [ac("Mi", "cp587","m")],
/* 9*/       [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 10*/      [ac("Mi", "cp306","m")],
/* 11*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 12*/      [ac("Re", "cp195",""), ac("Do","cp556","")],
/* 13*/      [ac("Si", "cp326","7"), ac("Mi","cp630","m")],
/* 14*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 15*/      [ac("Mi", "cp306","m")],
/* 16*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 17*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 20*/      [ac("Mi", "cp306","m")],
/* 21*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 22*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 23*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 24*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 25*/      [ac("Mi", "cp306","m")],
/* 26*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 27*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 30*/      [ac("Mi", "cp306","m")],
/* 31*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 32*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 33*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 34*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 35*/      [ac("Mi", "cp306","m")],
/* 36*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 37*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 38*/      [ac("Mi", "cp14","m")],
/* 39*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 40*/      [ac("Mi", "cp306","m")],

      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */         "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 2 */         "Si nos hubiera nutrido con el pan de la vida",
/* 3 */         "y no nos hubiera dado el día del Señor:",
/* 4 */         "ESO NOS HABRÍA BASTADO,...",
/* 5 */         "NOS HABRÍA BASTADO.",
/* 6 */         "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 7 */         "Si nos hubiera dado el día del Señor",
/* 8 */         "y no nos hubiera sellado una nueva Alianza:",
/* 9 */         "ESO NOS HABRÍA BASTADO,...",
/* 10 */        "NOS HABRÍA BASTADO.",
/* 11 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 12 */        "Si hubiera hecho con nosotros una nueva Alianza",
/* 13 */        "y no nos hubiera hecho entrar en su Iglesia:",
/* 14 */        "ESO NOS HABRÍA BASTADO,...",
/* 15 */        "NOS HABRÍA BASTADO.",
/* 16 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
/* 17 */        "Si nos hubiera hecho entrar en su Iglesia",
/* 18 */        "y no hubiera construido en nosotros su templo:",
/* 19 */        "ESO NOS HABRÍA BASTADO,...",
/* 20 */        "NOS HABRÍA BASTADO.",
/* 21 */        "DAYENÚ, DAYENÚ, DAYENÚ.",
      ],
      asambleaAcordes: [
/* 1*/       [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 2*/       [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 3*/       [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 4*/       [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 5*/       [ac("Mi", "cp306","m")],
/* 6*/       [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 7*/       [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 8*/       [ac("Mi", "cp14","m")],
/* 9*/       [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 10*/      [ac("Mi", "cp306","m")],
/* 11*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 12*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 13*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 14*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 15*/      [ac("Mi", "cp306","m")],
/* 16*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
/* 17*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Si","cp150","7")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Re", "cp0",""), ac("Do","cp390","")],
/* 20*/      [ac("Mi", "cp306","m")],
/* 21*/      [ac("Re", "cp107",""), ac("Do","cp271",""), ac("Mi","cp418","m")],
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
