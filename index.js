require('dotenv').config();
const connetToDb = require('./database/db');

const express = require('express');
const app = express();
const port = process.env.PORT || 300;
const cors = require('cors');

app.use(express.json());
app.use(cors());
const Product = require('./model/product');

connetToDb();

app.get('/', async (req, res) => {
  const ports = await Product.find();
  res.json(ports);
});

app.post('/ins', async (req, res) => {
  const newPort = req.body;

  /* if (!newPort.name) {
    return res.status(200).json({
      nameMessage: 'Name is required!',
    });
  } */

  // const codeExists = await Product.findOne({ code: newPort.code });
  // if (codeExists) {
  //   return res.status(200).json({
  //     codeMessage: `O Código ${newPort.code} já existe`,
  //   });
  // }

  await Product.create(newPort);
  res.status(201).json(newPort);
});
app.put('/ins/:id', async (req, res) => {
  const { id } = req.params;
  const { name, image, description, quantity, code } = req.body;
  await Product.findByIdAndUpdate(id, {
    name,
    image,
    description,
    quantity,
    code,
  });

  res.sendStatus(204);
});
app.delete('/ins/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);

  res.sendStatus(204);
});

app.listen(port, () => console.log(`🚀 Meu site http://localhost:${port}`));
