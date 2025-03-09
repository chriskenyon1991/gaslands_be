"use strict";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  username: "root",
  password: "Cku10208070",
  database: "gaslands",
  host: "localhost",
  dialect: "mysql",
});
class Weapon extends Model {}

Weapon.init(
  {
    vehicle_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "vehicle",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    weapon: DataTypes.STRING,
    type: DataTypes.STRING,
    attack: DataTypes.STRING,
    range: DataTypes.STRING,
    ammo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    crewFired: DataTypes.BOOLEAN,
    slots: DataTypes.FLOAT,
    specialRules: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    sponsor: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "weapon",
    tableName: "weapons",
  }
);

export default Weapon;
