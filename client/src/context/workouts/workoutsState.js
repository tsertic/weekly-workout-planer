import React, { useReducer } from 'react';
import WorkoutsContext from './workoutsContext';
import workoutsReducer from './workoutsReducer';
import axios from 'axios';
import { workoutsTypes } from './../types';

const WorkoutsState = props => {
  const initialState = {
    workouts: [],
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

  //get workouts

  const getWorkouts = async () => {
    try {
      const res = await axios.get('/api/workouts');
      dispatch({
        type: workoutsTypes.GET_WORKOUTS,
        payload: res.data
      });
    } catch (err) {
      /* dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      }); */
    }
  };

  //add workout

  const addWorkout = async workout => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/workouts', workout, config);
      console.log('response od addWorkout', res);
      dispatch({ type: workoutsTypes.ADD_WORKOUT, payload: res.data });
    } catch (err) {
      /* dispatch({ type: CONTACT_ERROR, payload: err.response.msg }); */
      console.log(err.response.msg);
    }
  };

  //delete workout
  const deleteWorkout = async id => {
    try {
      await axios.delete(`/api/workouts/${id}`);
      dispatch({
        type: workoutsTypes.DELETE_WORKOUT,
        payload: id
      });
    } catch (err) {
      console.log(err.response.msg);
    }
  };
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
        changeDay,
        addWorkout,
        getWorkouts,
        deleteWorkout
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsState;
