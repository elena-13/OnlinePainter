import React, { FC, useRef, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import Brush from '../../tools/Brush';
import './canvas.scss';

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvas, setTool } = useActions();

  useEffect(() => {
    setCanvas(canvasRef.current);
    setTool(new Brush(canvasRef.current));
  }, [])

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={600}></canvas>
    </div>
  );
};

export default Canvas;
