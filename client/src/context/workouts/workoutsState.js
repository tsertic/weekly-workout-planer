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
  //update workout

  const updateWorkout = async workout => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/workouts/${workout._id}`,
        workout,
        config
      );

      dispatch({ type: workoutsTypes.UPDATE_WORKOUT, payload: res.data });
    } catch (err) {
      console.log(err.response.msg);
    }
  };

  //change day
  const changeDay = day => {
    let newDay = day;
    if (day > 6) newDay = 0;
    if (day < 0) newDay = 6;
    dispatch({ type: workoutsTypes.CHANGE_DAY, payload: newDay });
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
        deleteWorkout,
        updateWorkout
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsState;
