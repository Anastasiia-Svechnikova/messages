import { messagesActions } from 'src/app/messages/store/actions';

export const snackBarMessageGenerator = (action: string): string => {
  switch (action) {
    case messagesActions.addedMessage().type:
      return 'Your message has been added!';
    case messagesActions.addedError().type:
      return 'Oops, something went wrong when adding your message! Try again later';
    case messagesActions.loadedError().type:
      return 'Oops, something went wrong when loading the messages! Try again later';
    default:
      return '';
  }
};
