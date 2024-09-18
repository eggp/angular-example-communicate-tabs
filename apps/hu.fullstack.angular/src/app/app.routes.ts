import { Route } from '@angular/router';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { PostmessageComponent } from './postmessage/postmessage.component';

export const appRoutes: Route[] = [
  {
    path: 'localstorage',
    component: LocalstorageComponent,
  },
  {
    path: 'broadcast',
    component: BroadcastComponent,
  },
  {
    path: 'postmessage',
    component: PostmessageComponent,
  },
];
