import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaPopularAboutComponent } from './la-popular-about/la-popular-about.component';
import { LaPopularBeersComponent } from './la-popular-beers/la-popular-beers.component';


//van todas las rutas de mi app
const routes: Routes = [
  {
    path: '',
    redirectTo : 'beers',
    pathMatch : 'full'
  },
  {
    path: 'beers',
    component : LaPopularBeersComponent
  },
  {
    path: 'about',
    component : LaPopularAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
