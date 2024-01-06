const express = require('express');
const connect = require('./config/database')
const {PORT} = require('./config/serverConfig')
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')

const SetUpAndStartServer = () => {
    const app = express();
    
    app.listen(PORT, async () => {
        console.log(`Server Started on ${PORT}`);
        await connect();
        console.log('mongodb connected');
        // const tweet = await Tweet.create({
        //     content: 'Second tweet',
        //     userEmail: 'something2@gmail.com'
        // });
        // const tweetrepo = new TweetRepository();
        // const tweet = await tweetrepo.create({content: 'some content'})
        // const comment  = await Comment.create({content: 'some comment'})
        // tweet.comments.push(comment)
        // await tweet.save();
        const tweetrepo = new TweetRepository();
        const tweet = await tweetrepo.getWithComments('6599a434f1e85ad818dd79eb')
        console.log(tweet); 
    })

}

SetUpAndStartServer();