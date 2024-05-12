const express = require('express');
const app = express();

// Middleware de autenticación
const authenticate = (req, res, next) => {
    // Aquí puedes poner la lógica de autenticación
    const userAuthenticated = false; // Supongamos que aquí se realiza la autenticación

    if (userAuthenticated) {
        // Si el usuario está autenticado, pasa al siguiente middleware
        next();
    } else {
        // Si el usuario no está autenticado, devuelve un error de autenticación
        res.status(401).send('Unauthorized');
    }
};

// Ruta protegida
app.get('/ruta-protegida', authenticate, (req, res) => {
    res.send('¡Bienvenido a la ruta protegida!');
});

// Ruta pública
app.get('/', (req, res) => {
    res.send('¡Hola! Esta es una ruta pública.');
});

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor Express iniciado en el puerto 3000');
});
