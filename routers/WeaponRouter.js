import express from "express";
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
} from "../controlers/VehicleControler.js";
import { createWeapon } from "../controlers/WeaponControler.js";
export const weaponRouter = express.Router();

weaponRouter.post("/", createWeapon);
