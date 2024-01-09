import Hashtag from '../models/hashtags.js';

class HashtagRepository {
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.error('Error in repository layer (create):', error.message);
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.error('Error in repository layer (bulkCreate):', error.message);
            throw error;
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.error('Error in repository layer (get):', error.message);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.error('Error in repository layer (destroy):', error.message);
            throw error;
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({ title: titleList });
            return tags;
        } catch (error) {
            console.error('Error in repository layer (findByName):', error.message);
            throw error;
        }
    }
}

export default HashtagRepository;
