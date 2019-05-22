import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGiphyComponent } from './ng-giphy.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from '../pipes/safe.pipe';


@NgModule({
  declarations: [
    NgGiphyComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NgGiphyComponent
  ]
})
export class NgGiphyModule { }
