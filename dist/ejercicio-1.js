"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDirContent = void 0;
const fs = require("fs");
const yargs = require("yargs");
const chalk = require("chalk");
let path = "";
/* Función listDirContent, lista los ficheros de un directorio
 *  Ejemplo de ejecución desde la raíz del proyecto:
 *  node dist/ejercicio-1.js ls --dir="dist/"
*/
yargs.command({
    command: 'ls',
    describe: 'Lista los ficheros de un directorio',
    builder: {
        dir: {
            describe: 'Directorio de trabajo',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.dir === 'string') {
            path += argv.dir;
            console.log(chalk.magenta(`El directorio a listar es: ${path}`));
            listDirContent();
        }
    },
});
function listDirContent() {
    if (fs.existsSync(path)) {
        let fileList = fs.readdirSync(path);
        for (let fileName of fileList) {
            console.log(chalk.grey(`${fileName}`));
        }
    }
    else {
        console.log(chalk.red("ERROR. El directorio no existe"));
    }
}
exports.listDirContent = listDirContent;
yargs.parse();
