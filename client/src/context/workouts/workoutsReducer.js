import { workoutsTypes } from './../types';

export default (state, action) => {
  switch (action.type) {
    case workoutsTypes.GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload
      };
    case workoutsTypes.ADD_WORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.payload]
      };
    case workoutsTypes.DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          workout => workout._id !== action.payload
        )
      };
    case workoutsTypes.CHANGE_DAY:
      return {
        ...state,
        currentDay: action.payload
      };
    case workoutsTypes.TOGGLE_NEW_WORKOUT:
      return {
        ...state,
        showAddNewWorkout: !state.showAddNewWorkout
      };
    default:
      return state;
  }
};
