'use strict';
const router = require('express').Router();
const { Film } = require("../config/db");

router.get("/getNewReleases", (req, res, next) => {
    Film.find({newRelease: true}, (err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});

router.get("/getListings", (req, res, next) => {
    Film.find({listing: true}, (err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});

router.get("/getAll", (req, res, next) => {
    Film.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});

router.get("/get/:id", (req, res, next) => {
    Film.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})

router.post("/create", ({body}, res, next) => {
    const item = new Film(body);
    item.save()
        .then((result) => {
            res.status(201).send(`${result.title} has been added successfully!`)
        })
        .catch((err) => next(err));
});

router.delete("/delete/:id", (req, res, next) => {
    Film.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

router.patch("/update/:id", (req, res, next) => {
    Film.findByIdAndUpdate(req.params.id,
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
    Film.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});


module.exports = router; 