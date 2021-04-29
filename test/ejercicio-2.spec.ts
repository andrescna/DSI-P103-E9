import 'mocha';
import {printDirContent} from '../src/ejercicio-2';

let path = "src/"

describe('Pruebas método printDirContent()', () => {
    
    it ('Lista correctamente un directorio', () => {
        printDirContent(path);
    });
    it ('Se comporta correctamente si no existe el directorio', () => {
        let path = "src2/";
        printDirContent("/src2");
    } );

});