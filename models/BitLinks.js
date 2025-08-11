import mongoose from "mongoose";

const BitLinksSchema = new mongoose.Schema({
  handle: { type: String, required: true }, // "Amar"
  desc: { type: String, default: "" }, // ""
  pic: { type: String }, // image URL
  links: [
    {
      link: { type: String, required: true },     // URL
      linktext: { type: String, required: true }  // "Amazon"
    }
  ]
}, { timestamps: true });

export default mongoose.models.BitLinks || mongoose.model("BitLinks", BitLinksSchema);
