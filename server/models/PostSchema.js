var mongoose = require('mongoose'),
    markdown = require('markdown').markdown;

// Post depends on the tag schema tos exist
var lower = function(string) {
    'use strict';
    return string.toLowerCase();
};

//Tag a brief tag for a post
var TagSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true,
        set: lower,
        trim: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});
TagSchema.methods = {
    insertPost : function(postObjectId){
        'use strict';
        var posts = this.get('posts');
        posts.push(postObjectId);
    }
};

//Post input a post can have multiple tags
var PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    callout: {
        type: String
    },
    tags: [{
        type: String,
        ref: 'Tag'
    }],
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
    this.set('meta.created', Date.now());
    next();
});

//TODO
//presaving tags
//for each tag in list
//if tag in list dne exist
//make a new tag and add the object id to the tag
//if tag does exist
//add the object id to the tag

//get posts related to a tag
//find post
//then for each post in tag collection get it


mongoose.model('Tag', TagSchema);
mongoose.model('Post', PostSchema);