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
const NOMBREDELCANTO = "ALELUYA, ALABAD AL SEÑOR";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 150",
      dbnos: "13",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Alabad al Señor en su templo,",
/* 2 */        "alabadlo en su fuerte firmamento.",
/* 3 */        "Alabadlo por sus obras estupendas,",
/* 4 */        "alabadlo por su inmensa grandeza.",
/* 5 */        "Alabadlo al son de trompetas,",
/* 6 */        "alabadlo con arpas y guitarras,",
/* 7 */        "alabadlo con tambores y con danzas,",
/* 8 */        "alabadlo con trompas y flautas.",
/* 9 */        "Alabadlo con platillos sonoros,",
/* 10 */        "alabadlo con platillos vibrantes.",






























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La","cp250","")],
/* 2*/      [ac("Re", "cp14",""), ac("La","cp90",""), ac("Mi","cp150","")],
/* 3*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 4*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","")],
/* 5*/      [ac(" ", "cp",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La","cp250","")],
/* 6*/      [ac("Re", "cp14",""), ac("La","cp90",""), ac("Mi","cp150","")],
/* 7*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 8*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","")],
/* 9*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La","cp250","")],
/* 10*/      [ac("Re", "cp14",""), ac("La","cp90",""), ac("Mi","cp150","")],






























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
/* 7 */        "TODO SER ALABE AL SEÑOR,",
/* 8 */        "ALABE, ALABE AL SEÑOR.",
/* 9 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 10 */        "ALELUYA,ALELUYA,ALELUYA.",






























      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La_Re_La_Mi","cp250","")],
/* 2*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi_Re_Mi","cp250","")],
/* 3*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La_Re_La_Mi","cp250","")],
/* 4*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi_Re_Mi","cp250","")],
/* 5*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La_Re_La_Mi","cp250","")],
/* 6*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi_Re_Mi","cp250","")],
/* 7*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi","cp250","")],
/* 8*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("Mi","cp150","")],
/* 9*/      [ac("Mi", "cp14",""), ac("La","cp90",""), ac("Re","cp150",""), ac("La_Re_La_Mi","cp250","")],
/* 10*/      [ac("La", "cp14",""), ac("Re","cp90",""), ac("La","cp150",""), ac("Mi_Re_Mi","cp250","")],






























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
