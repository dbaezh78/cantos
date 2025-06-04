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
const NOMBREDELCANTO = "CUANDO EL SEÑOR";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 126 (125)",
      dbnos: "43",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Cuando el Señor",
/* 2 */        "hizo volver",
/* 3 */        "a los cautivos",
/* 4 */        "de Sión,",
/* 5 */        "nos parecía soñar;",
/* 6 */        "la boca",
/* 7 */        "se nos llenaba de risas,",
/* 8 */        "la lengua",
/* 9 */        "de cantares.",
/* 10 */        "PORQUE AL IR,",
/* 11 */        "SE VA LLORANDO,",
/* 12 */        "LLEVANDO LA SEMILLA;",
/* 13 */        "MAS AL VOLVER,",
/* 14 */        "SE VIENE CANTANDO,",
/* 15 */        "TRAYENDO LAS GAVILLAS.",
/* 16 */        "¡Grandes cosas ha hecho,",
/* 17 */        "maravillas,",
/* 18 */        "ha hecho el Señor con nosotros!",
/* 19 */        "Por eso",
/* 20 */        "estamos alegres.",
/* 21 */        "PORQUE AL IR ...",
/* 22 */        "SE VA LLORANDO,",
/* 23 */        "LLEVANDO LA SEMILLA;",
/* 24 */        "MAS AL VOLVER,",
/* 25 */        "SE VIENE CANTANDO,",
/* 26 */        "TRAYENDO LAS GAVILLAS.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Re", "cp14","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp","")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Re", "cp14","")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Re", "cp14",""), ac("Re","cp90","7")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 12*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Re","cp150","7")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 15*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 16*/      [ac("Re", "cp14","")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Re", "cp14","")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Re", "cp14",""), ac("Re","cp90","7")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Re","cp150","7")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 26*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
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
