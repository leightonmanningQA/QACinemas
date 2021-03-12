
const router = require('express').Router();   //take the router object 
const {Discussion} = require("../config/db");

//read all
router.get("/getAll", (req,res) => {
    Discussion.find((err,discussion)=>{
        if(err){
            next(err);
        }
        res.send(discussion);
    })
});


//create
router.post("/create", (req,res) => {
    const item = new Discussion(req.body);
    console.log(item);
    item.save()
    .then((result)=> {res.status(201).send(`Your comment about ${result.film} has been added successfully!`)})

    //refactor to use a middleware function instead!
    .catch((err)=> console.error(err));


});

//delete
router.delete("/delete/:id",(req,res,next)=> {
    Discussion.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    })
});

//PARTIAL UPDATE
router.patch("/update/:id",(req,res,next)=>{
Discussion.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err)=>{
    if(err){
        next(err);
    }
    res.status(202).send(`Successfully updated comment with Id:`+req.params.id);
    })

});


module.exports = router;