const express = require('express');
const router = express.Router();
const auth = require('./../middlewares/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('./../models/User');
//@route GET /api/auth
//@desc retrive user data except password
//@type PRIVATE

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    return res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Error with ' });
  }
});

//@route POST /api/auth
//@desc Log in user and get token
//@type PUBLIC

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors) res.status(422).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) res.status(401).json({ msg: 'Invalid email' });

      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) res.status(401).json({ msg: 'Invalid password' });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.json(token);
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(401).json({ msg: 'Error with loging in' });
    }
  }
);

module.exports = router;
