import express from 'express';
import { connect } from './config/database.js'; // Adjust the path to your database module
import { PORT } from './config/serverConfig.js'; // Adjust the path to your serverConfig module
import service from './services/tweet-service.js'

const app = express();

app.listen(PORT, async () => {
    console.log(`Server Started on ${PORT}`);
    await connect();
    console.log('mongodb connected');
    let ser = new service();
    await ser.create({content: 'Done with #refactor'})
});
