const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  power: {
    sets: {
      type: Number
    },
    reps: {
      type: Number
    },
    weight: {
      type: Number
    }
  },
  dayInWeek: {
    type: Number,
    default: 0
  },
  cardio: {
    duration: {
      type: Number
    },
    distance: {
      type: Number
    }
  }
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;
