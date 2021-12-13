import { ActionType } from '../action-types';
import { TableData } from '../reducers/stringReducer';

interface FetchStringsAction {
  type: ActionType.FETCH_STRINGS;
}

interface FetchStringsActionSuccess {
  type: ActionType.FETCH_STRINGS_SUCCESS;
  payload: TableData[];
}

interface FetchStringsActionError {
  type: ActionType.FETCH_STRINGS_ERROR;
  payload: string;
}

export type Action =
  | FetchStringsAction
  | FetchStringsActionSuccess
  | FetchStringsActionError;
