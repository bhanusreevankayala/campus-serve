const mongoose = require("mongoose");

const participationSchema =
  new mongoose.Schema({

    studentName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    rollnumber: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },

  });

module.exports = mongoose.model(
  "Participation",
  participationSchema
);