const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  make: [
    {
      type: String,
    },
  ],
  carModel: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  //linking the type of oil a specific car uses to our products in the store
  oil: [productSchema],
});

const Car = model("Car", carSchema);

module.exports = Car;
