import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ProfilepageComponent} from './profilepage/profilepage.component'

const routes: Routes = [
  { path: '', component: RestaurantComponent },              // Add this
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  {path: 'profilepage/:id', component: ProfilepageComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}