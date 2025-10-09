import express from 'express';
import cors from 'cors'

// Routes imports
import productsRouter from './routes/productsRouter';
import ordersRouter from './routes/ordersRouter';
import db from './config/db';

export async function connectDB() {
    try {
        await db.authenticate()
        // await db.sync()
        console.log('Conexión exitosa a la BD')
    } catch (error) {
        // console.log(error)
        console.log('Falló la conexión a la BD', error.message)
    }
}

connectDB()

const app = express();

app.use( cors() )

// Parses JSON requests with payloads, and populates req.body
app.use(express.json())

// Endpoints
app.use('/api/v1/products', productsRouter)
app.use('/api/v1/orders', ordersRouter)

export default app;