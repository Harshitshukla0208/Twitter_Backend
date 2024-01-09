class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            console.error('Error in CRUD repository (create):', error.message);
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error in CRUD repository (destroy):', error.message);
            throw error;
        }
    }

    async get(id) {
        try {
            return await this.model.findById(id);
        } catch (error) {
            console.error('Error in CRUD repository (get):', error.message);
            throw error;
        }
    }

    async getAll() {
        try {
            return await this.model.find({});
        } catch (error) {
            console.error('Error in CRUD repository (getAll):', error.message);
            throw error;
        }
    }

    async update(id, data) {
        try {
            return await this.model.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            console.error('Error in CRUD repository (update):', error.message);
            throw error;
        }
    }
}

export default CrudRepository;
