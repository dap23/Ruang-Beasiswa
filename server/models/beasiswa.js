const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeasiswaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    jenjang: {
      type: String,
      required: true,
    },
    domisili: {
      type: String,
      required: true,
    },
    kategori: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beasiswa", BeasiswaSchema);
