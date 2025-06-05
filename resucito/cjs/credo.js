/*
╔════════════════════════════════════════════════════════════════╗
║                         FUENTE DEL CANTO                       ║
╠════════════════════════════════════════════════════════════════╣
║                Mapeo para celulares menor a 700px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pcelular = {      };
/*
╔════════════════════════════════════════════════════════════════╗
║                Mapeo para celulares menor a 900px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pTablet = {       };
/*
╔════════════════════════════════════════════════════════════════╗
║            Función de Posición con factor ajustable            ║
╚════════════════════════════════════════════════════════════════╝  */
function ac(nota, posicion, extension = "") {
  const anchoPantalla = window.innerWidth;
  let posicionAjustada = posicion;
/*
╔════════════════════════════════════════════════════════════════╗
║           1. Primero verificar celulares (estricto)            ║
╚════════════════════════════════════════════════════════════════╝  */
  if (anchoPantalla <= 700) {
    posicionAjustada = pcelular[posicion] || posicion;
    if (!pcelular[posicion]) {
      const numero = parseInt(posicion.replace('cp', '')) || 0;
      const factor = 0.86; // Factor diferente para móviles
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  
/*
╔════════════════════════════════════════════════════════════════╗
║        2. Luego verificar tablets (solo si no es móvil)        ║
╚════════════════════════════════════════════════════════════════╝  */
  else if (anchoPantalla <= 900) {
    posicionAjustada = pTablet[posicion] || posicion;
    if (!pTablet[posicion]) {
      const numero = parseInt(posicion.replace('cp', '')) || 0;
      const factor = 0.9;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "CREDO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Símbolo Apostólico",
      dbnos: "187",
      catg: "LITÚRGICOS",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "CREO EN DIOS PADRE TODOPODEROSO,",
/* 2 */        "CREADOR DEL CIELO Y DE LA TIERRA.",
/* 3 */        "CREO EN JESUCRISTO, SU ÚNICO HIJO, NUESTRO SEÑOR,",
/* 4 */        "QUE FUE CONCEBIDO POR OBRA Y GRACIA DEL ESPÍRITU SANTO,",
/* 5 */        "NACIÓ DE SANTA MARÍA VIRGEN.",
/* 6 */        "PADECIÓ BAJO EL PODER DE PONCIO PILATO,",
/* 7 */        "FUE CRUCIFICADO, MUERTO Y SEPULTADO,",
/* 8 */        "DESCENDIÓ A LOS INFIERNOS.",
/* 9 */        "AL TERCER DÍA RESUCITÓ, RESUCITÓ DE ENTRE LOS MUERTOS,",
/* 10 */        "SUBIÓ AL CIELO Y ESTÁ SENTADO A LA DERECHA DE DIOS,",
/* 11 */        "DESDE ALLÍ HA DE VENIR A JUZGAR A LOS VIVOS Y A LOS MUERTOS.",
/* 12 */        "CREO EN EL ESPÍRITU SANTO,",
/* 13 */        "LA SANTA IGLESIA CATÓLICA,",
/* 14 */        "LA COMUNIÓN DE LOS SANTOS,",
/* 15 */        "EL PERDÓN DE LOS PECADOS,",
/* 16 */        "LA RESURRECCIÓN DE LA CARNE",
/* 17 */        "Y LA VIDA ETERNA.",
/* 18 */        "AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
      cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Fa","cp78","")],
/* 2*/      [ac("Do", "cp0",""), ac("Re","cp527","m")],
/* 3*/      [ac("Re", "cp14","m"), ac("Fa","cp90","")],
/* 4*/      [ac("Do", "cp0","")],
/* 5*/      [ac("Re", "cp67","m")],
/* 6*/      [ac("Fa", "cp0","")],
/* 7*/      [ac("Do", "cp0","")],
/* 8*/      [ac("Re", "cp159","m")],
/* 9*/      [ac("Fa", "cp0",""), ac("Do","cp273",""), ac("Fa","cp583",""), ac("La","cp635","m"), ac("Re","cp958","m")],
/* 10*/      [ac("Si♭", "cp0",""), ac("La","cp935","")],
/* 11*/      [ac("Si♭", "cp14",""), ac("La","cp1040","")],
/* 12*/      [ac("Re", "cp0","m"), ac("Fa","cp76","")],
/* 13 */   [ac("", "cp0","")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Do", "cp147","")],
/* 16*/      [ac("Fa", "cp250",""), ac("La","cp308","m"), ac("Re","cp464","m")],
/* 17*/      [ac("Si♭", "cp0",""), ac("La","cp215","")],
/* 18*/      [ac("Re", "cp48","m")],
      ],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]
  };/*
╔════════════════════════════════════════════════════════════════╗
║        MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO          ║
╚════════════════════════════════════════════════════════════════╝  */
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
    }/*
╔════════════════════════════════════════════════════════════════╗
║          Iniciar carga del canto y configurar eventos          ║
╚════════════════════════════════════════════════════════════════╝  */
    document.addEventListener('DOMContentLoaded', () => {
/*
╔════════════════════════════════════════════════════════════════╗
║   Limpiar contenido existente primero para evitar duplicados   ║
╚════════════════════════════════════════════════════════════════╝  */
      const contenedor = document.getElementById('contenedor-partitura');
      if (contenedor) contenedor.innerHTML = '';
            cargarCantoSeguro(partitura);
            window.addEventListener('resize', manejarRedimensionamiento);
        }
    );