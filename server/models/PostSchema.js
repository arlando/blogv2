var mongoose = require('mongoose'),
    markdown = require('markdown').markdown;

// Post depends on the tag schema to exist
var lower = function(string) {
    'use strict';
    return string.toLowerCase();
};

//Tag a brief tag for a post
var TagSchema = new mongoose.Schema({
    name: { type: String,
        set: lower,
        trim: true
    }
});

var Tag = mongoose.model('Tag', TagSchema);

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
        created: {
            type: Date
        },
        likes: {
            type: Number,
            default: 0
        }
    }
});

//Consider finding these via the tag ids but it could turn into a O(n^2) situation
PostSchema.statics.findSimilarPosts = function (cb) {
    'use strict';
    return this.model('post').where('tags').in(this.tags, cb);
};

//before saving a post to the mongod convert the markdown to html
PostSchema.pre('save', function (next) {
    'use strict';
    //convert the markdown to html and save it on the model
    this.set('html', markdown.toHTML(this.get('markdown')));
    this.set('created', Date.now());
    next();
});

mongoose.model('Post', PostSchema);