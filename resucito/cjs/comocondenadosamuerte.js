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
const NOMBREDELCANTO = "COMO CONDENADOS A MUERTE";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "1ª Corintios 4,9-13",
      dbnos: "37",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "Hasta el presente, pasamos hambre,",
/* 2 */        "pasamos sed y desnudez.",
/* 3 */        "Somos abofeteados,",
/* 4 */        "y andamos errantes.",
/* 5 */        "SOMOS ABOFETEADOS,",
/* 6 */        "Y ANDAMOS ERRANTES.",
/* 7 */        "Insultados, bendecimos,",
/* 8 */        "perseguidos, lo soportamos.",
/* 9 */        "Si somos difamados,",
/* 10 */        "respondemos con amor.",
/* 11 */        "SI SOMOS DIFAMADOS,",
/* 12 */        "RESPONDEMOS CON AMOR.",
/* 13 */        "HEMOS VENIDO A SER,",
/* 14 */        "HEMOS VENIDO A SER,",
/* 15 */        "HEMOS VENIDO A SER,",
/* 16 */        "LA BASURA DEL MUNDO,",
/* 17 */        "EL ESTROPAJO DE TODOS.",
/* 18 */        "Porque pienso que a nosotros,",
/* 19 */        "los apóstoles,",
/* 20 */        "Dios nos ha asignado",
/* 21 */        "el último lugar.",
/* 22 */        "COMO CONDENADOS A MUERTE,",
/* 23 */        "COMO CONDENADOS A MUERTE.",
/* 24 */        "COMO CONDENADOS A MUERTE,",
/* 25 */        "COMO CONDENADOS A MUERTE.",
/* 26 */        "Puestos como espectáculo",
/* 27 */        "para el mundo,",
/* 28 */        "para los ángeles,",
/* 29 */        "para los hombres,",
/* 30 */        "para los hombres.",
/* 31 */        "COMO CONDENADOS A MUERTE,...",
/* 32 */        "COMO CONDENADOS A MUERTE.",
/* 33 */        "COMO CONDENADOS A MUERTE,",
/* 34 */        "COMO CONDENADOS A MUERTE.",
/* 35 */        "HEMOS VENIDO A SER...",
/* 36 */        "HEMOS VENIDO A SER,",
/* 37 */        "HEMOS VENIDO A SER,",
/* 38 */        "LA BASURA DEL MUNDO,",
/* 39 */        "EL ESTROPAJO DE TODOS.",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 8*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 18*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Sol", "cp14","")],
/* 29*/      [ac("Fa", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("La", "cp14","m")],
/* 33*/      [ac("Sol", "cp14","")],
/* 34*/      [ac("La", "cp14","m")],
/* 35*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("Sol", "cp14","")],
/* 38*/      [ac("La", "cp14","m")],
/* 39*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],

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
