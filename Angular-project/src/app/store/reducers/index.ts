import { Action, createReducer, createSelector, on, State } from '@ngrx/store';

import * as engineActions from '../actions/engines.actions';
import { OemElement } from '../../interfaces/oem-elemnt';

export interface EnginesState {
  fetchStatus?: 'loading' | 'loaded' | 'error';
  fetchError?: Error;
  items: OemElement[];
}

export interface AppState {
  engines: EnginesState;
}

const initialState: EnginesState = {
  items: []
};

const enginesReducerBuilder = createReducer(
  initialState,
  on(engineActions.FetchEnginesRequest, (state) => ({
    ...state,
    fetchStatus: 'loading',
    items: []
  })),

  on(engineActions.FetchEnginesSuccess, (state, action) => ({
    ...state,
    fetchStatus: 'loaded',
    items: action.engines.items
  })),

  on(engineActions.FetchEnginesFailure, (state, action) => ({
    ...state,
    fetchStatus: 'error',
    items: [],
    fetchError: action.error
  }))
);

export function enginesReducer(state: EnginesState | undefined, action: Action) {
  return enginesReducerBuilder(state, action);
}

export const selectEnginesState = (state: AppState) => {
  return state.engines;
};

export const enginesSelector = createSelector(
  selectEnginesState,
  (engines) => engines.items
);

export const enginesLoadStatusSelector = createSelector(
  selectEnginesState,
  (engines) => engines.fetchStatus
);
