import Vehicle from "../models/vehicle.js";
import Weapon from "../models/weapon.js";
const buggy = {
  weight: "light",
  hull: 6,
  handling: 4,
  gear: 6,
  crew: 2,
  slots: 2,
  keyWords: "Roll cage",
  cost: 6,
};
const car = {
  weight: "Middle",
  hull: 10,
  handling: 3,
  gear: 5,
  crew: 2,
  slots: 2,
  keyWords: "",
  cost: 12,
};
const performanceCar = {
  weight: "Middle",
  hull: 8,
  handling: 4,
  gear: 6,
  crew: 1,
  slots: 2,
  keyWords: "Slip away",
  cost: 15,
};
const truck = {
  weight: "Middle",
  hull: 12,
  handling: 2,
  gear: 4,
  crew: 3,
  slots: 3,
  keyWords: "",
  cost: 15,
};
const heavyTruck = {
  weight: "Heavy",
  hull: 14,
  handling: 2,
  gear: 3,
  crew: 4,
  slots: 5,
  keyWords: "",
  cost: 25,
};
const bus = {
  weight: "Heavy",
  hull: 16,
  handling: 2,
  gear: 3,
  crew: 8,
  slots: 3,
  keyWords: "",
  cost: 30,
};
const dragRace = {
  weight: "Light",
  hull: 4,
  handling: 4,
  gear: 6,
  crew: 1,
  slots: 2,
  keyWords: "Jet Engine",
  cost: 5,
};
const bike = {
  weight: "Light",
  hull: 4,
  handling: 5,
  gear: 6,
  crew: 1,
  slots: 1,
  keyWords: "Full throttle, Pivot",
  cost: 5,
};
const bikeWithSidecar = {
  weight: "Light",
  hull: 4,
  handling: 5,
  gear: 6,
  crew: 2,
  slots: 2,
  keyWords: "Full throttle, Pivot",
  cost: 8,
};
const iceCreamTruck = {
  weight: "Middle",
  hull: 10,
  handling: 2,
  gear: 4,
  crew: 2,
  slots: 2,
  keyWords: "Infuriating Jingle",
  cost: 8,
};
const gyrocopter = {
  weight: "Middle",
  hull: 4,
  handling: 4,
  gear: 6,
  crew: 1,
  slots: 0,
  keyWords: "Airwolf, Airborne, Bombs away",
  cost: 10,
};
const ambulance = {
  weight: "Middle",
  hull: 12,
  handling: 2,
  gear: 5,
  crew: 3,
  slots: 3,
  keyWords: "Uppers, Downers",
  cost: 20,
};
const monsterTruck = {
  weight: "Heavy",
  hull: 10,
  handling: 3,
  gear: 4,
  crew: 2,
  slots: 2,
  keyWords: "All terrain, Up and Over",
  cost: 25,
};
const helicopter = {
  weight: "Heavy",
  hull: 8,
  handling: 3,
  gear: 4,
  crew: 3,
  slots: 4,
  keyWords: "Airwolf, Airborne, Bombs away",
  cost: 30,
};
const tank = {
  weight: "Heavy",
  hull: 20,
  handling: 4,
  gear: 3,
  crew: 3,
  slots: 4,
  keyWords: "All terrain, Up and Over, Pivot, Turret",
  cost: 40,
};
const warRig = {
  weight: "Heavy",
  hull: 26,
  handling: 2,
  gear: 4,
  crew: 5,
  slots: 5,
  keyWords: "Articulated, Ponderous, Piledriver",
  cost: 40,
};
const def = {
  weight: "",
  hull: 0,
  handling: 0,
  gear: 0,
  crew: 0,
  slots: 0,
  keyWords: "",
  cost: 0,
};

export const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.status(201).send(vehicles);
  } catch (err) {
    console.log("err", err);
    res.status(404).send(err);
  }
};

export const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: { id: req.params.id },
      include: {
        model: Weapon,
        as: "weapons", // Alias defined in the association
      },
    });
    res.status(201).send(vehicle);
  } catch (err) {
    console.log("err", err);
    res.status(404).send(err);
  }
};

export const createVehicle = async (req, res) => {
  try {
    const vehicle = {
      name: req.body.name,
      type: req.body.type,
      weight: "",
      hull: 0,
      handling: 0,
      gear: 0,
      crew: 0,
      slots: 0,
      keyWords: "",
      cost: 0,
    };

    switch (req.body.type) {
      case "Buggy":
        vehicle.weight = buggy.weight;
        vehicle.hull = buggy.hull;
        vehicle.handling = buggy.handling;
        vehicle.gear = buggy.gear;
        vehicle.crew = buggy.crew;
        vehicle.slots = buggy.slots;
        vehicle.keyWords = buggy.keyWords;
        vehicle.cost = buggy.cost;
        break;
      case "Car":
        vehicle.weight = car.weight;
        vehicle.hull = car.hull;
        vehicle.handling = car.handling;
        vehicle.gear = car.gear;
        vehicle.crew = car.crew;
        vehicle.slots = car.slots;
        vehicle.keyWords = car.keyWords;
        vehicle.cost = car.cost;
        break;
      case "Performance Car":
        vehicle.weight = performanceCar.weight;
        vehicle.hull = performanceCar.hull;
        vehicle.handling = performanceCar.handling;
        vehicle.gear = performanceCar.gear;
        vehicle.crew = performanceCar.crew;
        vehicle.slots = performanceCar.slots;
        vehicle.keyWords = performanceCar.keyWords;
        vehicle.cost = performanceCar.cost;
        break;
      case "Truck":
        vehicle.weight = truck.weight;
        vehicle.hull = truck.hull;
        vehicle.handling = truck.handling;
        vehicle.gear = truck.gear;
        vehicle.crew = truck.crew;
        vehicle.slots = truck.slots;
        vehicle.keyWords = truck.keyWords;
        vehicle.cost = truck.cost;
        break;
      case "Heavy Truck":
        vehicle.weight = heavyTruck.weight;
        vehicle.hull = heavyTruck.hull;
        vehicle.handling = heavyTruck.handling;
        vehicle.gear = heavyTruck.gear;
        vehicle.crew = heavyTruck.crew;
        vehicle.slots = heavyTruck.slots;
        vehicle.keyWords = heavyTruck.keyWords;
        vehicle.cost = heavyTruck.cost;
        break;
      case "Bus":
        vehicle.weight = bus.weight;
        vehicle.hull = bus.hull;
        vehicle.handling = bus.handling;
        vehicle.gear = bus.gear;
        vehicle.crew = bus.crew;
        vehicle.slots = bus.slots;
        vehicle.keyWords = bus.keyWords;
        vehicle.cost = bus.cost;
        break;
      case "Drag Racer":
        vehicle.weight = dragRace.weight;
        vehicle.hull = dragRace.hull;
        vehicle.handling = dragRace.handling;
        vehicle.gear = dragRace.gear;
        vehicle.crew = dragRace.crew;
        vehicle.slots = dragRace.slots;
        vehicle.keyWords = dragRace.keyWords;
        vehicle.cost = dragRace.cost;
        break;
      case "Bike":
        vehicle.weight = bike.weight;
        vehicle.hull = bike.hull;
        vehicle.handling = bike.handling;
        vehicle.gear = bike.gear;
        vehicle.crew = bike.crew;
        vehicle.slots = bike.slots;
        vehicle.keyWords = bike.keyWords;
        vehicle.cost = bike.cost;
        break;
      case "Bike with Sidecar":
        vehicle.weight = bikeWithSidecar.weight;
        vehicle.hull = bikeWithSidecar.hull;
        vehicle.handling = bikeWithSidecar.handling;
        vehicle.gear = bikeWithSidecar.gear;
        vehicle.crew = bikeWithSidecar.crew;
        vehicle.slots = bikeWithSidecar.slots;
        vehicle.keyWords = bikeWithSidecar.keyWords;
        vehicle.cost = bikeWithSidecar.cost;
        break;
      case "Ice Cream Truck":
        vehicle.weight = iceCreamTruck.weight;
        vehicle.hull = iceCreamTruck.hull;
        vehicle.handling = iceCreamTruck.handling;
        vehicle.gear = iceCreamTruck.gear;
        vehicle.crew = iceCreamTruck.crew;
        vehicle.slots = iceCreamTruck.slots;
        vehicle.keyWords = iceCreamTruck.keyWords;
        vehicle.cost = iceCreamTruck.cost;
        break;
      case "Gyrocopter":
        vehicle.weight = gyrocopter.weight;
        vehicle.hull = gyrocopter.hull;
        vehicle.handling = gyrocopter.handling;
        vehicle.gear = gyrocopter.gear;
        vehicle.crew = gyrocopter.crew;
        vehicle.slots = gyrocopter.slots;
        vehicle.keyWords = gyrocopter.keyWords;
        vehicle.cost = gyrocopter.cost;
        break;
      case "Ambulance":
        vehicle.weight = ambulance.weight;
        vehicle.hull = ambulance.hull;
        vehicle.handling = ambulance.handling;
        vehicle.gear = ambulance.gear;
        vehicle.crew = ambulance.crew;
        vehicle.slots = ambulance.slots;
        vehicle.keyWords = ambulance.keyWords;
        vehicle.cost = ambulance.cost;
        break;
      case "Monster Truck":
        vehicle.weight = monsterTruck.weight;
        vehicle.hull = monsterTruck.hull;
        vehicle.handling = monsterTruck.handling;
        vehicle.gear = monsterTruck.gear;
        vehicle.crew = monsterTruck.crew;
        vehicle.slots = monsterTruck.slots;
        vehicle.keyWords = monsterTruck.keyWords;
        vehicle.cost = monsterTruck.cost;
        break;
      case "Helicopter":
        vehicle.weight = helicopter.weight;
        vehicle.hull = helicopter.hull;
        vehicle.handling = helicopter.handling;
        vehicle.gear = helicopter.gear;
        vehicle.crew = helicopter.crew;
        vehicle.slots = helicopter.slots;
        vehicle.keyWords = helicopter.keyWords;
        vehicle.cost = helicopter.cost;
        break;
      case "Tank":
        vehicle.weight = tank.weight;
        vehicle.hull = tank.hull;
        vehicle.handling = tank.handling;
        vehicle.gear = tank.gear;
        vehicle.crew = tank.crew;
        vehicle.slots = tank.slots;
        vehicle.keyWords = tank.keyWords;
        vehicle.cost = tank.cost;
        break;
      case "War Rig":
        vehicle.weight = warRig.weight;
        vehicle.hull = warRig.hull;
        vehicle.handling = warRig.handling;
        vehicle.gear = warRig.gear;
        vehicle.crew = warRig.crew;
        vehicle.slots = warRig.slots;
        vehicle.keyWords = warRig.keyWords;
        vehicle.cost = warRig.cost;
        break;
      default:
        vehicle.weight = def.weight;
        vehicle.hull = def.hull;
        vehicle.handling = def.handling;
        vehicle.gear = def.gear;
        vehicle.crew = def.crew;
        vehicle.slots = def.slots;
        vehicle.keyWords = def.keyWords;
        vehicle.cost = def.cost;
    }
    const newVehicle = Vehicle.build(vehicle);
    await newVehicle.save();
    res.status(201).send(vehicle);
  } catch (err) {
    console.log("error ==> ", err);
  }
};
