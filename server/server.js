const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const participationRoutes = require(
  "./routes/participationRoutes"
);
const analyticsRoutes = require(
  "./routes/analyticsRoutes"
);
const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);

require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use(
  "/api/participations",
  participationRoutes
);
app.use(
  "/api/analytics",
  analyticsRoutes
);
app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});