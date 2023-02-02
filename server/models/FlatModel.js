const mongoose = require("mongoose");
var Schema = mongoose.Schema

const flatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    maxLength: [40, "name should be under 40 characters"],
  },
  address: {
    type: String,
    required: [true, "please provide a phone"],
  },
  city: {
    type: Schema.Types.ObjectId,
      ref: "City",
  },
  state: {
    type: String,
    required: [true, "please provide target location"],
  },
  pincode: {
    type: String,
    required: [true, "please provide what you are looking for"],
  },
  BuildArea: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    require: true,
  },
  NearbyHospital: {
    type: Boolean,
  },
  NearbySchool: {
    type: Boolean,
  },
  isParking: {
    type: Boolean,
  }
},
{
    timestamps: true,
}

);

module.exports = mongoose.model("User", flatSchema);
