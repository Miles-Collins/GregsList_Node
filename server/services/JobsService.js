import { dbContext } from "../db/DbContext";

class JobsService {
  async getOne(id) {
    let job = await dbContext.Jobs.findById(id);
    if (!job) {
      throw new Error("There is no job with that Id.");
    }
    return job;
  }

  async getAll() {
    let jobs = await dbContext.Jobs.find();
    return jobs;
  }

  async create(jobBody) {
    let job = await dbContext.Jobs.create(jobBody);
    return job;
  }

  async edit(jobId, jobBody) {
    let job = await this.getOne(jobId);
    (job.title = jobBody.title || job.title),
      (job.wage = jobBody.wage || job.wage),
      (job.description = jobBody.description || job.description),
      (job.location = jobBody.location || job.location);
    job.save();
    return job;
  }

  async delete(jobId) {
    let job = await dbContext.Jobs.findByIdAndRemove(jobId);
    if (!job) {
      return new Error("Can not delete, there is no job with that ID.");
    }
    let message = "Deleted Job";
    return message;
  }
}

export const jobsService = new JobsService();
