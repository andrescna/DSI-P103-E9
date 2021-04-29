import 'mocha';
import {listDirContent} from '../src/ejercicio-1';

let path = "src/"

describe('Pruebas método listDirContent', () => {
    
    it ('Lista correctamente un directorio', () => {
        listDirContent(path);
    });
    it ('Se comporta correctamente si no existe el directorio', () => {
        let path = "src2/";
        listDirContent("/src2");
    } );

});