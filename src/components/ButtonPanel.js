import React from 'react';
import Button from './Button';

export default function ButtonPanel(props) {
  function handleClick(buttonName) {
    props.onClick(buttonName.target.id);
  }

  return (
    <>
      <div className="group1 group">
        <Button name="A/C" onBtnClick={handleClick} />
        <Button name="+/-" onBtnClick={handleClick} />
        <Button name="%" onBtnClick={handleClick} />
        <Button name="÷" onBtnClick={handleClick} />
      </div>
      <div className="group2 group">
        <Button name="7" onBtnClick={handleClick} />
        <Button name="8" onBtnClick={handleClick} />
        <Button name="9" onBtnClick={handleClick} />
        <Button name="X" onBtnClick={handleClick} />
      </div>
      <div className="group3 group">
        <Button name="4" onBtnClick={handleClick} />
        <Button name="5" onBtnClick={handleClick} />
        <Button name="6" onBtnClick={handleClick} />
        <Button name="-" onBtnClick={handleClick} />
      </div>
      <div className="group4 group">
        <Button name="1" onBtnClick={handleClick} />
        <Button name="2" onBtnClick={handleClick} />
        <Button name="3" onBtnClick={handleClick} />
        <Button name="+" onBtnClick={handleClick} />
      </div>
      <div className="group5 group">
        <Button name="0" onBtnClick={handleClick} />
        <Button name="." onBtnClick={handleClick} />
        <Button name="=" onBtnClick={handleClick} />
      </div>
    </>
  );
}
