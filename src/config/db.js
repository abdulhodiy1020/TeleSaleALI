const mongoose = require("mongoose");
const {config} = require("dotenv")
config();

const connectDB = async () => {
    console.log(process.env.MONGO_URI, "salom");
    

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;