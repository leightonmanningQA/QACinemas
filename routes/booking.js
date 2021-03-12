'use strict';
const router = require('express').Router();
const { Booking } = require("../config/db");

router.get("/getAll", (req, res) => {
    Booking.find((err, products) => {
        if (err) {
            console.log(err);
        }
        res.send(products);
    });
});


router.get("/get/:id", (req, res) => {
    try{
        Booking.findById(req.params.id, (err, result) => {
            if (result === undefined) {
                res.status(404).send("nofound")
            }
            else{
                res.status(200).send(result);
            }
        })
    } catch(e) {
        
    }
})

router.post("/create", ({body}, res) => {
    const item = new Booking(body);
    item.save()
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => console.log(err));
});

router.delete("/delete/:id", (req, res) => {
    Booking.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});


module.exports = router; 