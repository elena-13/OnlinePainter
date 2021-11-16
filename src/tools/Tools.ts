export default class Tool {
  canvas: any;
  ctx: CanvasRenderingContext2D;
// HTMLCanvasElement
  constructor(canvas: any) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error("getContext('2d') failed");
    }

    this.ctx = ctx;
    this.destroyEvents();
  }

  destroyEvents() {
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
  }
}
