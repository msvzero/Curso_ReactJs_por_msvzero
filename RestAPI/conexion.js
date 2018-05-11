const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds119800.mlab.com:19800/clientes');
module.exports = { mongoose };