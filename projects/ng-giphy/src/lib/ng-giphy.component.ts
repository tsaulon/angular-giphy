import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgGiphyService } from './ng-giphy.service';
import { GiphyTypes } from '../enums/giphy-types.enums';

@Component({
  selector: 'lib-ng-giphy',
  template: `
  <iframe [src]="embedUrl$ | async | safe" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  `,
  styles: [`
    iframe {
      height: 100%;
      width: 100%;
    }
  `]
})
export class NgGiphyComponent implements OnInit {

  @Input() API_KEY: string;
  @Input() context: string;
  @Input() action: GiphyTypes;
  @Input() embedUrl$: Observable<string>;

  constructor(private giphy: NgGiphyService) {
    this.API_KEY = '';
    this.context = '';
    this.action = GiphyTypes.RANDOM;
    this.embedUrl$ = of('');
  }

  ngOnInit() {

    if (!this.API_KEY) {
      console.error(`No API_KEY was provided!`);
    }

    this.embedUrl$ = this.giphy.trending(this.API_KEY);

    switch (this.action) {
      case GiphyTypes.SEARCH:
        this.embedUrl$ = this.giphy.search(this.context, this.API_KEY);
        break;
      case GiphyTypes.TRANSLATE:
        this.embedUrl$ = this.giphy.translate(this.context, this.API_KEY);
        break;
      case GiphyTypes.TRENDING:
        this.embedUrl$ = this.giphy.trending(this.API_KEY);
        break;
      case GiphyTypes.RANDOM:
        this.embedUrl$ = this.giphy.random(this.API_KEY);
        break;
      case GiphyTypes.GIF_BY_ID:
        this.embedUrl$ = this.giphy.gifById(this.context, this.API_KEY);
        break;
      default:
        this.embedUrl$ = this.giphy.random(this.API_KEY);
        console.error(`No GiphyType matching: ${this.action}`);
        break;
    }
  }

}
