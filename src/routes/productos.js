import express from 'express';
const routeProducts = express.Router();
// import { Contenedor } from '../contenedor/contenedor.js';
import ContenedorProductos from '../daos/productos/productosmongodb.js';

const productos = new ContenedorProductos();

const middleware = (req, res, next) => {
  const admin = req.headers.admin;
  if (admin === 'true') {
    next();
  } else {
    res.status(401).send({ error : -1, descripcion: `ruta ${req.url} no autorizada` });
  }
}

routeProducts.get('/', async (req, res) => {
  const listaProductos = await productos.getAll();
  res.json(listaProductos);
});

routeProducts.post('/', middleware, async (req, res) => {
  const product = req.body;
  product.timestamp = Date.now();
  const idProduct = await productos.save(product);
  idProduct
  ? res.status(404).json({"Success": "Producto agregado"})
  : res.status(400).json({"Error": "Verificar contenido"})

});

routeProducts.put('/:id', middleware, async (req, res) => {
  const idProduct = parseInt(req.params.id);
  const product = req.body;
  await productos.update(idProduct, product);
  res.json(product);
});

routeProducts.delete('/', middleware, async (req, res) => {
  const idProduct = parseInt(req.params.id);
  const deleteProduct = await productos.deleteById(idProduct);

  deleteProduct
  ? res.status(200).json({"Success": "Producto eliminado"})
  : res.status(400).json({"Error": "El producto no existe"})
});


export {routeProducts};