import { Schema } from "mongoose";

export const JobSchema = new Schema({
  title: { type: String, required: true },
  wage: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
});
