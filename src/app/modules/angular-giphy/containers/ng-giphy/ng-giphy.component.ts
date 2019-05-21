import { Component, OnInit, Input } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng-giphy',
  templateUrl: './ng-giphy.component.html',
  styleUrls: ['./ng-giphy.component.scss']
})
export class NgGiphyComponent implements OnInit {

  @Input() API_KEY: string;
  @Input() embedUrl$: Observable<string>;
  @Input() term: string;

  constructor(private giphy: GiphyService) {
    this.API_KEY = '';
    this.term = 'memes';
  }

  ngOnInit() {
    this.embedUrl$ = this.giphy.search(this.term, this.API_KEY);
  }

}
