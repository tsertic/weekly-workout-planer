const jwt = require('jsonwebtoken');
const config = require('config');

const auth = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) res.status(401).json({ msg: 'no token' });

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;

    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Error retriving token' });
  }
};

module.exports = auth;
