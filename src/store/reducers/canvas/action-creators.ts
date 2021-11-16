import { CanvasActionEnum, SetCanvasAction } from "./types";

export const CanvasActionCreators = {
  setCanvas: (payload: any): SetCanvasAction => ({ type:CanvasActionEnum.SET_CANVAS, payload }),
}
