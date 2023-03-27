import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { MessagesComponent } from './components/messages.component';
import { MessagesService } from './messages.service';
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
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [MessagesService],
})
export class MessagesModule {}
