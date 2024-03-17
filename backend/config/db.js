const mongoose = require('mongoose');

const Connection = mongoose.connect('mongodb+srv://Imesa:Imesa121@cluster0.cb366gq.mongodb.net/Emitrr');

module.exports = { Connection };
