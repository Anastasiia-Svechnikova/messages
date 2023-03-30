import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { MessagesComponent } from './components/messages.component';
import { MessagesService } from './messages.service';
import { MessagesEffects } from './store/effects';
import { messagesReducer } from './store/reducer';
import { TableComponent } from './components/table/table.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';

const routes = [
  {
    path: '',
    component: MessagesComponent,
  },
];

@NgModule({
  declarations: [MessagesComponent, TableComponent, FormModalComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    StoreModule.forFeature('messages', messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [MessagesService],
})
export class MessagesModule {}
