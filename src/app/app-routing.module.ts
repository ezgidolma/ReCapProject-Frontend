import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './components/car-image/car-images.component';
import { CarComponent } from './components/car/car.component';



const routes: Routes = [
  {path:"", pathMatch:"full",component:CarComponent},
  {path:"cars/cardetails/brand/:brandId", component:CarComponent},
  {path:"cars/cardetails/color/:colorId", component:CarComponent},
  {path:"cars/carimages/getbycarid:carId", component:CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
