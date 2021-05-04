const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PlayerSchema = new schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('player', PlayerSchema);