const Participation = require(
  "../models/Participation"
);

// JOIN EVENT
const joinEvent = async (req, res) => {

  try {

    const {
      studentName,
      email,
      rollnumber,
      year,
      branch,
      eventId,
    } = req.body;

    // CHECK DUPLICATE
    const existingParticipation =
      await Participation.findOne({
        email,
        event: eventId,
      });

    if (existingParticipation) {

      return res.status(400).json({
        message:
          "You already joined this event",
      });

    }

    // CREATE
    const participation =
      await Participation.create({

        studentName,
        email,
        rollnumber,
        year,
        branch,
        event: eventId,

      });

    res.status(201).json(
      participation
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET USER PARTICIPATIONS
const getUserParticipations =
  async (req, res) => {

  try {

    const participations =
      await Participation.find({
        email: req.query.email,
      }).populate("event");

    res.json(participations);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET ALL PARTICIPANTS
const getParticipants =
  async (req, res) => {

  try {

    const participants =
      await Participation.find()
        .populate("event");

    res.json(participants);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  joinEvent,
  getParticipants,
  getUserParticipations,
};