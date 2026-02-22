import {Routes} from '@angular/router';

import {Home} from './DefineRoute1';
import {User} from './DefineRoute2';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];
