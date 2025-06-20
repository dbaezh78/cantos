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
const NOMBREDELCANTO = "PENTECOSTÉS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Hchos de los Apostoles 2,1-13 ",
      dbnos: "131",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SI SIENTES UN SOPLO DEL CIELO,",
/* 2 */        "UN VIENTO QUE MUEVE LAS PUERTAS,",
/* 3 */        "ESCUCHA LA VOZ QUE TE LLAMA,",
/* 4 */        "TE INVITA A CAMINAR LEJOS.",
/* 5 */        "ES FUEGO QUE NACE",
/* 6 */        "EN QUIEN SABE ESPERAR,",
/* 7 */        "EN QUIEN SABE NUTRIR",
/* 8 */        "ESPERANZAS DE AMOR.",
/* 9 */        "Eran pobres hombres,",
/* 10 */        "como tú, como yo,",
/* 11 */        "habían echado las redes al lago,",
/* 12 */        "recogido los impuestos a la puerta de la ciudad.",
/* 13 */        "Que yo recuerde",
/* 14 */        "entre ellos no había ningún doctor,",
/* 15 */        "y aquel que llamaban Maestro",
/* 16 */        "estaba muerto y sepultado.",
/* 17 */        "SI SIENTES UN SOPLO DEL CIELO,...",
/* 18 */        "UN VIENTO QUE MUEVE LAS PUERTAS,",
/* 19 */        "ESCUCHA LA VOZ QUE TE LLAMA,",
/* 20 */        "TE INVITA A CAMINAR LEJOS.",
/* 21 */        "ES FUEGO QUE NACE",
/* 22 */        "EN QUIEN SABE ESPERAR,",
/* 23 */        "EN QUIEN SABE NUTRIR",
/* 24 */        "ESPERANZAS DE AMOR.",
/* 25 */        "Tenían un corazón",
/* 26 */        "como tú, como yo,",
/* 27 */        "que una mano de hielo oprimía,",
/* 28 */        "tenían los ojos llenos de lágrimas.",
/* 29 */        "Pensaban sin duda en el amigo perdido,",
/* 30 */        "en la mujer dejada en la puerta de la casa,",
/* 31 */        "en la cruz levantada en la cima del monte.",
/* 32 */        "SI SIENTES UN SOPLO DEL CIELO,...",
/* 33 */        "UN VIENTO QUE MUEVE LAS PUERTAS,",
/* 34 */        "ESCUCHA LA VOZ QUE TE LLAMA,",
/* 35 */        "TE INVITA A CAMINAR LEJOS.",
/* 36 */        "ES FUEGO QUE NACE",
/* 37 */        "EN QUIEN SABE ESPERAR,",
/* 38 */        "EN QUIEN SABE NUTRIR",
/* 39 */        "ESPERANZAS DE AMOR.",
/* 40 */        "Y el viento llamó a la puerta de la casa,",
/* 41 */        "entró como un rayo en toda la estancia",
/* 42 */        "y tuvieron los ojos y el corazón llenos de fuego,",
/* 43 */        "salieron a la calle gritando de alegría.",
/* 44 */        "Hombre que esperas escondido en las sombras,",
/* 45 */        "la voz que canta es para ti;",
/* 46 */        "te trae la alegría de una buena noticia:",
/* 47 */        "¡EL REINO DE DIOS HA LLEGADO YA!",
/* 48 */        "SI SIENTES UN SOPLO DEL CIELO,...",
/* 49 */        "UN VIENTO QUE MUEVE LAS PUERTAS,",
/* 50 */        "ESCUCHA LA VOZ QUE TE LLAMA,",
/* 51 */        "TE INVITA A CAMINAR LEJOS.",
/* 52 */        "ES FUEGO QUE NACE",
/* 53 */        "EN QUIEN SABE ESPERAR,",
/* 54 */        "EN QUIEN SABE NUTRIR",
/* 55 */        "ESPERANZAS DE AMOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 2*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 3*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 4*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 5*/      [ac("Re", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Fa", "cp14","")],
/* 11*/      [ac("Si♭", "cp14","")],
/* 12*/      [ac("Fa", "cp14",""), ac("La","cp90","7")],
/* 13*/      [ac("Re", "cp14","m")],
/* 14*/      [ac("Fa", "cp14","")],
/* 15*/      [ac("Si♭", "cp14","")],
/* 16*/      [ac("Fa", "cp14",""), ac("La7","cp90","")],
/* 17*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 18*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 19*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 20*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 21*/      [ac("Re", "cp14","m"), ac("Sol","cp90","")],
/* 22*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 23*/      [ac("Fa", "cp14","")],
/* 24*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 25*/      [ac("Re", "cp14","m")],
/* 26*/      [ac("Fa", "cp14","")],
/* 27*/      [ac("Si♭", "cp14","")],
/* 28*/      [ac("Fa", "cp14",""), ac("La7","cp90","")],
/* 29*/      [ac("Re", "cp14","m"), ac("Fa","cp90","")],
/* 30*/      [ac("Si♭", "cp14","")],
/* 31*/      [ac("Fa", "cp14",""), ac("La","cp90","7")],
/* 32*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 33*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 34*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 35*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 36*/      [ac("Re", "cp14","m"), ac("Sol","cp90","")],
/* 37*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 38*/      [ac("Fa", "cp14","")],
/* 39*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
/* 40*/      [ac("Re", "cp14","m")],
/* 41*/      [ac("Fa", "cp14","")],
/* 42*/      [ac("Si♭", "cp14","")],
/* 43*/      [ac("Fa", "cp14",""), ac("La","cp90","7")],
/* 44*/      [ac("Re", "cp14","m")],
/* 45*/      [ac("Fa", "cp14","")],
/* 46*/      [ac("Si♭", "cp14","")],
/* 47*/      [ac("Fa", "cp14",""), ac("La","cp90","7")],
/* 48*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 49*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 50*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 51*/      [ac("Re", "cp14","m"), ac("La","cp90","")],
/* 52*/      [ac("Re", "cp14","m"), ac("Sol","cp90","")],
/* 53*/      [ac("La", "cp14",""), ac("Re","cp90","m")],
/* 54*/      [ac("Fa", "cp14","")],
/* 55*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
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
