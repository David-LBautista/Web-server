const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  //res.send('Hello World');
  let salida = {
    nombre: 'David',
    edad: 30,
    url: req.url
    };

    res.send(salida);
});

app.get('/data', (req, res) => {
    res.send('Hello World');
  });
 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});