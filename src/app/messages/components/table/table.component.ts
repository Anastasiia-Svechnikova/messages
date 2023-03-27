// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent {

// }

import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IMessage } from '../../interfaces/interfaces';

export interface PeriodicElement {
  id: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: IMessage[] = [
  {
    id: '1',
    name: 'Hydrogen',
    message: 'hello, its my message',
    date: Date.now(),
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData(): void {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }
}
