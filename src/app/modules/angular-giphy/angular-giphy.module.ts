import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularGiphyRoutingModule } from './angular-giphy-routing.module';
import { NgGiphyComponent } from './containers/ng-giphy/ng-giphy.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    NgGiphyComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    AngularGiphyRoutingModule
  ],
  exports: [
    NgGiphyComponent
  ]
})
export class AngularGiphyModule { }
