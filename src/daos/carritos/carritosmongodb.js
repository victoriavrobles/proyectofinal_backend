import { Contenedor } from '../../contenedor/mongodb.js';

class CarritosMongodb extends Contenedor {
    constructor(){
        super('carritos', {
            productos: {type: [], require: true},
            timestamp: {type: String, require: true},
        });
    }
}

export default CarritosMongodb;