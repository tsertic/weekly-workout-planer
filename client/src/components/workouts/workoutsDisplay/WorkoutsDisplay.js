import React, { useContext } from 'react';
import styles from './WorkoutsDisplay.module.css';
import WorkoutsContext from '../../../context/workouts/workoutsContext';
import WorkoutField from './workoutField/WorkoutField';

const WorkoutsDisplay = () => {
  const workoutsContext = useContext(WorkoutsContext);
  const { workouts, currentDay } = workoutsContext;

  const renderWorkouts = workouts.map(workout => {
    if (workout.dayInWeek === currentDay) {
      return <WorkoutField workout={workout} />;
    }
  });

  return <div className={styles.WorkoutsDisplay}>{renderWorkouts}</div>;
};

export default WorkoutsDisplay;
