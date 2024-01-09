import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
            .map((tag) => tag.substring(1).toLowerCase()); // Extract hashtags using regex
        const tweet = await this.tweetRepository.create(data);

        // Fetch already present tags
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

        // Extract titles of already present tags
        let titlesOfPresentTags = alreadyPresentTags.map(tag => tag.title);

        // Filter out new tags that are not already present
        let newTags = tags.filter(tag => !titlesOfPresentTags.includes(tag));

        // Create new tags with tweets array containing the ID of the created tweet
        newTags = newTags.map(tag => {
            return { title: tag, tweets: [tweet.id] };
        });

        // Bulk create new tags
        await this.hashtagRepository.bulkCreate(newTags);

        // Update already present tags with the ID of the created tweet
        alreadyPresentTags.forEach(tag => {
            tag.tweets.push(tweet.id);
            tag.save();
        });

        return tweet;
    }
}

export default TweetService;
