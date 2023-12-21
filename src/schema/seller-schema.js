const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    cnpj: { type: String, unique: true, required: true },
    name: { type: String, required: true}});
