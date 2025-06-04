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
const NOMBREDELCANTO = "COMO DESTILA LA MIEL";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Oda XL de Salomón",
      dbnos: "239",
      catg: "ELECCIÓN",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */        "COMO DESTILA LA MIEL",
/* 2 */        "EL PANAL DE LAS ABEJAS",
/* 3 */        "Y FLUYE LA LECHE",
/* 4 */        "EN LA MUJER QUE AMA A SUS HIJOS;",
/* 5 */        "COMO MANAN DE LA FUENTE",
/* 6 */        "LAS TRANQUILAS AGUAS,",
/* 7 */        "ASÍ MI CORAZÓN",
/* 8 */        "DERRAMA SU ALABANZA.",
/* 9 */        "Y de mis labios brota",
/* 10 */        "un nuevo canto hacia el Señor,",
/* 11 */        "y mi lengua siente",
/* 12 */        "la dulzura de su nombre,",
/* 13 */        "y mi cuerpo se deleita",
/* 14 */        "con sus canciones.",
/* 15 */        "Porque su luz serena",
/* 16 */        "apacigua todos mis males,",
/* 17 */        "porque su mirada simple de amor",
/* 18 */        "cura mi corazón.",
/* 19 */        "PORQUE LA VIDA INMORTAL",
/* 20 */        "HA PUESTO SU TIENDA",
/* 21 */        "DENTRO DE NOSOTROS.",
/* 22 */        "AALELUYA, AALELUYA,",
/* 23 */        "AAALELÚU,ALELÚ,ALELUYA.",
/* 24 */        "AALELUYA, AALELUYA,",
/* 25 */        "AAALELÚU,ALELÚ,ALELUYA.",
/* 26 */        "COMO DESTILA LA MIEL...",
/* 27 */        "EL PANAL DE LAS ABEJAS",
/* 28 */        "Y FLUYE LA LECHE",
/* 29 */        "EN LA MUJER QUE AMA A SUS HIJOS;",
/* 30 */        "COMO MANAN DE LA FUENTE",
/* 31 */        "LAS TRANQUILAS AGUAS,",
/* 32 */        "ASÍ MI CORAZÓN",
/* 33 */        "DERRAMA SU ALABANZA.",
/* 34 */        "Y mi rostro se ilumina con su alegría,",
/* 35 */        "y mi espíritu se goza en sus amores.",
/* 36 */        "Mi corazón lleno de su luz",
/* 37 */        "siente su mirada amorosa.",
/* 38 */        "Porque el temor en Él se confía,",
/* 39 */        "PORQUE EL TEMOR EN ÉL SE CONFÍA,",
/* 40 */        "porque la salvación en Él es segura.",
],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1*/       [ac("La", "cp14","m")],
/* 2*/       [ac("Re", "cp14","m")],
/* 3*/       [ac("Mi", "cp14","")],
/* 4*/       [ac("La", "cp14","m")],
/* 5*/       [ac("", "cp","")],
/* 6*/       [ac("Re", "cp14","m")],
/* 7*/       [ac("Mi", "cp14","")],
/* 8*/       [ac("La", "cp14","m")],
/* 9*/       [ac("Re", "cp14","m")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Re", "cp14","m")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("Fa", "cp14","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("Fa", "cp14","")],
/* 20 */     [ac("", "cp0","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","Fa")],
/* 23*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","Fa")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Re", "cp14","m")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("La", "cp14","m")],
/* 31*/      [ac("Re", "cp14","m")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 35*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 36*/      [ac("Fa", "cp14","")],
/* 37*/      [ac("Mi", "cp14","")],
/* 38*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 39*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 40*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
      ],
// ════════════════════════════════════════════════════════════════════════════════════
      // Estructura para Asamblea (texto)
      asamblea: [
/* 1 */        "PORQUE LA SALVACIÓN EN ÉL ES SEGURA.",
/* 2 */        "PORQUE LA VIDA INMORTAL...",
/* 3 */        "HA PUESTO SU TIENDA",
/* 4 */        "DENTRO DE NOSOTROS.",
/* 5 */        "AALELUYA, AALELUYA,",
/* 6 */        "AAALELÚU,ALELÚ,ALELUYA.",
/* 7 */        "AALELUYA, AALELUYA,",
/* 8 */        "AAALELÚU,ALELÚ,ALELUYA.",
/* 9 */        "COMO DESTILA LA MIEL...",
/* 10 */        "EL PANAL DE LAS ABEJAS",
/* 11 */        "Y FLUYE LA LECHE",
/* 12 */        "EN LA MUJER QUE AMA A SUS HIJOS;",
/* 13 */        "COMO MANAN DE LA FUENTE",
/* 14 */        "LAS TRANQUILAS AGUAS,",
/* 15 */        "ASÍ MI CORAZÓN",
/* 16 */        "DERRAMA SU ALABANZA.",
      ],
      asambleaAcordes: [
/* 1*/       [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 2*/       [ac("Fa", "cp14","")],
/* 3 */      [ac("", "cp0","")],
/* 4*/       [ac("Mi", "cp14","")],
/* 5*/       [ac("Fa", "cp14",""), ac("Mi","cp90","Fa")],
/* 6*/       [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/       [ac("Fa", "cp14",""), ac("Mi","cp90","Fa")],
/* 8*/       [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/       [ac("La", "cp14","m")],
/* 10*/      [ac("Re", "cp14","m")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Re", "cp14","m")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
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
