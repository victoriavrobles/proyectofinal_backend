import express from 'express';

import { routeProducts } from './routes/productos.js';
import { routeCart } from './routes/carrito.js';

const app = express();

const port = process.env.PORT || 8080;

const admin = true;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Middleware
app.use((req, res, next) =>{
  if (!req.route) {
    next();
  } else {
    res.status(404).send({ error : -2, descripcion: `ruta ${req.url} no encontrada` });
  }
})

app.use('/api/productos', routeProducts)
app.use('/api/carrito', routeCart)

const servidor = app.listen(port, () => {
  console.log(`Servidor escuchando: ${servidor.address().port}`);
});

servidor.on('error', error => console.log(`Error: ${error}`));