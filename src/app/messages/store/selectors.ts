import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMessagesState } from './reducer';

const selectMessagesFeature = createFeatureSelector<IMessagesState>('messages');

export const selectAllMessages = createSelector(
  selectMessagesFeature,
  (state: IMessagesState) => state.messages,
);
