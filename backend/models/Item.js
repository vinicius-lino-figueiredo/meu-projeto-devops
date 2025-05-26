// backend/models/Item.js
const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
});
module.exports = mongoose.model("Item", ItemSchema);
