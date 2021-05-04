const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ScoreSchema = new schema({
    name:{
        type: String
    },
    score:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('score', ScoreSchema);