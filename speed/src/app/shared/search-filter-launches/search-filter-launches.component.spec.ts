import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterLauches } from './search-filter-launches.component';

describe('LauchesListComponent', () => {
  let component: SearchFilterLauches;
  let fixture: ComponentFixture<SearchFilterLauches>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterLauches ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterLauches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
