'use strict';
const router = require('express').Router();
const { Booking } = require("../config/db");

router.get("/getAll", (req, res, next) => {
    Booking.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});


router.get("/get/:id", (req, res, next) => {
    Booking.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})

router.post("/create", ({body}, res, next) => {
    const item = new Booking(body);
    item.save()
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => next(err));
});

router.delete("/delete/:id", (req, res, next) => {
    Booking.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

router.patch("/update/:id", (req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (err) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully updated!`);
        })
});

router.put("/replace/:id", (req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});


module.exports = router; 