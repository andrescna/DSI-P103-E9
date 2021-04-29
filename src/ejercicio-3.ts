import * as fs from 'fs';
import * as yargs from 'yargs';
import * as chalk from 'chalk';

let path: string = "";

/** Comando pmc, muestra el contenido del fichero con más caracteres de un directorio
 *  @param dist, directorio sobre el que se ejecuta
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
        if (typeof argv.dir === 'string'){
            path += argv.dir;
            console.log(chalk.magenta(`El directorio a listar es: ${path}`));
            printMaxCharFile(path);
        }
    },
});

/** Función printMaxCharFile, muestra el contenido del fichero con más caracteres de un directorio
 *  @param path directorio de trabajo. En caso de no existir, se muestra error.
 *  Para cada fichero, comprueba su longitud en caracteres. Si es la mayor encontrada hasta el momento, 
 *  ese pasa a ser el fichero a mostrar. Tras comprobar todos los ficheros, se imprime el contenido del
 *  de mayor número de caracteres encontrado.
*/

export function printMaxCharFile(path: string) {
    
    if (fs.existsSync(path)) {
        let fileList = fs.readdirSync(path);
        let maxCharFile = "";
        let maxCharLength = 0;

        for (let fileName of fileList){
            let filePath: string = path + "/" + fileName;
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

yargs.parse();