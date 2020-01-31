import React, { useContext, useEffect, Fragment } from 'react';
import styles from './WorkoutsDashboard.module.css';
import DaysNavigation from './DaysNavigation/DaysNavigation';
import WorkoutsDisplay from './workoutsDisplay/WorkoutsDisplay';
import WorkoutsContext from '../../context/workouts/workoutsContext';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/backdrop/Backdrop';
import AddWorkout from './addWorkout/AddWorkout';
import AuthContext from '../../context/auth/authContext';
//context

const WorkoutsDashboard = () => {
  const workoutsContext = useContext(WorkoutsContext);
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;
  const {
    showAddNewWorkout,
    toggleShowNewWorkout,
    currentDay,
    daysInWeek,
    getWorkouts
  } = workoutsContext;

  useEffect(() => {
    loadUser();
    getWorkouts();
    //eslint-disable-next-line
  }, []);

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
          <span className={styles.header_title}>{daysInWeek[currentDay]}</span>
          <div
            onClick={handleToggleAddWorkout}
            className={styles.AddNewWorkoutButton}
            title="Add new workout"
          >
            <i class="fas fa-plus"></i>
          </div>
        </div>
        <WorkoutsDisplay />
      </div>
    </div>
  );
};

export default WorkoutsDashboard;
