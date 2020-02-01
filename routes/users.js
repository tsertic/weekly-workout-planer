const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('./../models/User');

const jwtSecret = process.env.jwtSecret || config.get('jwtSecret');

//@route POST /api/users
//@desc Register a user
//@type PUBLIC

router.post(
  '/',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 char long').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (user) res.status(401).json({ msg: 'Email alredy exists' });

      //gen salt and hash password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashPassword
      });

      await newUser.save();

      //gen token and send to user

      const payload = {
        user: {
          id: newUser.id
        }
      };

      jwt.sign(payload, jwtSecret, { expiresIn: 5000 }, (err, token) => {
        if (err) throw err;
        return res.json(token);
      });
    } catch (err) {
      console.error(err.message);
      return res.status(401).json({ msg: 'Error with creating user' });
    }
  }
);

module.exports = router;
