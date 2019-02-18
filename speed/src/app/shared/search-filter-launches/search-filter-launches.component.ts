import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-filter-launches',
  templateUrl: './search-filter-launches.component.html',
  styleUrls: ['./search-filter-launches.component.css']
})
export class SearchFilterLaunchesComponent implements OnInit {

  @Input() launchesList: any[] = [];
  @Output() public searchClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
