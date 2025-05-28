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
const NOMBREDELCANTO = "ALELUYA, YA LLEGÓ EL REINO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 19,6-9",
      dbnos: "15",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Ya llegó el Reino",
/* 2 */        "del Señor y su Cristo.",
/* 3 */        "Ya llegó el Reino",
/* 4 */        "del Señor nuestro Dios.",
/* 5 */        "Démosle gloria,",
/* 6 */        "han llegado las bodas.",
/* 7 */        "Démosle gloria,",
/* 8 */        "las bodas con nuestro Dios.",
/* 9 */        "Bienaventurados",
/* 10 */        "los invitados a bodas,",
/* 11 */        "a las bodas del Cordero.",
/* 12 */        "Bienaventurados",
/* 13 */        "los invitados a bodas,",
/* 14 */        "a las bodas con el Señor.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac(" ", "cp",""), ac("Mi","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Do", "cp14","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp14","m")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 2 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 3 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 4 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 5 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 6 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 7 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 8 */        "ALELUYA,ALELUYA,ALELUYA.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 3*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 4*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 5*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 6*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 7*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
/* 8*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","m")],
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
