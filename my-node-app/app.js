const express = require('express');
const app = express();
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.get('/', (req, res) => {
  res.json({
    mensaje: `Hola, estoy desplegando mi primera aplicación ahora desde GitHub Actions utilizando el modo ${NODE_ENV}`,
    fecha: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
