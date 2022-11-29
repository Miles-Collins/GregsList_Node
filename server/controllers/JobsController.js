import BaseController from "../utils/BaseController";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router;
  }
}
