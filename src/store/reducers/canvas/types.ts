
export interface CanvasState {
  canvas: null
}

export enum CanvasActionEnum {
  SET_CANVAS = 'SET_CANVAS',
}

export interface SetCanvasAction {
  type: CanvasActionEnum.SET_CANVAS,
  payload: null;
}

export type CanvasAction =
  SetCanvasAction
