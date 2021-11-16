import { SetToolAction, ToolActionEnum } from "./types";


export const ToolActionCreators = {
  setTool: (payload: object): SetToolAction => ({type: ToolActionEnum.SET_TOOL, payload}),
}
