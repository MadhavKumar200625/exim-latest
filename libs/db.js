// lib/db.js
import sql from 'mssql';

const config = {
  user: process.env.DB_USER,         // safer to use environment variables
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,      // e.g., 'localhost' or an IP
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // for Azure; set false if using local dev
    trustServerCertificate: true, // required if local dev and no SSL
  },
};

let pool;

export async function getConnection() {
  if (pool) {
    return pool; // reuse if already connected
  }
  try {
      pool = await sql.connect(config);
    return pool;
  } catch (err) {
    console.error('Database Connection Failed!', err);
    throw err;
  }
}
