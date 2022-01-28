import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        creator: {
            type: String,
        },
        shortDescription: {
            type: String,
            default: '',
            max: 50,
        },
        detailDescription: {
            type: String,
            default: '',
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        _status: {
            type: String,
            enum: ['PUBLIC', 'ARCHIVED'],
        },
        url: String,
        background: String,
    },
    { timestamps: true },
)

const Event = mongoose.model('Event', EventSchema)
export default Event
