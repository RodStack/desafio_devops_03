const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Hola, estoy desplegando mi primera aplicación ahora desde GitHub Actions',
    fecha: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
