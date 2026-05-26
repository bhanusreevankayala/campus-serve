const Event = require("../models/Event");

const Participation = require(
  "../models/Participation"
);

const getDashboardStats = async (
  req,
  res
) => {

  try {

    const totalEvents =
      await Event.countDocuments();

    const totalParticipations =
      await Participation.countDocuments();

    res.json({
      totalEvents,
      totalParticipations,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getDashboardStats,
};  