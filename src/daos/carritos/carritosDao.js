import { Contenedor } from '../../contenedor/contenedor.js';

class CarritosDao extends Contenedor {
 constructor() {
    super('./src/carrito.txt');
 }
}

export default CarritosDao;