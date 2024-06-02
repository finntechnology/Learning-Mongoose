import mongoose, { Types } from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// this is how you define a model
const contact = mongoose.model("contact", contactSchema);

export { contact };
