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
const NOMBREDELCANTO = "CUANDO ISRAEL SALIÓ DE EGIPTO";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 114 (113)",
      dbnos: "44",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Cuando Israel salió de Egipto,",
/* 2 */        "la casa de Jacob de un pueblo bárbaro,",
/* 3 */        "Judá fue su santuario,",
/* 4 */        "Israel fue su dominio.",
/* 5 */        "JUDÁ FUE SU SANTUARIO,",
/* 6 */        "ISRAEL FUE SU DOMINIO.",
/* 7 */        "Lo vio el mar y huyó,",
/* 8 */        "retrocedió el Jordán,",
/* 9 */        "los montes saltaron como carneros,",
/* 10 */        "las colinas como corderos.",
/* 11 */        "¿QUÉ ES LO QUE TIENES, OH MAR, PARA HUIR,",
/* 12 */        "Y TÚ JORDÁN, PARA RETROCEDER,",
/* 13 */        "VOSOTROS, MONTES QUE SALTÁIS COMO CARNEROS,",
/* 14 */        "COLINAS, COMO CORDEROS?",
/* 15 */        "TIEMBLA TIERRA, TIEMBLA,",
/* 16 */        "DELANTE DE DIOS QUE PASA,",
/* 17 */        "DELANTE DEL DIOS DE JACOB,",
/* 18 */        "QUE HACE BROTAR DE LA ROCA EL AGUA.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14",""), ac("Fa","cp90",""), ac("Mi","cp150","")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Mi", "cp",""), ac("Fa","cp90","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("La", "cp14","m")],
/* 12*/      [ac("Sol", "cp14","")],
/* 13*/      [ac("Fa", "cp14","")],
/* 14*/      [ac("MI", "cp14","")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Fa#", "cp14","m"), ac("Si","cp90","m")],
/* 17*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 18*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
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
