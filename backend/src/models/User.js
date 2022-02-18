import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        min: 4,
        required: true,
        unique: true,
    },
    position: {
        type: Array,
        default: ['CTV'],
    },
    avatar: {
        type: String,
        default: '',
    },
    _status: {
        type: String,
        default: 'NORMAL',
        enum: ['NORMAL', 'DEACTIVE'],
    },
})

const User = mongoose.model('User', UserSchema)
export default User
