const db = require("../config/connection");
const { Product } = require("../models");

const productData = require("./productData.json");

db.once("open", async () => {
  // await Product.deleteMany({});

  const products = await Product.insertMany(productData);

  console.log("products seeded!");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    cart: [
      {
        items: [items[0]._id, items[0]._id, items[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  await Car.deleteMany();

  const cars = await Car.insertMany([
    {
      make: "Subaru",
      model: "Subaru Forester",
      year: 2020,
      oil: [
        {
          items: [items[0]._id, items[0]._id, items[1]._id],
        },
      ],
    },
  ]);

  console.log("cars seeded");

  process.exit(0);
});
