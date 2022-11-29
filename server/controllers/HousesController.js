import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController {
  constructor() {
    super("api/houses");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let houses = await housesService.getAll();
      return res.send(houses);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      let house = await housesService.getOne(req.params.id);
      return res.send(house);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let house = await housesService.create(req.body);
      return res.send(house);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let house = await housesService.edit(req.params.id, req.body);
      return res.send(house);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let message = await housesService.delete(req.params.id);
      return res.send(message);
    } catch (error) {
      next(error);
    }
  }
}
