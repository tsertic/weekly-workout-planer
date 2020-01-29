import React, { useContext } from 'react';
import styles from './DaysNavigation.module.css';
import WorkoutsContext from './../../../context/workouts/workoutsContext';
const DaysNavigation = () => {
  const workoutsContext = useContext(WorkoutsContext);

  const { changeDay, daysInWeek } = workoutsContext;

  const dayInWeak = [0, 1, 2, 3, 4, 5, 6];

  const handleChangeDay = day => {
    changeDay(day);
  };

  const renderDays = dayInWeak.map(day => {
    return (
      <div
        className={styles.DayButton}
        onClick={handleChangeDay.bind(this, day)}
      >
        {daysInWeek[day].slice(0, 3).toUpperCase()}
      </div>
    );
  });

  return <div className={styles.DaysNavigation}>{renderDays}</div>;
};

export default DaysNavigation;
