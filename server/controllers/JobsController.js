import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router;
  }

  async getAll(req, res, next) {
    try {
      let jobs = await jobsService.getAll();
      return res.send(jobs);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      let job = await jobsService.getOne();
      return res.send(job);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let job = await jobsService.create(req.body);
      return res.send(job);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let job = await jobsService.edit(req.params.id, req.body);
      return res.send(job);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let message = await jobsService.delete(req.params.id);
      return res.send();
    } catch (error) {
      next(error);
    }
  }
}
