const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nombre: {
        type:   String,
        require: true
    },
    direccion: {
        type:   String,
        require:true
    },
    telefono: {
        type:  String,
        require:true
    }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = { Cliente };