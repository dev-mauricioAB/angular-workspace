import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environmentGuard } from './guards/environment.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-a',
    pathMatch: 'full'
  },
  {
    path: 'app-a',
    loadChildren: () => import('application-a/ApplicationAModule').then(({ ApplicationAModule }) => ApplicationAModule),
    canActivate: [environmentGuard]
  },
  {
    path: 'app-b',
    loadChildren: () => import('application-b/ApplicationBModule').then(({ ApplicationBModule }) => ApplicationBModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
