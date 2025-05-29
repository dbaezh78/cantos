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
const NOMBREDELCANTO = "BENDICIÓN DEL AGUA";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "De la liturgia bautismal de la Vigilia pascual",
      dbnos: "183",
      catg: "LITÚRGICOS",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Oh Dios",
/* 2 */        "que por mediode los signos sacramentales",
/* 3 */        "tú obras con invisible potencia",
/* 4 */        "las maravillas de la salvación.",
/* 5 */        "De muchos modos",
/* 6 */        "a través de los tiempos",
/* 7 */        "has preparado el agua, tu criatura,",
/* 8 */        "para que fuese signo del Bautismo.",
/* 9 */        "Desde los orígenes tu Espíritu",
/* 10 */        "aleteaba sobre las aguas,",
/* 11 */        "para que contuviesen la fuerza de santificar.",
/* 12 */        "Y también en el Diluvio",
/* 13 */        "has prefigurado el Bautismo,",
/* 14 */        "para que hoy como ayer",
/* 15 */        "el agua señalase el fin del pecado",
/* 16 */        "y el inicio de la Vida Nueva.",
/* 17 */        "Tú, has liberado de la esclavitud",
/* 18 */        "a los hijos de Abraham",
/* 19 */        "haciéndoles pasar ilesos el Mar Rojo,",
/* 20 */        "para que fuesen la imagen",
/* 21 */        "del futuro pueblo de bautizados.",
/* 22 */        "Por fin, en la plenitud de los tiempos,",
/* 23 */        "tu Hijo, bautizado en el agua del Jordán,",
/* 24 */        "fue consagrado por el Espíritu Santo.",
/* 25 */        "Y después de su resurrección",
/* 26 */        "ordenó a sus discípulos:",
/* 27 */        "«Id y anunciad el Evangelio",
/* 28 */        "a todos los pueblos,",












],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Mi", "cp14","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5 */   [ac("", "cp0","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Do", "cp14","")],
/* 8*/      [ac("Si", "cp14","7")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 11 */   [ac("", "cp0","")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Si","cp90","7")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 16*/      [ac("Si", "cp14","7")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Re", "cp14","")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Re", "cp14",""), ac("Mi","cp90","m")],
/* 22*/      [ac("Re", "cp14","")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 24*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 25*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Re", "cp14","")],
/* 28*/      [ac("Mi", "cp14","m")],












      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "LEVANTADO EN LA CRUZ,",
/* 2 */        "DE SU COSTADO SALIÓ",
/* 3 */        "SANGRE Y AGUA.",
/* 4 */        "BAUTIZÁNDOLOS",
/* 5 */        "EN EL NOMBRE DEL PADRE,",
/* 6 */        "Y DEL HIJO,",
/* 7 */        "Y DEL ESPÍRITU SANTO». ",

































      ],
      asambleaAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 2*/      [ac("Do", "cp14","")],
/* 3*/      [ac("Si", "cp14","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp14","")],
/* 6*/      [ac("Do", "cp14","")],
/* 7*/      [ac("Si", "cp14","7")],

































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
