const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
    },
    jenjang: {
      type: String,
      required: true,
    },
    domisili: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/wikitro/image/upload/v1656228746/ruang-beasiswa/download_iztpk3.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
