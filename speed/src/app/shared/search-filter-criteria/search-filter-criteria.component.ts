import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-filter-criteria',
  templateUrl: './search-filter-criteria.component.html',
  styleUrls: ['./search-filter-criteria.component.css']
})
export class SearchFilterCriteriaComponent implements OnInit {

  @Output() public search = new EventEmitter<string>();

  public criteriaList: string[] = ['Estado', 'Agencia', 'Tipo'];
  constructor() { }

  ngOnInit() {
  }

}
