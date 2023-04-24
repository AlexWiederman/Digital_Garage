const { Schema, model } = require("mongoose");
const Product = require('./Product');

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  //linking the type of oil a specific car uses to our products in the store
  oil: [Product.schema],
});

const Car = model("Car", carSchema);

module.exports = Car;
