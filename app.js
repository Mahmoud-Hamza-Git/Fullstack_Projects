const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// Middleware
app.use(express.static('public')); //it goes to static folder and find index.html and run it so if you want to run a static website go to the public folder and create it
app.use(express.json());
app.use('/api/v1/tasks', tasks);

let port = process.env.PORT || 3000;
async function start() {
  // await connectDB().then((console.log("CONNECTED TO DATABASE...")));
  try {
    await connectDB(process.env.MONGO_URI).then(console.log('CONNECTED TO DATABASE...'));
    app.listen(port, console.log(`Server is starting on ${port}....`));
  } catch (error) {
    console.log(error);
  }
}
start();
