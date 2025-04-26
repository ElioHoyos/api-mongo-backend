require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//requerir las rutas de categorias para la api rest
const categoryRoutes = require('./routes/CategoryRoutes');
//requerir las rutas de productos para la api rest
const productRoutes = require('./routes/ProductRoutes');

const app = express();

//MiddleWares
app.use(cors());
app.use(express.json());

//Crear las rutas de la API REST
app.use('/api/categorias', categoryRoutes);
app.use('/api/productos', productRoutes);

//Conexión a MongoDB y arranca el servidor
mongoose
    .connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado correctamente a MongoDB');
        app.listen(process.env.PORT, () => 
            console.log(`Servidor no encontrado en http://localhost:${process.env.PORT}`)
        );
    })
    .catch(err => console.error('Error al conectar a MongoDB: ', err.message));