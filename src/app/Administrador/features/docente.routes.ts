import { Routes } from '@angular/router';
import LayoutComponent from '../../shared/ui/layout.component';

export default [
//   {
//     path: '',
//     LoadComponent: () => import('./dashboard/dashboard.component'),
//   },
  {
    path: '',
    loadComponent: () => import('./lista-docentes/lista-docentes.component'),
  },
] as Routes;