import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularGiphyRoutingModule } from './angular-giphy-routing.module';
import { NgGiphyComponent } from './containers/ng-giphy/ng-giphy.component';

@NgModule({
  declarations: [NgGiphyComponent],
  imports: [
    CommonModule,
    AngularGiphyRoutingModule
  ]
})
export class AngularGiphyModule { }
