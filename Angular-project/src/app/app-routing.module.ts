import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page-main/page-main.module').then(m => m.PageMainModule)
  },
  {
    path: 'engines',
    loadChildren: () => import('./pages/page-engines/page-engines.module').then(m => m.PageEnginesModule)
  },
  {
    path: '**',
    redirectTo: 'engines'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
