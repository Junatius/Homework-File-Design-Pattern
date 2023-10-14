const jwt = require('jsonwebtoken');
const { key } = require('../config');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  const tokenValue = token.split(' ')[1];

    try {
        const decoded = jwt.verify(tokenValue, key.publicKey, { algorithms: ['RS256'] });
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error('Token Verification Error:', error);
        res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

const checkUserRole = (requiredRole) => (req, res, next) => {
    // Check if a specific role is required
    if (requiredRole && req.user.role !== requiredRole) {
        return res.status(403).json({ message: `Forbidden - User does not have ${requiredRole} privileges` });
    }

    next();
};

module.exports = {
    authenticateUser,
    checkUserRole
}
