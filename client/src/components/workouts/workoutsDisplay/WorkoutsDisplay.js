import React, { useContext } from 'react';
import styles from './WorkoutsDisplay.module.css';
import WorkoutsContext from '../../../context/workouts/workoutsContext';
import WorkoutField from './workoutField/WorkoutField';

const WorkoutsDisplay = () => {
  const workoutsContext = useContext(WorkoutsContext);
  const { workouts, currentDay } = workoutsContext;

  const filtredWorkouts = workouts.filter(
    workout => workout.dayInWeek === currentDay
  );

  const renderWorkouts = filtredWorkouts.map(workout => {
    return <WorkoutField workout={workout} key={workout._id} />;
  });

  return <div className={styles.WorkoutsDisplay}>{renderWorkouts}</div>;
};

export default WorkoutsDisplay;
