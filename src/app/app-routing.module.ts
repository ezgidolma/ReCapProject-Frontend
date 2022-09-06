import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './components/car-image/car-images.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';


const routes: Routes = [
  {path:"", pathMatch:"full",component:CarDetailComponent},
  {path:"cars/cardetails/brand/:brandId", component:CarDetailComponent},
  {path:"cars/cardetails/color/:colorId", component:CarDetailComponent},
  {path:"cars/carimages/getbycarid:carId", component:CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
