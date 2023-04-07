const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            req.usuario = payload;
            next();
        }
    });
}

module.exports.admin = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {

        if (err) {
            res.status(401).json({ verified: false });
        } else if (payload._id !== '6408ec9c98faf44f17b1829a') {
            res.status(401).json({ verified: false });
        }
        else {
            next();
        }
    });
}