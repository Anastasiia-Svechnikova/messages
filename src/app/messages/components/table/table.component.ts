import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { generateMessagesTableColumns } from '../../helpers/generate-messages-table-columns';
import { messagesActions } from '../../store/actions';
import { selectAllMessages } from '../../store/selectors';
import { MessageTableColumns } from '../../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  messagesTableColumnsEnum = MessageTableColumns;
  displayedColumns = Object.values(MessageTableColumns);
  columnsData = generateMessagesTableColumns();
  dataSource = this.store.select(selectAllMessages);

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(messagesActions.loadMessages());
  }
}
