import { ComponentFixture, TestBed } from '@angular/core/testing';

import { laPopularComponent } from './laPopular.component';

describe('BeerListComponent', () => {
  let component: laPopularComponent;
  let fixture: ComponentFixture<laPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ laPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(laPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
