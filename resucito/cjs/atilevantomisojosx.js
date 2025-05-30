 /*********************** FUENTE DEL CANTO ***********************/
// ════════════════════════════

    // Mapeo para celulares (hasta 480px)
const pcelular = {
};

const pTablet = {
    };

// Función de Posición modificada
function ac(nota, posicion, extension = "") {
  const anchoPantalla = window.innerWidth;
  let posicionAjustada = posicion;

  // Primero verificar móviles (hasta 480px)
  if (anchoPantalla <= 480) {
    posicionAjustada = pcelular[posicion] || posicion;
    
    // Si no está en el mapeo, aplicamos factor
    if (!pcelular[posicion]) {
      const numero = parseInt(posicion.replace('cp', ''));
      const factor = 1.89; // Ajustar según necesidad
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  } 
  // Luego verificar tablets (601px a 900px)
  else if (anchoPantalla > 600 && anchoPantalla <= 900) {
    posicionAjustada = pTablet[posicion] || posicion;
    
    if (!pTablet[posicion]) {
      const numero = parseInt(posicion.replace('cp', ''));
      const factor = 1.77;
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
/* 1*/      [ac("Re", "cp14","m"), ac("La","cp539","7")],
/* 2*/      [ac("Sol", "cp101","m"), ac("La","cp460","7")],
/* 3*/      [ac("Si", "cp3","7"), ac("La","cp274","7")],
/* 4*/      [ac("Si♭", "cp53","7"), ac("La","cp242","7"), ac("Si♭","cp325","7"), ac("La","cp518","7")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "A TI LEVANTO MIS OJOS,",
/* 2 */        "A TI QUE HABITAS EN EL CIELO.",
/* 3 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 4 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 5 */        "¡QUE DEMASIADO SE HAN BURLADO DE NOSOTROS,",
/* 6 */        "QUE NUESTRA ALMA ESTÁ SACIADA DE DESPRECIOS!",
/* 7 */        "¡DE LAS BURLAS DE LOS SATISFECHOS,",
/* 8 */        "DEL DESPRECIO DE LOS SOBERBIOS!",
/* 9 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 10 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 11 */        "A TI LEVANTO MIS OJOS,",
/* 12 */        "A TI QUE HABITAS EN EL CIELO.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Re", "cp7","m"), ac("La","cp175","7")],
/* 2*/      [ac("Sol", "cp26","m"), ac("La","cp247","7")],

/* 3*/      [ac("Re", "cp45","m"), ac("La","cp269","7")],
/* 4*/      [ac("Si♭", "cp45","7"), ac("La","cp265","7")],

/* 5*/      [ac("Re", "cp120","m"), ac("La","cp416","7")],
/* 6*/      [ac("Si♭", "cp146","7"), ac("La","cp436","7")],

/* 7*/      [ac("Re", "cp90","m"), ac("La","cp295","7")],
/* 8*/      [ac("Si♭", "cp106","7"), ac("La","cp293","7")],

/* 9*/      [ac("Re", "cp46","m"), ac("La","cp269","7")],
/* 10*/      [ac("Si♭", "cp45","7"), ac("La","cp267","7")],

/* 11*/      [ac("Re", "cp10","m"), ac("La","cp175","7")],
/* 12*/      [ac("Sol", "cp26","m"), ac("La","cp247","7")],
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
