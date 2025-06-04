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
const NOMBREDELCANTO = "CRISTO ES LA LUZ";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno - Juan 8,12; 14,6",
      dbnos: "42",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Cristo es la Luz.",
/* 2 */        "CRISTO ES LA LUZ.",
/* 3 */        "Cristo es la Luz.",
/* 4 */        "CRISTO ES LA LUZ.",
/* 5 */        "ÉL ES LA SALVACIÓN.",
/* 6 */        "Cristo es el Camino.",
/* 7 */        "CRISTO ES EL CAMINO.",
/* 8 */        "Cristo es el Camino.",
/* 9 */        "CRISTO ES EL CAMINO.",
/* 10 */        "ÉL ES LA SALVACIÓN.",
/* 11 */        "Cristo es la Verdad.",
/* 12 */        "CRISTO ES LA VERDAD.",
/* 13 */        "Cristo es la Verdad.",
/* 14 */        "CRISTO ES LA VERDAD.",
/* 15 */        "ÉL ES LA SALVACIÓN.",
/* 16 */        "Cristo es la Vida.",
/* 17 */        "CRISTO ES LA VIDA.",
/* 18 */        "Cristo es la Vida.",
/* 19 */        "CRISTO ES LA VIDA.",
/* 20 */        "ÉL ES LA SALVACIÓN.",
/* 21 */        "Cristo es la Luz.",
/* 22 */        "CRISTO ES EL CAMINO.",
/* 23 */        "Cristo es la Verdad.",
/* 24 */        "CRISTO ES LA VIDA.",
/* 25 */        "ÉL ES LA SALVACIÓN.",















],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("Do", "cp","")],
/* 6*/      [ac("Do", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("Do", "cp14","")],
/* 11*/      [ac("Do", "cp14","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("Do", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Re", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("Do", "cp14","")],
/* 21*/      [ac("Do", "cp14","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Re", "cp14","m")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("Do", "cp14","")],















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
