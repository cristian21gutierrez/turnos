const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connected } = require("./database/connect");
const turnosRoutes = require("./routes/turnosRoutes");

const app = express();
const port = process.env.PORT || 10000;

// Configurar CORS para permitir todos los orígenes, pero habilitar credenciales para solicitudes específicas
const corsOptions = {
    origin: '*', // Permitir todos los orígenes
    credentials: true // Habilitar credenciales solo para ciertos orígenes
};

app.use(cors(corsOptions));
app.use(express.json());

// Rutas
app.use("/api/turnos", turnosRoutes);

connected();

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
