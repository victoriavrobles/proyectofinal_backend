import express from 'express';
const routeCart = express.Router();
// import { Contenedor } from '../contenedor/contenedor.js';
import ContenedorCarrito from '../daos/carritos/carritosmongodb.js';
import ContenedorProductos from '../daos/productos/productosmongodb.js';

const carrito = new ContenedorCarrito('./src/carrito.txt');
const productos = new ContenedorProductos('src/db/productos.txt');

routeCart.get('/', async (req, res) => {
  const listaCarrito = await carrito.getAll();
  res.json(listaCarrito);
});

routeCart.get('/:id/productos', async (req, res) => {
  const idCart = parseInt(req.params.id);
  const listaProductos = await carrito.getById(idCart);
  res.json(listaProductos.productos);
});

routeCart.post('/', async (req, res) => {
  const cart = {
    timestamp: Date.now()
  };
  const id = await carrito.save(carrito);
  res.json(id)
});

routeCart.delete('/:id', async (req, res) => {
  const idCart = parseInt(req.params.id);
  await carrito.deleteById(idCart)
  res.json({
    status: 'eliminado'
  })
});

routeCart.post('/:id/productos', async (req, res) => {
    const idCarrito = parseInt(req.params.id);
    const idProducto = req.body.idProducto;
    const producto = await productos.getById(idProducto);
    const carritos = await carrito.getById(idCarrito);
    carritos.productos.push(producto);
    await carrito.update(idCarrito, carritos);
  res.json({
    status: 'ok'
  });
});

routeCart.delete('/:id/productos/:id_prod', async (req, res) => {
    const idCarrito = parseInt(req.params.id);
    const idProducto = req.body.idProducto;
    const carritos = await carrito.getById(idCarrito);
    let indexToDelete = -1;
    carritos.productos.forEach((producto, index) => {
        if (producto.id == idProducto){
            indexToDelete = index;
        }
    });
    if (indexToDelete => 0) {
        carritos.productos.splice(indexToDelete, 1);
    }
    await carrito.update(idCarrito, carrito);
    res.json({
        status: 'ok'
    })
});


export {routeCart} ;