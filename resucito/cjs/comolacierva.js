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
          const factor = 0.97; // Factor más preciso para 800px
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
const NOMBREDELCANTO = "COMO LA CIERVA";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 42-43 (41-42)",
      dbnos: "39",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Como la cierva anhela las corrientes de agua,",
/* 2 */        "así mi alma te anhela a ti, Dios mío;",
/* 3 */        "mi alma tiene sed de Dios, del Dios vivo,",
/* 4 */        "¿cuándo podré ver el rostro de Dios?",
/* 5 */        "Mis lágrimas son mi pan noche y día,",
/* 6 */        "mientras mis enemigos me dicen todo el día:",
/* 7 */        "«¿Dónde está tu Dios? ¿Dónde está tu Dios?",
/* 8 */        "¿Dónde está tu Dios?)),",
/* 9 */        "Y cuando yo recuerdo",
/* 10 */        "el alma se me llena de tristeza,",
/* 11 */        "cómo marchaba en medio",
/* 12 */        "de un pueblo en fiesta.",
/* 13 */        "¿Por qué te abates, alma mía,",
/* 14 */        "por qué tú gimes dentro de mí?",
/* 15 */        "ESPERA EN DIOS, ESPERA EN DIOS,",
/* 16 */        "QUE VOLVERÁS A ALABARLO.",
/* 17 */        "Porque Él, Él es tu salvación,",
/* 18 */        "Él es tu Dios, Él es tu Dios.",
/* 19 */        "ESPERA EN DIOS, ESPERA EN DIOS,",
/* 20 */        "ESPERA EN DIOS, ESPERA EN DIOS,",
/* 21 */        "QUE VOLVERÁS A ALABARLO.",
/* 22 */        "¡Cuántas veces le he dicho a mi roca:",
/* 23 */        "¿Por qué me has abandonado?!",
/* 24 */        "¿Por qué camino triste,",
/* 25 */        "oprimido por mis enemigos?",
/* 26 */        "Se me rompen los huesos",
/* 27 */        "de escuchar todo el día:",
/* 28 */        "¿Dónde está tu Dios? ¿Dónde está ese Dios?",
/* 29 */        "Señor, envíame tu luz y tu verdad,",
/* 30 */        "que ellas me guíen hasta tu monte santo.",
/* 31 */        "Entonces podré cantar",
/* 32 */        "un canto de alegría con mi guitarra",
/* 33 */        "¿Por qué te abates, alma mía,...",
/* 34 */        "por qué tú gimes dentro de mí?",
/* 35 */        "ESPERA EN DIOS, ESPERA EN DIOS,...",
/* 36 */        "QUE VOLVERÁS A ALABARLO.",
/* 37 */        "Porque Él, Él es tu salvación,...",
/* 38 */        "Él es tu Dios, Él es tu Dios.",
/* 39 */        "DIOS, ESPERA EN DIOS,",
/* 40 */        "ESPERA EN DIOS, ESPERA EN DIOS,",
/* 41 */        "QUE VOLVERÁS A ALABARLO.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","")],
/* 2*/      [ac("Fa#", "cp14","m")],
/* 3*/      [ac("Si", "cp14","7")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5 */   [ac("", "cp0","")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("Fa#", "cp14","m")],
/* 8 */   [ac("", "cp0","")],
/* 9 */   [ac("", "cp0","")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Si", "cp14","7")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("Sol#", "cp14","")],
/* 14*/      [ac("Do#", "cp14","m")],
/* 15*/      [ac("Fa#", "cp14","m"), ac("Si","cp90","7")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("Do#", "cp36","m"), ac("Do#","cp203","7"), ac("Fa#","cp416","m")],
/* 18*/      [ac("Si", "cp0","7"), ac("Do#","cp165","m"), ac("La","cp227",""), ac("Sol#","cp393","")],
/* 19*/      [ac("La", "cp14",""), ac("Sol#","cp90","")],
/* 20*/      [ac("La", "cp14",""), ac("Si","cp90",""), ac("Si","cp150",""), ac("Si♭","cp250","")],
/* 21*/      [ac("Sol#", "cp14","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23 */   [ac("", "cp0","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Fa#", "cp14","m")],
/* 26*/      [ac("Fa#", "cp14","m")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("Fa#", "cp14","m")],
/* 30*/      [ac("Si", "cp14","7")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33*/      [ac("Sol#", "cp14","")],
/* 34*/      [ac("Do#", "cp14","m")],
/* 35*/      [ac("Fa#", "cp14","m"), ac("Si","cp90","7")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("Do#", "cp14","m"), ac("Do#","cp90","7"), ac("Fa#","cp150","m")],
/* 38*/      [ac("Si", "cp14","7"), ac("Do#","cp90","m"), ac("La","cp150",""), ac("Sol#","cp250","")],
/* 39*/      [ac("La", "cp14",""), ac("Si","cp90",""), ac("Si","cp150",""), ac("Si♭","cp250","")],
/* 40*/      [ac("La", "cp14",""), ac("Si","cp90",""), ac("Si","cp150",""), ac("Si♭","cp250","")],
/* 41*/      [ac("Sol#", "cp14","")],
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
