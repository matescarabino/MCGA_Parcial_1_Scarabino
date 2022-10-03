const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductsSchemas = new Schema({
    _id:{
        type: Number
    },
    name:{
        type: String,
        required: true,
        maxlenght: 50
    },
    price:{
        type: Decimal128,
        maxlenght: 50,
    },
    stock:{
        type: Number,
        maxlenght: 50,
    },
    description:{
        type: String,
        maxlenght: 200,
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Products", ProductsSchemas);