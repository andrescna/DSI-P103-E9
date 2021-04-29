import * as fs from 'fs';
import * as yargs from 'yargs';
import * as chalk from 'chalk';

let path: string = "";

/** Comando ls, lista los ficheros de un directorio
 *  @param dist, directorio sobre el que se ejecuta
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
        if (typeof argv.dir === 'string'){
            path += argv.dir;
            console.log(chalk.magenta(`El directorio a listar es: ${path}`));
            listDirContent(path);
        }
    },
});

/** Función listDirContent(), lista los ficheros de un directorio 
 *  @param path directorio de trabajo. En caso de no existir, se muestra error.
 * Imprime cada uno de los ficheros del directorio.
*/

export function listDirContent(path: string) {
    if (fs.existsSync(path)) {
        let fileList = fs.readdirSync(path);
        for (let fileName of fileList){
            console.log(chalk.grey(`${fileName}`));
        }
    }
    else {
        console.log(chalk.red("ERROR. El directorio no existe"));
    }  
}

yargs.parse();