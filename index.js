const express = require('express');
const connect = require('./config/database')
const {PORT} = require('./config/serverConfig')

const app = express();
    
    app.listen(PORT, async () => {
        console.log(`Server Started on ${PORT}`);
        await connect();
        console.log('mongodb connected')
    })
