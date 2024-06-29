// importaciones
import express from 'express'
import cors from 'cors'
import { create, findAll } from '../server/models/posts.models.js'
// creando servidor
const app = express()
// port en .env
const PORT = process.env.PORT ?? 3000
// middleware
app.use(cors())
app.use(express.json())
// peticion get
app.get('/posts', async (req, res) => {
  try {
    const result = await findAll()
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(400).send({ status: false, message: error })
  }
})
// peticion post
app.post('/posts', async (req, res) => {
  try {
    const { titulo, url, descripcion, likes } = req.body
    // no se aceptan campos vacios
    if (titulo === '' || url === '' || descripcion === '') throw new Error('todos los campos debe ser llenados')
    const result = await create(titulo, url, descripcion, likes)
    res.status(201).json(result.rows)
  } catch (error) {
    res.status(401).send({ status: false, message: error })
  }
})
// ruta por defecto.
app.all('*', (req, res) => res.status(404).json({ status: false, message: 'Page not found' }))

app.listen(PORT, () => console.log('Servidor UP'))
