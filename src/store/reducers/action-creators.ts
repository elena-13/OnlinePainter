import { CanvasActionCreators } from "./canvas/action-creators";
import { ToolActionCreators } from "./tool/action-creators";

export const allActionCreators = {
  ...CanvasActionCreators,
  ...ToolActionCreators,
};
