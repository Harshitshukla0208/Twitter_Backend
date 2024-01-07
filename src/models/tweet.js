const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String
    },
    comments: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
    }]
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process(){  // custom virtual query
    return `${this.content} \nCreated by: ${this.userEmail}`;
});

tweetSchema.pre('save', function(next) {
    console.log('Inside a hook');
    this.content = this.content + '...'
    next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;