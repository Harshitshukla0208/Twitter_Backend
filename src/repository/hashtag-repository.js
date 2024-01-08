import Hashtag from '../models/hashtags.js';

class HashtagRepository {
    
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log("Something went wrong in hashtag repository layer");
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log("Something went wrong in hashtag repository layer");
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log("Something went wrong in hashtag repository layer");
        }
    }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in hashtag repository layer");
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            });//.select('title -_id');
            return tags;
        } catch (error) {
            console.log("Something went wrong in hashtag repository layer");
        }
    }
}

export default HashtagRepository;
