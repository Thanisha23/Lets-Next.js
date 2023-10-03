import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

export async function connectDb() {
  try {
    mongoose.connect(
      "mongodb+srv://Thanisha:N3hWDGv64Q1pBdPw@cluster0.gxag2tr.mongodb.net/"
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    connection.on("error", (err) => {
      console.log("MongoDB Connection Error!" + err);
      process.exit();
    });
  } catch (err) {
    console.log("Something is wrong!");
    console.log(err);
  }
}
