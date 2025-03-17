import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'remotea',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        exposedModule: './Component',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
      }).then((m) => m.AppComponent),
  },
  {
    path: 'remoteb',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        exposedModule: './Component',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
      }).then((m) => m.AppComponent),
  },
  {
    path: 'remotec',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        exposedModule: './Component',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
      }).then((m) => m.AppComponent),
  },
];
