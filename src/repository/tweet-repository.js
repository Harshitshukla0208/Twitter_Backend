const Tweet = require('../models/tweet');

class TweetRepository {
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer")
        }
    }
    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer")
        }
    }
    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer")
        }
    }
    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer")
        }
    }
    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);   //pagenation
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer")
        }
    }
}

module.exports = TweetRepository;