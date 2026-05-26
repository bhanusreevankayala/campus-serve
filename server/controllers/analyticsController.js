const Participation = require(
  "../models/Participation"
);

const User = require("../models/User");

const getAnalytics = async (req, res) => {
  try {

    // TOTAL PARTICIPATIONS
    const totalParticipations =
      await Participation.countDocuments();

    // DEPARTMENT DATA
    const departmentStats =
      await User.aggregate([
        {
          $group: {
            _id: "$department",
            count: { $sum: 1 },
          },
        },
      ]);

    // EVENT PARTICIPATION
    const eventStats =
      await Participation.aggregate([
        {
          $group: {
            _id: "$event",
            count: { $sum: 1 },
          },
        },
      ]);

    res.json({
      totalParticipations,
      departmentStats,
      eventStats,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAnalytics,
};