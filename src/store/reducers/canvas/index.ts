import { CanvasAction, CanvasActionEnum, CanvasState } from "./types";

const initialState: CanvasState = {
  canvas: null,
}

export default function canvas(state = initialState, action: CanvasAction): CanvasState {
  switch(action.type) {
    case(CanvasActionEnum.SET_CANVAS): {
      return {
        ...state,
        canvas: action.payload,
      }
    }
    default:
      return state;
  }
}
