import React from 'react';
import styles from './WorkoutField.module.css';

const WorkoutField = props => {
  const { name, sets, reps, weight } = props.workout;
  return (
    <div className={styles.WorkoutField}>
      <div className={styles.information}>
        <div className={styles.WorkoutField_title}> {name} </div>
        <div className={styles.WorkoutField_sets}>Sets: {sets}</div>
        <div className={styles.WorkoutField_reps}>Reps: {reps}</div>
        <div className={styles.WorkoutField_weight}>Weight: {weight} kg</div>
      </div>
      <div className={styles.deleteBox}>Delete</div>
    </div>
  );
};

export default WorkoutField;
