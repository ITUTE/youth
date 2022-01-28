import mongoose from 'mongoose'

const prizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        default: '',
    },
    background: {
        type: String,
        default: '',
    },
    _status: {
        type: String,
        enum: ['PUBLIC', 'ARCHIVED'],
        required: true,
    },
})

const Prize = mongoose.model('Prize', prizeSchema)
export default Prize
