import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGiphyComponent } from './ng-giphy.component';

describe('NgGiphyComponent', () => {
  let component: NgGiphyComponent;
  let fixture: ComponentFixture<NgGiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGiphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
