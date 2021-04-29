import * as fs from 'fs';
import * as yargs from 'yargs';
import * as chalk from 'chalk';

let path: string = "";

/** Comando prt, muestra el contenido de los ficheros de un directorio
 *  @param dist, directorio sobre el que se ejecuta
 *  Ejemplo de ejecución desde la raíz del proyecto:
 *  node dist/ejercicio-2.js prt --dir="dist/"
*/

yargs.command({
    command: 'prt',
    describe: 'Imprime el contenido de los ficheros de un directorio',
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
            printDirContent(path);
        }
    },
});

/** Función printDirContent(), muestra el contenido de los ficheros de un directorio
 *  @param path directorio de trabajo. En caso de no existir, se muestra error.
 * Para cada fichero del directorio, imprime el contenido y calcula la longitud en caracteres,
 * palabras y líneas.
*/

export function printDirContent(path: string) {
    if (fs.existsSync(path)) {
        let fileList = fs.readdirSync(path);
        for (let fileName of fileList){
            let filePath: string = path + "/" + fileName;
            let fileContent = fs.readFileSync(filePath, "utf-8");
            console.log(chalk.grey('--------------------------------------------------------------------------------'));
            console.log(chalk.green(`El archivo ${fileName} contiene: `));
            console.log(fileContent);

            let fileLines = fileContent.toString().split('\n').length;        
            let fileWords = fileContent.toString().split(' ').length;
            console.log(chalk.blue(`El archivo contiene ${fileLines} líneas`));
            console.log(chalk.blue(`El archivo contiene ${fileLines} palabras`));
            console.log(chalk.blue(`El archivo contiene ${fileContent.length} caracteres`));
        }   
    }
    else {
        console.log(chalk.red("ERROR. El directorio no existe"));
    }  
}

yargs.parse();