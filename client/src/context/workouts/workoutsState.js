import React, { useReducer } from 'react';
import WorkoutsContext from './workoutsContext';
import workoutsReducer from './workoutsReducer';

import { workoutsTypes } from './../types';

const WorkoutsState = props => {
  const initialState = {
    workouts: [
      {
        id: 1,
        name: 'bench press',
        description: 'Pushin bar up',
        power: { sets: 3, reps: 6, weight: 43 },
        dayInWeek: 1
      },
      {
        id: 2,
        name: 'pull up',
        description: 'Pushin bar up',
        power: { sets: 3, reps: 3, weight: 44 },
        dayInWeek: 5
      },
      {
        id: 3,
        name: 'leg extension',
        description: 'Pushin bar up',
        cardio: {
          duration: 0,
          distance: 24
        },
        dayInWeek: 5
      }
    ],
    showAddNewWorkout: false,
    daysInWeek: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    currentDay: new Date().getDay()
  };

  const [state, dispatch] = useReducer(workoutsReducer, initialState);

  //add workout

  const addWorkout = workout => {
    dispatch({ type: workoutsTypes.ADD_WORKOUT, payload: workout });
  };

  //delete workout

  //edit workout

  //change day

  const changeDay = day => {
    dispatch({ type: workoutsTypes.CHANGE_DAY, payload: day });
  };
  //add new workout modal

  const toggleShowNewWorkout = () => {
    dispatch({ type: workoutsTypes.TOGGLE_NEW_WORKOUT });
  };

  return (
    <WorkoutsContext.Provider
      value={{
        workouts: state.workouts,
        currentDay: state.currentDay,
        showAddNewWorkout: state.showAddNewWorkout,
        daysInWeek: state.daysInWeek,
        toggleShowNewWorkout,
        changeDay
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsState;
