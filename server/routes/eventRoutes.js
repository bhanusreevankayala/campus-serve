const express = require("express");

const {
  createEvent,
  getEvents,
} = require(
  "../controllers/eventController"
);

const upload = require(
  "../middleware/uploadMiddleware"
);

const router = express.Router();
router.get("/", getEvents);
router.post(
  "/",
  upload.single("image"),
  createEvent
);


module.exports = router;