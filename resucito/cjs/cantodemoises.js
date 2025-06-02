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
const NOMBREDELCANTO = "CANTO DE MOISÉS";
// 
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Éxodo 15,1-18",
      dbnos: "34",
      catg: "PRECATECUMENADO",
// Estructura para Cantor (texto)
// 
cantor: [
/* 1 */	    "Cantemos al Señor,",
/* 2 */	    "cantemos al Señor,",
/* 3 */	    "que se cubrió de gloria,",
/* 4 */	    "de gloria, de gloria,",
/* 5 */	    "precipitó en el mar",
/* 6 */	    "caballo y caballero.",
/* 7 */	    "MI FUERZA Y MI CANCIÓN",
/* 8 */	    "ES EL SEÑOR,",
/* 9 */	    "ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 10 */	"Y YO LO ENSALZARÉ.",
/* 11 */	"PRECIPITÓ EN EL MAR",
/* 12 */	"CABALLO Y CABALLERO,",
/* 13 */	"CABALLO Y CABALLERO.",
/* 14 */	"El Señor es un guerrero,",
/* 15 */	"su nombre es Yahveh.",
/* 16 */	"Precipitó en el mar a los valientes,",
/* 17 */	"la flor del Faraón.",
/* 18 */	"PRECIPITÓ EN EL MAR",
/* 19 */	"CABALLO Y CABALLERO,",
/* 20 */	"CABALLO Y CABALLERO.",
/* 21 */	"MI FUERZA Y MI CANCIÓN",
/* 22 */	"ES EL SEÑOR,",
/* 23 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 24 */	"Y YO LO ENSALZARÉ.",
/* 25 */	"PRECIPITÓ EN EL MAR",
/* 26 */	"CABALLO Y CABALLERO,",
/* 27 */	"CABALLO Y CABALLERO.",
/* 28 */	"Tu diestra poderosa",
/* 29 */	"gloriosa por su fuerza",
/* 30 */	"tu diestra, oh Señor, aplasta al enemigo",
/* 31 */	"aplasta al enemigo.",
/* 32 */	"PRECIPITÓ EN EL MAR",
/* 33 */	"CABALLO Y CABALLERO,",
/* 34 */	"CABALLO Y CABALLERO.",
/* 35 */	"MI FUERZA Y MI CANCIÓN",
/* 36 */	"ES EL SEÑOR,",
/* 37 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 38 */	"Y YO LO ENSALZARÉ.",
/* 39 */	"PRECIPITÓ EN EL MAR",
/* 40 */	"CABALLO Y CABALLERO,",
/* 41 */	"CABALLO Y CABALLERO.",
/* 42 */	"El enemigo había dicho:",
/* 43 */	"Les perseguiré y alcanzaré,",
/* 44 */	"desnudaré la espada, se saciará mi alma,",
/* 45 */	"los aniquilaré.",
/* 46 */	"PRECIPITÓ EN EL MAR",
/* 47 */	"CABALLO Y CABALLERO,",
/* 48 */	"CABALLO Y CABALLERO.",
/* 49 */	"MI FUERZA Y MI CANCIÓN",
/* 50 */	"ES EL SEÑOR,",
/* 51 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 52 */	"Y YO LO ENSALZARÉ.",
/* 53 */	"PRECIPITÓ EN EL MAR",
/* 54 */	"CABALLO Y CABALLERO,",
/* 55 */	"CABALLO Y CABALLERO.",
/* 56 */	"Soplaste con tu aliento",
/* 57 */	"y el mar los sepultó.",
/* 58 */	"Se hundieron como plomo",
/* 59 */	"en las aguas de la muerte,",
/* 60 */	"en las aguas formidables.",
/* 61 */	"PRECIPITÓ EN EL MAR",
/* 62 */	"CABALLO Y CABALLERO,",
/* 63 */	"CABALLO Y CABALLERO.",
/* 64 */	"MI FUERZA Y MI CANCIÓN",
/* 65 */	"ES EL SEÑOR,",
/* 66 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 67 */	"Y YO LO ENSALZARÉ.",
/* 68 */	"PRECIPITÓ EN EL MAR",
/* 69 */	"CABALLO Y CABALLERO,",
/* 70 */	"CABALLO Y CABALLERO.",
/* 71 */	"¿Quién como tú, Señor,",
/* 72 */	"glorioso en santidad,",
/* 73 */	"terrible en las empresas, autor de maravillas,",
/* 74 */	"autor de maravillas?",
/* 75 */	"PRECIPITÓ EN EL MAR",
/* 76 */	"CABALLO Y CABALLERO,",
/* 77 */	"CABALLO Y CABALLERO.",
/* 78 */	"MI FUERZA Y MI CANCIÓN",
/* 79 */	"ES EL SEÑOR,",
/* 80 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 81 */	"Y YO LO ENSALZARÉ.",
/* 82 */	"PRECIPITÓ EN EL MAR",
/* 83 */	"CABALLO Y CABALLERO,",
/* 84 */	"CABALLO Y CABALLERO.",
/* 85 */	"Rescatas a tu pueblo,",
/* 86 */	"lo llevas a tu casa.",
/* 87 */	"Los príncipes de Edom, se estremecen",
/* 88 */	"al paso de Jacob.",
/* 89 */	"PRECIPITÓ EN EL MAR",
/* 90 */	"CABALLO Y CABALLERO,",
/* 91 */	"CABALLO Y CABALLERO.",
/* 92 */	"MI FUERZA Y MI CANCIÓN",
/* 93 */	"ES EL SEÑOR,",
/* 94 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 95 */	"Y YO LO ENSALZARÉ.",
/* 96 */	"PRECIPITÓ EN EL MAR",
/* 97 */	"CABALLO Y CABALLERO,",
/* 98 */	"CABALLO Y CABALLERO.",
/* 99 */	"Lo llevas y lo plantas",
/* 100 */	"en el lugar sagrado",
/* 101 */	"sobre tu monte santo, el santuario",
/* 102 */	"que tus manos prepararon.",
/* 103 */	"PRECIPITÓ EN EL MAR",
/* 104 */	"CABALLO Y CABALLERO,",
/* 105 */	"CABALLO Y CABALLERO.",
/* 106 */	"MI FUERZA Y MI CANCIÓN",
/* 107 */	"ES EL SEÑOR,",
/* 108 */	"ÉL ES MI SALVACIÓN, ES MI DIOS,",
/* 109 */	"Y YO LO ENSALZARÉ.",
/* 110 */	"PRECIPITÓ EN EL MAR",
/* 111 */	"CABALLO Y CABALLERO,",
/* 112 */	"CABALLO Y CABALLERO.",

],
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
/* 1 */	    [ac("Do", "cp14","7"), ac("Fa","cp90","")],
/* 2 */	    [ac("La", "cp14","7")],
/* 3 */	    [ac("Re", "cp0","7")],
/* 4 */	    [ac("", "cp0","")],
/* 5 */	    [ac("Sol", "cp","7")],
/* 6 */	    [ac("Do", "cp14","7")],
/* 7 */	    [ac("Fa", "cp14","")],
/* 8 */	    [ac("La", "cp14","7")],
/* 9 */	    [ac("Re", "cp14","7")],
/* 10 */	[ac("Sol", "cp14","7")],
/* 11 */	[ac("Do", "cp14","7")],
/* 12 */	[ac("", "cp0","")],
/* 13 */	[ac("", "cp0","")],
/* 14 */	[ac("Fa", "cp14","")],
/* 15 */	[ac("La", "cp14","7")],
/* 16 */	[ac("Re", "cp14","7")],
/* 17 */	[ac("Sol", "cp14","7")],
/* 18 */	[ac("Do", "cp14","7")],
/* 19 */	[ac("", "cp0","")],
/* 20 */	[ac("", "cp0","")],
/* 21 */	[ac("Fa", "cp14","")],
/* 22 */	[ac("La", "cp14","7")],
/* 23 */	[ac("Re", "cp14","7")],
/* 24 */	[ac("Sol", "cp14","7")],
/* 25 */	[ac("Do", "cp14","7")],
/* 26 */	[ac("", "cp0","")],
/* 27 */	[ac("", "cp0","")],
/* 28 */	[ac("", "cp0","")],
/* 29 */	[ac("", "cp0","")],
/* 30 */	[ac("", "cp0","")],
/* 31 */	[ac("", "cp0","")],
/* 32 */	[ac("Do", "cp0","7")],
/* 33 */	[ac("", "cp0","")],
/* 34 */	[ac("", "cp0","")],
/* 35 */	[ac("Fa", "cp14","")],
/* 36 */	[ac("La", "cp14","7")],
/* 37 */	[ac("Re", "cp14","7")],
/* 38 */	[ac("Sol", "cp14","7")],
/* 39 */	[ac("Do", "cp14","7")],
/* 40 */	[ac("", "cp0","")],
/* 41 */	[ac("", "cp0","")],
/* 42 */	[ac("", "cp0","")],
/* 43 */	[ac("", "cp0","")],
/* 44 */	[ac("", "cp0","")],
/* 45 */	[ac("", "cp","")],
/* 46 */	[ac("Do", "cp0","7")],
/* 47 */	[ac("", "cp0","")],
/* 48 */	[ac("", "cp0","")],
/* 49 */	[ac("Fa", "cp14","")],
/* 50 */	[ac("La", "cp14","7")],
/* 51 */	[ac("Re", "cp14","7")],
/* 52 */	[ac("Sol", "cp14","7")],
/* 53 */	[ac("Do", "cp14","7")],
/* 54 */	[ac("", "cp0","")],
/* 55 */	[ac("", "cp0","")],
/* 56 */	[ac("", "cp0","")],
/* 57 */	[ac("", "cp0","")],
/* 58 */	[ac("", "cp0","")],
/* 59 */	[ac("", "cp0","")],
/* 60 */	[ac("", "cp0","")],
/* 61 */	[ac("Do", "cp0","7")],
/* 62 */	[ac("", "cp0","")],
/* 63 */	[ac("", "cp0","")],
/* 64 */	[ac("Fa", "cp14","")],
/* 65 */	[ac("La", "cp14","7")],
/* 66 */	[ac("Re", "cp14","7")],
/* 67 */	[ac("Sol", "cp14","7")],
/* 68 */	[ac("Do", "cp14","7")],
/* 69 */	[ac("", "cp0","")],
/* 70 */	[ac("", "cp0","")],
/* 71 */	[ac("", "cp0","")],
/* 72 */	[ac("", "cp0","")],
/* 73 */	[ac("", "cp0","")],
/* 74 */	[ac("", "cp14","")],
/* 75 */	[ac("Do", "cp0","7")],
/* 76 */	[ac("", "cp0","")],
/* 77 */	[ac("", "cp0","")],
/* 78 */	[ac("Fa", "cp14","")],
/* 79 */	[ac("La", "cp14","7")],
/* 80 */	[ac("Re", "cp14","7")],
/* 81 */	[ac("Sol", "cp14","7")],
/* 82 */	[ac("Do", "cp14","7")],
/* 83 */	[ac("", "cp0","")],
/* 84 */	[ac("", "cp0","")],
/* 85 */	[ac("", "cp0","")],
/* 86 */	[ac("", "cp0","")],
/* 87 */	[ac("", "cp0","")],
/* 88 */	[ac("", "cp14","")],
/* 89 */	[ac("Do", "cp0","7")],
/* 90 */	[ac("", "cp0","")],
/* 91 */	[ac("", "cp0","")],
/* 92 */	[ac("Fa", "cp14","")],
/* 93 */	[ac("La", "cp14","7")],
/* 94 */	[ac("Re", "cp14","7")],
/* 95 */	[ac("Sol", "cp14","7")],
/* 96 */	[ac("Do", "cp14","7")],
/* 97 */	[ac("", "cp0","")],
/* 98 */	[ac("", "cp0","")],
/* 99 */	[ac("", "cp0","")],
/* 100 */	[ac("", "cp0","")],
/* 101 */	[ac("", "cp0","")],
/* 102 */	[ac("", "cp14","")],
/* 103 */	[ac("Do", "cp0","7")],
/* 104 */	[ac("", "cp0","")],
/* 105 */	[ac("", "cp0","")],
/* 106 */	[ac("Fa", "cp14","")],
/* 107 */	[ac("La", "cp14","7")],
/* 108 */	[ac("Re", "cp14","7")],
/* 109 */	[ac("Sol", "cp14","7")],
/* 110 */	[ac("Do", "cp14","7")],
/* 111 */	[ac("", "cp0","")],
/* 112 */	[ac("", "cp0","")],
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
