"use strict";
import { Sequelize, Model, DataTypes } from "sequelize";
import Weapon from "./weapon.js";
const sequelize = new Sequelize({
  username: "root",
  password: "Cku10208070",
  database: "gaslands",
  host: "localhost",
  dialect: "mysql",
});
class Vehicle extends Model {}

Vehicle.init(
  {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    gear: DataTypes.FLOAT,
    weight: DataTypes.STRING,
    handling: DataTypes.FLOAT,
    crew: DataTypes.FLOAT,
    slots: DataTypes.FLOAT,
    key_words: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "vehicle",
    tableName: "vehicles",
  }
);

export default Vehicle;
