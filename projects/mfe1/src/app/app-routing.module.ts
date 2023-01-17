import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/mfe1', pathMatch: 'full' },
  {
    path: 'mfe1',
    loadChildren: () => import('./pages/home/home.module').then(({ Mfe1Module }) => Mfe1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
