import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

import { messagesActions } from 'src/app/messages/store/actions';
import { SPINNER_SET_TIMEOUT_DURATION } from '../constants/constants';

@Injectable()
export class SpinnerEffects {
  spinnerOn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(messagesActions.addMessage, messagesActions.loadMessages),
        tap(() => this.spinner.show()),
      );
    },
    { dispatch: false },
  );

  spinnerOff$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          messagesActions.loadedMessages,
          messagesActions.addedMessage,
          messagesActions.loadedError,
          messagesActions.addedError,
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, SPINNER_SET_TIMEOUT_DURATION);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}
}
