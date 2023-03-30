import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';
import { messagesActions } from 'src/app/messages/store/actions';
import { SNACK_BAR_OPTIONS } from '../constants/constants';
import { snackBarMessageGenerator } from '../helpers/snack-bar-message-generator';

@Injectable()
export class SnackBarEffects {
  showSnackBar$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          messagesActions.addedMessage,
          messagesActions.addedError,
          messagesActions.loadedError,
        ),
        tap((action) => {
          const message = snackBarMessageGenerator(action.type);
          this.snackBar.open(message, 'Close', SNACK_BAR_OPTIONS);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}
}
