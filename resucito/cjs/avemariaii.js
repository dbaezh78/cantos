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
const NOMBREDELCANTO = "AVE MARÍA II (1984)";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lc 1,28ss - 1984 ",
      dbnos: "22",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Ave María,",
/* 2 */        "llena de gracia,",
/* 3 */        "el Señor es contigo,",
/* 4 */        "bendita tú eres",
/* 5 */        "entre todas las mujeres,",
/* 6 */        "y bendito es el fruto",
/* 7 */        "de tu vientre, Jesús.",

































],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 2*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14","")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("Fa", "cp14","")],
/* 7*/      [ac("Mi", "cp14","")],

































      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "SANTA MARÍA,",
/* 2 */        "MADRE DE DIOS,",
/* 3 */        "RUEGA POR NOSOTROS",
/* 4 */        "QUE SOMOS PECADORES,",
/* 5 */        "RUEGA AHORA",
/* 6 */        "Y EN LA HORA DE NUESTRA MUERTE.",
/* 7 */        "AMÉN.",

































      ],
      asambleaAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 2*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Fa", "cp14","")],
/* 6*/      [ac("Mi", "cp14",""), ac("Fa","cp90","")],
/* 7*/      [ac("Mi", "cp14","")],

































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
