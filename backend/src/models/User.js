import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    position: {
        type: Array,
        //'CTV' 'BCH'
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
