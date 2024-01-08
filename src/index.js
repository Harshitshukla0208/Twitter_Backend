import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js'; // Adjust the path to your database module
import { PORT } from './config/serverConfig.js'; // Adjust the path to your serverConfig module

import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server Started on ${PORT}`);
    await connect();
    console.log('mongodb connected');
});
