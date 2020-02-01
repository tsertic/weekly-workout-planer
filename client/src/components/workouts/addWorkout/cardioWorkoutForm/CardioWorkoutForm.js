import React from 'react';
import styles from './CardioWorkoutForm.module.css';
const CardioWorkoutForm = props => {
  const { cardioWorkout, handleChange, handleFormSubmit } = props;

  return (
    <form onSubmit={handleFormSubmit} className={styles.CardioWorkoutForm}>
      <p className={styles.CardioWorkoutForm__title}>Cardio Workout</p>
      <div className={styles.inputFields}>
        <div className={styles.inputFields__box}>
          <label>Name: </label>
          <input
            className={styles.input}
            name="name"
            type="text"
            value={cardioWorkout.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputFields__box}>
          <label>Distance: </label>
          <input
            className={styles.input}
            name="distance"
            type="number"
            placeholder="distance"
            value={cardioWorkout.distance}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputFields__box}>
          <label>Duration: </label>
          <input
            className={styles.input}
            name="duration"
            type="number"
            value={cardioWorkout.duration}
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

export default CardioWorkoutForm;
