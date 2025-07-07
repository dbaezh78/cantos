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
const factor = 2.21; // Factor diferente para móviles
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
      const factor = 1.93;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "A TI LEVANTO MIS OJOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 123 (122)",
      dbnos: "3",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */  "A TI LEVANTO MIS OJOS,",
/* 2 */  "A TI QUE HABITAS EN EL CIELO.",
/* 3 */  "Como los ojos de los siervos miran a las manos de sus señores,",
/* 4 */  "como los ojos de la esclava a las manos de su señora,",
/* 5 */  "así nuestros ojos miran al Señor,",
/* 6 */  "esperando que tenga piedad, esperando que tenga piedad.",
/* 7 */  "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 8 */  "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 9 */  "¡QUE DEMASIADO SE HAN BURLADO DE NOSOTROS,",
/* 10 */  "QUE NUESTRA ALMA ESTÁ SACIADA DE DESPRECIOS!",
/* 11 */  "¡DE LAS BURLAS DE LOS SATISFECHOS,",
/* 12 */  "DEL DESPRECIO DE LOS SOBERBIOS!",
/* 13 */  "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 14 */  "¡PIEDAD DE NOSOTROS, SEÑOR!",
/* 15 */  "A TI LEVANTO MIS OJOS...",
/* 16 */  "A TI QUE HABITAS EN EL CIELO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp8","m"), ac("La","cp173","7")],
/* 2*/      [ac("Sol", "cp26","m"), ac("La","cp249","7")],

/* 3*/      [ac("Re", "cp10","m"), ac("La","cp539","7")],
/* 4*/      [ac("Sol", "cp102","m"), ac("La","cp461","7")],
/* 5*/      [ac("Si♭", "cp12","7"), ac("La","cp275","7")],
/* 6*/      [ac("Si♭", "cp52","7"), ac("La","cp242","7"), ac("Si♭","cp330","7"), ac("La","cp519","7")],

/* 7*/      [ac("Re", "cp45","m"), ac("La","cp265","7")],
/* 8*/      [ac("Si♭", "cp45","7"), ac("La","cp265","7")],

/* 9*/      [ac("Re", "cp122","m"), ac("La","cp414","7")],
/* 10*/      [ac("Si♭", "cp145","7"), ac("La","cp432","7")],

/* 11*/      [ac("Re", "cp90","m"), ac("La","cp295","7")],
/* 12*/      [ac("Si♭", "cp103","7"), ac("La","cp264","7")],

/* 13*/      [ac("Re", "cp47","m"), ac("La","cp266","7")],
/* 14*/      [ac("Si♭", "cp47","7"), ac("La","cp266","7")],

/* 15*/      [ac("Re", "cp8","m"), ac("La","cp173","7")],
/* 16*/      [ac("Sol", "cp26","m"), ac("La","cp249","7")],
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
