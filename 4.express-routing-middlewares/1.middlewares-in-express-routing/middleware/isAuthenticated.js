// mimicking authentication

const isAuthenticated = (req, res, next) => {
    const isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.json({
            message: "Unauthorized access"
        });
    };
};

module.exports = isAuthenticated;