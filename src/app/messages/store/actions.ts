import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMessage, INewMessage } from '../interfaces/interfaces';

export const messagesActions = createActionGroup({
  source: 'Messages',
  events: {
    'Load messages': emptyProps(),
    'Loaded messages': props<{ messages: IMessage[] }>(),
    'Loaded Error': emptyProps(),

    'Add message': props<{ message: INewMessage }>(),
    'Added message': emptyProps(),
    'Added Error': emptyProps(),
  },
});
