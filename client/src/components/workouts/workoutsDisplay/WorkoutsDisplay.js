import React, { useContext } from 'react';
import styles from './WorkoutsDisplay.module.css';
import WorkoutsContext from '../../../context/workouts/workoutsContext';
import WorkoutField from './workoutField/WorkoutField';

const WorkoutsDisplay = () => {
  //context
  const workoutsContext = useContext(WorkoutsContext);
  const { workouts, currentDay } = workoutsContext;

  //filter workouts only for selected day
  const filtredWorkouts = workouts.filter(
    workout => workout.dayInWeek === currentDay
  );

  const renderWorkouts = filtredWorkouts.map(workout => {
    return <WorkoutField workout={workout} key={workout._id} />;
  });

  return <div className={styles.WorkoutsDisplay}>{renderWorkouts}</div>;
};

export default WorkoutsDisplay;
