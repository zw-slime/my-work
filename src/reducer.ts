import { Actions, ActTypes, State } from './actions';

const defaultStatus = {
  loading: {},
};

export function reducer( state = defaultStatus, action: Actions) {
  switch (action.type) {
    case ActTypes.SetLoading: {
      return { ...state,
      loading: {
          ...state.loading, ...action.payload,
      }}
    }
  }
}