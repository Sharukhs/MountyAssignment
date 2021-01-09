import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from '../app/shared/material/material.module';
import {HeaderComponent} from '../app/shared/shared/components/header/header.component';
import { MoviesTopRatedComponent } from './components/movies-top-rated/movies-top-rated.component';
import { MoviesUpComingComponent } from './components/movies-up-coming/movies-up-coming.component';
import { HttpClientModule } from '@angular/common/http';
import {TopRatedService} from './services/top-rated.service';
import {UpComingService} from './services/up-coming.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesTopRatedComponent,
    MoviesUpComingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [TopRatedService,UpComingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
