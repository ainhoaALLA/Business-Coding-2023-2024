// Así como hay arrays que contienen strings o booleanos también pueden contener objetos

//Ejercicio - recorrer array de objetos y ver qué vehículo tiene la capacidad máxima
const person = {
  name: "Ainhoa",
};

const vehicles = [
  {
    model: "Seat Ibiza",
    capacity: 5,
    favorite: false,
  },
  {
    model: "Mercedes Vito",
    capacity: 8,
    favorite: false,
  },
  {
    model: "Kawasaki Ninja",
    capacity: 2,
    favorite: true,
  },
];

const getMaxCapacityFromVehicles = (vehicles) => {
  let maxCapacity = 0;

  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if (vehicle.capacity > maxCapacity) {
      maxCapacity = vehicle.capacity;
    }
  }
  return maxCapacity;
};

const maxCapacity = getMaxCapacityFromVehicles(vehicles);
console.log(`La capacidad máxima de mis vehículos es: ${maxCapacity}`);

//Ahora vamos a añadir un vehículo a un objeto con sólo una propiedad, es decir le añadimos otra propiedad que es la de su vehículo favorito

const getFavoriteVehicle = (vehicles) => {
  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if (vehicle.favorite === true) {
      return vehicle;
    }
  }
};

const favoriteVehicle = getFavoriteVehicle (vehicles)
person["vehicle"] = favoriteVehicle
console.log("La persona tiene estos valores:", person);
