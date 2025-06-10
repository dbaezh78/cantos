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
}/*
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
const NOMBREDELCANTO = "EL SEÑOR ME HA DADO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 50,4-10  - Tercer canto del Siervo de Yahveh",
      dbnos: "62",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Señor me ha dado",
/* 2 */        "lengua de discípulo,",
/* 3 */        "para que pueda llevar al cansado",
/* 4 */        "una palabra alentadora.",
/* 5 */        "Mañana tras mañana",
/* 6 */        "despiertas tú mi oído,",
/* 7 */        "para hacerme escuchar",
/* 8 */        "como un discípulo.",
/* 9 */        "EL SEÑOR, EL SEÑOR, BIS",
/* 10 */        "EL SEÑOR ME HA ABIERTO EL OÍDO.",
/* 11 */        "Y yo no me resistí, no me resistí.",
/* 12 */        "Ofrecí mis espaldas a los que me pegaban.",
/* 13 */        "Y YO NO ME RESISTÍ, NO ME RESISTÍ.",
/* 14 */        "Ofrecí mis mejillas a los que mesaban mi barba.",
/* 15 */        "Y YO NO ME RESISTÍ, NO ME RESISTÍ.",
/* 16 */        "e Mi rostro no esquivó insultos ni salivazos.",
/* 17 */        "Porque yo ya sabía",
/* 18 */        "que tú habrías de ayudarme,",
/* 19 */        "por eso puse mi cara",
/* 20 */        "dura como la piedra,",
/* 21 */        "estaba yo seguro",
/* 22 */        "que no quedaría avergonzado.",
/* 23 */        "CERCA ESTÁS, CERCA ESTÁS TÚ,",
/* 24 */        "SI TÚ SALVAS, ¿QUIÉN PELEARÁ CONMIGO?",
/* 25 */        "SI TÚ AYUDAS, SI TÚ ME AYUDAS,",
/* 26 */        "SI TÚ SÁLVAS, ¿QUIÉN ME CONDENARÁ?",
/* 27 */        "Vosotros que teméis a Dios,",
/* 28 */        "escuchad la voz de su siervo.",
/* 29 */        "Y si alguno se encuentra en las tinieblas",
/* 30 */        "ponga su confianza en Él,",
/* 31 */        "que se apoye",
/* 32 */        "en su Nombre.",
/* 33 */        "CERCA ESTÁS, CERCA ESTÁS TÚ,...",
/* 34 */        "SI TÚ SALVAS, ¿QUIÉN PELEARÁ CONMIGO?",
/* 35 */        "SI TÚ AYUDAS, SI TÚ ME AYUDAS,",
/* 36 */        "SI TÚ SÁLVAS, ¿QUIÉN ME CONDENARÁ?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Si", "cp14","m"), ac("Do","cp90","")],
/* 2*/      [ac("Si", "cp14","m")],
/* 3*/      [ac("Do", "cp14","")],
/* 4*/      [ac("Si", "cp14","m")],
/* 5*/      [ac("Do", "cp","")],
/* 6*/      [ac("Si", "cp14","m")],
/* 7*/      [ac("Do", "cp14","")],
/* 8*/      [ac("Si", "cp14","m")],
/* 9*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 10*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 11*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 12*/      [ac("Re", "cp14",""), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 13*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 14*/      [ac("Re", "cp14",""), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 15*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 16*/      [ac("Re", "cp14",""), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 17*/      [ac("Si", "cp14","m"), ac("Do","cp90","")],
/* 18*/      [ac("Si", "cp14","m")],
/* 19*/      [ac("Do", "cp14","")],
/* 20*/      [ac("Si", "cp14","m")],
/* 21*/      [ac("Do", "cp14","")],
/* 22*/      [ac("Si", "cp14","m")],
/* 23*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 24*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 25*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 26*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 27*/      [ac("Si", "cp14","m"), ac("Do","cp90","")],
/* 28*/      [ac("Si", "cp14","m")],
/* 29*/      [ac("Do", "cp14","")],
/* 30*/      [ac("Si", "cp14","m")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("Si", "cp14","m")],
/* 33*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 34*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 35*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 36*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]};/*
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
