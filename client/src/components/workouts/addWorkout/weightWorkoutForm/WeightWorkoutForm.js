import React from 'react';
import styles from './WeightWorkoutForm.module.css';
const WeightWorkoutForm = props => {
  const { weightWorkout, handleChange, handleFormSubmit } = props;
  console.log(weightWorkout);
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
        <div className={styles.inputFields__box}>
          <label>Day in Week: </label>
          <select onChange={handleChange} name="dayInWeek">
            <option value={1}>Mon</option>
            <option value={2}>Tue</option>
            <option value={3}>Wed</option>
            <option value={4}>Thu</option>
            <option value={5}>Fri</option>
            <option value={6}>Sat</option>
            <option value={0}>Sun</option>
          </select>
        </div>
      </div>

      <button className={styles.btn}>Add Workout</button>
    </form>
  );
};

export default WeightWorkoutForm;
