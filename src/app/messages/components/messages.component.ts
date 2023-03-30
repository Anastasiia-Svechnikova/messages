import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { INewMessage } from '../interfaces/interfaces';
import { messagesActions } from '../store/actions';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent extends UnSubscriberComponent {
  constructor(public dialog: MatDialog, private store: Store) {
    super();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      autoFocus: false,
    });

    dialogRef
      .afterClosed()
      .pipe(
        takeUntil(this.destroyed$),
        filter((newMessage) => newMessage),
      )
      .subscribe((newMessage: INewMessage) => {
        this.store.dispatch(
          messagesActions.addMessage({ message: newMessage }),
        );
      });
  }
}
