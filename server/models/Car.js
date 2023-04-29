const { Schema, model } = require("mongoose");

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
  image: {
    type: String,
  },
  carId: {
    type: String,
    required: true,
  },
  drive: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
  },
});

const Car = model("Car", carSchema);

module.exports = Car;
