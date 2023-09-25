import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/application-b', pathMatch: 'full' },
  {
    path: 'application-b',
    loadChildren: () => import('./pages/home/home.module').then(({ ApplicationBModule }) => ApplicationBModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
