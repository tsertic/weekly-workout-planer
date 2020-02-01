import React, { Fragment, useContext } from 'react';
import styles from './WorkoutField.module.css';
import WorkoutsContext from '../../../../context/workouts/workoutsContext';

const WorkoutField = props => {
  const workoutsContext = useContext(WorkoutsContext);
  const { deleteWorkout } = workoutsContext;
  const { name, power, cardio, _id } = props.workout;

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
      <div className={styles.deleteBox} onClick={() => deleteWorkout(_id)}>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default WorkoutField;
