import { Schema } from "mongoose";

export const CarSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  body: {
    type: String,
    enum: ["Coupe", "Sedan", "Convertible", "Truck", "SUV"],
    required: true,
    default: "Sedan",
  },
  photo: { type: String, required: true },
  description: { type: String, required: true },
});
