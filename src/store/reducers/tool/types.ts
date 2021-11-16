// import { ITool } from '../../../models/ITool';

export interface ToolState {
  tool: object,
}

export enum ToolActionEnum {
  SET_TOOL = 'SET_TOOL',
}

export interface SetToolAction {
  type: ToolActionEnum.SET_TOOL;
  payload: object;
}

export type ToolAction =
  SetToolAction
