const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mssql");

const Dog = sequelize.define("Dog", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
  },
  tail_length: {
    type: DataTypes.NUMBER,
  },
  weight: {
    type: DataTypes.NUMBER,
  },
});

console.log(Dog === sequelize.models.Dog);
