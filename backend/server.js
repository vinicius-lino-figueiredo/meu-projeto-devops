// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Item = require("./models/Item");
app.use(cors());
app.use(express.json());
// Conexão com MongoDB
mongoose.connect("mongodb://mongo:27017/meubanco", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// POST
app.post("/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
});
// GET
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
