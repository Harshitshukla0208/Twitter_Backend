import Tweet from '../models/tweet.js';

class TweetRepository {
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean();
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
        }
    }

    async getAll(offset, limit) {
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);   //pagination
            return tweets;
        } catch (error) {
            console.log("Something went wrong in repository layer");
        }
    }
}

export default TweetRepository;
