var mongoose = require('mongoose');

//Post input a post can have multiple tags
var PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    callout: {
        type: String
    },
    tags: [Tag],
    markdown: {
        type: String
    },
    html: String,
    meta: {
        created: { type: Date, default: Date.now },
        likes: { type: Number, default: 0 }
    }
});

//Consider finding these via the tag ids but it turn into a O(n^2) situation
PostSchema.statics.findSimilarPosts = function (cb) {
    return this.model('Post').where('tags').in(this.tags, cb);
};

PostSchema.pre('save', function (next) {
    //convert the markdown to html and save it on the model
    console.log('markdown', this.get('markdown'));
    this.set('html', markdown.toHTML(this.get('markdown')));
    console.log('a post was saved to mongo: %s', this.get('title'));
    next();
});