/*********************** FUENTE DEL CANTO ***********************/
// Mapeo para celulares 483px
const pcelular = {
    };
// ******************************** \\
// Mapeo específico para tablets (800px)
const pTablet = {
    };
function ac(nota, posicion, extension = "") {
      const anchoPantalla = window.innerWidth;
      let posicionAjustada = posicion;
// Solo ajustamos para tablets (601px a 900px)
      if (anchoPantalla > 600 && anchoPantalla <= 900) {
        posicionAjustada = pTablet[posicion] || posicion;
        // ************************************** \\
        // Si no está en el mapeo, aplicamos un factor general más preciso
        if (!pTablet[posicion]) {
          const numero = parseInt(posicion.replace('cp', ''));
          const factor = 0.93; // Factor más preciso para 800px
          posicionAjustada = `cp${Math.round(numero * factor)}`;
        }
      }
        // ************************************** \\
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
  
    /***********************
     * DATOS DEL CANTO
     ***********************/
        // ************************************** \\
const NOMBREDELCANTO = "ALELUYA PASCUAL";
        // ************************************** \\
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apropiado para el tiempo Pascual",
      dbnos: "181",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
        // ************************************** \\
cantor: [
/* 1 */        "Cristo Jesús ha resucitado.",
/* 2 */        "Cristo Jesús ha resucitado.",
/* 3 */        "Cristo Jesús ha resucitado.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","")],
/* 2*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","")],
/* 3*/      [ac("La", "cp14",""), ac("Mi","cp90",""), ac("La","cp150","")],
      ],
        // ************************************** \\
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
/* 9 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 10 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 11 */        "ALELUYA,ALELUYA,ALELUYA.",
/* 12 */        "ALELUYA,ALELUYA,ALELUYA.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 2*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 3*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 4*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 5*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 6*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 7*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 8*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 9*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 10*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 11*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 12*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
        // ************************************** \\
      ]
  };
        // ************************************** \\
/************************************************
 * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
************************************************/
        // ************************************** \\
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
