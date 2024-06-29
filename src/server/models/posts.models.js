import db from '../database/db_connect.js'
// funcion para traer todos los datos de postgres
export const findAll = async () => await db('SELECT * FROM posts;')
// funcion para crear nuevos datos en postgres
export const create = async (titulo, img, descripcion, likes = 0) => await db('INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1,$2,$3,$4) RETURNING *;', [titulo, img, descripcion, likes])
// siguiente desafio
export const updateById = () => { }

export const deleteById = () => { }

findAll()
