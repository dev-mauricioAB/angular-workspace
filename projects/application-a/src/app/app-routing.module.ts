import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/application-a', pathMatch: 'full' },
  {
    path: 'application-a',
    loadChildren: () => import('./pages/home/home.module').then(({ ApplicationAModule }) => ApplicationAModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
