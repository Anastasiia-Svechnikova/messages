import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import {
  collection,
  query,
  orderBy,
  DocumentReference,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { FIRESTORE_MESSAGES_COLLECTION_NAME } from './constants/constants';

import { IMessage, INewMessage } from './interfaces/interfaces';

@Injectable()
export class MessagesService {
  private messagesCollection!: CollectionReference<DocumentData>;

  constructor(private readonly db: Firestore) {
    this.messagesCollection = collection(
      this.db,
      FIRESTORE_MESSAGES_COLLECTION_NAME,
    );
  }

  getAllMessages(): Observable<IMessage[]> {
    const orderedByDateQuery = query(
      this.messagesCollection,
      orderBy('date', 'desc'),
    );

    return collectionData(orderedByDateQuery, {
      idField: 'id',
    }) as Observable<IMessage[]>;
  }
  addMessage(
    message: INewMessage,
  ): Observable<DocumentReference<DocumentData>> {
    return from(addDoc(this.messagesCollection, message));
  }
}
