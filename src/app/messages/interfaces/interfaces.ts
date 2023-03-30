export interface IMessage extends INewMessage {
  id: string;
}
export interface INewMessage {
  name: string;
  text: string;
  date: number;
}

export enum MessageTableColumns {
  id = 'id',
  name = 'name',
  message = 'message',
  date = 'date',
}
