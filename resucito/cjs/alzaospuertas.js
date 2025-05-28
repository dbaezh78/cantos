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
const NOMBREDELCANTO = "ALZAOS, PUERTAS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 24 (23)",
      dbnos: "16",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Del Señor es la tierra,",
/* 2 */        "y todo aquello que contiene,",
/* 3 */        "el orbe y sus habitantes.",
/* 4 */        "¿Quién es ese Rey de la gloria?",
/* 5 */        "El Señor, el fuerte, el valiente,",
/* 6 */        "el Señor, valiente en la batalla,",
/* 7 */        "El Señor de los ejércitos,",
/* 8 */        "Él es el Rey de la gloria,",
/* 9 */        "¿Quién subirá al monte del Señor?",
/* 10 */        "El de manos inocentes y puro corazón,",
/* 11 */        "el que no conduce su vida por vanidad,",
/* 12 */        "Y nosotros somos su Iglesia,",
/* 13 */        "que hoy viene a tu presencia,",
/* 14 */        "que busca tu rostro, oh Dios de Jacob,",


























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("La", "cp14",""), ac("Si7","cp90","")],
/* 4*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 5*/      [ac(" ", "cp","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 7*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 9*/      [ac("Mi", "cp14","m"), ac("La","cp90","m"), ac("Mi","cp150","m")],
/* 10*/      [ac("Si", "cp14","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("La","cp90","")],
/* 12*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 13*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("La","cp90","")],


























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "DEL SEÑOR ES LA TIERRA,",
/* 2 */        "Y TODO AQUELLO QUE CONTIENE,",
/* 3 */        "ALZAOS, PUERTAS,",
/* 4 */        "ALZAD LOS DINTELES,",
/* 5 */        "PUERTAS ETERNAS,",
/* 6 */        "DEBE ENTRAR EL REY",
/* 7 */        "DE LA GLORIA, DE LA GLORIA.",
/* 8 */        "¿QUIÉN ES ESE REY DE LA GLORIA?",
/* 9 */        "EL SEÑOR, EL FUERTE, EL VALIENTE,",
/* 10 */        "VALIENTE EN LA BATALLA.",
/* 11 */        "EL SEÑOR DE LOS EJÉRCITOS.",
/* 12 */        "EL REY DE LA GLORIA.",
/* 13 */        "ALZAOS, PUERTAS,",
/* 14 */        "ALZAD LOS DINTELES,",
/* 15 */        "PUERTAS ETERNAS,",
/* 16 */        "DEBE ENTRAR EL REY",
/* 17 */        "DE LA GLORIA, DE LA GLORIA.",
/* 18 */        "¿QUIÉN SUBIRÁ AL MONTE DEL SEÑOR?",
/* 19 */        "EL DE MANOS INOCENTES",
/* 20 */        "Y PURO CORAZÓN,",
/* 21 */        "POR VANIDAD.",
/* 22 */        "Y NOSOTROS SOMOS SU IGLESIA,",
/* 23 */        "QUE HOY VIENE A TU PRESENCIA,",
/* 24 */        "OH DIOS DE JACOB.",
/* 25 */        "ALZAOS, PUERTAS,",
/* 26 */        "ALZAD LOS DINTELES,",
/* 27 */        "PUERTAS ETERNAS,",
/* 28 */        "DEBE ENTRAR EL REY",
/* 29 */        "DE LA GLORIA, DE LA GLORIA.",











      ],
      asambleaAcordes: [
/* 1 */   [ac("", "cp0","")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("La", "cp14","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Si", "cp14","")],
/* 11*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 12*/      [ac("Si", "cp14","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Si", "cp14","")],
/* 22*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 24*/      [ac("Si", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("La", "cp14","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29 */   [ac("", "cp0","")],











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
