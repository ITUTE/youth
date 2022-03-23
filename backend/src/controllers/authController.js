import Token from '../models/Token.js'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const handleRefreshToken = async (req, res) => {
    const refreshToken = req.body.token
    if (!refreshToken) res.sendStatus(401)
    const checkRT = await Token.findOne({ refreshToken })
    if (!checkRT) res.sendStatus(403)

    jwt.verify(
        refreshToken,
        process.env.ACCESS_TOKEN_SECRET_KEY,
        (err, data) => {
            if (err)
                res.status(403).json({
                    status: 'err',
                    data: err,
                })
            const { iat, exp, ...rest } = data
            const accessToken = jwt.sign(
                rest,
                process.env.ACCESS_TOKEN_SECRET_KEY,
                {
                    expiresIn: '30m',
                },
            )
            res.json({
                status: 'refresh token sucess',
                data: { accessToken },
            })
        },
    )
}

export const logout = async (req, res) => {
    const refreshToken = req.body.token
    await Token.deleteOne({ refreshToken })
    res.status(200).json({ status: 'Delete success' })
}

export const login = async (req, res) => {
    const { email, name, imageUrl } = req.body

    const accessToken = jwt.sign(
        { fullname: name, username, email, avatar: imageUrl },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
            expiresIn: '60s',
        },
    )

    const studentId = email.split('@')[0]

    const refreshToken = jwt.sign(
        {
            fullname: name,
            username: `${studentId}_${name.replaceAll(' ', '_')}`,
            email,
            avatar: imageUrl,
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
            expiresIn: '7d',
        },
    )

    const token = new Token({
        refreshToken,
    })

    token.save()

    let user = await User.findOne({ email })

    if (!user) {
        const newUser = new User({
            fullname: name,
            email,
            avatar: imageUrl,
        })
        user = await newUser.save()
    }

    res.status(200).json({
        status: 'success',
        data: { accessToken, refreshToken, user },
    })
}
