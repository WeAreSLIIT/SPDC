const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
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
    
    medicines : [
        {
            id : Number,
            qty : Number
        }
    ],
    amount : {
        type:Number,
        default : 0
    },
    status :{
            type: String,
            enum : ['Pending','Completed','Paid','Delivered'],
    }

});

autoIncrement.initialize(mongoose.connection);
OrderSchema.plugin(autoIncrement.plugin, {
    model: 'order',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

const Order = mongoose.model('order',OrderSchema);
module.exports = Order;