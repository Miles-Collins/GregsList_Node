import { dbContext } from "../db/DbContext";

class HousesService {
  async delete(id) {
    let house = await dbContext.Houses.findByIdAndRemove(id);
    let message = "Deleted house";
    return message;
  }
  async edit(id, houseData) {
    let house = await this.getOne(id);
    (house.beds = houseData.beds || house.beds),
      (house.bathrooms = houseData.bathrooms || house.bathrooms),
      (house.sqft = houseData.sqft || house.sqft),
      (house.price = houseData.price || house.price),
      (house.description = houseData.description || house.description),
      (house.address = houseData.address || house.address),
      (house.image = houseData.image || house.image);
    house.save();
    return house;
  }
  async create(body) {
    let house = await dbContext.Houses.create(body);
    return house;
  }
  async getOne(id) {
    let house = await dbContext.Houses.findById(id);
    if (!house) {
      throw new Error("This house does not exist.");
    }
    return house;
  }
  async getAll() {
    let houses = await dbContext.Houses.find();
    return houses;
  }
}

export const housesService = new HousesService();
