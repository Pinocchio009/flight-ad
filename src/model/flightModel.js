const {Schema, model} = require("mongoose");

const flightSchema = new Schema ({
    title : { 
        type: String,
        required: true,
        minlength: 3,
        maxlength: 23,
    },
    price: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 23,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{ timestamps: true}
);
const flightModel = model('flghts', flightSchema);

module.exports = flightModel;