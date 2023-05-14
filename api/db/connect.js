import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const result = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('connected to mongoDB Database At: '.yellow, `${result.connection.host}`.cyan);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB Disconnected');
});
// mongoose.connection.on('connected', () => {
//   console.log('mongoDB Connected');
// });

export default connectDB;
