import React, { useState } from 'react';

const AddWorkout = props => {
  const [workoutType, setWorkoutType] = useState(null);
  const [cardioWorkout, setCardioWorkout] = useState({
    name: '',
    duration: 0,
    distance: 0
  });
  const [weightWorkout, setWeightWorkout] = useState({
    name: '',
    sets: 0,
    reps: 0,
    weight: 0
  });

  const handleChange = e => {
    console.log(workoutType);
    if (workoutType === 'cardio') {
      setCardioWorkout({ ...cardioWorkout, [e.target.name]: e.target.value });
    } else if (workoutType === 'weight') {
      setWeightWorkout({ ...weightWorkout, [e.target.name]: e.target.value });
    }
  };

  const changeWorkoutType = e => {
    setWorkoutType(e.target.value);
  };

  return (
    <div>
      Add Workout
      <div>
        <p>Select type of Workout: </p>
        <button onClick={changeWorkoutType} value="cardio">
          Cardio
        </button>
        <button onClick={changeWorkoutType} value="weight">
          weight
        </button>
      </div>
      <div>
        <form>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={weightWorkout.name}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
