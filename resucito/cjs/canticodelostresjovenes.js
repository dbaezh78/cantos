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
const NOMBREDELCANTO = "CÁNTICO DE LOS TRES JÓVENES";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Daniel 3,57-58",
      dbnos: "33",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Criaturas todas del Señor,",
/* 2 */        "BENDECID AL SEÑOR.",
/* 3 */        "Ensalzadlo",
/* 4 */        "CON HIMNOS POR LOS SIGLOS.",
/* 5 */        "Ángeles del Señor,",
/* 6 */        "BENDECID ...",
/* 7 */        "Cielos,",
/* 8 */        "BENDECID ...",
/* 9 */        "Aguas del espacio,",
/* 10 */        "BENDECID ...",
/* 11 */        "Ejércitos del Señor,",
/* 12 */        "BENDECID ...",
/* 13 */        "Sol y Luna,",
/* 14 */        "BENDECID ...",
/* 15 */        "Astros del Cielo,",
/* 16 */        "BENDECID ...",
/* 17 */        "Lluvia y rocío,",
/* 18 */        "BENDECID ...",
/* 19 */        "Vientos todos,",
/* 20 */        "BENDECID ...",
/* 21 */        "Fuego y calor,",
/* 22 */        "BENDECID ...",
/* 23 */        "Fríos y heladas,",
/* 24 */        "BENDECID ...",
/* 25 */        "Rocíos y nevadas,",
/* 26 */        "BENDECID ...",
/* 27 */        "Témpanos y hielos,",
/* 28 */        "BENDECID ...",
/* 29 */        "Escarchas y nieves,",
/* 30 */        "BENDECID ...",
/* 31 */        "Noche y día,",
/* 32 */        "BENDECID ...",
/* 33 */        "Luz y tinieblas,",
/* 34 */        "BENDECID ...",
/* 35 */        "Rayos y nubes,",
/* 36 */        "BENDECID ...",
/* 37 */        "Bendiga la tierra al Señor",
/* 38 */        "LO ENSALCE",
/* 39 */        "CON HIMNOS POR LOS SIGLOS.",
/* 40 */        "Montes y cumbres,",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Mi", "cp123","7"), ac("La","cp298","m")],
/* 3*/      [ac("Mi", "cp97","7")],
/* 4*/      [ac("La", "cp405","m")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30 */   [ac("", "cp0","")],
/* 31 */   [ac("", "cp0","")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35 */   [ac("", "cp0","")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Mi", "cp72","7")],
/* 38 */   [ac("", "cp0","")],
/* 39*/      [ac("La", "cp409","m")],
/* 40*/      [ac("La", "cp14","m")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "BENDECID ...",
/* 2 */        "Cuanto germina en la tierra,",
/* 3 */        "BENDIGA ...",
/* 4 */        "Manantiales,",
/* 5 */        "BENDECID ...",
/* 6 */        "Mares y ríos,",
/* 7 */        "BENDECID ...",
/* 8 */        "Cetáceos y peces,",
/* 9 */        "BENDECID ...",
/* 10 */        "Aves del cielo,",
/* 11 */        "BENDECID ...",
/* 12 */        "Fieras y ganados,",
/* 13 */        "BENDECID ...",
/* 14 */        "Ensalzadlo",
/* 15 */        "CON HIMNOS POR LOS SIGLOS.",
/* 16 */        "Hijos de los hombres,",
/* 17 */        "BENDECID ...",
/* 18 */        "Bendiga Israel al Señor,",
/* 19 */        "BENDIGA ...",
/* 20 */        "Sacerdotes del Señor,",
/* 21 */        "BENDECID ...",
/* 22 */        "Siervos del Señor,",
/* 23 */        "BENDECID ...",
/* 24 */        "Almas y espíritus justos,",
/* 25 */        "BENDECID ...",
/* 26 */        "Santos y humildes de corazón,",
/* 27 */        "BENDECID ...",
/* 28 */        "Ananías, Azarías y Misael,",
/* 29 */        "BENDECID ...",
/* 30 */        "Ensalzadlo",
/* 31 */        "CON HIMNOS POR LOS SIGLOS.",
      ],

      asambleaAcordes: [
/* 1 */   [ac("Mi", "cp555","7")],
/* 2 */   [ac("", "cp0","")],
/* 3 */   [ac("", "cp0","")],
/* 4 */   [ac("", "cp0","")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7 */   [ac("", "cp0","")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11 */   [ac("", "cp0","")],
/* 12 */   [ac("", "cp0","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Mi", "cp97","7")],
/* 15*/      [ac("La", "cp401","m")],
/* 16*/      [ac("La", "cp14","m")],
/* 17 */   [ac("Mi", "cp583","7")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21 */   [ac("", "cp0","")],
/* 22 */   [ac("", "cp0","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25 */   [ac("", "cp0","")],
/* 26 */   [ac("", "cp0","")],
/* 27 */   [ac("", "cp0","")],
/* 28 */   [ac("", "cp0","")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("Mi", "cp99","7")],
/* 31*/      [ac("La", "cp405","m")],









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
