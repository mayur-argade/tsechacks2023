const mongoose = require("mongoose");

const personalitySchema = new mongoose.Schema(
  {
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
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Personality", personalitySchema);
