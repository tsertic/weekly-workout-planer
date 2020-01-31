import React, { useState, useContext } from 'react';
import WeightWorkoutForm from './weightWorkoutForm/WeightWorkoutForm';
import CardioWorkoutForm from './cardioWorkoutForm/CardioWorkoutForm';
import styles from './AddWorkout.module.css';
import WorkoutsContext from '../../../context/workouts/workoutsContext';

const AddWorkout = props => {
  const workoutsContext = useContext(WorkoutsContext);

  const { addWorkout, toggleShowNewWorkout } = workoutsContext;

  const [workoutType, setWorkoutType] = useState(null);
  const [cardioWorkout, setCardioWorkout] = useState({
    name: '',
    duration: 0,
    distance: 0,
    dayInWeek: 0
  });
  const [weightWorkout, setWeightWorkout] = useState({
    name: '',
    sets: 0,
    reps: 0,
    weight: 0,
    dayInWeek: 0
  });

  const handleChange = e => {
    console.log(workoutType);
    if (workoutType === 'cardio') {
      setCardioWorkout({ ...cardioWorkout, [e.target.name]: e.target.value });
    } else if (workoutType === 'weight') {
      setWeightWorkout({ ...weightWorkout, [e.target.name]: e.target.value });
    }
  };

  //switch between cardio and weight workout form in add new workout
  const changeWorkoutType = e => {
    setWorkoutType(e.target.value);
  };

  //submiting new workout
  const handleFormSubmit = e => {
    e.preventDefault();
    //check if cardio or weight workout are submited
    if (workoutType === 'weight') {
      const newWeightWorkout = {
        name: weightWorkout.name,
        power: {
          sets: weightWorkout.sets,
          reps: weightWorkout.reps,
          weight: weightWorkout.weight
        },
        dayInWeek: Number(weightWorkout.dayInWeek)
      };

      addWorkout(newWeightWorkout);
      toggleShowNewWorkout();
    }
    if (workoutType === 'cardio') {
      const newCardioWorkout = {
        name: cardioWorkout.name,
        cardio: {
          duration: cardioWorkout.duration,
          distance: cardioWorkout.distance
        },
        dayInWeek: Number(cardioWorkout.dayInWeek)
      };
      addWorkout(newCardioWorkout);
      toggleShowNewWorkout();
    }
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
