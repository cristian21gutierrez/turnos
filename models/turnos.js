const mongoose = require ("mongoose");
const bcrypt = require("bcryptjs");


const TurnoSchema = new mongoose.Schema ({

    nombre: {
        type: String,
        required: true,
    }, 
    apellido: {
        type: String,
        required: true,
    }, 
    correo: {
        type: String,
        required: true,
    }, 
    dni: {
        type: String,
        required: true,
    }, 
    celular: {
        type: String,
        required: true,
    }, 
    status: {
        type: String,
        enum: ['pendiente', 'Registrado'], 
        default: 'pendiente',
    }, 

});


const Turno = mongoose.model("Turno", TurnoSchema);

module.exports = Turno;