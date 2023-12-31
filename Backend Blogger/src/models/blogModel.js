/* eslint-disable no-undef */
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tags: {
        type: [String],
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: [String],
    },
    deletedAt: {
        type: Date,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: null
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    blogImage:{
        type:String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)