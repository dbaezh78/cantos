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
const NOMBREDELCANTO = "ALELUYA, BENDECID AL SEÑOR";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 1.34 (1.33) - Melodía hebraica",
      dbnos: "14",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Bendecid al Señor, bendecid al Señor,",
/* 2 */        "vosotros los siervos del Señor.",
/* 3 */        "Bendecid al Señor, bendecid al Señor,",
/* 4 */        "vosotros que estáis en la casa del Señor.",
/* 5 */        "Alzad a Él las manos, alzad a Él las manos",
/* 6 */        "y bendecid al Señor,",
/* 7 */        "vosotros que estáis en la casa del Señor",
/* 8 */        "durante la noche.",
/* 9 */        "Aalelú, alelú uuu ... uuya.",
/* 10 */        "[melisma]",






























],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("La", "cp14","7")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp14","m")],
/* 5*/      [ac(" ", "cp","m")],
/* 6*/      [ac("La", "cp14","7")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 10 */   [ac("", "cp0","")],






























      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 2 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 3 */        "ALELUYA, ALELUYA, A A LE E LU U YA.",
/* 4 */        "ALELUYA, ALELUYA, A A LE E LU U YA.",
/* 5 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 6 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 7 */        "Bendecid al Señor, bendecid al Señor,",
/* 8 */        "vosotros los siervos del Señor.",
/* 9 */        "Bendecid al Señor, bendecid al Señor,",
/* 10 */        "vosotros que estáis en la casa del Señor.",
/* 11 */        "Alzad a Él las manos, alzad a Él las manos",
/* 12 */        "y bendecid al Señor,",
/* 13 */        "vosotros que estáis en la casa del Señor",
/* 14 */        "durante la noche.",
/* 15 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 16 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 17 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 18 */        "ALELÚ, ALELÚ, ALE E LU U YA.",






















      ],
      asambleaAcordes: [
/* 1*/      [ac("La", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 2*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 3*/      [ac("Re", "cp14","m"), ac("La","cp90","7"), ac("Si♭","cp150",""), ac("La","cp250","")],
/* 4*/      [ac("Re", "cp14","m"), ac("La","cp90","7"), ac("Si♭","cp150",""), ac("La","cp250","")],
/* 5*/      [ac("La", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 6*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 7*/      [ac("Rem", "cp14","")],
/* 8*/      [ac("La", "cp14","7")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("La", "cp14","7")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Re", "cp14","m")],
/* 15*/      [ac("La", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 16*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 17*/      [ac("La", "cp14",""), ac("Si♭","cp90",""), ac("La","cp150","")],
/* 18*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],






















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
