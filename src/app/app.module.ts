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
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    DashboardComponent,
    CountryDetailsComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule, 
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    StoreModule.forRoot({ search: searchReducer }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ AppEffects ]),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
