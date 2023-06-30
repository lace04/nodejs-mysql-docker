import express from 'express';
import { pool } from './database.js';

const app = express();

app.get('/', async (req, res) => {
  return res.send('Docker Compose con Nodejs y MySQL Tutorial');
});

app.get('/ping', async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT NOW() as now`);
    return res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});

export default app;
