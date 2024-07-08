import db from '../database/db_connect.js'
// desafio anterior
export const findAll = async () => await db('SELECT * FROM posts ORDER BY id ASC;')
// desafio anterior
export const create = async (titulo, img, descripcion, likes = 0) => await db('INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1,$2,$3,$4) RETURNING *;', [titulo, img, descripcion, likes])
// Query para la actualizacion de los likes
export const updateById = async (id) => await db('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *;', [id])
// query para la eliminacion de los posts
export const deleteById = async (id) => await db('DELETE FROM posts WHERE id = $1 RETURNING *;', [id])
