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
  // saved book id from GoogleBooks
  year: {
    type: Number,
    required: true,
  },
  oil: [productSchema],
});

const Model1 = model("Model1", Model1Schema);

module.exports = Model1;
