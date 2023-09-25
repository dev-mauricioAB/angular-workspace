import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app-a', pathMatch: 'full' },
  {
    path: 'app-a',
    loadChildren: () => import('./pages/home/home.module').then(({ ApplicationAModule }) => ApplicationAModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
