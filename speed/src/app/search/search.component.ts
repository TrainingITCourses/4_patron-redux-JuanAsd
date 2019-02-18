import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/store/api.service';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { GlobalStore, GlobalSlideTypes } from 'src/app/core/store/global-store.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private filteredCriteria: string;
  public filteredLaunches$: Observable<any[]>;
  public filteredLaunchesList$: Observable<any[]>;
  public agencies: any[];
  public status: any[];
  public type: any[];

  constructor(private api: ApiService, private global: GlobalStore) { }

  ngOnInit() {

    this.global
      .select$(GlobalSlideTypes.agencies)
      .subscribe(agencies => (this.agencies = agencies));
    this.global
      .select$(GlobalSlideTypes.statuses)
      .subscribe(statuses => (this.status = statuses));
    this.global
      .select$(GlobalSlideTypes.types)
      .subscribe(types => (this.type = types));

    this.getData();

  }

  onSearch = (event: string) => {
    if (this.filteredCriteria === 'Estado') {
      const filteredLaunches = this.global.select$(GlobalSlideTypes.launches).pipe(
        map(j => j.filter(l => l.status === this.status.find(s => s.name === event).id)
        ));
      this.filteredLaunches$ = filteredLaunches;
    } else if (this.filteredCriteria === 'Agencia') {
      const filteredLaunches = this.global.select$(GlobalSlideTypes.launches).pipe(
        map(j => j.filter(l => (!isNullOrUndefined(l.rocket) && !isNullOrUndefined(l.rocket.agencies)
          && l.rocket.agencies.some(n => n.name === event) || l.missions.some(m => !isNullOrUndefined(m.agencies) &&
            m.agencies.some(a => a.name === event)) || l.location.pads.some(p => !isNullOrUndefined(p.agencies) &&
              p.agencies.some(a => a.name === event))))));
      this.filteredLaunches$ = filteredLaunches;
    } else if (this.filteredCriteria === 'Tipo') {
      const filteredLaunches = this.global.select$(GlobalSlideTypes.launches).pipe(
        map(j => j.filter((l => l.missions.some(n => n.typeName === event)))
        ));
      this.filteredLaunches$ = filteredLaunches;
    }
  }

  public onSelectCriteria(event: string) {

    this.filteredCriteria = event;

    if ('Estado' === event) {
      this.filteredLaunchesList$ = this.global.select$(GlobalSlideTypes.statuses);
    } else if ('Agencia' === event) {
      this.filteredLaunchesList$ = this.global.select$(GlobalSlideTypes.agencies);
    } else if ('Tipo' === event) {
      this.filteredLaunchesList$ = this.global.select$(GlobalSlideTypes.types);
    }
  }

  private getData() {
    this.api.getAgencies();
    this.api.getMissionTypes();
    this.api.getStatusTypes();
    this.api.getLaunches();
  }

}
