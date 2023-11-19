const jwt = require('jsonwebtoken');

const loginMiddleware = async (req, res, next) => {
    try {
        let { authorization: token } = req.headers || {};
        if (!token) {
            return res.status(404).send({
                success: false,
                error: "Token not found"
            })
        }

        if (!token.startsWith('Bearer')) {
            return res.status(404).send({
                success: false,
                error: "Invalid Token"
            })
        }

        token = (token.split(" ") || [])[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (decode) {
            req.body.userId = decode.id
            next();
        }
    } catch (error) {
        return res.status(404).send({
            success: false,
            error: error.error || error.message
        })
    }
}

module.exports = loginMiddleware