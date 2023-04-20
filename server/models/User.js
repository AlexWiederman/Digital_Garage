const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    ownedCars: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    cart: {
      type: DataTypes.ARRAY(DataTypes.OBJECT),
      allowNull: true,
    },
  },
);

module.exports = userSchema;
