const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    const token = req.headers.authorization;

    try {
        jwt.verify(token, "masai", (err, decoded) => {
            if (decoded) {
                const { userId, username } = decoded;
                console.log(decoded)

                req.username = username;

                next();
            }
        });
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = {
    auth
};
