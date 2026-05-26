const express = require("express");

const router = express.Router();

const {
  joinEvent,
  getParticipants,
  getUserParticipations,
} = require(
  "../controllers/participationController"
);

router.post(
  "/join",
  joinEvent
);

router.get(
  "/",
  getParticipants
);

router.get(
  "/:userId",
  getUserParticipations
);

module.exports = router;