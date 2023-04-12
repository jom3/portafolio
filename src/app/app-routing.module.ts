import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadComponent: ()=>import('./components/navbar/navbar.component').then(c=>c.NavbarComponent), outlet:'navbar'
  },
  {
    path:'', loadComponent: ()=>import('./components/about/about.component').then(c=>c.AboutComponent), outlet:'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
