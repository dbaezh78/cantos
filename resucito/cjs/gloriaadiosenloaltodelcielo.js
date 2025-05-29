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
const NOMBREDELCANTO = "GLORIA A DIOS EN LO ALTO DEL CIELO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno Litúrgico",
      dbnos: "188",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Señor Dios, Rey celestial,",
/* 2 */        "Dios Padre todopoderoso.",
/* 3 */        "Señor, Hijo único,",
/* 4 */        "Señor Dios, Cordero de Dios,",
/* 5 */        "Hijo del Padre;",
/* 6 */        "tú que quitas el pecado del mundo,",
/* 7 */        "Tú que quitas el pecado del mundo,",
/* 8 */        "atiende a nuestra súplica;",
/* 9 */        "tú, que estás sentado",
/* 10 */        "a la derecha del Padre,",
/* 11 */        "con el Espíritu Santo",
/* 12 */        "en la gloria de Dios Padre.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Sol", "cp139","")],
/* 2*/      [ac("Fa#", "cp375","m")],
/* 3*/      [ac("Mi", "cp195","m")],
/* 4*/      [ac("Sol", "cp141","")],
/* 5*/      [ac("Fa#", "cp167","m")],
/* 6*/      [ac("Mi", "cp484","m")],
/* 7*/      [ac("Sol", "cp155","")],
/* 8*/      [ac("Fa#", "cp331","m")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Mi", "cp286","m")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Re", "cp353","")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "GLORIA DIOS EN LO ALTO DEL CIELO,",
/* 2 */        "Y PAZ EN LA TIERRA",
/* 3 */        "A LOS HOMBRES QUE AMA EL SEÑOR.",
/* 4 */        "TE ALABAMOS, TE GLORIFICAMOS,",
/* 5 */        "TE ADORAMOS, TE DAMOS GRACIAS",
/* 6 */        "POR TU INMENSA GLORIA.",
/* 7 */        "JESUCRISTO.",
/* 8 */        "TEN PIEDAD DE NOSOTROS.",
/* 9 */        "TEN PIEDAD DE NOSOTROS;",
/* 10 */        "PORQUE SOLO TÚ ERES SANTO,",
/* 11 */        "SOLO TÚ SEÑOR,",
/* 12 */        "SOLO TÚ ALTÍSIMO,",
/* 13 */        "JESUCRISTO,",
/* 14 */        "AMÉN, AMÉN.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp4",""), ac("La","cp548","")],
/* 2*/      [ac("Sol", "cp50","")],
/* 3*/      [ac("La", "cp587","")],
/* 4*/      [ac("Re", "cp131",""), ac("La","cp473","")],
/* 5*/      [ac("Sol", "cp137","")],
/* 6*/      [ac("La", "cp351","")],
/* 7*/      [ac("La", "cp115","")],
/* 8*/      [ac("La", "cp341","")],
/* 9*/      [ac("La", "cp338","")],
/* 10*/      [ac("Sol", "cp176","")],
/* 11*/      [ac("Fa#", "cp226","m")],
/* 12*/      [ac("Mi", "cp199","m")],
/* 13*/      [ac("La", "cp115","")],
/* 14*/      [ac("Sol", "cp14",""), ac("Re","cp130","")],
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
