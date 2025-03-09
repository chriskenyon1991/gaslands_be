// const express = require("express");
import express from "express";
import "./models/associations.js";
import { Sequelize } from "sequelize";
import { vehicleRouter } from "./routers/VehicleRouter.js";
import { weaponRouter } from "./routers/WeaponRouter.js";
export const sequelize = new Sequelize({
  username: "root",
  password: "Cku10208070",
  database: "gaslands",
  host: "localhost",
  dialect: "mysql",
});
const app = express();
app.use(express.json());

app.use("/vehicle", vehicleRouter);
app.use("/weapon", weaponRouter);

app.get("/", (req, res) => {
  try {
  } catch (err) {
    console.log("error", err);
  }
  res.send("Hello from Express!");
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
