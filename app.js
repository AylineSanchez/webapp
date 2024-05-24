const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Hola, Docker');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
