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
    getWorkouts,
    changeDay
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
      <div className={styles.WorkoutsDashboard__content}>
        <div className={styles.WorkoutsDashboard__header}>
          <button
            onClick={() => changeDay(currentDay - 1)}
            className={[styles.dayBtn, styles.previousDayBtn].join(' ')}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className={styles.WorkoutsDashboard__header__title}>
            {daysInWeek[currentDay]}
          </span>
          <button
            onClick={() => changeDay(currentDay + 1)}
            className={[styles.dayBtn, styles.nextDayBtn].join(' ')}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div
            onClick={handleToggleAddWorkout}
            className={styles.WorkoutsDashboard__AddNewWorkoutButton}
            title="Add new workout"
          >
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <WorkoutsDisplay />
      </div>
    </div>
  );
};

export default WorkoutsDashboard;
