import likes from '../models/like.js';

class LikesRepository {

    async create(data){
        try {
            const like = await likes.create(data);
            return like;
        } catch (error) {
            console.log("Something went wrong inside like repo layer");
        }
    }

    async destroy(id){
        try {
            const response = await likes.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log("Something went wrong inside likes repo layer");
        }
    }

    async get(id){
        try {
            const result = await likes.findById(id);
            return result;
        } catch (error) {
            console.log("Somethiing went wrong inside like repo layer");
        }
    }

    async getAll(id){
        try {
            const result = await likes.find({});
            return result;
        } catch (error) {
            console.log("Somethiing went wrong inside like repo layer");
        }
    }

    async update(id, data){
        try {
            const result = await likes.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch (error) {
            console.log("Somethiing went wrong inside like repo layer");
        }
    }
}

export default LikesRepository;