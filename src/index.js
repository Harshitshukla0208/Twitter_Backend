import express from 'express';
import { connect } from './config/database.js'; // Adjust the path to your database module
import { PORT } from './config/serverConfig.js'; // Adjust the path to your serverConfig module

const app = express();

app.listen(PORT, async () => {
    console.log(`Server Started on ${PORT}`);
    await connect();
    console.log('mongodb connected');
});
