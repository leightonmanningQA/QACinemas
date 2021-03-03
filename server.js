const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors')

//instantiate my apop
const app = express();
//middleware!
app.use(cors());
app.use(bodyParser.json()); //whatever is sent in the body should be treat as a JSON. Body parser middleware

//Custom middleware
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}
// this will print the date before each request.. 
app.use(logger);

//importing all of the routes in task.js
const filmRoute = require("./routes/film");
const DiscussionRoute= require('./routes/discussion');
const bookingRoute = require("./routes/booking");
app.use('/film',filmRoute);
app.use("/discussion", DiscussionRoute);
app.use("/booking",bookingRoute);
//error handling
app.use((req,res,next)=>{
    next(createError(404,'Resource not found'));
})

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})


//communicate with the app on a specific port
const server = app.listen(5019, () => {
    console.log(`server has successfully started on port number: ${server.address().port}`);
})

module.exports = server;