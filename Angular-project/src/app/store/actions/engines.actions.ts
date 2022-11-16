import { createAction, props } from '@ngrx/store';
import { OemElement } from '../../interfaces/oem-elemnt';

export const FetchEnginesRequest = createAction(
  '[Engines] fetch enginess request',
);

export const FetchEnginesSuccess = createAction(
  '[Engines] fetch enginess success',
  props<{
    engines: {
      items: OemElement[]
    }
  }>()
);

export const FetchEnginesFailure = createAction(
  '[Engines] fetch enginess failure',
  props<{ error: any }>()
);
