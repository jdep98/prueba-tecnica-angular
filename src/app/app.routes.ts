import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/usuario-list/usuario-list.component').then(m => m.UsuarioListComponent)
      },
      {
        path: 'usuario/:id',
        loadComponent: () => import('./components/usuario-detail/usuario-detail.component').then(m => m.UsuarioDetailComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
