const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//App Initialize
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

// static files routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//variables
const port = process.env.PORT || 8080;
const mode = process.env.NODE_MODE || development;

//listen port
app.listen(port, () => {
  console.log(`Server Running in ${mode} mode on port ${port}`.bgMagenta.white);
});
