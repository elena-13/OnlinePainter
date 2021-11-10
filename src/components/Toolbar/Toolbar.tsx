import React from 'react';
import './toolbar.scss';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div>
        <button className="toolbar__btn toolbar__btn_brush"></button>
        <button className="toolbar__btn toolbar__btn_rect"></button>
        <button className="toolbar__btn toolbar__btn_circle"></button>
        <button className="toolbar__btn toolbar__btn_eraser"></button>
        <button className="toolbar__btn toolbar__btn_line"></button>
        <input type="color" value="#A020F0" />
        {/* <button className="toolbar__btn toolbar__btn_color "></button> */}
      </div>
      <div>
        <button className="toolbar__btn toolbar__btn_undo"></button>
        <button className="toolbar__btn toolbar__btn_redo"></button>
        <button className="toolbar__btn toolbar__btn_save"></button>
      </div>
    </div>
  );
};

export default Toolbar;
