import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GlobalStore } from './global-store.state';
import { LoadLaunches, LoadStatuses, LoadTypes, LoadAgencies } from './global-store.actions';
// 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000'
// environment.url + '/assets/launchlibrary.json'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'launches';
  constructor(private http: HttpClient, private global: GlobalStore) { }

  public getLaunches = () =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(
        map((res: any) => res.launches),
      ).subscribe(launches => this.global.dispatch(new LoadLaunches(launches)))

  public getAgencies = () =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies))
      .subscribe(agencies => this.global.dispatch(new LoadAgencies(agencies)))

  public getMissionTypes = () =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))
      .subscribe(types => this.global.dispatch(new LoadTypes(types)))

  public getStatusTypes = () =>
    this.http.get(environment.url + '/assets/data/launchstatus.json').pipe(
      map((res: any) => res.types),
      map((res: any[]) => res.map(this.setStatusColor))
    ).subscribe(statuses => this.global.dispatch(new LoadStatuses(statuses)))

  private setStatusColor = statusType => {
    switch (statusType.id) {
      case 1:
      case 3:
      case 6:
        statusType.color = 'accent';
        break;
      case 2:
      case 4:
      case 5:
      case 7:
        statusType.class = 'warn';
        break;
      default:
        break;
    }
    return statusType;
  }
}
