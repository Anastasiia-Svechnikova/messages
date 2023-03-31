import { FIRESTORE_DOCUMENT_PROPERTY_NAME_FOR_MESSAGE } from '../constants/constants';
import { IMessage, MessageTableColumns } from '../interfaces/interfaces';

interface ITableColumnsData {
  columnName: string;
  cell: (message: IMessage) => string;
}

export const generateMessagesTableColumns = (): ITableColumnsData[] => {
  const columns = Object.values(MessageTableColumns);
  const result = [];

  for (const column of columns) {
    result.push({
      columnName: column,
      cell: (message: IMessage) => {
        const propertyName =
          column === MessageTableColumns.message
            ? FIRESTORE_DOCUMENT_PROPERTY_NAME_FOR_MESSAGE
            : column;
        return `${message[propertyName as keyof IMessage]}`;
      },
    });
  }
  return result;
};
