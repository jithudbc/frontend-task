import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { searchReducer } from './ngrx/reducers/search-reducer';
import { AppEffects } from './ngrx/effects/app.effects';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './components/country-list/country-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    DashboardComponent,
    CountryDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule, 
    MatPaginatorModule,
    StoreModule.forRoot({ search: searchReducer }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ AppEffects ]),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
