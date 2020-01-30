import React, { useState } from 'react';
import WeightWorkoutForm from './weightWorkoutForm/WeightWorkoutForm';
import CardioWorkoutForm from './cardioWorkoutForm/CardioWorkoutForm';
import styles from './AddWorkout.module.css';
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
  const handleFormSubmit = e => {
    e.preventDefault();
    alert('form submited');
  };
  return (
    <div className={styles.AddWorkout}>
      <div className={styles.AddWorkout__typeBox}>
        <p className={styles.AddWorkout__typeBox__title}>
          Select type of Workout:{' '}
        </p>
        <div className={styles.AddWorkout__typeBox__buttonContainer}>
          <button
            onClick={changeWorkoutType}
            value="cardio"
            className={styles.type__btn__cardio}
          >
            Cardio
          </button>
          <button
            onClick={changeWorkoutType}
            value="weight"
            className={styles.type__btn__weight}
          >
            Weight
          </button>
        </div>
      </div>
      <div>
        {workoutType === null ? (
          ' '
        ) : workoutType === 'weight' ? (
          <WeightWorkoutForm
            weightWorkout={weightWorkout}
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
          />
        ) : (
          <CardioWorkoutForm
            cardioWorkout={cardioWorkout}
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default AddWorkout;
