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
        sets: '4',
        reps: '8',
        weight: '50',
        type: 'power',
        dayInWeek: 1
      },
      {
        id: 2,
        name: 'pull up',
        description: 'Pushin bar up',
        sets: '4',
        reps: '8',
        weight: '50',
        type: 'power',
        dayInWeek: 5
      },
      {
        id: 3,
        name: 'leg extension',
        description: 'Pushin bar up',
        sets: '4',
        reps: '8',
        weight: '50',
        type: 'power',
        dayInWeek: 5
      }
    ],
    showAddNewWorkout: false,
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
        toggleShowNewWorkout,
        changeDay
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsState;
