 /*********************** FUENTE DEL CANTO ***********************/
// ════════════════════════════
// Mapeo para celulares 483px
const pcelular = {
    };
// Mapeo específico para tablets (800px)
const pTablet = {
    'cp53':'cp18',
    'cp765':'cp288',
    'cp765':'cp288',
    'cp106':'cp36',
    'cp109':'cp37',
    'cp153':'cp52',
    'cp157':'cp53',
    'cp248':'cp84',
    'cp257':'cp87',
    'cp293':'cp100',
    'cp31':'cp11',
    'cp53':'cp18',
    'cp761':'cp258',
    'cp796':'cp270',
    'cp800':'cp272',
    'cp838':'cp285',
    'cp845':'cp287',
    'cp849':'cp288',
    'cp863':'cp293',
    'cp884':'cp300',

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
const NOMBREDELCANTO = "A TI LEVANTO MIS OJOS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 123 (122)",
      dbnos: "3",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Como los ojos de los siervos miran a las manos de sus señores,",
/* 2 */        "como los ojos de la esclava a las manos de su señora,",
/* 3 */        "así nuestros ojos miran al Señor,",
/* 4 */        "esperando que tenga piedad, esperando que tenga piedad.",




































],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp20","m"), ac("La","cp914","7")],
/* 2*/      [ac("Sol", "cp208","m"), ac("La","cp919","7")],
/* 3*/      [ac("Si", "cp14","7"), ac("La","cp909","7")],
/* 4*/      [ac("Si♭", "cp99","7"), ac("La","cp445","7"), ac("Si♭","cp604","7"), ac("La","cp946","7")],




































      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "A TI LEVANTO MIS OJOS,",
/* 2 */        "A TI QUE HABITAS EN EL CIELO.",
/* 3 */        "Mujeres:   ",
/* 4 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 5 */        "Hombres: ",
/* 6 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 7 */        "Mujeres:   ",
/* 8 */        "¡QUE DEMASIADO SE HAN BURLADO DE NOSOTROS,",
/* 9 */        "Hombres: ",
/* 10 */        "QUE NUESTRA ALMA ESTÁ SACIADA DE DESPRECIOS!",
/* 11 */        "Mujeres:   ",
/* 12 */        "¡DE LAS BURLAS DE LOS SATISFECHOS,",
/* 13 */        "Hombres: ",
/* 14 */        "DEL DESPRECIO DE LOS SOBERBIOS!",
/* 15 */        "Mujeres:   ",
/* 16 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 17 */        "Hombres: ",
/* 18 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 19 */        "A TI LEVANTO MIS OJOS,",
/* 20 */        "A TI QUE HABITAS EN EL CIELO.",




















      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp53","m"), ac("La","cp765","7")],
/* 2*/      [ac("Sol", "cp106","m"), ac("La","cp838","7")],
/* 3 */     [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp157","m"), ac("La","cp884","7")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("Si♭", "cp157","7"), ac("La","cp884","7")],
/* 7 */   [ac("", "cp0","")],
/* 8*/      [ac("Re", "cp257","m"), ac("La","cp863","7")],
/* 9 */   [ac("", "cp0","")],
/* 10*/      [ac("Si♭", "cp293","7"), ac("La","cp845","7")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Re", "cp248","m"), ac("La","cp800","7")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Si♭", "cp31","7"), ac("La","cp761","7")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("Re", "cp153","m"), ac("La","cp884","7")],
/* 17 */   [ac("", "cp0","")],
/* 18*/      [ac("Si♭", "cp153","7"), ac("La","cp884","7")],
/* 19*/      [ac("Re", "cp53","m"), ac("La","cp796","7")],
/* 20*/      [ac("Sol", "cp109","m"), ac("La","cp849","7")],




















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
