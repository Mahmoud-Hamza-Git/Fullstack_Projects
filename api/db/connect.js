import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const result = await mongoose.connect(process.env.DB_CONNECTION_STRING);

    console.log('Connected To MongoDB Database'.yellow); // `${result.connection.host}`.cyan
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB Disconnected');
});
// mongoose.connection.on('connected', () => {
//   console.log('mongoDB Connected');
// });

export default connectDB;
