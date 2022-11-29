import BaseController from "../utils/BaseController";

export class HousesController extends BaseController {
  constructor() {
    super("api/houses");
    this.router;
  }
}
