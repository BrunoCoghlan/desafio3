import { Router } from 'express'
import { create, findAll, updateById, deleteById } from '../server/models/posts.models.js'

export const postsRouter = Router()

// peticion get desafio anterior
postsRouter.get('/', async (req, res) => {
  try {
    const result = await findAll()
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(400).send({ status: false, message: error })
  }
})
// peticion post desafio anterior
postsRouter.post('/', async (req, res) => {
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
// peticion put para likes
postsRouter.put('/like/:id', async (req, res) => {
  try {
    const { id } = req.params
    await updateById(id)
    res.status(200).send({ status: true, message: 'Actualisado con exito' })
  } catch (error) {
    res.status(500).send({ status: false, message: error })
  }
})

// peticion delete para eliminar
postsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await deleteById(id)
    res.status(200).send({ status: true, message: 'Eliminado con existo' })
  } catch (error) {
    res.status(500).send({ status: false, message: error })
  }
})
