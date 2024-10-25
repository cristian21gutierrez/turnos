const express = require("express");
const router = express.Router();
const { createTurno } = require("../controllers/turnosCrontrollers");

// Definir la ruta para crear un nuevo turno
router.post("/", createTurno);

module.exports = router;
