import { Actions, ActTypes, State } from './actions';

const defaultState = {
  animalList: [],
  loading: {},
};

export function reducer( state: State = defaultState, action: Actions) {
  switch (action.type) {
    case ActTypes.SetAnimalList:
      return {
          ...state,
        animalList: action.payload,
      }
    default:
      return state
  }
}
