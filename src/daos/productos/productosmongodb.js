import { Contenedor } from '../../contenedor/mongodb.js';

class ProductosMongodb extends Contenedor {
    constructor(){
        super('productos', {
            title: {type: String, require: true},
            price: {type: Number, require: true},
            thumbnail: {type: String, require: true},
        });
    }
}

export default ProductosMongodb;