import { ToolAction, ToolActionEnum, ToolState } from "./types";

const initialState: ToolState = {
  tool: {}
}

export default function tool(state = initialState, action: ToolAction): ToolState {
  switch (action.type) {
    case(ToolActionEnum.SET_TOOL): {
      return {
        ...state,
        tool: action.payload
      }
    }
    default:
      return state;
  }
}
