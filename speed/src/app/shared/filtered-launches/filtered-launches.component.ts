import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filtered-launches',
  templateUrl: './filtered-launches.component.html',
  styleUrls: ['./filtered-launches.component.css']
})
export class FilteredLaunchesComponent implements OnInit {

  @Input() launches: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
