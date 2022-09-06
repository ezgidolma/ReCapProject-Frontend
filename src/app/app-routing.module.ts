import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './components/car-image/car-images.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"carsdetails/detail/:carId",component:CardetailComponent},
  {path:"carImage/:carId",component:CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
