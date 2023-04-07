const mongoose = require('mongoose');

const VendedorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        minLength: [3, 'El nombre requiere de mas de 3 caracteres'],
        required: [true, "El titulo es requerido"],
    },
    apellido: {
        type: String,
        minLength: [3, 'El nombre requiere de mas de 3 caracteres'],
        required: [true, "El apellido es requerido"]
    },
    telefono: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        required: [true, "El telefono es requerido"]
    }
}, { timestamps: true });

const Vendedor = mongoose.model('Vendedor', VendedorSchema);

module.exports = {Vendedor, VendedorSchema};