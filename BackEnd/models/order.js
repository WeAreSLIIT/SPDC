const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const OrderSchema = new Schema ({

    id : {
        type: Number,
        required : true
    },
    username : {
        type: String,
        required : true
    },
    
    items : [
        {
            id : Number,
            qty : Number
        }
    ],
    price : {
        type:Number,
        default : 0
    },
    status :{
            type: String,
            enum : ['Pending','Completed','Paid','Delivered'],
    }

});

const Order = mongoose.model('order',OrderSchema);
module.exports = Order;