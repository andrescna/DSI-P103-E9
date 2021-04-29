import 'mocha';
import {printMaxCharFile} from '../src/ejercicio-3';

let path = "src/"

describe('Pruebas método printDirContent()', () => {
    
    it ('Lista correctamente un directorio', () => {
        printMaxCharFile(path);
    });
    it ('Se comporta correctamente si no existe el directorio', () => {
        let path = "src2/";
        printMaxCharFile("/src2");
    } );

});