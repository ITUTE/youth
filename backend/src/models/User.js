import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
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
        enum: ['NORMAL', 'DEACTIVE'],
    },
})

const User = mongoose.modle('User', UserSchema)
export default User
