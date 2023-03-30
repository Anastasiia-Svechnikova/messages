import { createReducer, on } from '@ngrx/store';

import { IMessage } from '../interfaces/interfaces';
import { messagesActions } from './actions';

export interface IMessagesState {
  messages: IMessage[];
}

const initialState: IMessagesState = {
  messages: [],
};

export const messagesReducer = createReducer(
  initialState,
  on(messagesActions.loadedMessages, (state, { messages }) => ({
    ...state,
    messages: messages,
  })),
);
