import mongoose from 'mongoose'

const phoneBookSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    position: {
        type: Array,
        default: ['CTV'],
    },
    phone: {
        type: Array,
        required: true,
    },
    email: {
        type: Array,
        required: true,
    },
    zalo: {
        type: String,
    },
    user: {
        type: String,
        default: '',
    },
    _status: {
        type: String,
        enum: ['NORMAL', 'DEACTIVE'],
    },
})

const PhoneBook = mongoose.model('PhoneBook', phoneBookSchema)
export default PhoneBook
