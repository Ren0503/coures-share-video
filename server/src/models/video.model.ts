import { Schema, model } from 'mongoose'

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    views: {
        type: Number,
        default: 0,
    }
}, {
    versionKey: false,
    timestamps: true,
})

export default model('Video', videoSchema)
