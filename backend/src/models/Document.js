import mongoose from 'mongoose'

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    docType: {
        type: String,
        enum: ['HSV', 'DTN', 'LT'],
    },
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    uploader: {
        type: String,
        required: true,
    },
    _status: {
        type: String,
        enum: ['PUBLIC', 'PRIVATE', 'SECRET'],
    },
})

const Document = mongoose.model('Document', documentSchema)
export default Document
