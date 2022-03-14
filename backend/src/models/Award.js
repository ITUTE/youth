import mongoose from 'mongoose'

const awardSchema = new mongoose.Schema({
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
    url: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: '',
    },
    prize: {
        type: Object,
        required: true,
        Ref: PRIZE,
    },
    _status: {
        type: String,
        enum: ['PUBLIC', 'ARCHIVED'],
        required: true,
    },
})

const Award = mongoose.model('Award', awardSchema)
export default Award
