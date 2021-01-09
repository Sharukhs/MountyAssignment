import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUpComingComponent } from './movies-up-coming.component';

describe('MoviesUpComingComponent', () => {
  let component: MoviesUpComingComponent;
  let fixture: ComponentFixture<MoviesUpComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesUpComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesUpComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
