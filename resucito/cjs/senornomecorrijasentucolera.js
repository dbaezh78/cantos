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
  else if (anchoPantalla >= 768 && anchoPantalla <= 1024) {
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
const NOMBREDELCANTO = "SEÑOR, NO ME CORRIJAS EN TU CÓLERA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 6",
      dbnos: "147",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SEÑOR, NO ME CORRIJAS EN TU CÓLERA,",
/* 2 */        "EN TU FUROR NO ME CASTIGUES.",
/* 3 */        "Ten piedad de mí, ten piedad Señor,",
/* 4 */        "que estoy sin fuerzas,",
/* 5 */        "sáname tú, Señor,",
/* 6 */        "que se desmoronan mis huesos.",
/* 7 */        "Hundida tengo el alma,",
/* 8 */        "y tú, Señor, ¿hasta cuándo?",
/* 9 */        "Y TÚ, SEÑOR, ¿HASTA CUÁNDO?",
/* 10 */        "SEÑOR, NO ME CORRIJAS EN TU CÓLERA...",
/* 11 */        "EN TU FUROR NO ME CASTIGUES.",
/* 12 */        "Vuélvete, Señor, recobra mi alma,",
/* 13 */        "sáname tú, Señor, por tu misericordia.",
/* 14 */        "Que nadie entre los muertos te recuerda,",
/* 15 */        "ni en los infiernos se canta tu alabanza.",
/* 16 */        "QUE NADIE ENTRE LOS MUERTOS",
/* 17 */        "TE RECUERDA, NI EN LOS INFIERNOS",
/* 18 */        "SE CANTA TU ALABANZA.",
/* 19 */        "SEÑOR, NO ME CORRIJAS EN TU CÓLERA...",
/* 20 */        "EN TU FUROR NO ME CASTIGUES.",
/* 21 */        "Estoy cansado de gemir,",
/* 22 */        "inundo de lágrimas mi cama,",
/* 23 */        "mis ojos se consumen en la angustia,",
/* 24 */        "envejezco entre enemigos.",
/* 25 */        "Apartaos de mí, malvados,",
/* 26 */        "que el Señor escucha mis sollozos,",
/* 27 */        "que el Señor acoge mi oración.",
/* 28 */        "SEÑOR, NO ME CORRIJAS EN TU CÓLERA...",
/* 29 */        "EN TU FUROR NO ME CASTIGUES.",
/* 30 */        "Y tú, Señor, ¿hasta cuándo?",
/* 31 */        "Y TÚ, SEÑOR, ¿HASTA CUÁNDO?",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Fa#", "cp14"," 5/9 dim *"), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 2*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 3*/      [ac("Sim", "cp14",""), ac("La","cp90","")],
/* 4*/      [ac("Fa#", "cp14","")],
/* 5*/      [ac("Si", "cp","m"), ac("La","cp90","")],
/* 6*/      [ac("Fa#", "cp14","")],
/* 7*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 8*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 9*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 10*/      [ac("Fa#", "cp14"," 5/9 dim *"), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 12*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Fa#","cp150","")],
/* 13*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Fa#","cp150","")],
/* 14*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 15*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 16*/      [ac("La", "cp14","")],
/* 17*/      [ac("Fa#", "cp14",""), ac("La","cp90","")],
/* 18*/      [ac("Fa#", "cp14","")],
/* 19*/      [ac("Fa#", "cp14"," 5/9 dim *"), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 20*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 21*/      [ac("Sim", "cp14","")],
/* 22*/      [ac("La", "cp14",""), ac("Sim","cp90","")],
/* 23*/      [ac("La", "cp14","")],
/* 24*/      [ac("Fa#", "cp14","")],
/* 25*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 26*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 27*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 28*/      [ac("Fa#", "cp14"," 5/9 dim *"), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 29*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 30*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
/* 31*/      [ac("La", "cp14",""), ac("Fa#","cp90","")],
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
