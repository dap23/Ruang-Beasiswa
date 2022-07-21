const express = require("express");
require("dotenv").config();
const db = require("./database/database");
const authRoute = require("./routes/auth");
const scholarRoute = require("./routes/beasiswa");

const app = express();

app.use("/api/auth", authRoute);
app.use("/api/beasiswa", scholarRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  console.log("Connected to port 3000");
});
