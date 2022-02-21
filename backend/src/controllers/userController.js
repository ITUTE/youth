import User from '../models/User'

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
        const { updateAt, ...data } = user._doc
        res.status(200).json({
            status: 'get user success!',
            data,
        })
    } catch (err) {
        res.status(500).json({ error })
    }
}
