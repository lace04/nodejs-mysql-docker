import app from './app.js';
import './database.js';
import { config } from 'dotenv';

app.listen(process.env.NODE_LOCAL_PORT || 3000);
console.log('Server on port', process.env.NODE_LOCAL_PORT || 3000);
