const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://douiou:zineb4151840770@cluster0.4zm3ujk.mongodb.net/menapp"
    );
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
