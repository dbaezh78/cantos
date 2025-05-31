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
const NOMBREDELCANTO = "BENDITO SEA DIOS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Efesios 1,3-13",
      dbnos: "29",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "BENDITO SEA DIOS",
/* 2 */        "Y PADRE DE JESUCRISTO.",
/* 3 */        "Que nos ha bendecido",
/* 4 */        "con toda clase de amor;",
/* 5 */        "y nos ha elegido",
/* 6 */        "antes de la creación,",
/* 7 */        "para ser santos e inmaculados",
/* 8 */        "en el amor.",
/* 9 */        "PARA SER ALABANZA DE SU GLORIA,",
/* 10 */        "DE LA GLORIA DE SU GRACIA,",
/* 11 */        "DE LA GRACIA DE SU AMOR,",
/* 12 */        "CON LA QUE NOS AMÓ EN JESUCRISTO.",
/* 13 */        "BENDITO SEA DIOS",
/* 14 */        "Y PADRE DE JESUCRISTO.",
/* 15 */        "En Él tenemos la redención,",
/* 16 */        "el perdón de los pecados,",
/* 17 */        "según la riqueza de su amor,",
/* 18 */        "para que en la plenitud de los tiempos",
/* 19 */        "Cristo sea todo en todos.",
/* 20 */        "PARA SER ALABANZA DE SU GLORIA,",
/* 21 */        "DE LA GLORIA DE SU GRACIA,",
/* 22 */        "DE LA GRACIA DE SU AMOR,",
/* 23 */        "CON LA QUE NOS AMÓ EN JESUCRISTO.",
/* 24 */        "BENDITO SEA DIOS",
/* 25 */        "Y PADRE DE JESUCRISTO.",
/* 26 */        "En Él también nosotros,",
/* 27 */        "tras haber escuchado la Palabra de la verdad,",
/* 28 */        "la Buena Nueva",
/* 29 */        "de nuestra salvación,",
/* 30 */        "fuimos sellados con el Espíritu Santo,",
/* 31 */        "garantía de nuestra resurrección.",
/* 32 */        "PARA SER ALABANZA DE SU GLORIA,",
/* 33 */        "DE LA GLORIA DE SU GRACIA,",
/* 34 */        "DE LA GRACIA DE SU AMOR,",
/* 35 */        "CON LA QUE NOS AMÓ EN JESUCRISTO.",





],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("La","cp150","7"), ac("Re","cp250","")],
/* 2*/      [ac("Mi", "cp14","m"), ac("La","cp90","7"), ac("Re","cp150","")],
/* 3*/      [ac("Fa#", "cp14","")],
/* 4*/      [ac("Si", "cp14","m")],
/* 5*/      [ac("Fa#", "cp","")],
/* 6*/      [ac("Si", "cp14","m")],
/* 7*/      [ac("La", "cp14",""), ac("Sol","cp90","")],
/* 8*/      [ac("Fa#", "cp14","")],
/* 9*/      [ac("Si", "cp14","m")],
/* 10*/      [ac("La", "cp14","")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Fa#", "cp14","")],
/* 13*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("La","cp150","7"), ac("Re","cp250","")],
/* 14*/      [ac("Mi", "cp14","m"), ac("La","cp90","7"), ac("Re","cp150","")],
/* 15*/      [ac("Fa#", "cp14",""), ac("Si","cp90","m")],
/* 16*/      [ac("Fa#", "cp14","")],
/* 17*/      [ac("Si", "cp14","m")],
/* 18*/      [ac("La", "cp14",""), ac("Sol","cp90","")],
/* 19*/      [ac("Fa#", "cp14","")],
/* 20*/      [ac("Si", "cp14","m")],
/* 21*/      [ac("La", "cp14","")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("Fa#", "cp14","")],
/* 24*/      [ac("Re", "cp14",""), ac("Mi","cp90","m"), ac("La","cp150","7"), ac("Re","cp250","")],
/* 25*/      [ac("Mi", "cp14","m"), ac("La","cp90","7"), ac("Re","cp150","")],
/* 26*/      [ac("Fa#", "cp14","")],
/* 27*/      [ac("Si", "cp14","m")],
/* 28*/      [ac("Fa#", "cp14","")],
/* 29*/      [ac("Si", "cp14","m")],
/* 30*/      [ac("La", "cp14",""), ac("Sol","cp90","")],
/* 31*/      [ac("Fa#", "cp14","")],
/* 32*/      [ac("Si", "cp14","m")],
/* 33*/      [ac("La", "cp14","")],
/* 34*/      [ac("Sol", "cp14","")],
/* 35*/      [ac("Fa#", "cp14","")],





      ],
      // Estructura para Asamblea (texto)
// ════════════════════════════════════════════════════════════════════════════════════
      asamblea: [
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      asambleaAcordes: [
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
