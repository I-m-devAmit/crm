import mongoose from "mongoose";

const connection = () =>
  mongoose
    .connect(
      "mongodb+srv://developeramit19:devamit@cluster0.19wjrjk.mongodb.net/"
    )
    .then(() => {
      console.log(`DATABASE CONNECTED SUCCESSFULLY`);
    })
    .catch((err) => {
      console.log(`DATABASE ERROR: ${err.message}`);
    });

//   mongoose.connection.on('error', (err) => {});
// mongoose.connection.on('connection', (connect)=>{})
export default connection;
