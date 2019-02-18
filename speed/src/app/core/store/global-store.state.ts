import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalStoreReducer } from './global-store.reducer';
import { Global, globalInitialState } from './models/global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalStore {
  private state: Global = { ...globalInitialState };
  private statuses$ = new BehaviorSubject<any>(this.state.statuses);
  private agencies$ = new BehaviorSubject<any>(this.state.agencies);
  private types$ = new BehaviorSubject<any>(this.state.types);
  private launches$ = new BehaviorSubject<any>(this.state.launches);

  constructor() { }

  public select$ = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.statuses:
        return this.statuses$.asObservable();
      case GlobalSlideTypes.agencies:
        return this.agencies$.asObservable();
      case GlobalSlideTypes.types:
        return this.types$.asObservable();
      case GlobalSlideTypes.launches:
        return this.launches$.asObservable();
    }
  }

  public selectSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return [...this.state.launches];
      case GlobalSlideTypes.agencies:
        return [...this.state.agencies];
      case GlobalSlideTypes.types:
        return [...this.state.types];
      case GlobalSlideTypes.statuses:
        return [...this.state.statuses];
    }
  }

  public dispatch = (action: GlobalActions) => {
    console.log('dispatching...', action);
    this.state = globalStoreReducer(this.state, action);
    switch (action.type) {
      case GlobalActionTypes.LoadStatuses:
        this.statuses$.next([...this.state.statuses]);
        break;
      case GlobalActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case GlobalActionTypes.LoadTypes:
        this.types$.next([...this.state.types]);
        break;
      case GlobalActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
    }
  }
}

export enum GlobalSlideTypes {
  launches = 'launches',
  agencies = 'agencies',
  types = 'types',
  statuses = 'statuses'
}
