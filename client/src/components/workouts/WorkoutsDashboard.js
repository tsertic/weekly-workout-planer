import React, { useContext, Fragment } from 'react';
import styles from './WorkoutsDashboard.module.css';
import DaysNavigation from './DaysNavigation/DaysNavigation';
import WorkoutsDisplay from './workoutsDisplay/WorkoutsDisplay';
import WorkoutsContext from '../../context/workouts/workoutsContext';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/backdrop/Backdrop';
import AddWorkout from './addWorkout/AddWorkout';
//context

const WorkoutsDashboard = () => {
  const workoutsContext = useContext(WorkoutsContext);

  const {
    showAddNewWorkout,
    toggleShowNewWorkout,
    currentDay,
    daysInWeek
  } = workoutsContext;
  const handleToggleAddWorkout = () => {
    toggleShowNewWorkout();
  };
  return (
    <div className={styles.WorkoutsDashboard}>
      {showAddNewWorkout && (
        <Fragment>
          <Backdrop onClick={handleToggleAddWorkout} />
          <Modal>
            <AddWorkout />
          </Modal>
        </Fragment>
      )}
      <DaysNavigation />
      <div className={styles.right_side}>
        <div className={styles.header}>
          <span className={styles.header_title}>{daysInWeek[currentDay]}</span>{' '}
          <button
            className={styles.addNewWorkoutButton}
            onClick={handleToggleAddWorkout}
          >
            ADD NEW WORKOUT
          </button>
        </div>
        <WorkoutsDisplay />
      </div>
    </div>
  );
};

export default WorkoutsDashboard;
