import mongoose from 'mongoose'

const TokenSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
        required: true,
        unique: true,
    },
})

const Token = mongoose.model('Token', TokenSchema)
export default Token
