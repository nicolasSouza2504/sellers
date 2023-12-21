const sellerSchema = require("../schema/seller-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Seller", sellerSchema);
