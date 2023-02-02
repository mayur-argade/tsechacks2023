const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name"],
      maxLength: [40, "name should be under 40 characters"],
    },
    state: {
      type: String,
    },
    crimeRate: {
      type: String,
    },
    COL: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("City", citySchema);
