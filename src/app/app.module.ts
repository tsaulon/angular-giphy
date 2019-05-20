import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularGiphyModule } from './modules/angular-giphy/angular-giphy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularGiphyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
