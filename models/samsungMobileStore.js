const mongoose = require("mongoose");
const { Schema } = mongoose;

const samsungMobileStoreSchema = new Schema({
    family: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    color: {
        type: String
    }
});

const samsungMobileStore = mongoose.model("samsungMobileStore", samsungMobileStoreSchema);

module.exports = {samsungMobileStore};