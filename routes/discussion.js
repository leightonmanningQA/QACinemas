const { read } = require('fs');

const router = require('express').Router();   //take the router object 
const {Task} = require("../config/db");

//read all
router.get("/getAll", (req,res) => {
    Task.find((err,tasks)=>{
        if(err){
            next(err);
        }
        res.send(tasks);
    })
});

//read by id
router.get("/get/:id", (req,res) => {
    Task.findById(req.params.id,(err,result)=>{
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
});

//create
router.post("/create", (req,res) => {
    const item = new Task(req.body);
    console.log(item);
    item.save()
    .then((result)=> {res.status(201).send(`${result.name} has been added successfully`)})

    //refactor to use a middleware function instead!
    .catch((err)=> console.error(err));


});

//delete
router.delete("/delete/:id",(req,res,next)=> {
    Task.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    })
});

//PARTIAL UPDATE
router.patch("/update/:id",(req,res,next)=>{
Task.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err)=>{
    if(err){
        next(err);
    }
    res.status(202).send(`Successfully updated Task with Id:`+req.params.id);
    })

});

//UPDATE REPLACE a document USING URL PARAMETER
router.put("/replace/:id", (req,res,next) => {
    const {name,description,completed} = req.query;
    Task.findByIdAndUpdate(req.params.id,{name,description,completed},{new:true},(err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    })
});

module.exports = router;