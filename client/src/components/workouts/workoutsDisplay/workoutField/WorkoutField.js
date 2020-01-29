import React, { Fragment } from 'react';
import styles from './WorkoutField.module.css';

const WorkoutField = props => {
  const { name, power, cardio } = props.workout;

  return (
    <div className={styles.WorkoutField}>
      <div className={styles.information}>
        <div className={styles.WorkoutField_box}>
          <p className={styles.WorkoutField_box_title}>name:</p>
          <p className={styles.WorkoutField_box_description}>{name}</p>
        </div>
        {power ? (
          <Fragment>
            <div className={styles.WorkoutField_box}>
              <p className={styles.WorkoutField_box_title}>sets:</p>
              <p className={styles.WorkoutField_box_description}>
                {power.sets}
              </p>
            </div>
            <div className={styles.WorkoutField_box}>
              <p className={styles.WorkoutField_box_title}>reps:</p>
              <p className={styles.WorkoutField_box_description}>
                {power.reps}
              </p>
            </div>
            <div className={styles.WorkoutField_box}>
              <p className={styles.WorkoutField_box_title}>weight:</p>
              <p className={styles.WorkoutField_box_description}>
                {power.weight} kg
              </p>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className={styles.WorkoutField_box}>
              <p className={styles.WorkoutField_box_title}>duration:</p>
              <p className={styles.WorkoutField_box_description}>
                {cardio.duration} [min]
              </p>
            </div>
            <div className={styles.WorkoutField_box}>
              <p className={styles.WorkoutField_box_title}>distance:</p>
              <p className={styles.WorkoutField_box_description}>
                {cardio.distance} [meters]
              </p>
            </div>
          </Fragment>
        )}
      </div>
      <div className={styles.deleteBox}>Delete</div>
    </div>
  );
};

export default WorkoutField;
