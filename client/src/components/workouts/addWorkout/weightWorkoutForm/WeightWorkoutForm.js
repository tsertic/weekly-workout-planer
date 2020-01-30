import React from 'react';
import styles from './WeightWorkoutForm.module.css';
const WeightWorkoutForm = props => {
  const { weightWorkout, handleChange, handleFormSubmit } = props;

  return (
    <form onSubmit={handleFormSubmit} className={styles.WeightWorkoutForm}>
      <p className={styles.WeightWorkoutForm__title}>Weight Workout</p>
      <div className={styles.inputFields}>
        <div className={styles.inputFields__box}>
          <label>Name: </label>
          <input
            className={styles.input}
            name="name"
            type="text"
            value={weightWorkout.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputFields__box}>
          <label>Sets: </label>
          <input
            className={styles.input}
            name="sets"
            type="number"
            placeholder="sets"
            value={weightWorkout.sets}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputFields__box}>
          <label>Reps: </label>
          <input
            className={styles.input}
            name="reps"
            type="number"
            value={weightWorkout.reps}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputFields__box}>
          <label>Weight [kg]: </label>
          <input
            className={styles.input}
            name="weight"
            type="number"
            placeholder="weight(kg)"
            value={weightWorkout.weight}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.btn}>Add Workout</div>
    </form>
  );
};

export default WeightWorkoutForm;
