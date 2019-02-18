import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchFilterCriteriaComponent } from './shared/search-filter-criteria/search-filter-criteria.component';
import { SearchFilterLaunchesComponent } from './shared/search-filter-launches/search-filter-launches.component';
import { FilteredLaunchesComponent } from './shared/filtered-launches/filtered-launches.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './shared/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFilterCriteriaComponent,
    SearchFilterLaunchesComponent,
    FilteredLaunchesComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
