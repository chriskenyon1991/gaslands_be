import express from "express";
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
} from "../controlers/VehicleControler.js";
export const vehicleRouter = express.Router();

vehicleRouter.post("/", createVehicle);
vehicleRouter.get("/:id", getVehicleById);
vehicleRouter.get("/", getAllVehicles);
