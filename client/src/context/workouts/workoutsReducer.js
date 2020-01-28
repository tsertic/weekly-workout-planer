import { workoutsTypes } from './../types';

export default (state, action) => {
  switch (action.type) {
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
