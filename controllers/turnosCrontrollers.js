const Turno = require("../models/turnos");

// Crear un nuevo turno
const createTurno = async (req, res) => {
    try {
        const newTurno = new Turno(req.body);  
        await newTurno.save();
        res.status(201).json(newTurno);
    } catch (error) {
        res.status(500).json({ message: "Error al crear un turno" });
    }
};

module.exports = {
    createTurno,
};

// Filtrar todos los turnos. 
