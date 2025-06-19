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
const NOMBREDELCANTO = "NOLI ME TANGERE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 20,15-17",
      dbnos: "122",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "«Mujer, dime, ¿por qué lloras?",
/* 2 */        "Mujer, dime, ¿por qué lloras?",
/* 3 */        "¿A quién buscas?",
/* 4 */        "¿A quién buscas?",
/* 5 */        "¿A quién buscas?»",
/* 6 */        "«SEÑOR, SI TE LO HAS LLEVADO TÚ,",
/* 7 */        "SEÑOR, SI TE LO HAS LLEVADO TÚ,",
/* 8 */        "DIME DÓNDE LO HAS PUESTO,",
/* 9 */        "Y YO ME LO LLEVARÉ,",
/* 10 */        "Y YO ME LO LLEVARÉ».",
/* 11 */        "«¡María!»",
/* 12 */        "«¡RABBUNÍ!»",
/* 13 */        "«¡María!»",
/* 14 */        "«¡RABBUNÍ!»",
/* 15 */        "«¡Noli me tangere! No me toques,",
/* 16 */        "que todavía no he subido al Padre.",
/* 17 */        "Ve y anuncia a mis hermanos,",
/* 18 */        "Y ANUNCIA A MIS HERMANOS,",
/* 19 */        "Que subo al Padre mío",
/* 20 */        "y padre vuestro,",
/* 21 */        "Dios mío y Dios vuestro.",
/* 22 */        "QUE SUBO AL PADRE MÍO",
/* 23 */        "Y PADRE VUESTRO,",
/* 24 */        "DIOS MÍO Y DIOS VUESTRO.",
/* 25 */        "Que subo al Padre mío",
/* 26 */        "y padre vuestro,",
/* 27 */        "Dios mío y Dios vuestro».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14","")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("Do", "cp14","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("Do", "cp","")],
/* 6*/      [ac("Do", "cp14","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Do", "cp14","")],
/* 9*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 10*/      [ac("Sol", "cp14",""), ac("Do","cp90","")],
/* 11*/      [ac("Fa", "cp14","m")],
/* 12*/      [ac("Do", "cp14","m")],
/* 13*/      [ac("Fa", "cp14","m")],
/* 14*/      [ac("Do", "cp14","m"), ac("Do","cp90","")],
/* 15*/      [ac("Si♭", "cp14",""), ac("Do","cp90",""), ac("Si♭","cp150",""), ac("Do","cp250","")],
/* 16*/      [ac("Si♭", "cp14",""), ac("Do","cp90","")],
/* 17*/      [ac("Fa", "cp14","m"), ac("Do","cp90","m")],
/* 18*/      [ac("Fa", "cp14","m"), ac("Do","cp90","m")],
/* 19*/      [ac("La♭", "cp14","")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("La♭", "cp14",""), ac("Sol","cp90","")],
/* 22*/      [ac("Fa", "cp14","m")],
/* 23*/      [ac("Do", "cp14","m")],
/* 24*/      [ac("Fa", "cp14","m"), ac("Do","cp90","m")],
/* 25*/      [ac("La♭", "cp14","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("La♭", "cp14",""), ac("Sol","cp90","")],
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
