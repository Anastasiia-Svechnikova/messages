import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { INewMessage } from '../interfaces/interfaces';
import { messagesActions } from '../store/actions';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent extends UnSubscriberComponent implements OnInit {
  isLoading!: boolean;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    public loaderService: LoaderService,
  ) {
    super();
  }
  ngOnInit(): void {
    this.isLoading = this.loaderService.loading;
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
