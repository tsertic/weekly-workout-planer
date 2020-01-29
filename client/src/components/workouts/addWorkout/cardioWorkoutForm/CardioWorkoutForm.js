import React from 'react';

const CardioWorkoutForm = props => {
  const { cardioWorkout, handleChange, handleFormSubmit } = props;

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Name of workout: </label>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={cardioWorkout.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Duration(min): </label>
        <input
          name="duration"
          type="number"
          value={cardioWorkout.duration}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Distance(m): </label>
        <input
          name="distance"
          type="number"
          value={cardioWorkout.distnce}
          onChange={handleChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default CardioWorkoutForm;
