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
const NOMBREDELCANTO = "COMO EL IMPULSO QUE SIENTE LA IRA";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Oda VII de Salomón",
      dbnos: "221",
      catg: "CATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Como el impulso que siente la ira",
/* 2 */        "hacia el enemigo,",
/* 3 */        "como el impulso que siente el amor",
/* 4 */        "hacia el amado,",
/* 5 */        "así siento yo un impulso hacia Ti,",
/* 6 */        "Tú, el inmortal, la plenitud de los tiempos.",
/* 7 */        "TÚ ERES EL CAMINO,",
/* 8 */        "¡CÓMO ES MARAVILLOSO!",
/* 9 */        "TÚ ERES EL CAMINO, TÚ ERES EL AMOR.",
/* 10 */        "TÚ ERES EL CAMINO, TÚ ERES LA VIDA.",
/* 11 */        "TÚ ERES EL CAMINO, TÚ ERES LA VERDAD.",
/* 12 */        "TÚ ERES EL CAMINO, TÚ ERES LA VERDAD,",
/* 13 */        "TÚ ERES LA VIDA.",
/* 14 */        "Te has entregado a mí sin ninguna reserva,",
/* 15 */        "lleno de suavidad",
/* 16 */        "hiciste pequeña tu grandeza.",
/* 17 */        "Te hiciste pecado por mí lleno de misericordia,",
/* 18 */        "para que mis pecados no me apartasen de Ti.",
/* 19 */        "TÚ ERES EL CAMINO...",
/* 20 */        "¡CÓMO ES MARAVILLOSO!",
/* 21 */        "TÚ ERES EL CAMINO, TÚ ERES EL AMOR.",
/* 22 */        "TÚ ERES EL CAMINO, TÚ ERES LA VIDA.",
/* 23 */        "TÚ ERES EL CAMINO, TÚ ERES LA VERDAD.",
/* 24 */        "TÚ ERES EL CAMINO, TÚ ERES LA VERDAD,",
/* 25 */        "TÚ ERES LA VIDA.",
/* 26 */        "Te hiciste como yo para que te recibiera,",
/* 27 */        "en el aspecto como yo",
/* 28 */        "para que de Ti me revistiera,",
/* 29 */        "y así no tuviera miedo al encontrarte,",
/* 30 */        "a Ti, el inmortal, la plenitud de los tiempos.",
/* 31 */        "TÚ ERES EL CAMINO...",
/* 32 */        "¡CÓMO ES MARAVILLOSO!",
/* 33 */        "TÚ ERES EL CAMINO, TÚ ERES EL AMOR.",
/* 34 */        "TÚ ERES EL CAMINO, TÚ ERES LA VIDA.",
/* 35 */        "TÚ ERES EL CAMINO, TÚ ERES LA VERDAD.",
/* 36 */        "TÚ ERES EL CAMINO, TÚ ERES LA VERDAD,",
/* 37 */        "TÚ ERES LA VIDA.",



],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Do", "cp14",""), ac("La","cp90","m")],
/* 2*/      [ac("Re", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","7")],
/* 4*/      [ac("Do", "cp14","")],
/* 5*/      [ac("La", "cp","7"), ac("Re","cp90","m")],
/* 6*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("Do", "cp14",""), ac("La","cp90","m"), ac("Re","cp150","m")],
/* 15*/      [ac("Sol", "cp14","7")],
/* 16*/      [ac("Do", "cp14","")],
/* 17*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 18*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 23*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 24*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("Do", "cp14",""), ac("La","cp90","m"), ac("Re","cp150","m")],
/* 27*/      [ac("Sol", "cp14","7")],
/* 28*/      [ac("Do", "cp14","")],
/* 29*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 30*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 31*/      [ac("La", "cp14","m")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 35*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 36*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 37*/      [ac("Mi", "cp14","")],



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
