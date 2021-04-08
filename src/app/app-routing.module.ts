import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { LandingComponent } from './components/landing/landing.component';



export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'detail',
    component: DetailPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
