import { Schema } from "mongoose";

export const HouseSchema = new Schema({
  beds: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  sqft: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
});
