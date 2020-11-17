import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPopularBeersComponent } from './la-popular-beers.component';

describe('LaPopularBeersComponent', () => {
  let component: LaPopularBeersComponent;
  let fixture: ComponentFixture<LaPopularBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaPopularBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPopularBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
