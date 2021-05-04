const express = require('express');
const score = require('./schema/score');
const router = express.Router();

// load the score model
const Score = require('./schema/score');


router.get('/', function (req, res) {
    Score.find().then(function (name) {
        if (name == null) {
            throw new Error("No names found")
        }
        const result = {success: 1, result: name};
        res.json(result)
    }).catch(err => res.status(404).json({success: 0, msg: err.message}));
});


router.post("/", (req, res) => {

    const newScore = new Score({
        name: req.body.name,
        score: req.body.score,
        date: req.body.date,
    });

    newScore.save()
    .then(res.json({success:true}))
    .catch(err => console.log(err));
});

module.exports = router;
