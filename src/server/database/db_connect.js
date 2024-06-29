// importacion de pg
import pg from 'pg'
// creando clase Pool
const { Pool } = pg
// Configuracion en .env
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true
}
// creando instancia pool
const pool = new Pool(config)
// funcion para conectarse a base de datos.
const db = async (query, values) => {
  try {
    const result = await pool.query(query, values)
    return (result)
  } catch (error) {
    console.error('db_connect => db', error)
  }
}
// exportacion
export default db
