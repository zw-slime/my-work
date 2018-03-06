import { AnimalList } from './Model/Animal';

export const name = 'home';

export function getState(rawState): State {
  return rawState[name]
}

interface DataState {
  animalList: AnimalList
}

export interface UIState {
  loading: {
      [x in keyof State]?: boolean
      }
}

export type State = DataState & UIState

export enum ActTypes {
  SetAnimalListAsync,
  SetAnimalList,
}

export interface ActionSetAnimalListAsync {
  type: ActTypes.SetAnimalListAsync
}

export interface ActionSetAnimalList {
  type: ActTypes.SetAnimalList
  payload: AnimalList
}

export type Actions = ActionSetAnimalList | ActionSetAnimalListAsync
