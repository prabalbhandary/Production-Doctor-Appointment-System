const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const url = process.env.MONGO_URL || "mongodb+srv://prabal:prabal@prabal.fbo3j.mongodb.net/Doctor_Appointment_App"
  try {
    await mongoose.connect(url);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
