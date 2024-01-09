import express from 'express';
import bodyParser from 'body-parser';

import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';
import { UserRepository, TweetRepository } from './repository/index.js';
import LikeService from './services/like-service.js';

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Start the server and connect to MongoDB
app.listen(3000, async () => {
    console.log('Server started');
    
    // Connect to MongoDB
    await connect();
    console.log('MongoDB connected');

    // Fetch data from repositories
    const userRepository = new UserRepository();
    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0, 10);
    const users = await userRepository.getAll();

    // Example usage of LikeService
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);
});

export default app;
