import React, { Fragment, useContext, useState } from 'react';
import styles from './WorkoutField.module.css';
import WorkoutsContext from '../../../../context/workouts/workoutsContext';

const WorkoutField = props => {
  //context
  const workoutsContext = useContext(WorkoutsContext);
  const { deleteWorkout } = workoutsContext;
  const { name, power, cardio, _id } = props.workout;

  //state
  const [editing, setEditing] = useState(false);
  const [workout, setWorkout] = useState(props.workout);
  const toggleEditing = () => {
    setEditing(!editing);
  };
  const handleInputChange = e => {
    //TODO-do it more elegant
    if (power) {
      let updatingWorkout = {
        name: workout.name,
        sets: workout.power.sets,
        reps: workout.power.reps,
        weight: workout.power.weight
      };
      updatingWorkout[e.target.name] = e.target.value;
      const updatedPower = {
        sets: updatingWorkout.sets,
        reps: updatingWorkout.reps,
        weight: updatingWorkout.weight
      };
      setWorkout({
        ...workout,
        name: updatingWorkout.name,
        power: updatedPower
      });
    }
  };

  return (
    <div className={styles.WorkoutField}>
      <div className={styles.WorkoutField__information}>
        <div className={styles.WorkoutField__box}>
          <p className={styles.WorkoutField__title}>name:</p>
          {editing ? (
            <input
              type="text"
              value={workout.name}
              name="name"
              onChange={handleInputChange}
              className={styles.WorkoutField__input}
            />
          ) : (
            <p className={styles.WorkoutField__description}>{name}</p>
          )}
        </div>
        {power ? (
          <Fragment>
            <div className={styles.WorkoutField__box}>
              <p className={styles.WorkoutField__title}>sets:</p>
              {editing ? (
                <input
                  type="number"
                  value={workout.power.sets}
                  name="sets"
                  onChange={handleInputChange}
                  className={styles.WorkoutField__input}
                />
              ) : (
                <p className={styles.WorkoutField__description}>{power.sets}</p>
              )}
            </div>
            <div className={styles.WorkoutField__box}>
              <p className={styles.WorkoutField__title}>reps:</p>
              {editing ? (
                <input
                  type="number"
                  value={workout.power.reps}
                  name="reps"
                  onChange={handleInputChange}
                  className={styles.WorkoutField__input}
                />
              ) : (
                <p className={styles.WorkoutField__description}>{power.reps}</p>
              )}
            </div>
            <div className={styles.WorkoutField__box}>
              <p className={styles.WorkoutField__title}>weight:</p>
              {editing ? (
                <input
                  type="number"
                  value={workout.power.weight}
                  name="weight"
                  onChange={handleInputChange}
                  className={styles.WorkoutField__input}
                />
              ) : (
                <p className={styles.WorkoutField__description}>
                  {power.weight} kg
                </p>
              )}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className={styles.WorkoutField__box}>
              <p className={styles.WorkoutField__title}>duration:</p>
              {editing ? (
                <input
                  type="number"
                  value={workout.cardio.duration}
                  name="duration"
                  onChange={handleInputChange}
                  className={styles.WorkoutField__input}
                />
              ) : (
                <p className={styles.WorkoutField__description}>
                  {cardio.duration} [min]
                </p>
              )}
            </div>
            <div className={styles.WorkoutField__box}>
              <p className={styles.WorkoutField__title}>distance:</p>
              {editing ? (
                <input
                  type="number"
                  value={workout.cardio.distance}
                  name="distance"
                  onChange={handleInputChange}
                  className={styles.WorkoutField__input}
                />
              ) : (
                <p className={styles.WorkoutField__description}>
                  {cardio.distance} [meters]
                </p>
              )}
            </div>
          </Fragment>
        )}
      </div>
      <div
        className={styles.WorkoutField__editBox}
        onClick={() => toggleEditing()}
      >
        <i className="fas fa-edit"></i>
      </div>
      <div
        className={styles.WorkoutField__deleteBox}
        onClick={() => deleteWorkout(_id)}
      >
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default WorkoutField;
