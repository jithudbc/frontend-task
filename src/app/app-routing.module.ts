import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';

const routes: Routes = [
  { path:'' , component: DashboardComponent },
  { path:'details' , component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
