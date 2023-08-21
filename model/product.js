const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
});

module.exports = model("Product", loginSchema);
