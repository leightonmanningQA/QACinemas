'use strict';
const mongoose = require(`mongoose`);

const {Schema, model} = mongoose;
const {DB_URL} = require('../config/consts.json');

const discussionSchema = new Schema({
    film: {type:String, required:true },  //, min length etc
    rating: String,
    comment: String
});

const filmSchema = new Schema({
    title: {type:String, required:true },  //, min length etc
    description: {type:String, required:true },
    actors: {type:String, required:true },
    director: {type:String, required:true },
    showingTimes: {type:Array, required:true },
    picture: {type: String, required:true},
    newRelease:{type: Boolean, requried:true},
    listing:{type: Boolean, requried:true}
});

const bookingSchema = new Schema({
    film: {type:String, required:true },  //, min length etc
    date: {type:Date, required:true },
    time: {type:String, require:true},
    firstName: {type:String, required:true },
    lastName: {type:String, required:true },
    email: {type:String, required:true },
    adultTickets: {type:Number, required:true },
    childTickets: {type: Number, required:true},
    concessionTickets:{type: Number, requried:true}
});

const Discussion = model('Discussion',discussionSchema);

const Film = model('Film', filmSchema);

const Booking = model('Booking', bookingSchema);

mongoose.connect(`${DB_URL}`, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log(`Connected`);
    }
});



module.exports = {"Film":Film,"Discussion":Discussion,"Booking":Booking};