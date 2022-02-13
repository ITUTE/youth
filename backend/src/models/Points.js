import mongoose from 'mongoose'

const pointsSchema = new mongoose.Schema({
    _id: {
        type: Object,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    studentID: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    event: {
        type: Object,
        required: true,
        Ref: EVENT,
    },
    points: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        default: '',
        
    },
    _status: {
        type: String,
        enum: ['PUBLIC', 'ARCHIVED'],
        required: true,
    },
})

const Points = mongoose.model('Points', pointsSchema)
export default Award
