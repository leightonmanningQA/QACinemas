'use strict';
const mongoose = require(`mongoose`);

const {Schema, model} = mongoose;
const {DB_URL, DB_NAME} = require('../config/consts.json');

// const taskSchema = new Schema({
//     name: {type:String, required:true },  //, min length etc
//     description: String,
//     completed: Boolean
// });

// const Task = model('Task',taskSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log(`Connected`);
    }
});

// module.exports= {"Task":Task};