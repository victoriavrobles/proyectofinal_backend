import { Contenedor } from '../../contenedor/contenedorMemoria.js';

class ProductosDao extends Contenedor {
    constructor() {
        super('./src/productos.txt');
     }
}

export default ProductosDao;