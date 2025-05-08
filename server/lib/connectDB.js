import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CON);
    console.log("Database Connection established");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
