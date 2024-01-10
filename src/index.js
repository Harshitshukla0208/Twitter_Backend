import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config/serverConfig.js'
import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
    
    await connect();
    console.log('MongoDB connected');
});

export default app;
