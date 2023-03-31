import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { messagesActions } from 'src/app/messages/store/actions';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class SpinnerEffects {
  spinnerOn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(messagesActions.addMessage, messagesActions.loadMessages),
        tap(() => this.loaderService.loadingOn()),
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
        tap(() => this.loaderService.loadingOff()),
      );
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private loaderService: LoaderService,
  ) {}
}
