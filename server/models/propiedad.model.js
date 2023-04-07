const mongoose = require('mongoose');

const PropiedadSchema = new mongoose.Schema({
    titulo: {
        type: String,
        minLength: [3, 'El titulo requiere de mas de 3 caracteres'],
        required: [true, "El titulo es requerido"],
    },
    precio: {
        type: Number,
        required: [true, "El precio es requerido"]
    },
    imagen: {
        // type: mongoose.Schema.Types.Mixed,
        type: String,
        //required: [true, "Imagen obligatoria"],
    },
    descripcion: {
        type: String,
        required: [true, "La descripcion es requerida"]
    },
    habitaciones: {
        type: Number,
        required: [true, "La cantidad de habitaciones es requerida"]
    },
    baños: {
        type: Number,
        required: [true, "La cantidad de baños es requerida"]
    },
    estacionamientos: {
        type: Number,
        required: [true, "La cantidad de baños es requerida"]
    },
    vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendedor'
    }
}, { timestamps: true });

const Propiedad = mongoose.model('Propiedad', PropiedadSchema);

module.exports = Propiedad;