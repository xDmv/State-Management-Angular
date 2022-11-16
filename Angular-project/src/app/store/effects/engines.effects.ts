import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { FetchEnginesFailure, FetchEnginesRequest, FetchEnginesSuccess } from '../actions/engines.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ModelData } from '../../interfaces/model-data';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';

@Injectable()
export class EnginesEffects {

  loadData$ = createEffect((): any => {
      return this.actions$.pipe(
        ofType(FetchEnginesRequest),
        mergeMap(
          () => {
            return this.api.getData().pipe(
              map(
                (value: ModelData) => {
                  return FetchEnginesSuccess({
                    engines: {
                      items: value.data
                    }
                  });
                }
              ),
              catchError(
                (err): any => {
                  return FetchEnginesFailure({ error: throwError(err) });
                }
              )
            );
          }
        ),
        catchError(
          (error): any => {
            return FetchEnginesFailure({ error: error })
          }
        )
      );
    }
  )

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private api: ApiService,
  ) {
  }

}
