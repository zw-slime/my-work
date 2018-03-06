export interface DataState {

}

export interface UIState {
  loading: {
      [x in keyof State]?: boolean
      }
}

export type State = DataState & UIState

export enum ActTypes {
  SetLoading,
}

interface ActionSetLoading {
  type: ActTypes.SetLoading,
  payload: {
      [a in keyof State] : boolean
      }
}

export type Actions = ActionSetLoading;
