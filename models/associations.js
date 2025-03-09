import Vehicle from "./vehicle.js"; // Import the Vehicle model
import Weapon from "./weapon.js"; // Import the Weapon model

// Define the relationship: A Vehicle has many Weapons
Vehicle.hasMany(Weapon, {
  foreignKey: "vehicle_id",
  as: "weapons",
});

Weapon.belongsTo(Vehicle, {
  foreignKey: "vehicle_id",
  as: "vehicle",
});

export default { Vehicle, Weapon }; // Optional: Export models for usage
