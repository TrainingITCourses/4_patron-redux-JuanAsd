import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterCriteriaComponent } from './search-filter-criteria.component';

describe('SearchFilterCriteriaComponent', () => {
  let component: SearchFilterCriteriaComponent;
  let fixture: ComponentFixture<SearchFilterCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
