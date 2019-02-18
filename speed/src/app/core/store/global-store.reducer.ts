import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { Global, globalInitialState } from './models/global.model';

export function globalStoreReducer(
  state = globalInitialState,
  action: GlobalActions
): Global {
  const result = { ...state };
  switch (action.type) {
    case GlobalActionTypes.LoadStatuses:
      result.statuses = action.payload;
      break;
    case GlobalActionTypes.LoadAgencies:
      result.agencies = action.payload;
      break;
    case GlobalActionTypes.LoadTypes:
      result.types = action.payload;
      break;
    case GlobalActionTypes.LoadLaunches:
      result.launches = action.payload;
      break;
  }
  return result;
}
