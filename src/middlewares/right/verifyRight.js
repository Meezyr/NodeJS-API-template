const verifyRight = (right = null) => {
    return (req, res, next) => {
        if (!right) {
            return res.status(500).json({message: 'Rights are not provided.'});
        }

        if (!req.user) {
            return res.status(400).json({message: 'A problem has occurred, the user is not authenticated.'});
        }

        // Get all user rights
        let userRights = [];

        if (userRights.includes(right)) {
            return next();
        } else {
            return res.status(401).json({message: 'Unauthorized user, insufficient roles.'});
        }
    }
};

module.exports = verifyRight;