import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const fetchStrings = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_STRINGS,
    });

    try {
      const { data } = await axios.get('http://localhost/api/strings');

      dispatch({ type: ActionType.FETCH_STRINGS_SUCCESS, payload: data });
    } catch (err: any) {
      dispatch({ type: ActionType.FETCH_STRINGS_ERROR, payload: err.message });
    }
  };
};
