import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'application-a',
    loadChildren: () => import('application-a/ApplicationAModule').then(({ ApplicationAModule }) => ApplicationAModule)
  },
  {
    path: 'application-b',
    loadChildren: () => import('application-b/ApplicationBModule').then(({ ApplicationBModule }) => ApplicationBModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
