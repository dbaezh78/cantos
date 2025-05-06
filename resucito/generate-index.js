// generate-index.js (versión corregida)
const fs = require('fs');
const path = require('path');

const cantos = [];

fs.readdirSync('./cjs').forEach(archivo => {
    if (archivo.endsWith('.js')) {
        try {
            const filePath = path.join('./cjs', archivo);
            const contenido = require(filePath);
            const p = contenido.partitura;
            
            cantos.push({
                id: archivo.replace('.js', ''),
                titulo: p.titulo,
                salmo: p.salmo || '',
                letra: [...p.cantor, ...p.asamblea].join(' ').toLowerCase(),
                archivo: `/cantos/resucito/${archivo.replace('.js', '.html')}` // Ruta absoluta desde raíz
            });
        } catch (error) {
            console.error(`Error en ${archivo}:`, error);
        }
    }
});

const outputDir = path.join(__dirname, 'find');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify(cantos, null, 2));
console.log(`Índice generado con ${cantos.length} cantos en ${path.join(outputDir, 'index.json')}`);