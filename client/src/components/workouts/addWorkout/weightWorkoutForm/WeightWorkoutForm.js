import React from 'react';

const WeightWorkoutForm = props => {
  const { weightWorkout, handleChange, handleFormSubmit } = props;

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Name of workout: </label>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={weightWorkout.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Number of sets: </label>
        <input
          name="sets"
          type="number"
          placeholder="sets"
          value={weightWorkout.sets}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Number of reps: </label>
        <input
          name="reps"
          type="number"
          value={weightWorkout.reps}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Weight: </label>
        <input
          name="weight"
          type="number"
          placeholder="weight(kg)"
          value={weightWorkout.weight}
          onChange={handleChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default WeightWorkoutForm;
