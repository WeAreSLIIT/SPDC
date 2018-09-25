const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const PointSchema = new Schema ({

    username : {
        type: String,
        required : true
    },
    points : {
        type:Number,
        default : 0
    },

});

const Point = mongoose.model('point',PointSchema);
module.exports = Point;