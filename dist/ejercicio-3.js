"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMaxCharFile = void 0;
const fs = require("fs");
const yargs = require("yargs");
const chalk = require("chalk");
let path = "";
/* Función printMaxCharFile, muestra el contenido del fichero con más caracteres de un directorio
 *  Ejemplo de ejecución desde la raíz del proyecto:
 *  node dist/ejercicio-3.js pmc --dir="dist/"
*/
yargs.command({
    command: 'pmc',
    describe: 'Imprime el contenido del fichero con más caracteres del directorio',
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
            console.log(chalk.magenta(`El directorio a listar es: ${path}\n`));
            printMaxCharFile();
        }
    },
});
function printMaxCharFile() {
    if (fs.existsSync(path)) {
        let fileList = fs.readdirSync(path);
        let maxCharFile = "";
        let maxCharLength = 0;
        for (let fileName of fileList) {
            let filePath = path + "/" + fileName;
            let fileContent = fs.readFileSync(filePath, "utf-8");
            if (fileContent.length > maxCharLength) {
                maxCharLength = fileContent.length;
                maxCharFile = fileName;
            }
        }
        console.log(chalk.green(`El archivo con más caracteres es ${maxCharFile}`));
        console.log(fs.readFileSync(path + "/" + maxCharFile, "utf-8"));
    }
    else {
        console.log(chalk.red("ERROR. El directorio no existe"));
    }
}
exports.printMaxCharFile = printMaxCharFile;
yargs.parse();
