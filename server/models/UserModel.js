const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "please provide a name"],
    },
    photo: {
        type: String,
    },
    phone: {
      type: String,
      required: [true, "please provide a phone"],
      unique: true,
    },
    age: {
      type: String,
      required: false,
    },
    targetLocation: {
      type: String,
      required: false,
    },
    lookingFor: {
      type: String,
      required: false,
    },
    interest: {
      type: Array,
    },
    activated: {
        type: Boolean,
        default: false,
        required: false,
    },
    haveFriends: {
      type: Boolean,
      default: false
  },
  worryThings: {
      type: Boolean,
      default: false
  },
  loveParties: {
      type: Boolean,
      default: false
  },
  believeArt: {
      type: Boolean,
      default: false
  },
  centerOfAttraction: {
      type: Boolean,
      default: false
  },
  easilyIrritate: {
      type: Boolean,
      default: false
  },
  comfortableAroundPeople: {
      type: Boolean,
      default: false
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
