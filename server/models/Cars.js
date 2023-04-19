const { Schema, model } = require("mongoose");

const Model1Schema = new Schema({
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

const Model1 = model("Model1", Model1Schema);

module.exports = Model1;
