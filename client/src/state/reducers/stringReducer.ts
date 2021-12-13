import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface TableData {
  id: string;
  fromAddress: string;
  createdString: string;
  createdAt: string;
}

interface StringState {
  loading: boolean;
  error: string | null;
  data: TableData[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: StringState = initialState,
  action: Action
): StringState => {
  switch (action.type) {
    case ActionType.FETCH_STRINGS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_STRINGS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_STRINGS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
