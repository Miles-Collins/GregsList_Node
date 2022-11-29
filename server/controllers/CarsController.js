import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let cars = await carsService.getAll();
      return res.send(cars);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let car = await carsService.create(req.body);
      return res.send(car);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      let car = await carsService.getOne(req.params.id);
      return res.send(car);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let car = await carsService.edit(req.params.id, req.body);
      return res.send(car);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let message = await carsService.delete(req.params.id);
      return res.send(message);
    } catch (error) {
      next(error);
    }
  }
}
