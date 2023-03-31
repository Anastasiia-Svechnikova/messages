import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { MessagesService } from '../messages.service';
import { messagesActions } from './actions';

@Injectable()
export class MessagesEffects {
  loadMessages$ = createEffect(() => {
    return this.actions.pipe(
      ofType(messagesActions.loadMessages),
      switchMap(() => {
        return this.messagesService.getAllMessages().pipe(
          map((messages) => messagesActions.loadedMessages({ messages })),
          catchError(() => {
            return of(messagesActions.loadedError());
          }),
        );
      }),
    );
  });

  addMessage$ = createEffect(() => {
    return this.actions.pipe(
      ofType(messagesActions.addMessage),
      switchMap(({ message }) => {
        return this.messagesService.addMessage(message).pipe(
          map(() => messagesActions.addedMessage()),
          catchError(() => {
            return of(messagesActions.addedError());
          }),
        );
      }),
    );
  });

  constructor(
    private actions: Actions,
    private messagesService: MessagesService,
  ) {}
}
