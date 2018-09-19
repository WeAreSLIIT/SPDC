const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const MedicineSchema = new Schema ({

    id : {
        type: Number,
        required : true
    },
    name : {
        type: String,
        required : true
    },
    description : String

});

const Medicine = mongoose.model('medicine',MedicineSchema);
module.exports = Medicine;