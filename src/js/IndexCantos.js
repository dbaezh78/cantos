// indexcantos.js ☺

// Función auxiliar para crear objetos de canto de forma compacta, cc = Contenidos de Cantos

function cc(dbnos, nombredelcanto, salmo, catg) {
    return { dbnos, nombredelcanto, salmo, catg };
}

// Base de datos de cantos (versión corregida)
const cantosDatabase = {
    "182": cc("182", "ANTÍFONA PARA EL EVANGELIO", "Tiempo de Cuaresma", "LITÚRGIA"),
    "43": cc("43", "CUANDO EL SEÑOR", "Sal 126 (125)", "PRECATECUMENADO"),
    "47": cc("47", "DE PROFUNDIS", "Sal 130 (129)", "PRECATECUMENADO"),
    "50": cc("50", "DÍA DE REPOSO", "Sal 130 (129)", "PRECATECUMENADO"),
    "206": cc("206", "PREGÓN PASCUAL", "«Exsultet»", "LITÚRGIA"),
    "214": cc("214", "SANTO", "«Palomeras 65»", "LITÚRGIA")  // Corregido el dbnos (estaba 206)
};

// Función para obtener un canto por su dbnos
function getCantoByDbnos(dbnos) {
    return cantosDatabase[dbnos] || null;
}

// Exportación para Node.js/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cantosDatabase,
        getCantoByDbnos,
        cc  // Exportamos la función por si se necesita usar externamente
    };
}

