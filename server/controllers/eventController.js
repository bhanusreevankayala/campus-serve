const Event = require("../models/Event");

const createEvent = async (req, res) => {

  try {

    const {
      title,
      description,
      location,
      date,
      startTime,
      endTime,
      category,
    } = req.body;

    const event = await Event.create({

      title,
      description,
      location,
      date,
      startTime,
      endTime,
      category,

      // IMAGE URL FROM CLOUDINARY
      image: req.file?.path,

    });

    res.status(201).json(event);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
};