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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "A LA VÍCTIMA PASCUAL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Secuencia de Pascua - Himno lat. «Victimae paschall laudes» ",
      dbnos: "1",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "A la víctima pascual,",
/* 2 */        "ofrecemos hoy",
/* 3 */        "el sacrificio de alabanza.",
/* 4 */        "El cordero ha redimido el rebaño,",
/* 5 */        "el inocente ha reconciliado",
/* 6 */        "los pecadores al Padre.",
/* 7 */        "Muerte y vida se han enfrentado",
/* 8 */        "en un prodigioso duelo:",
/* 9 */        "el Señor de la Vida estaba muerto,",
/* 10 */        "mas ahora está vivo y triunfa.",
/* 11 */        "Dinos tú, María:",
/* 12 */        "¿qué has visto en el camino?,",
/* 13 */        "«La tumba de Cristo vacía,",
/* 14 */        "la Gloria del Señor y vivo Cristo,",
/* 15 */        "los ángeles, las vendas y el sudario».",
/* 16 */        "PORQUE CRISTO, MI ESPERANZA,",
/* 17 */        "¡HA RESUCITADO!",
/* 18 */        "Y NOS PRECEDE EN GALILEA,",
/* 19 */        "Y NOS PRECEDE EN GALILEA.",
/* 20 */        "SÍ QUE ES CIERTO,",
/* 21 */        "CRISTO HA RESUCITADO.",
/* 22 */        "SÍ QUE ES CIERTO,",
/* 23 */        "CRISTO HA RESUCITADO.",
/* 24 */        "Y NOS PRECEDE EN GALILEA,",
/* 25 */        "Y NOS PRECEDE EN GALILEA.",
/* 26 */        "Tú, Rey victorioso, danos tú la salvación.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
    /* 1*/      [ac("La", "cp10","m"), ac("La","cp341","7")],
    /* 2*/      [ac("", "0","")],
    /* 3*/      [ac("Re", "cp316","m9")],
    /* 4*/      [ac("Fa", "cp34","maj7"), ac("Mi","cp472","")],
    /* 5*/      [ac("Re", "cp26","m9"), ac("Fa","cp386","")],
    /* 6*/      [ac("Mi", "cp292","")],
    /* 7*/      [ac("La", "cp14","m"), ac("La","cp163","7")],
    /* 8*/      [ac("Re", "cp310","m9")],
    /* 9*/      [ac("Fa", "cp34","maj7"), ac("Mi","cp488","")],
    /* 10*/     [ac("Re", "cp28","m9"), ac("Fa","cp230",""), ac("Mi","cp386","")],
    /* 11*/     [ac("La", "cp10","7")],
    /* 12*/     [ac("", "0","")],
    /* 13*/     [ac("Fa", "cp40","maj7"), ac("Mi","cp384","")],
    /* 14*/     [ac("Re", "cp28","m9"), ac("Fa","cp266",""), ac("Mi","cp448","")],
    /* 15*/     [ac("Fa", "cp2",""), ac("Mi","cp516","")],
    /* 16*/      [ac("Fa", "cp187","")],
    /* 17*/      [ac("Mi", "cp216","")],
    /* 18*/      [ac("Fa", "cp2",""), ac("Mi","cp438","")],
    /* 19*/      [ac("Fa", "cp2",""), ac("Mi","cp438","")],
    /* 20*/      [ac("Re", "cp14","m"), ac("Mi","cp212","")],
    /* 21*/      [ac("Fa", "cp34","maj7"), ac("Fa","cp212",""), ac("Mi","cp338","")],
    /* 22*/      [ac("Re", "cp14","m"), ac("Mi","cp208","")],
    /* 23*/      [ac("Fa", "cp0",""), ac("Mi","cp338","")],
    /* 24*/      [ac("Fa", "cp0",""), ac("Mi","cp432","")],
    /* 25*/      [ac("Fa", "cp0",""), ac("Mi","cp432","")],
    /* 26*/     [ac("Fa", "cp5",""), ac("Mi","cp610","")],
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
