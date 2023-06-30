const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'you have to add a name for the task'],
        trim: true,
        maxlength: [20, 'the name`s length must not exceed 20 characters' ]
    }
    , completed:{
        type:Boolean,
        default:false
    }
})

const Task = new mongoose.model('Task',TaskSchema);
module.exports = Task;
