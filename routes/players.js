const express = require('express');
const router = express.Router();

// load the player model
const Player = require('./schema/player');

const users = ['User01', 'User02'];

router.get('/', function (req, res) {
    Player.find().then(function (name) {
        if (name == null) {
            throw new Error("No names found")
        }
        const result = {success: 1, result: name};
        res.json(result)
    }).catch(err => res.status(404).json({success: 0, msg: err.message}));
});

router.get('/products:id',function (req,res){
    res.json(users)
})

module.exports = router;
