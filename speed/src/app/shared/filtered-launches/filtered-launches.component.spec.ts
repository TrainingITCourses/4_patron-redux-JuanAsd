import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredLaunchesComponent } from './filtered-launches.component';

describe('FilteredLaunchesComponent', () => {
  let component: FilteredLaunchesComponent;
  let fixture: ComponentFixture<FilteredLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredLaunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
