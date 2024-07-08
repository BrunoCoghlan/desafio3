// importaciones
import express from 'express'
import cors from 'cors'
import { postsRouter } from '../Router/posts.js'

// import { create, findAll, updateById, deleteById } from '../server/models/posts.models.js'
// creando servidor
const app = express()
// port en .env
const PORT = process.env.PORT ?? 3000
// middleware
app.use(cors())
app.use(express.json())
app.disable('x-powered-by')
// peticion a ruta /post
app.use('/posts', postsRouter)
// ruta por defecto.
app.all('*', (req, res) => res.status(404).json({ status: false, message: 'Page not found' }))

app.listen(PORT, () => console.log('Servidor UP'))
