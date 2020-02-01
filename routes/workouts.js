const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Workout = require('./../models/Workout');
const auth = require('./../middlewares/auth');

//@route GET /api/workouts
//@desc Get workouts
//@type PRIVATE

router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });

    res.json(workouts);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Error with ' });
  }
});

//@route POST /api/workouts
//@desc Create workout
//@type PRIVATE

router.post(
  '/',
  [auth, [check('name', 'Name of workout is required').notEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

    const { name, description, power, cardio, dayInWeek } = req.body;

    try {
      let newWorkout = {
        user: req.user.id,
        name
      };
      if (description) newWorkout.description = description;
      if (power) newWorkout.power = power;
      if (cardio) newWorkout.cardio = cardio;
      if (dayInWeek) newWorkout.dayInWeek = dayInWeek;

      newWorkout = new Workout(newWorkout);

      const savedNewWorkout = await newWorkout.save();

      res.json(savedNewWorkout);
    } catch (err) {
      console.error(err.message);
      return res.status(401).json({ msg: 'Error with ' });
    }
  }
);

//@route PUT /api/workouts
//@desc Update workout
//@type PRIVATE

router.put('/:id', auth, async (req, res) => {
  const { name, description, cardio, power } = req.body;

  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) res.status(401).json({ msg: 'Invalid path' });

    if (workout.user.toString() != req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    let updatedWorkout = {};

    if (name) updatedWorkout.name = name;
    if (description) updatedWorkout.description = description;
    if (cardio) updatedWorkout.cardio = cardio;
    if (power) updatedWorkout.power = power;

    const responseWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { $set: updatedWorkout },
      { new: true }
    );

    res.json(responseWorkout);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Error with ' });
  }
});

//@route DELETE /api/workouts
//@desc Delete workout
//@type PRIVATE

router.delete('/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) res.status(401).json({ msg: 'Invalid path' });

    if (workout.user.toString() != req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Workout.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Workout deleted' });
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Error with ' });
  }
});

module.exports = router;
