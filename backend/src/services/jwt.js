export const authenToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization']
    console.log(authorizationHeader)
    const token = authorizationHeader.split(' ')[1]
    if (!token) res.sendStatus(401)
    jwt.vertify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, data) => {
        console.log({ err, data })
        if (err) res.status(403).json({ data: err })
        next()
    })
}
