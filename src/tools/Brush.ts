import Tool from "./Tools";

type Coordinate = {
  x: number;
  y: number;
};

export default class Brush extends Tool {
  mouseDown: boolean;

  constructor(canvas: any) {
    super(canvas);
    this.listen();
    this.mouseDown = false;
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  getCoordinates(event: MouseEvent): Coordinate {
    return {
      x: event.pageX - this.canvas.offsetLeft,
      y: event.pageY - this.canvas.offsetTop
    };
  };

  mouseDownHandler(e: MouseEvent): void {
    const coordinates = this.getCoordinates(e);
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(coordinates.x, coordinates.y);
  }

  mouseMoveHandler(e: MouseEvent): void {
    if (this.mouseDown) {
      const coordinates = this.getCoordinates(e);

        this.draw(coordinates.x, coordinates.y);
    }
  }

  mouseUpHandler(e: any): void {
    this.mouseDown = false;
  }

  draw(x: number, y: number): void {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    console.log('draw');
  }

}
