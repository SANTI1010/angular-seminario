import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPopularAboutComponent } from './la-popular-about.component';

describe('LaPopularAboutComponent', () => {
  let component: LaPopularAboutComponent;
  let fixture: ComponentFixture<LaPopularAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaPopularAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPopularAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
