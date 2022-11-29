import { dbContext } from "../db/DbContext";

class CarsService {
  async getOne(carId) {
    let car = await dbContext.Cars.findById(carId);
    if (!car) {
      throw new Error(`No car with the ID of ${carId}.`);
      return;
    }
    return car;
  }
  async getAll() {
    let cars = await dbContext.Cars.find();
    return cars;
  }
  async create(carData) {
    let car = await dbContext.Cars.create(carData);
    return car;
  }
  async edit(carId, carData) {
    let car = await this.getOne(carId);
    (car.make = carData.make || car.make),
      (car.model = carData.model || car.model),
      (car.year = carData.year || car.year),
      (car.price = carData.price || car.price),
      (car.color = carData.color || car.color),
      (car.body = carData.body || car.body),
      (car.photo = carData.photo || car.photo),
      (car.description = carData.description || car.description);
    car.save();
    return car;
  }
  async delete(carId) {
    let car = await dbContext.Cars.findByIdAndRemove(carId);
    let message = "Removed Car.";
    return message;
  }
}

export const carsService = new CarsService();
